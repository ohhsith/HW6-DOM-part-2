console.log('-----------------3.2')
let selectElement = document.querySelector('.shape');
let result = document.querySelector('.result');

selectElement.addEventListener('change', (event) => {
  result.setAttribute('class', 'result '+event.target.value);
  console.log(event.target.value);
});

console.log('-----------------3.3')

let submitColor = document.getElementById('button');
submitColor.addEventListener('click', function (event) {
    let input = document.querySelector('input').value;
    result.setAttribute('style', 'background-color: '+input);
    console.log(input);

});


selectElement.removeEventListener('change', (event) => {
    result.setAttribute('class', 'result '+event.target.value);
    console.log(event.target.value);
});

submitColor.removeEventListener('click', function (event) {
    let input = document.querySelector('input').value;
    result.setAttribute('style', 'background-color: '+input);
    console.log(input);
});