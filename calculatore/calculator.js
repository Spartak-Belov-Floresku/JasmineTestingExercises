window.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById("calc-form");
    if (form) {
      setupIntialValues();
      form.addEventListener("submit", function(e) {
        e.preventDefault();
        update();
      });
    }
  });
  
  function getCurrentUIValues() {
    return {
      amount: +(document.getElementById("loan-amount").value),
      years: +(document.getElementById("loan-years").value),
      rate: +(document.getElementById("loan-rate").value),
    }
  }
  
  // Get the inputs from the DOM.
  // Put some default values in the inputs
  // Call a function to calculate the current monthly payment
  function setupIntialValues() {
    let values = getCurrentUIValues();
    if(parseInt(values.amount) < 1000){
        values.amount = 1000;
    }
    if(parseInt(values.years) < 1){
        values.years = 1;
    }

    if(parseInt(values.rate) < 5){
        values.rate = 5;
    }
    return calculateMonthlyPayment(values);
  }
  
  // Get the current values from the UI
  // Update the monthly payment
  function update() {
    let monthly = setupIntialValues();
    updateMonthly(monthly);
  }
  
  // Given an object of values (a value has amount, years and rate ),
  // calculate the monthly payment.  The output should be a string
  // that always has 2 decimal places.
  function calculateMonthlyPayment(values) {
      let amount = parseFloat(values.amount)
      let payments = Math.ceil(parseFloat(values.years)*12);
      let intrest = parseFloat(values.rate)/100/12;
      
      let x = Math.pow(1 + intrest, payments);
      let monthly =(amount*x*intrest)/(x-1);
      return monthly.toFixed(2);
  }
  
  // Given a string representing the monthly payment value,
  // update the UI to show the value.
  function updateMonthly(monthly) {
      let span = document.querySelector("#monthly-payment");
      span.innerText = `Your monthly payment is $${monthly}`;
  }
  