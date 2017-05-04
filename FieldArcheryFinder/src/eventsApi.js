import axios from 'axios';

export const upvote = postId => {
  return axios.post(`/api/Events/${postId}/upvote`)
              .then(resp => resp.data);
};

export const getAll = () => {
	console.log("App eventsApi. getAll");
   return axios('/api/Events')
              .then(resp => resp.data);
};

export const getPost = postId => {
  return axios.get(`/api/Events/${postId}`)
              .then(resp => resp.data);
};

export const add = (newRound, newVenue, newDate) => {
  return axios.post('/api/Events', { round: newRound, venue: newVenue, date: newDate })
              .then(resp => resp.data);
};
