const roman = document.querySelector("#roman");
const convert = document.querySelector("#convert");
const dispElm1 = document.querySelector("#display-result-1");
var convertToRoman = function(num) {
  var decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var romanNumeral = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I"
  ];

  var romanized = "";

  for (var index = 0; index < decimalValue.length; index++) {
    while (decimalValue[index] <= num) {
      romanized += romanNumeral[index];
      num -= decimalValue[index];
    }
  }

  return romanized;

  
};

document.getElementById("convert").addEventListener("click", function() {
  this.style.background = "green"
  let number = document.getElementById('roman').value;
  dispElm1.textContent = convertToRoman(number);

  convertToRoman(number);

  document.getElementById("roman").defaultValue = "number here!";
})

function success() {
  if(roman.value==="") { 
             convert.disabled = true; 
         } else { 
             convert.disabled = false;
         }
}

function setInputFilter(textbox, inputFilter) {
  ["input", "keydown", "keyup", "mousedown", "select",
"contextmenu", "drop"].forEach(function(event) {
  textbox.addEventListener(event, function() {
    if(inputFilter(this.value)) {
      this.oldValue = this.value;
      this.oldSelectionStart = this.selectionStart;
      this.oldSelectionEnd = this.selectionEnd;
    } else if (this.hasOwnProperty("oldValue")) {
      this.value = this.oldValue;
      this.selectionRange(this.oldSelectionStart, this.oldSelectionEnd);
    } else {
      this.value = "";
    }
  });
});
}

// Install input filters.
setInputFilter(document.getElementById("roman"), function(value) {
  return /^-?\d*$/.test(value); });

// press "Enter" key to trigger button

var press = document.getElementById("roman");

press.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("convert").click();
  }

});