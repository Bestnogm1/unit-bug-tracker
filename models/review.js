import mongoose from 'mongoose'

const Schema = mongoose.Schema

const reviewsSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId, 'ref': 'Profile'
  },
  rating: {
    type: Number,
    enum: [1,2,3,4,5],
    default: 1
  },
  review: { 
    type: String
  }
},{
  timestamps: true
})

const Review = mongoose.model('Reviews', reviewsSchema)

export {
  Review
}
