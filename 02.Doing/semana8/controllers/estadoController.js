import { Estado } from "../models/estado";

async function obtenerEstados(req,res){
    try{
        const estados = await Estado.findAll({
            order:[['nombre','ASC']]
        });
        res.json(estados);
    } catch (error) {
        res.status(500).json({ error: 'Error getting states'});
    }
}

async function obtenerEstado(req,res){
    try{
        const estado = await Estado.findByPk(req.params.id);
        if(!estado){
            return res.status(404).json({error: 'State not found'});
        }
        res.json(estado);
    } catch (error) {
        res.status(500).json({error:'Error getting states'});
    }
}

async function createEstado(req,res){
    try{
        const {nombre}=req.body;

        if(!nombre){
            return res.status(400).json({error: 'The nombre param is required'});v
        }
    }
}