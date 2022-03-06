import { Ticket } from '../models/tickets.js'


function index(req, res) {
  Ticket.find({}) 
  .then(tickets =>{
    res.render('tickets/index', {
      tickets,
      title:"helolo"
    })
  })
  .catch(err =>{
    console.log(err);
    re.redirect('/tickets')
  })
  
}

export{
  index
}