import mongoose from 'mongoose'

const commentSchema = new mongoose.Schema({
  name: String,
  createdAt:{
    type:Date,
    default: Date.now},
  comment: String,
}, {
  timestamps: true
})

const Comment = mongoose.model('Comment', commentSchema)

export {
  Comment
}
