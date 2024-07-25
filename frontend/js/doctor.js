document.addEventListener('DOMContentLoaded', async function () {
    const response = await fetch('http://localhost:3000/doctor/doctors');
    const doctors = await response.json();

    const doctorList = document.getElementById('appointments-list');
    doctorList.innerHTML = '<h2>Doctors List</h2>';

    doctors.forEach(doctor => {
        const doctorDiv = document.createElement('div');
        doctorDiv.innerHTML = `
            <p><strong>Name:</strong> ${doctor.name}</p>
            <p><strong>Specialty:</strong> ${doctor.specialty}</p>
            <p><strong>Email:</strong> ${doctor.email}</p>
            <p><strong>Experience:</strong> ${doctor.experience}</p>
        `;
        doctorList.appendChild(doctorDiv);
    });
});
