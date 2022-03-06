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
    res.redirect('/tickets')
  })
  
}

function newTicket(req, res) {
  res.render('tickets/new')
}

function create(req, res){
  const ticket =  new Ticket(req.body)
  ticket.save((error)=>{
    if(error)return res.redirect('/tickets/new')
    res.redirect('/tickets')
  })
}

export{
  index,
  newTicket as new,
  create
}