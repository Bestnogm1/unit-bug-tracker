
import { Comment } from '../models/comments.js'

function index (req, res) {
  Comment.find({})
  .populate('addedTickets')
  .then(comments =>{
    console.log('hello', );
    res.render('comments/sections',{
      comments,
      
      title: 'wow'

    })
  })
  .catch(error =>{
    console.log(error);
    res.redirect('/tickets')
  })
}

export{
    index
}