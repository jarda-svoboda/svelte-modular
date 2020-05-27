import sirv from 'sirv';
import express from 'express';
import compression from 'compression';
import * as sapper from '@sapper/server';
import modules from './modules';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';
const ignore = modules.map(m => (path) => path.startsWith(m.basePath));

const app = express();

modules.map(m => (
	app.all(m.basePath + '/:id?', m.expressApp)
));

app.use(
	compression({ threshold: 0 }),
	sirv('static', { dev }),
	sapper.middleware({ ignore }),
);


app.listen(PORT, err => {
	if (err) console.log('error', err);
});
