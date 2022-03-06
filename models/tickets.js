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
})


const Ticket = mongoose.model('Ticket', ticketsSchema)

export {
  Ticket
}
