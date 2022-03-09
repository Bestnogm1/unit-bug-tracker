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
  req.body.owner = req.user.profile._id
  Ticket.findById(req.params.id)
  .populate('owner')
  .then(ticket => {
    console.log('owner',ticket.owner._id);
    console.log('profile', req.user.profile._id);
    
    if(ticket.owner.equals(req.user.profile._id)) {
      ticket.delete()
      .then(()=>{
        console.log('OWNER:  ',typeof ticket.owner )
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
  // console.log('this is wrong',req);
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
function addComment(req, res,) {
  Ticket.findById(req.params.id ,function(error, ticket){
    ticket.addComment.push(req.body)
    ticket.save(function(error){
        res.redirect(`/tickets/${flight._id}`)
    })
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
  addComment
}
