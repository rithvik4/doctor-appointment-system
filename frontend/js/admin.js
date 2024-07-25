document.getElementById('add-doctor-form').addEventListener('submit', async function (e) {
    e.preventDefault();

    const doctor = {
        name: document.getElementById('doctor-name').value,
        specialty: document.getElementById('doctor-specialty').value,
        email: document.getElementById('doctor-email').value,
        password: document.getElementById('doctor-password').value,
        experience: document.getElementById('doctor-experience').value
    };

    const response = await fetch('http://localhost:3000/admin/add-doctor', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(doctor)
    });

    if (response.ok) {
        alert('Doctor added successfully');
        document.getElementById('add-doctor-form').reset();
    } else {
        alert('Failed to add doctor');
    }
});
