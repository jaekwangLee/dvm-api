/** @format */
import dotenv from 'dotenv';
import AppServer from './app';

dotenv.config()

const main = (): void => {
  AppServer.getInstance();
}

main();

export {};
