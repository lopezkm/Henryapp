import { Schema, model } from 'mongoose';

const FeedbackSchema = Schema({
    average: {
        type: Number,
        requerid: true
    },
    softSkill: {
        type: Number,
        unique: true,
        requerid: true
    },
    tecnicalSkill: {
        type: Number,
        requerid: true
    },
    leader: {
        type: Boolean,
        requerid: true
    }
});

const Feedback = model('Feedback', FeedbackSchema);

export default Feedback; 