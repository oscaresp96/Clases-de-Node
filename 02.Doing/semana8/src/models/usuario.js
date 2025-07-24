import { DataTypes } from "sequelize";
import { sequelize } from "../config/database";
import { Municipio } from "./municipio";

const Usuario = sequelize.define('Usuario', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING(200),
        allowNull: false,
    },
    municipio_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Municipio,
            key: 'id',
        }
    }
}, {
    tableName: 'usuarios',
    timestamps: false,
})

Usuario.belongsTo(Municipio, {foreignKey: 'municipio_id'});

Municipio.hasMany(Usuario, {foreignKey: 'municipio_id'});

export {Usuario};