import axios from 'axios';

//get all events
export const getAll = () => {
  console.log("eventsApi.js getAllEvents")
  return axios('/api/events')
              .then(resp => resp.data);
};

//get single event                             //************* _id is the key not date
export const getEvent = _id => {
  return axios.get(`/api/Events/${_id}`)
              .then(resp => resp.data);
};

//add an event
export const addEvent = (newRound, newVenue, newDate) => {
  //console.log("eventsapi.js addEvent");
  return axios.post('/api/Events', { round: newRound, venue: newVenue, date: newDate })
              .then(resp => resp.data);
};

//delete an event
export const deleteEvent = _id => {
  //console.log("eventsapi.js deleteEvent");
  return axios.delete(`/api/Events/${_id}`)
              .then(resp => resp.data);
};

//modify an event
export const updateEvent = (_id, round,venue,date) => {
  //console.log("api.js updateEvent");
  console.log("eventsApi " + _id);
  console.log(round + "  " + venue + "  " + date);
  return axios.put(`/api/Events/${_id}`, {round: round, venue: venue, date : date})
  .then(resp => resp.data);
};