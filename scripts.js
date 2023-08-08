// Get the elements from the HTML that we'll need to interact with
const promoCodeInput = document.getElementById('promoCode');
const finalPriceElement = document.getElementById('finalPrice');
const promoForm = document.getElementById('promoForm');
const basePrice = 50; // base ticket price
const PROMO_CODE_HALF = 'HALF';

// Initially display the base ticket price
finalPriceElement.textContent = `Ticket Price: $${basePrice}`;

// Calculate the discount based on the user's promo code
function applyDiscount(basePrice, userCode) {
  const discountRate = userCode === PROMO_CODE_HALF ? 0.5 : 0; // Use constant for promo code
  const finalPrice = basePrice * (1 - discountRate); // Calculate the final price after applying the discount
  return finalPrice;
}

// When the user submits the form (after entering their promo code)
promoForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent page refresh

  const userCode = promoCodeInput.value.toUpperCase(); // Convert user input to uppercase
  const finalPrice = applyDiscount(basePrice, userCode); // Calculate the final price using the entered promo code

  if (finalPrice < basePrice) {
    // If the final price is less than the base price (meaning a discount was applied)
    finalPriceElement.textContent = `Final Ticket Price: $${finalPrice}`; // Update the display to show the discounted price
    promoCodeInput.placeholder = ''; // Clear the input placeholder
  } else {
    // If no discount was applied
    promoCodeInput.placeholder = 'Invalid Promo Code!'; // Show an error message in the input placeholder
  }
  promoCodeInput.value = ''; // Clear the input field for the next use
});
