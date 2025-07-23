import {Sequelize} from 'sequelize';
import dotenv from 'dotenv';
import mysql from 'mysql2';

dotenv.config();

async function ensureDataBaseExist(){

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