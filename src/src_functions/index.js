import * as functions from 'firebase-functions';
import next from 'next';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev, conf: { distDir: 'next' } });
const handle = app.getRequestHandler();

export const helloWorld = functions.https.onRequest((req, res) => {
  const world = `from ES6 in Cloud Functions!`;
  res.status(200).send(`Hello ${world}`);
});

export const helloWorld2 = functions.https.onRequest((req, res) => {
  const world = `!!!!!!!!`;
  res.status(200).send(`Hello ${world}`);
});

export const nextJS = functions.https.onRequest((req, res) => {
  console.log('File: ' + req.originalUrl); // log the page.js file that is being requested
  return app.prepare().then(() => handle(req, res));
});
