let fahrenheitNum = document.getElementById('fahrenheit');

let celsiusNum = document.getElementById('celsius');

//let result = Math.floor(celsiusNum);

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

/*const fahrenheitNum = document.getElementById('fahrenheit');
const celsiusNum = document.getElementById('celsius');
//  const kelvinNum = document.getElementById("kelvin");
// const newtonNum = document.getElementById("newton")

const converter = document.getElementsByClassName('temp');
console.log(converter);

for (let i = 0; i < converter.length; i++) {
  let temp = converter[i];

  temp.addEventListener('input', function (e) {
    let value = parseFloat(e.target.value);

    switch (e.target.name) {
      case 'celsius':
        fahrenheitNum.value = value * 1.8 + 32;
        //     kelvinNum.value = value + 273.15;
        break;
      case 'fahrenheit':
        celsiusNum.value = (value - 32) / 1.8;
        //       kelvinNum.value = (value - 32) / 1.8 + 273.15;
        break;
    }
  });
}

/*
        //degrees in kelvin
        const kelvin = 300;
        //degrees in celsius
        const celsius = kelvin - 273;
        //degrees in fahrenheit
        let fahrenheit = celsius * (9 / 5) + 32;
        //rounding
        fahrenheit = Math.floor(fahrenheit);
        console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
        //degrees in newton
        let newton = celsius * (33 / 100);
        newton = Math.floor(newton);

//console.log(kelvinNum);
console.log(celsiusNum);
console.log(fahrenheitNum);
//      console.log(newtonNum); */
