document.getElementById('add-doctor-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const doctor = {
        name: document.getElementById('doctor-name').value,
        specialty: document.getElementById('doctor-specialty').value,
        email: document.getElementById('doctor-email').value,
        password: document.getElementById('doctor-password').value,
        experience: document.getElementById('doctor-experience').value,
    };

    const response = await fetch('http://localhost:3000/add-doctor', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(doctor),
    });

    const data = await response.json();
    alert(data.message);
});
