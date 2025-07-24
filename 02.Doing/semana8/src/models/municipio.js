import { DataTypes } from "sequelize";
import { sequelize } from "../config/database";
import { Estado } from "./estado";

const Municipio = sequelize.define('Municipio', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    estado_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Estado,
            key: 'id',
        }
    }
}, {
    tableName: 'municipios',
    timestamps: false,
})

Municipio.belongsTo(Estado, {foreignKey: 'estado_id'});

Estado.hasMany(Municipio, {foreignKey: 'estado_id'});

export {Municipio};