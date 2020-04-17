import mongoose from 'mongoose';

const CommnetSchema = new mongoose.Schema({
  text: {
    type: String,
    require: 'Text is Required'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  
  /* how to 1*/
  video: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Video'
  }
})

const model = mongoose.model('Commnet', CommnetSchema);
export default model;