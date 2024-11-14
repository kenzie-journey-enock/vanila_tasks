const rangeInput = document.querySelector('input[type="range"]');
const spanPrice = document.getElementById('price_range');

export function updateRangeBackground() {
  const value = (rangeInput.value - rangeInput.min) / (rangeInput.max - rangeInput.min) * 100;
  console.log(value)
  spanPrice.innerText = `R$ ${parseInt(value)}`
  rangeInput.style.setProperty('--range-progress', `${value}%`);
}

rangeInput.addEventListener('input', updateRangeBackground);
