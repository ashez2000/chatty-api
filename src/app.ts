import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import hpp from 'hpp';
import cookieSession from 'cookie-session';
import morgan from 'morgan';

import 'express-async-errors';

export class ChattyApplication {
  private readonly app: express.Application;

  constructor(app: express.Application) {
    this.app = app;
  }

  private setSecuirtyMiddleware() {
    this.app.use(
      cors({
        origin: '*',
        credentials: true,
      })
    );

    this.app.use(helmet());
    this.app.use(hpp());

    this.app.use(
      cookieSession({
        name: 'session',
        keys: ['key1', 'key2'],
        maxAge: 24 * 60 * 60 * 1000, // 24 hours
        secure: false,
      })
    );
  }

  private setStandardMiddleware() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(morgan('dev'));
  }

  private setErrorHandler() {}
  private setRoutes() {}

  start() {
    this.setSecuirtyMiddleware();
    this.setStandardMiddleware();
    this.setErrorHandler();
    this.setRoutes();
  }
}
