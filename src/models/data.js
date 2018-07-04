import mongoose from "mongoose";

var Schema = mongoose.Schema;

var dataSchema = new Schema({
    json: {
        type: String,
        required: true
    }
});

var Data = mongoose.model('Data', dataSchema);

export default Data;