import axios from 'axios';

const API_KEY = "AIzaSyDXbe3gVwjYfLRttONKGu3Ot6JsVP-uuOw";
const API_URL = "https://www.googleapis.com/youtube/v3/playlistItems";

export default axios.create({
  baseURL: API_URL,
  params: {
    part: 'snippet, contentDetails, id',
    maxResults: 12,
    playlistId: "PLrOFa8sDv6jfNxnFmp3N2bK0eqRkUPIxS",
    key: API_KEY,
  },
  headers: {}
})
