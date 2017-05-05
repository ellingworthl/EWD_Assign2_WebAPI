import axios from 'axios';

//get upvote info on review
export const upvote = postId => {
  return axios.post(`/api/posts/${postId}/upvote`)
              .then(resp => resp.data);
};

//get all reviews
export const getAll = () => {
   //console.log("reviewsApi.js getAllPosts")
   return axios('/api/posts')
              .then(resp => resp.data);
};

//get single review
export const getPost = postId => {
  return axios.get(`/api/posts/${postId}`)
              .then(resp => resp.data);
};

//add review
export const add = (newTitle, newLink) => {
	//console.log("reviewsApi.js addPost");
  return axios.post('/api/posts', { title: newTitle, link: newLink })
              .then(resp => resp.data);
};