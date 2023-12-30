import { GetBacon } from './utils';

const baconEl = document.querySelector('.bacon');

GetBacon()
  .then((res) => {
    // eslint-disable-next-line no-return-assign, no-param-reassign
    const markup = res.reduce((acc, val) => (acc += `<p>${val}</p>`), '');
    baconEl.innerHTML = markup;
  })
  // eslint-disable-next-line no-return-assign
  .catch((err) => (baconEl.innerHTML = err));
