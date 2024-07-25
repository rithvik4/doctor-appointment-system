# Doctor Appointment Booking System

This is a simple web project designed for e-channeling using HTML, CSS, JavaScript, and a backend. The system facilitates online appointment requests for clients or patients of medical establishments, including clinics and hospitals. It also helps doctors manage their appointments with patients. The system comprises three key roles: administrator, doctor, and patient.

## Features

### Admin
- Add doctors, edit doctors, delete doctors
- Schedule new doctor sessions, remove sessions
- View patient details
- View patient bookings

### Doctors
- View their appointments
- View their scheduled sessions
- View patient details
- Edit account settings
- Delete account

### Patients
- Make an appointment online
- Create and manage their accounts
- View their past bookings
- Edit account settings
- Delete account

## Installation and Setup

### Prerequisites
- Node.js and npm installed
- MongoDB installed and running

### Backend Setup
1. Navigate to the `backend` directory.
2. Install the required packages:
    ```bash
    npm install
    ```
3. Start the server:
    ```bash
    node server.js
    ```

### Frontend Setup
1. Open the `frontend/index.html` file in a web browser.

## Usage

### Admin
1. Open `admin.html` in a web browser.
2. Use the form to add new doctors, specifying their name, specialty, email, password, and experience.
3. The details are stored in the backend and can be viewed by the respective doctor.

### Doctor
1. Open `doctor.html` in a web browser.
2. View details about their appointments and patient information.

### Patient
1. Open `patient.html` in a web browser.
2. Book an appointment by filling out the form with details such as name, age, sex, doctor ID, appointment date and time, and problem description.

## Contributions
Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License
This project is licensed under the MIT License.
