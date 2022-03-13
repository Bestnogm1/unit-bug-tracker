import mongoose from 'mongoose'

const Schema = mongoose.Schema

// const testReview = new mongoose.Schema({
//   createdAt:{
//     type:Date,
//     default: Date.now},
//   answer: String,
//   owner: {
//     type: String
//   }
  
// }, {
//   timestamps: true
// })



const reviewsSchema = new mongoose.Schema({
  reviews:{type: String} ,
  owner: {
    type: mongoose.Schema.Types.ObjectId, 'ref': 'Profile'
  },
  rating: {
    type: Number,
    enum: [1,2,3,4,5],
    default: 1
  },
  // testReview: [testReview],
  createdAt:{
    type:Date,
    default: Date.now
  }
  },
  {
    timestamps: true
})

const Reviews = mongoose.model('Reviews', reviewsSchema)

export {
  Reviews
}
