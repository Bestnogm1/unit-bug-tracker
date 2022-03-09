import mongoose from 'mongoose'

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
  owner: {
    type: mongoose.Schema.Types.ObjectId, 'ref': 'Profile'
  },
  // comment: {
  //   type: mongoose.Schema.Types.ObjectId, ref: 'Comment'},
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
