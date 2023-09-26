import mysql from 'mysql';

class SQLConnector {
  static instance: SQLConnector | null = null;

  static getInstance() {
    if (!SQLConnector.instance) {
      SQLConnector.instance = new SQLConnector();
    }

    return SQLConnector.instance;
  }

  private connectionPool: mysql.Connection;

  constructor() {
    this.connectionPool = mysql.createConnection({
      host: '',
      user: '',
      password: '',
      database: '',
    });
  }

  connect() {
    this.connectionPool.connect();
  }

  disconnect() {
    this.connectionPool.end();
  }

  get connection() {
    return this.connectionPool;
  }
}

export default SQLConnector;