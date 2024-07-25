document.getElementById('book-appointment-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const appointment = {
        name: document.getElementById('patient-name').value,
        age: document.getElementById('patient-age').value,
        sex: document.getElementById('patient-sex').value,
        doctorId: document.getElementById('doctor-id').value,
        date: document.getElementById('appointment-date').value,
        problemDescription: document.getElementById('problem-description').value,
    };

    const response = await fetch('http://localhost:3000/book-appointment', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(appointment),
    });

    const data = await response.json();
    alert('Appointment booked');
});
