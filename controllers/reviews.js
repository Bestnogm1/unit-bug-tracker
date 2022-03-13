import {Reviews} from '../models/reviews.js'
function index (req, res) {
  Reviews.find({})
  .then(reviews =>{
    res.render('reviews/index',{
      reviews,
      title: 'this is the revies page'
    })
  })
}
// function show (req, res) {
//   Reviews.findById(req.params.id)
//   .populate('owner')
//   .then(review =>{
//     res.render('reviews',{ 
//       review
//     })
//   })
// }

const  createReview = async (req, res)=> {
  let newReview = new Reviews({ 
    reviews: req.body.reviews,
    rating: req.body.rating,
  }); try {
    Reviews = await newReview.save()
    res.redirect('/reviews')
    console.log(newReview);
  } catch(e){
    res.redirect('/reviews')
    console.log(e);
  }
//   Reviews.findById(req.params.id)
//   .populate('owner')
//   .then(review => {
//     console.log('wow',req.body)
//     console.log('owner',req.body.owner)
//     req.body.owner = req.user.profile.name
//     // review.owner = req.user.profile.name
//     review.owner = req.body.owner
//     // console.log('hey',req.user.profile.name);
//     review.push(req.body)
//     review.save(function(error){
//       res.redirect(`/reviews/${review._id}`)
    
//   })
// })
// .catch(err =>{ console.log(err);})
}

// function create(req, res){
//   Reviews.create(req.params)
//   console.log('hey',req.params)
//   .populate('owner')
//   .then(review => {
//     res.body.owner = req.user.profile.name
//     review.owner = req.user.profile.name
//     console.log('hey',req.user.profile.name);
//     console.log('hey',req.body.owner)
//     // review.save(function(error){
//       res.redirect('/reviews')
//     // })
//   })
// }






// function create(req, res){
//   Reviews.findById(req.params.id)
//   .populate('owner')
//   .then(review => {
//     console.log('wow',req.body)
//     console.log('owner',req.user.profile.name)
//     // req.body.owner = req.user.profile.name
//     // review.owner = req.user.profile.name
//     console.log('testinmg');
//     review.owner = req.user.profile.name
//     // review.owner = req.body.owner
//     console.log('hey',review.owner);
//     review.owner.push(req.body)
//     review.save(function(error){
//       res.redirect(`/reviews/${review._id}`)
    
//   })
// })
// .catch(err =>{ console.log(err);})
// }



// function create(req, res){
//   Reviews.findById(req.params.id)
//   .populate('owner')
//   .then(review => {
//     console.log('wow',req.body)
//     console.log('owner',req.user.profile.name)
//     // req.body.owner = req.user.profile.name
//     // review.testReview.owner = req.user.profile.name
//     console.log('testinmg');
//     review.owner = req.user.profile.name
//     // review.owner = req.body.owner
//     console.log('hey',review.owner);
//     review.owner.push(req.body)
//     review.save(function(error){
//       res.redirect(`/reviews/${review._id}`)
    
//   })
// })
// .catch(err =>{ console.log(err);})
// }


export{
  index,
  createReview as create
  // show
}