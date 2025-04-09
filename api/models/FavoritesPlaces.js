import { Sequelize, DataTypes } from "sequelize";
import { sequelizeInstance } from "../config/database.js";

const FavoritePlaces = sequelizeInstance.define('FavoritePlaces',{
    id : {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4, 
        primaryKey: true,
        allowNull: false,
    },
    location: {
        type : DataTypes.JSON,
        allowNull : false,
    },
    ObjectId : {
        type : DataTypes.STRING,
        allowNull : false
    },
    applicant : {
        type : DataTypes.STRING,
        allowNull : false
    },
    facilitytype:{
        type : DataTypes.STRING,
        allowNull : false
    }
})

export default FavoritePlaces;