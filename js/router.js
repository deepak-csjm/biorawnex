window.renderRoute = function(){
  const route = (location.hash || '#/welcome').replace('#/','');
  document.getElementById('app').innerHTML =
    (window.screens[route] || window.screens.welcome)();
};
window.addEventListener('hashchange', renderRoute);
