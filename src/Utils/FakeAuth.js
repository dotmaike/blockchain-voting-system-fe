const fakeAuth = {
  isAuthenticated: sessionStorage.getItem('isAuthenticated') === 'true',
  authenticate() {
    sessionStorage.setItem('isAuthenticated', true);
  },
  signout(cb) {
    sessionStorage.setItem('isAuthenticated', false);
    setTimeout(cb, 100);
  }
};

export default fakeAuth;
