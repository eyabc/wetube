import mongoose from 'mongoose';

const CommnetSchema = new mongoose.Schema({
  text: {
    type: String,
    require: 'Text is Required'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

const model = mongoose.model('Commnet', CommnetSchema);
export default model;