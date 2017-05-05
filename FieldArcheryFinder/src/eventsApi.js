import axios from 'axios';

//get all events
export const getAll = () => {
  //console.log("eventsApi.js getAllEvents")
  return axios('/api/Events')
              .then(resp => resp.data);
};

//get single event
export const getEvent = date => {
  return axios.get(`/api/Events/${date}`)
              .then(resp => resp.data);
};

//add an event
export const addEvent = (newRound, newVenue, newDate) => {
  //console.log("eventsapi.js addEvent");
  return axios.post('/api/Events', { round: newRound, venue: newVenue, date: newDate })
              .then(resp => resp.data);
};

//delete an event
export const deleteEvent = date => {
  //console.log("eventsapi.js deleteEvent");
  return axios.delete(`/api/Events/${date}`)
              .then(resp => resp.data);
};

//modify an event
export const updateEvent = (round,venue,date) => {
  //console.log("api.js updateEvent");
  return axios.put('/api/Events', {round: round, venue: venue, date : date})
  .then(resp => resp.data);
};