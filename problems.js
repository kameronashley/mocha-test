// farenheit to celcius
// [23, 140, 212, 41] => [-5, 60, 100, 5]
// formula to convert = (32F - 32) x 5/9 = 0

const farenheit = [23, 140, 212, 41]

function getCelcius(farenheit) {
  return farenheit.map(value => (value - 32) * 5.9)
}