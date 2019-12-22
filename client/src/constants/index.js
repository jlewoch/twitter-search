// base url
export const API_BASE =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:9000/api/'
    : 'https://twitter-api-demos.herokuapp.com/api/';
