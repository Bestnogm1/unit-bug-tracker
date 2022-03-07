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
  owner: {
    type: mongoose.Schema.Types.ObjectId, 'ref': 'Profile'
  }
})


const Ticket = mongoose.model('Ticket', ticketsSchema)

export {
  Ticket
}
