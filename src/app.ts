import express, { Express } from 'express';
import { Connection } from 'mysql';
import dotenv from 'dotenv';

import SQLConnector from '@db/connection'
import router from '@routes/index';

dotenv.config();

interface IAppServer {
  App: Express;
  DB: Connection;
}

class AppServer implements IAppServer {
  static instance: AppServer | null = null;
  static getInstance(): AppServer {
    if (!AppServer.instance) {
      AppServer.instance = new AppServer();
    }

    return AppServer.instance;
  }

  private database: SQLConnector;
  private app: Express;

  constructor() {
    this.database = new SQLConnector();
    this.app = express();
    this.app.listen(process.env['SERVER_PORT'], this.#listen);
  }

  #listen() {
    console.log(`Server is running on port ${process.env['SERVER_PORT']}`);
  }

  get DB() {
    return this.database.connection;
  }

  get App() {
    return this.app;
  }

  setRouter() {
    this.app.use('/api', router);
  }
}

export default AppServer;