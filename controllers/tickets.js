import { Ticket } from '../models/tickets.js'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime.js'
dayjs.extend(relativeTime)
function index(req, res,) {
  Ticket.find({}) 
  .then(tickets =>{
    res.render('tickets/index', {
      dayjs,
      tickets,
      title:"tickets"
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
  .populate([ 'owner', 'comments'
  ])
    .then(ticket => {
      res.render('tickets/details', {
        ticket
        
      })
    })
  }


  function addcomments(req, res){  
    Ticket.findById(req.params.id)
    .populate('owner')
    .then(ticket => {
      req.body.owner = req.user.profile.name
      ticket.comments.owner = req.user.profile.name
      console.log('hey',req.user.profile.name);
      ticket.comments.push(req.body)
      ticket.save(function(error){
        res.redirect(`/tickets/${ticket._id}`)
      
    })
  })
  .catch(err =>{ console.log(err);})
  }
  

function deleteTicket(req, res) {
  Ticket.findById(req.params.id)
  .populate('owner')
  .then(ticket => {
    if(ticket.owner.equals(req.user.profile._id)) {
      ticket.delete()
      .then(()=>{
        res.redirect('/tickets')
      }) 
      .catch(error => {
        res.redirect('/tickets')
      })
    } else {
      throw new Error("its wrong")
    }
  })
}




function edit(req, res) {
  Ticket.findById(req.params.id)
  .then(ticket => {
    res.render('tickets/edit',{
    ticket,
    title: 'we are editing it '
    })
  })
  .catch(error => {
    console.log('theres no edit: ',error);
    res.redirect('/tickets')
  })
}

function update(req, res) {
  Ticket.findByIdAndUpdate(req.params.id)
  .then(ticket => {
  if(ticket.owner.equals(req.user.profile._id)){
  ticket.updateOne(req.body,)
  .then(()=>{
    res.redirect(`/tickets`)
  })
  } else {
    throw  new error ('can not update')
  }
  })
  .catch(error => {
    console.log(error);
    res.redirect('/tickets')
  })
}



export{
  index,
  newTicket as new,
  create,
  show,
  deleteTicket as delete,
  edit,
  update,
  addcomments,

  
}
