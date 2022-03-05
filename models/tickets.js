import mongoose from 'mongoose'

const ticketsSchema = new mongoose.Schema({
assingedTo: String,
Time: Number,
Severity:{
type: String,
enum: ['Urgent', 'High', 'Normal', 'Low']
},
Date: Date,
problem:{
  type: String,
  enum: ['Software','Hardware']
},

})

const Ticket = mongoose.model('Ticket', profileSchema)

export {
  Ticket
}
