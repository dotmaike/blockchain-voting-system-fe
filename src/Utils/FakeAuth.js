const fakeAuth = {
  isAuthenticated: sessionStorage.getItem('isAuthenticated') === 'true',
  authenticate(cb) {
    sessionStorage.setItem('isAuthenticated', true);
    setTimeout(cb, 100);
  },
  signout(cb) {
    sessionStorage.setItem('isAuthenticated', false);
    setTimeout(cb, 100);
  }
};

export default fakeAuth;
