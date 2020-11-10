import { Schema, model } from 'mongoose';

const SprintSchema = Schema({
    nameSprint: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true,
        default: ''
    }
});

const Sprint = model('Sprint', SprintSchema);

export default Sprint; 