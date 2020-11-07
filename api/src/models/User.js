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
    picture: String,
    description: String,
    gitHubLink: String,
    link: String,
    fechaInscripcion: {
        type: Date,
        default: Date.now()
    },
    lastConnection: Date
});

module.exports = model('User', UserSchema);