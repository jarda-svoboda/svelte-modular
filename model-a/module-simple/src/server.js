import sirv from 'sirv';
import express from 'express';
import compression from 'compression';
import * as sapper from '@sapper/server';

const { NODE_ENV, MODE } = process.env;
const dev = NODE_ENV === 'development';

const isModule = MODE === 'module';
const path = isModule ? '/about' : '/';
const PORT = 3001;

const app = express();

app.use(
	path,
	compression({ threshold: 0 }),
	sirv('static', { dev }),
	sapper.middleware()
);

if(!isModule) {
	app.listen(PORT, err => {
		if (err) console.log('error', err);
	});
}
	
export default app;