let fahrenheitNum = document.getElementById('fahrenheit');
let celsiusNum = document.getElementById('celsius');
let converter = document.getElementsByClassName('temp');

for (let i = 0; i < converter.length; i++) {
  let temp = converter[i];

  temp.addEventListener('input', function (e) {
    let value = parseFloat(e.target.value);

    switch (e.target.name) {
      case 'fahrenheit':
        celsiusNum.value = Math.floor((value - 32) / 1.8);
        break;
      case 'celsius':
        fahrenheitNum.value = Math.floor(value * 1.8 + 32);
        break;
    }
  });
}
