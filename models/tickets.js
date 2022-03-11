import mongoose from 'mongoose'

const Schema = mongoose.Schema

const commentSchema = new mongoose.Schema({
  createdAt:{
    type:Date,
    default: Date.now},
  answer: String,
  owner: {
    type: String
  }
  
}, {
  timestamps: true
})

const ticketsSchema = new mongoose.Schema({
  assingedTo: String,
  details: String,
  problems:{
    type: String,
    enum: ['Software','Hardware']
  },
  severity:{
    type: String,
    enum: ['Urgent', 'High', 'Normal', 'Low']
  },
  date: Date.parse(),
  comments: [commentSchema],

  owner: {
    type: mongoose.Schema.Types.ObjectId, 'ref': 'Profile'
  },


  createdAt:{
    type:Date,
    default: Date.now
},

  },{
   timestamps: true
})


const Ticket = mongoose.model('Ticket', ticketsSchema)

export {
  Ticket
}
