import axios from 'axios';

const KEY = 'AIzaSyDACyUmw2mwSfTUi1Bqi7ESpa0mSO5MaFA';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});
