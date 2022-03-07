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
  req.body.owner = req.user.profile._id
  Ticket.create(req.body)
  .then(ticket => {
    res.redirect('/tickets')
  })
  .catch(err => {
    console.log('an error here');
    console.log(err)
    res.redirect('/tickets')
  })
}

function show(req, res) {
  Ticket.findById(req.params.id)
  .populate("owner")
  .then(ticket => {
    // console.log(ticket)
    res.render('tickets/details', {
      ticket,
      title: "🌮 show"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/tickets')
  })
}
function deleteTicket(req, res) {
  Ticket.findById(req.params.id)
  .then(ticket => {
    if(ticket.owner.equals(req.user.profile._id)) {
      ticket.delete()
      .then(()=>{
        console.log(ticket)
        res.redirect('/tickets')

      }) 
    } else {
      throw new Error("its wrong")
    }
  })
}


export{
  index,
  newTicket as new,
  create,
  show,
  deleteTicket as delete
}
