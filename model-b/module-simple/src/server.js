import sirv from 'sirv';
import express from 'express';
import compression from 'compression';
import * as sapper from '@sapper/server';

const { PORT, NODE_ENV, MODE } = process.env;
const dev = NODE_ENV === 'development';
const isModule = MODE === 'module';

const app = express();
app.use(
	compression({ threshold: 0 }),
	sirv('static', { dev }),
);
app.use(sapper.middleware());
app.listen(PORT, err => {
	if (err) console.log('error', err);
});
export default app;
