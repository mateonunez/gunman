import dotenv from 'dotenv';
import Fastify, { FastifyRequest } from 'fastify';
import FastifyLyra from '@mateonunez/fastify-lyra';
import pino from 'pino';

/**
 * Declaring routes
 */
const app = Fastify({
  logger: pino({ level: 'info' })
});

app.register(FastifyLyra, {
  schema: {
    quote: 'string',
    author: 'string'
  }
});

app.ready(async () => {
  for (let i = 0; i < 100000; i++) {
    await app.lyra.insert({
      author: 'Gunman',
      quote: 'I am the gunman'
    });
  }

  console.log('ready bro');
});

const Gunman = async () => {
  dotenv.config();

  const host: string = process.env.HOST || '0.0.0.0';
  const port: number = parseInt(<string>process.env.PORT, 10) || 5555;

  app.get('/query/:query', async (request: FastifyRequest, response) => {
    const {
      params: { query }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } = request as any;

    const search = await app.lyra.search({
      term: query
    });

    response.send({
      search
    });
  });

  try {
    app.listen(port, host);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

Gunman();
