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
  createdAt:{
    type:Date,
    default: Date.now
},
  
  edit: Boolean,
  },{
  timestamps: true
})


const Ticket = mongoose.model('Ticket', ticketsSchema)

export {
  Ticket
}
