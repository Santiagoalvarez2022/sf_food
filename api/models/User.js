import { Sequelize, DataTypes } from "sequelize";
import { sequelizeInstance } from "../config/database.js";

const User = sequelizeInstance.define('User',{
    id : {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4, 
        primaryKey: true,
        allowNull: false,
    },
    nickname : {
        type : DataTypes.STRING,
        allowNull : false,
    },
    password : {
        type : DataTypes.STRING,
        allowNull : false
    }
})

export default User;