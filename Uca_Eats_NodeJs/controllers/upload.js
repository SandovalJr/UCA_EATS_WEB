
const path = require("path");
// file system
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');
const {response} = require('express');
const { actualizarImagen } = require("../helpers/actualizarImg");

const uploadImg = (req,res = response) =>{
    const tipo = req.params.tipo;
    const id = req.params.id;

    // //Validar tipo
    const tiposValidos = ['category', 'products'];
    if (!tiposValidos.includes(tipo)) {
        return res.status(400).json({
            ok: false,
            msg: 'No es categoria ni producto'
        });
    }

    //Validar que exista un archivo
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).json({
            ok: false,
            msg: 'No hay ningun archivo'
        });
    }

    //Procesar la imagen (sacar las variables para validar la extencion)
    const file = req.files.imagen;

    const nombreCortado = file.name.split('.');
    const extencionArchivo = nombreCortado[nombreCortado.length - 1];

    //Validar extencion
    const extencionesValidas = ['png', 'jpg', 'jpeg', 'gif'];
    if (!extencionesValidas.includes(extencionArchivo)) {
        return res.status(400).json({
            ok: false,
            msg: 'No es una extencion permitida'
        });
    }

    //Nombre del archivo
    const nombreArchivo = `${uuidv4()}.${extencionArchivo}`;

    //Path para guardar imagen 
    const path = `./uploads/${tipo}/${nombreArchivo}`;

    //Mover la imagen
    file.mv(path, (err) => {
        if (err) {
            console.log(err);
            return res.status(500).json({
                ok: false,
                msg: 'Error al mover la imagen'
            });
        }

        //Actualizar base de datos
        actualizarImagen(tipo, id, nombreArchivo);

        res.json({
            ok: true,
            msg: 'Archivo subido',
            nombreArchivo
        });
    });
}






module.exports = {uploadImg};