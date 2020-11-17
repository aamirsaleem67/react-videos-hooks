import axios from "axios";

const KEY = "AIzaSyACmDav-2wDS9iSuIFtT83yCR2gm-AnJ4Y";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 5,
    type: "video",
    key: KEY,
  },
});
