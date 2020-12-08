import { Router } from 'express';

import postsRouter from './posts.routes';
import apiRouter from './api.routes';

const routes = Router();

routes.use('/', postsRouter);
routes.use('/api/v3/synthesize', apiRouter );

export default routes;
