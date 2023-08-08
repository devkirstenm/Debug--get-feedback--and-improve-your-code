# Ruff Ruff Raffle App 🐶

This project is part of the Scrimba course [AI Coding for Non-Coders](https://scrimba.com/learn/aicoding) to learn how to effectively debug your project and improve your code using ChatGPT prompts.

## Description 📝

ReelRewards is a web application that allows users to enter a discount code to receive 50% off the final price. The application is built using HTML, CSS, and JavaScript.

## ChatGPT Prompts 🤖

### Prompt 1
I'm having an issue running my JavaScript code. Here's the error message I'm getting: 

"!TypeError: Cannot set properties of null (setting 'textContent')"

Please help me understand what's wrong.

### Prompt 2
I'm having issues with my JavaScript code. Submitting the promo form refreshes the page and does not run the following code as expected:

```
promoForm.addEventListener('submit', function(event) {
  var userCode = promoCodeInput.value;
  var finalPrice = applyDiscount(basePrice, userCode);

  if (finalPrice < basePrice) {
    finalPriceElement.textContent = `Final Tickets Price: $${finalPrice}`;
    promoCodeInput.disabled = true;
  } else {
    promoCodeInput.placeholder = 'Invalid Promo Code!'
  }

  promoCodeInput.value = '';
});
```

Could you help me debug and fix this?

### Prompt 3
I'm having trouble with this `applyDiscount` function. It isn't correctly applying a 50% discount only when I enter the code "HALF".

###
function applyDiscount(basePrice, userCode) {
  var discountRate = 0;
  if (userCode = "HALF") {
    discountRate = 0.5;
  }
  var finalPrice = basePrice - basePrice * discountRate;
  return finalPrice;
}
###

Could you help me debug and fix this function?

### Prompt 4 - Code improvement prompt
This JavaScript code works as expected, but I think it could be made more efficient and modern. Please provide a more streamlined and up-to-date version of this code.
```
// Get the elements from the HTML that we'll need to interact with
var promoCodeInput = document.getElementById('promoCode');
var finalPriceElement = document.getElementById('finalPrice');
var promoForm = document.getElementById('promoForm'); 
var basePrice = '50';  // base ticket price

finalPriceElement.textContent = `Ticket Price: $${basePrice}`;  // initially display the base ticket price

// Calculate the discount based on the user's promo code
function applyDiscount(basePrice, userCode) {
  var discountRate = 0;  // default discount rate is 0%
  if (userCode === "HALF") {  // if the user enters "HALF", set discount rate to 50%
    discountRate = 0.5;
  }
  var finalPrice = basePrice - basePrice * discountRate;  // calculate the final price after applying the discount
  return finalPrice;
}

// When the user submits the form (after entering their promo code)
promoForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent page refresh

  var userCode = promoCodeInput.value;  // get the user's entered promo code
  var finalPrice = applyDiscount(basePrice, userCode);  // calculate the final price using the entered promo code
  
  if (finalPrice < basePrice) {  // if the final price is less than the base price (meaning a discount was applied)
    finalPriceElement.textContent = `Final Ticket Price: $${finalPrice}`;  // update the display to show the discounted price
    promoCodeInput.placeholder = '';  // clear the input placeholder
  } else {  // if no discount was applied
    promoCodeInput.placeholder = 'Invalid Promo Code!';  // show an error message in the input placeholder
  }
  promoCodeInput.value = '';  // clear the input field for the next use
});
```

## Prompt 5 - Using a role-playing prompt to get feedback on your code
You are a senior developer reviewing my JavaScript code before I ship it to production. Please provide feedback on how I can improve this code, make it more maintainable, and handle cases where a user enters the promo code in lowercase.

