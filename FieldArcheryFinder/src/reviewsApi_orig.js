import axios from 'axios';

//get upvote info on review
export const upvote = reviewId => {
  return axios.post(`/api/reviews/${reviewId}/upvote`)
              .then(resp => resp.data);
};

//get all reviews
export const getAll = () => {
   //console.log("reviewsApi.js getAllReviews")
   return axios('/api/Reviews')
              .then(resp => resp.data);
};

//get single review
export const getReview = reviewId => {
  return axios.get(`/api/reviews/${reviewId}`)
              .then(resp => resp.data);
};

//add a review
export const add = (newTitle, newLink) => {
	//console.log("reviewsApi.js addPost");
  return axios.post('/api/posts', { title: newTitle, link: newLink })
              .then(resp => resp.data);
};

//delete a review
export const deleteReview = reviewId => {
  return axios.delete(`/api/reviews/${reviewId}`)
              .then(resp => resp.data);
};