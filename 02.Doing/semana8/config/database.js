import {Sequelize} from 'sequelize';
import dotenv from 'dotenv';
import mysql from 'mysql2/promise';

dotenv.config();

async function ensureDataBaseExist(){
 const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS || undefined,
  });
  await connection.query(`CREATE DATABASE IF NOT EXISTS \`${process.env.DB_NAME}\`;`);
  await connection.end();
}

await ensureDataBaseExist();

const sequelize = new Sequelize(
    'semana08_ORM', 
    'root',
    'password',  // null
    {
        host:'127.0.0.1',
        dialect:'mysql',
        logging: false,
        pool: {
            max:5,
            min:0,
            acquire:30000,
            idle:100000,
        }
    }
);

async function testConnection(){
    try{
        await sequelize.authenticate();
        await sequelize.sync();
        console.log('Connection test');
    } catch (error){
        console.error('Cannot be connected tyo MySQL');
    }
}

testConnection();

export {sequelize};