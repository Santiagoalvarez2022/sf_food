import { Sequelize } from "sequelize";
const {PG_USER,PG_PASSWORD,PG_HOST,PG_PORT,PG_DATABASE,NODE_ENV} = process.env;

//instance of Sequelize orm to manage database
export const sequelizeInstance = new Sequelize(`postgres://${PG_USER}:${PG_PASSWORD}@${PG_HOST}:${PG_PORT}/${PG_DATABASE}`, {
    logging: false
  });

export const connectionToDataBase = async() =>{
    try {
        
        //testing connection
        await sequelizeInstance.authenticate()

            // {alter: true} This checks what is the current state of the table in the database (which columns it has, what are their data types, etc), and then performs the necessary changes in the table to make it match the model (sequelize documentation).
            await sequelizeInstance.sync({alter:true})
            console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

