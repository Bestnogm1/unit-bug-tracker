import mongoose from 'mongoose'

const commentSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  comment: String,
}, {
  timestamps: true
})

const comment = mongoose.model('Comment', commentSchema)

export {
  Comment
}
