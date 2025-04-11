import { Sequelize, DataTypes } from "sequelize";
import { sequelizeInstance } from "../config/database.js";

const FavoritePlaces = sequelizeInstance.define('FavoritePlaces',{
    id : {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4, 
        primaryKey: true,
        allowNull: false,
    },
    lat : {
        type : DataTypes.FLOAT,
        allowNull : false
    },
    lng :{
        type : DataTypes.FLOAT,
        allowNull : false
    },
    objectid : {
        type : DataTypes.STRING,
        allowNull : false
    },
    applicant : {
        type : DataTypes.STRING,
        allowNull : false
    },
    fooditems: {
        type: DataTypes.ARRAY(DataTypes.STRING), // Array of strings
        allowNull: false
    },
    facilitytype:{
        type : DataTypes.STRING,
        allowNull : false
    },

})

export default FavoritePlaces;