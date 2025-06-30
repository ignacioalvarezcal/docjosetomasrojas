// src/pages/api/chat.ts
import type { APIRoute } from 'astro';
import whatsAppWeb from 'whatsapp-web.js';
const { Client, LocalAuth } = whatsAppWeb;
import qrcode from 'qrcode-terminal';
import { EventEmitter } from 'events';

export const prerender = false;

// --- Cliente de WhatsApp Singleton ---
// Usamos una variable global para mantener una única instancia del cliente
// y evitar tener que escanear el QR en cada petición.
let whatsappClient: InstanceType<typeof Client> | null = null;
let isClientReady = false;

// Emisor de eventos para notificar a los clientes conectados
export const messageEmitter = new EventEmitter();

const initializeWhatsApp = () => {
  if (whatsappClient) return;

  console.log('Inicializando cliente de WhatsApp...');
  whatsappClient = new Client({
    authStrategy: new LocalAuth(), // Guarda la sesión para no escanear el QR cada vez
    puppeteer: {
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    },
  });

  whatsappClient.on('qr', (qr) => {
    console.log('¡Escanea este código QR con tu teléfono!');
    qrcode.generate(qr, { small: true });
  });

  whatsappClient.on('ready', () => {
    console.log('¡Cliente de WhatsApp está listo!');
    isClientReady = true;
  });

  whatsappClient.on('auth_failure', msg => {
    console.error('Error de autenticación:', msg);
  });

  whatsappClient.on('message', async (message) => {
    // Ignorar mensajes propios para evitar bucles
    if (message.fromMe) {
      return;
    }
    console.log(`[DIAGNÓSTICO] Mensaje recibido de ${message.from}: ${message.body}`);

    // Emitir el evento para que los clientes SSE lo reciban
    messageEmitter.emit('whatsapp_message', {
      from: message.from,
      text: message.body,
    });
  });

  whatsappClient.initialize();
};

// Inicializamos el cliente tan pronto como el servidor arranca
initializeWhatsApp();
// -------------------------------------

export const POST: APIRoute = async ({ request }) => {
  if (!whatsappClient || !isClientReady) {
    return new Response(JSON.stringify({ error: 'El cliente de WhatsApp no está listo. Por favor, escanea el código QR y espera.' }), {
      status: 503, // Service Unavailable
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const body = await request.json();
    const userMessage = body.message;

    if (!userMessage) {
      return new Response(JSON.stringify({ error: 'El mensaje es obligatorio' }), { status: 400 });
    }

    // Número de teléfono al que se enviará el mensaje (el tuyo)
    const targetPhoneNumber = '56926465463'; // Reemplaza si es necesario
    const chatId = `${targetPhoneNumber}@c.us`;

    console.log(`[DIAGNÓSTICO] Intentando enviar mensaje a: ${chatId}`);
    console.log(`[DIAGNÓSTICO] Mensaje: "${userMessage}"`);

    // Enviar mensaje a través de WhatsApp
    await whatsappClient.sendMessage(chatId, userMessage);

    console.log(`[DIAGNÓSTICO] Mensaje enviado exitosamente a ${chatId}.`);

    const botReply = 'Tu mensaje ha sido enviado por WhatsApp. Te responderemos pronto.';

    return new Response(JSON.stringify({ reply: botReply }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error en la API de Chat:', error);
    return new Response(JSON.stringify({ error: 'Error interno del servidor al enviar el mensaje' }), {
      status: 500,
    });
  }
};
