const numberInput = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const output = document.getElementById('output');


const romanToConvert = number => {

  const ref = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
  ];

  const res = [];
    ref.forEach(function (arr) {
      while(number >= arr[1]){
        res.push(arr[0]);
        number -= arr[1];
      }
    });
    return res.join('');
}


const check = input => {

  let errText = '';
  if(!input||input.match(/[e.]/g)){
    errText = 'Please enter a valid number.';
  }
  else if(input < 1){
   errText = "Please enter a number greater than or equal to 1."
  }
  else if(input > 3999){
    errText = 'Please enter a number less than or equal to 3999.'
  }
  else{
    output.classList.add('output');
    return true;
  }
  output.textContent = errText;
  output.classList.remove('hide');
  output.classList.add('error');
  return false;
};


const clearOutput = () =>{
  output.textContent = "";
  output.classList.remove('error');
}


const updateUI = () =>{
  const num = numberInput.value;
  const intNum = parseInt(num,10);

  output.classList.remove('hide');
  clearOutput();

  if(check(num)){
    output.textContent = romanToConvert(intNum);
  }
}

convertBtn.addEventListener('click',()=>{
  updateUI();
});


numberInput.addEventListener('keydown',e=>{
  if(e.key==="Enter"){
    updateUI();
  }
});