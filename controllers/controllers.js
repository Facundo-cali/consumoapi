const express = require('express');
// const {exportaModeloTipoShablon, exportaModeloTipoPintura} = require('../models/model');
// const {exportaModeloTipoClaro} = require('../models/model');
// const {exportaModeloTipoOscuro} = require('../models/model');
const {exportaBaseDatos} = require('../models/model');


module.exports = {
    //-------------------POSTS----------------------------------
    postBase: async (req, res) => {
        let data = new exportaBaseDatos({
            shablon_borrado: req.body.shablon_borrado,
            shablon_nuevo: req.body.shablon_nuevo,
            shablon_usado: req.body.shablon_usado,
            shablon_bajada: req.body.shablon_bajada,
            shablon_grabado: req.body.shablon_grabado,
            logo_claro: req.body.logo_claro,
            central_claro: req.body.central_claro,
            full_claro: req.body.full_claro,
            logo_oscuro: req.body.logo_oscuro,
            central_oscuro: req.body.central_oscuro,
            full_oscuro: req.body.full_oscuro,
            agua_fc: req.body.agua_fc,
            agua_fo: req.body.agua_fo,
            plastisol: req.body.plastisol,
            relieve: req.body.relieve,
            foil: req.body.foil,
            glitter: req.body.glitter,
            corrosion: req.body.corrosion,
            dyp: req.body.dyp
        })
        try {
            const dataToSave = await data.save();
            res.status(200).json(dataToSave)
        }
        catch (error) {
            res.status(400).json({message: error.message})
        }
    },
    //-------------------FINAL POSTS----------------------------------
    //----------------------------GETS----------------------------------- (todos los gets devuelven el valor para poder hacer los calculos)
    // GET TIPOS
    getShablon_borrado: async (req, res) => {
        try{
            const data = await exportaModeloTipoClaro;
            let tipo = req.params.tipo;
            data.findOne({tipo:tipo},function(err,obj) {res.json(obj.valor)});
        }
        catch(error){
            res.status(500).json({message: error.message})
        }
    },
    // getTipoOscuro: async (req, res) => {
    //     try{
    //         const data = await exportaModeloTipoOscuro;
    //         let tipo = req.params.tipo;
    //         data.findOne({tipo:tipo },function(err,obj) {res.json(obj.valor)});
    //     }
    //     catch(error){
    //         res.status(500).json({message: error.message})
    //     }
    // },
    // //GET SHABLON>>
    // getShablon: async (req, res) => {
    //     try{
    //         const data = await exportaModeloTipoShablon;
    //         let condicion = req.params.condicion;
    //         data.findOne({condicion:condicion },function(err,obj) {res.json(obj.valor)});
    //     }
    //     catch(error){
    //         res.status(500).json({message: error.message})
    //     }
    // },
    // //GET PINTURA>>
    // getPintura:  (req, res) => {
    //     try{
    //         const data =  exportaModeloTipoPintura;
    //         let nombre = req.params.nombre;
    //         data.findOne({nombre: nombre},function(err,obj) {res.json(obj.valor)});
    //     }
    //     catch(error){
    //         res.status(500).json({message: error.message})
    //     }
    // },
    //----------------------------FINAL GETS----------------------------------- 
    //----------------------------PATCHS----------------------------------- 
    // updateShablon:  async (req, res) => {
    //     try {
    //         const condicion = req.params.condicion;
    //         const updatedData = req.body;
    //         const data = await exportaModeloTipoShablon.findOneAndUpdate({condicion:condicion},updatedData, { new: true });
    //         return res.status(200).json({ success: true, data });
    //     } catch (error) {
    //         console.log('ERROR: ', error);
    //         return res.status(400).json({ success: false });
    //     }
    // },
    // updatePintura:  async (req, res) => {
    //     try{
    //     const nombre = req.params.nombre;
    //     const updatedData = req.body;
    //     const data = await exportaModeloTipoPintura.findOneAndUpdate({nombre:nombre},updatedData, { new: true });
        
    //     return res.status(200).json({ success: true, data });
    //     }catch (error) {
    //         console.log('ERROR: ', error);
    //         return res.status(400).json({ success: false });
    //     }  
    // },
    // updateClaro:  async (req, res) => {
    //     try{
    //     const tipo = req.params.tipo;
    //     const updatedData = req.body;
    //     const data = await exportaModeloTipoClaro.findOneAndUpdate({tipo:tipo},updatedData, { new: true });
        
    //     return res.status(200).json({ success: true, data });
    //     }catch (error) {
    //         console.log('ERROR: ', error);
    //         return res.status(400).json({ success: false });
    //     }  
    // },
    // updateOscuro:  async (req, res) => {
    //     try{
    //     const tipo = req.params.tipo;
    //     const updatedData = req.body;
    //     const data = await exportaModeloTipoOscuro.findOneAndUpdate({tipo:tipo},updatedData, { new: true });
        
    //     return res.status(200).json({ success: true, data });
    //     }catch (error) {
    //         console.log('ERROR: ', error);
    //         return res.status(400).json({ success: false });
    //     }  
    // }

};