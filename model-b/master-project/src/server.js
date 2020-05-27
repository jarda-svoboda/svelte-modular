import sirv from 'sirv';
import express from 'express';
import compression from 'compression';
import * as sapper from '@sapper/server';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

const master = express();

master.use(
	compression({ threshold: 0 }),
	sirv('static', { dev }),
);
master.use(sapper.middleware());

master.listen(PORT, err => {
	if (err) console.log('error', err);
});
