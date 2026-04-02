const orderForm = document.getElementById('orderForm');
orderForm.addEventListener('submit', function(e){
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const item = document.getElementById('item').value;
  const quantity = document.getElementById('quantity').value;
  
  const whatsappMessage = `Hello, my name is ${name}. I want to order ${quantity} of ${item}. My email: ${email}`;
  const whatsappNumber = "91XXXXXXXXXX"; // replace with your number
  window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, "_blank");
});
