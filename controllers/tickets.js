import { Ticket } from '../models/tickets'
function index(req, res) {
  Ticket.find({}) 
  .then(ticket =>{
    res.render('tickets/index', {
      ticket,
      title:"helolo"
    })
  })
  
}
export{
  index
}