const commonAPI = {
  auth: '/auth',
  user: '/user',
  movies: '/movies'
};

const apiPaths = {
  // auth endpoints
  login: `${commonAPI.auth}/login`,

  // user endpoints
  userMovies: `${commonAPI.user}/movies`,

  // movies endpoints
  movies: `${commonAPI.movies}`
};

export default apiPaths;
