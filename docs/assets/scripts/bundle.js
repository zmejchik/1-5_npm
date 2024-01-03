// eslint-disable-next-line no-unused-vars
function changeMinute(directChangeMinute) {
  const divLabelMinutes = window.document.getElementsByClassName('digit-minute')[0];
  let countMinute = Number(divLabelMinutes.innerHTML);
  if (directChangeMinute === 'minusone') {
    if (countMinute !== 0) countMinute -= 1;
  }
  if (directChangeMinute === 'plusone') {
    countMinute += 1;
  }
  divLabelMinutes.innerHTML = countMinute;
}
