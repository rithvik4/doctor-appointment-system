document.addEventListener('DOMContentLoaded', async () => {
    const response = await fetch('http://localhost:3000/doctors');
    const doctors = await response.json();

    const appointmentsList = document.getElementById('appointments-list');
    doctors.forEach((doctor) => {
        const doctorItem = document.createElement('div');
        doctorItem.textContent = `Name: ${doctor.name}, Specialty: ${doctor.specialty}, Experience: ${doctor.experience}`;
        appointmentsList.appendChild(doctorItem);
    });
});
