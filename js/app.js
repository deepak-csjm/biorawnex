if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js');
}
window.addEventListener('load', () => {
  renderRoute();
});
