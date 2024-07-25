document.getElementById('book-appointment-form').addEventListener('submit', async function (e) {
    e.preventDefault();

    const appointment = {
        patientName: document.getElementById('patient-name').value,
        age: document.getElementById('patient-age').value,
        sex: document.getElementById('patient-sex').value,
        doctorId: document.getElementById('doctor-id').value,
        appointmentDate: new Date(document.getElementById('appointment-date').value),
        problemDescription: document.getElementById('problem-description').value
    };

    const response = await fetch('http://localhost:3000/patient/book-appointment', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(appointment)
    });

    if (response.ok) {
        alert('Appointment booked');
        document.getElementById('book-appointment-form').reset();
    } else {
        alert('Failed to book appointment');
    }
});
