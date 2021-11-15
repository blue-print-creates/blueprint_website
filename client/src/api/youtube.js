import axios from 'axios';

const API_KEY = "AIzaSyDQXdxiDwqkR8Kq1k7VPUF_QLIbvTs-5Ho";
const API_URL = "https://www.googleapis.com/youtube/v3/playlistItems";

export default axios.create({
  baseURL: API_URL,
  params: {
    part: 'snippet, contentDetails, id',
    maxResults: 12,
    playlistId: "PLMC9KNkIncKtPzgY-5rmhvj7fax8fdxoj",
    key: API_KEY,
  },
  headers: {}
})
