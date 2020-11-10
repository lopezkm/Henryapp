import { Schema, model } from 'mongoose';

const MessageSchema = Schema({
    fromId: {
        type: String,
        required: true
    },
    toId: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    bodyMessage: {
        type: String,
        required: true
    }
});

const Message = model('Message', MessageSchema);

export default Message; 