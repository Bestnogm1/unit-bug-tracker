import mongoose from 'mongoose'

const ticketsSchema = new mongoose.Schema({
assingedTo: String,
Time: Number,
severity:{
type: String,
enum: ['Urgent', 'High', 'Normal', 'Low']
},
date: Date,
problems:{
  type: String,
  enum: ['Software','Hardware']
},
_id: Number

})

const Ticket = mongoose.model('Ticket', ticketsSchema)

export {
  Ticket
}
