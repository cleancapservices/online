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

  fetch('https://corsproxy.io/?https://script.google.com/macros/s/AKfycbzSZ_ZVMcY3ra6tzMsZA8IKhg7U5LIrxCiT6HpI_n-CwyEy8KpH52PKu66oS8CLpKg1/exec', {
    method: 'POST',
    body: JSON.stringify(orderData),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => res.text())
  .then(response => {
    document.getElementById('statusMessage').innerText = "Order saved successfully!";
    document.getElementById('orderForm').reset();
  })
  .catch(error => {
    console.error('Error:', error);
    document.getElementById('statusMessage').innerText = "Failed to save order.";
  });
});
