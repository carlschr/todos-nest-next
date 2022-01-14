import * as mongoose from 'mongoose';

export const todoSchema = new mongoose.Schema({
    title: String,
    body: String,
});