
const BASE_URL = "http://codeminer.co:3001/api/v1";

export const endpoints = {
  // Get Api  
  getTrips: `${BASE_URL}/trips/trip`,
  getCategories: `${BASE_URL}/categories/category`,
  getServices: `${BASE_URL}/services/service`,
  getAddons: `${BASE_URL}/addons/get`,
  getAllReviews: `${BASE_URL}/reviews/all`,
  getTickets: `${BASE_URL}/tickets/ticket`,
  getDestination: `${BASE_URL}/destination/all`,
  getCustomTours: `${BASE_URL}/customTour/get`,

 

  // Post APi
  postAdminLogin: `${BASE_URL}/auth/adminLogin`,
  PostAddnew: `${BASE_URL}/tickets/ticket`,
  postTrip: `${BASE_URL}/trips/trip`,
  postCategory: `${BASE_URL}/categories/category`,
  postService: `${BASE_URL}/services/service`,
  postAddon: `${BASE_URL}/addons/add`,
  postReview: `${BASE_URL}/reviews/review`,
  postticket:`${BASE_URL}/tickets/ticket`,
  postDestination: `${BASE_URL}/destination/create`,

  // Dell Api 
  // dellTripId: `${BASE_URL}/trips/trip/655cb6a4437f4516409d8fef`,
  dellCategory: `${BASE_URL}/categories/category`,
  dellService: `${BASE_URL}/services/service`,
  dellAddon: `${BASE_URL}/addons/delete`,
  dellTicket: `${BASE_URL}/tickets/ticket`,
  delCustomTour: `${BASE_URL}/customTour/delete`,


  // Update Office 
  putTrip: `${BASE_URL}/trips/trip`,
  putCategory: `${BASE_URL}/categories/category`,
  putAddon: `${BASE_URL}/addons/put`,
  putCustomTour: `${BASE_URL}/customTour/put`,
};