// use axios to fetch API from Flickr
import axios from "axios";
// get API config
import { URL, FORMAT } from "./config.js"

// Flickr feed API
const feed = async () => {
  try {
    // destructuring "data" from feed API response
    const { data } = await axios.get(`${URL}feeds/photos_public.gne?${FORMAT}`)
    // return normal data in json format
    return JSON.parse(data
      // normalize Flickr API data response
      .replace('jsonFlickrFeed', '')
      .replace(/\(/g, '')
      .replace(/\)/g, '')
      .replace(/\n/g, '')
      .replace(/\t/g, '')
    )
  } catch (e) {
    // throw an error
    throw new Error(e)
  }
}

// export Flickr feed API
export default feed;