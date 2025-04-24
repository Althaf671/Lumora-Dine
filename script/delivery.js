
    function selectLocation(button, location) {

        const buttons = document.querySelectorAll('.location-btn');
        buttons.forEach(btn => btn.classList.remove('active'));

        button.classList.add('active');

        document.getElementById('delivery-form-standard').dataset.location = location;
        console.log('location selected:', location);
    }

    ///Function Submit Form
    
    function submitForm(event, deliveryType) {
        event.preventDefault();

        const form = event.target;
        const email = form.querySelector('input[type="email"]').value;
        const message = form.querySelector('textarea').value;

        const location = form.dataset.location;

    
        if (!email || !address) {
            alert('please select location first');
            return;
        }

        console.log('Sending form...', deliveryType);
        console.log('location', location);
        console.log('email', email);
        console.log('message', message);

        alert('Form submitted successfully!\n' + 
            `Email: ${email}\nAddress: ${address}`);
  
}