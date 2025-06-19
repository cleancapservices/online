document.getElementById('orderForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const dateInput = document.getElementById('date');
  const selectedDate = new Date(dateInput.value);
  const day = selectedDate.getDay();

  if (day !== 0 && day !== 6) {
    alert("Please select a Saturday or Sunday.");
    dateInput.value = "";
    return;
  }

  const orderData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    location: document.getElementById('location').value,
    helmetCount: document.getElementById('helmetCount').value,
    date: dateInput.value
  };

  
fetch('https://script.google.com/macros/s/AKfycbxThSwbnQcCXyzlaJ4FkreoRtJObud1cdZL9D-Dwl_AIZBOa5DN7LgDqWxBy2aCvhcI/exec', {
  method: 'POST',
  body: formData
})
.then(res => res.text())
.then(response => {
  document.getElementById('statusMessage').innerText = "Order saved!";
})
.catch(error => {
  console.error('Error:', error);
  document.getElementById('statusMessage').innerText = "Failed to save order.";
});

});
