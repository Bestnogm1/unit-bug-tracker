import { Ticket } from '../models/tickets.js'


// function index(req, res) {
//   Ticket.find({}) 
//   .then(ticket =>{
//     res.render('tickets/index', {
//       ticket,
//       error,
//       title:"helolo"
//     })
//   })
  
// }
function index(req, res) {
  Ticket.find({},function(error, tickets){
    res.render('tickets/index',{
      error,
      title:"wewe",
      tickets
    })
  })
}
export{
  index
}