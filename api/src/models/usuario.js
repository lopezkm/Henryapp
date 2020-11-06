const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UsuarioSchema = Schema({
    nombre: String,
    email: { 
        type: String,
        unique: true
    },
    password: String,
    fotoPerfil: String,
    descripcion: String,
    gitHubLink: String,
    link: String,
    fechaInscripcion: {
        type: Date,
        default: Date.now()
    },
    ultimaConeccion: Date
})

module.exports = mongoose.model('Usuario', UsuarioSchema)