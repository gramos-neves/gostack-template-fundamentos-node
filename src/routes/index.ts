import { Router } from 'express';
import transactionRouter from './transaction.routes';

// eslint-disable-next-line prettier/prettier
const routes = Router();

// eslint-disable-next-line prettier/prettier
routes.use('/transactions', transactionRouter);

export default routes;
