import mongoose from 'mongoose'

const ticketsSchema = new mongoose.Schema({
assingedTo: String,
Time: Number,
Severity:{
type: String,
enum: ['Urgent', 'High', 'Normal', 'Low']
},
Date: Date,
problems:{
  type: String,
  enum: ['Software','Hardware']
},

})

const Ticket = mongoose.model('Ticket', ticketsSchema)

export {
  Ticket
}
