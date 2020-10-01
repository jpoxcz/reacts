import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 3wj7x-_KJb22LVm-fG6wSy3D_KnNNU146o5zcSUkTjU',
  },
});
