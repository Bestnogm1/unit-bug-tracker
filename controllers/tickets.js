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
	req.body.tasty = !!req.body.tasty
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
    res.render('tickets/detail', {
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
  req.body.owner = req.user.profile._id
  Ticket.findById(req.params.id)
  .then(ticket => {
    if(ticket.owner.equals(req.user.profile._id)) {
      ticket.delete()
      .then(()=>{
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