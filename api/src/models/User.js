const { Schema, model } = require('mongoose');

const UserSchema = Schema({
    name: {
        type: String,
        requerid: true
    },
    email: {
        type: String,
        unique: true,
        requerid: true
    },
    password: {
        type: String,
        requerid: true
    },
    picture: {
        type: String,
        requerid: false,
        default: ''
    },
    description: {
        type: String,
        requerid: false,
        default: ''
    },
    gitHubLink: {
        type: String,
        requerid: false,
        default: ''
    },
    link: {
        type: String,
        requerid: false,
        default: ''
    },
    fechaInscripcion: {
        type: Date,
        default: Date.now()
    },
    lastConnection: Date,
    resetLink: {
        type: String,
        requerid: false,
        default: ''
    }
});

module.exports = model('User', UserSchema);