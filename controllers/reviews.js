import {Review} from '../models/review.js'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime.js'
dayjs.extend(relativeTime)
function index (req, res) {
  Review.find({})
    .populate('owner')
    .then(reviews =>{
      res.render('reviews/index',{
        dayjs,
        reviews,
        title: 'Reviews'
      })
    })
}


function create(req, res){
  Review.create(req.body)
  .then(review => {
      console.log(review)
      res.redirect('/reviews')
    })
    .catch(err => console.log(err))
}

function deleteReview(req, res) {
  // req.body.owner = req.user.profile._id
  Review.findById(req.params.id)
  .then(review => {
    if(review.owner.equals(req.user.profile._id)) {
      review.delete()
      .then(()=>{
        res.redirect('/reviews')
      }) 
      .catch(error => {
        res.redirect('/reviews')
      })
    } else {
      throw new Error("its wrong")
    }
  })
}





export{
  index,
  create,
  deleteReview as delete
}