const boxItem = document.querySelector('#boxes')
const controlItemInput = document.querySelector('#controls input')

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
