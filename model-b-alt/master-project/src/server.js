import sirv from 'sirv';
import express from 'express';
import cors from 'cors';
import compression from 'compression';
import * as sapper from '@sapper/server';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

express().use(
	cors({origin: true}),
	compression({ threshold: 0 }),
	sirv('../dist', { dev }), // serve modules
	sirv('static', { dev }),
	sapper.middleware()
).listen(PORT, err => err && console.log('error', err));
