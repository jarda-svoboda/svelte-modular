import sirv from 'sirv';
import express from 'express';
import cors from 'cors';
import compression from 'compression';
import * as sapper from '@sapper/server';

const { PORT, NODE_ENV, MODE } = process.env;
const dev = NODE_ENV === 'development';
const isModule = MODE === 'module';

const app = express();
app.use(
	cors({origin: true}),
	compression({ threshold: 0 }),
	sirv('static', { dev }),
);


if(!isModule){
	app.use(sapper.middleware());
	app.listen(PORT, err => {
		if (err) console.log('error', err);
	});
}
export default app;
