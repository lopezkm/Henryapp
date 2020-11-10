import { Schema, model } from 'mongoose';

const MessageSchema = Schema({
    fromId: {
        type: String,
        requerid: true
    },
    toId: {
        type: String,
        requerid: true
    },
    title: {
        type: String,
        requerid: true
    },
    subject: {
        type: String,
        requerid: true
    },
    bodyMessage: {
        type: String,
        requerid: true
    }
});

const Message = model('Message', MessageSchema);

export default Message; 