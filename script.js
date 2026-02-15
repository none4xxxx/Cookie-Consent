// 1. Select the elements
const popup = document.getElementById('cookie-popup');
const acceptButton = document.getElementById('accept-btn');

// 2. Add an Event Listener for the 'click' event
acceptButton.addEventListener('click', function() {
  // 3. Manipulate the DOM to hide the element
  popup.style.display = 'none';
});
