/* jshint esversion: 6 */

const dateReg = /^\d{1,2}[./-]\d{1,2}[./-]\d{4}$/

function PasteDateToDateInputs(){
  document.querySelectorAll('.js-paste-date').forEach(function (dayInput){
    console.log(dayInput);

    dayInput.addEventListener('paste', (event) =>{
      let paste = (event.clipboardData || window.clipboardData).getData('text');
      if(!dateReg.test(paste)){
        return;
      }
      const date = paste.split(/[^\d]/g);

      // Get elements of inputs to change
      let dayInputElement = dayInput;
      let monthInputElement = document.getElementById(dayInput.id.replace("-day", "-month"));
      let yearInputElement = document.getElementById(dayInput.id.replace("-day", "-year"));

      dayInputElement.value = date[0];
      monthInputElement.value = date[1];
      yearInputElement.value = date[2];
      event.preventDefault();

    })
  });
}