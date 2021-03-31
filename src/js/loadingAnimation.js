export default function (state) {
  const loader = document.querySelector('.game-loading');

  if (state) {
    loader.style.display = 'block';
  } else {
    loader.style.display = 'none';
  }
}
