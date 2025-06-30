import type { APIRoute } from 'astro';
import { messageEmitter } from './chat';

export const prerender = false;

export const GET: APIRoute = ({ request }) => {
  const body = new ReadableStream({
    start(controller) {
      const onMessageHandler = (data: { from: string; text: string }) => {
        // SSE format: data: { ... }\n\n
        const message = `data: ${JSON.stringify(data)}\n\n`;
        controller.enqueue(new TextEncoder().encode(message));
      };

      messageEmitter.on('whatsapp_message', onMessageHandler);

      // Limpiar el listener cuando el cliente se desconecta
      request.signal.addEventListener('abort', () => {
        messageEmitter.off('whatsapp_message', onMessageHandler);
        controller.close();
        console.log('Cliente SSE desconectado.');
      });

      console.log('Nuevo cliente SSE conectado.');
    },
  });

  return new Response(body, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
    },
  });
};
