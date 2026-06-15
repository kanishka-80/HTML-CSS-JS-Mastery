class Patient {
    constructor(id, name, age, disease) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.disease = disease;
    }
}

class Doctor {
    constructor(id, name, specialization) {
        this.id = id;
        this.name = name;
        this.specialization = specialization;
    }
}

class Appointment {
    constructor(patientName, doctorName, date) {
        this.patientName = patientName;
        this.doctorName = doctorName;
        this.date = date;
    }
}

class HospitalManagementSystem {
    constructor() {
        this.patients = [];
        this.doctors = [];
        this.appointments = [];
    }

    addPatient(id, name, age, disease) {
        const patient = new Patient(id, name, age, disease);
        this.patients.push(patient);
        console.log("Patient Added Successfully");
    }

    addDoctor(id, name, specialization) {
        const doctor = new Doctor(id, name, specialization);
        this.doctors.push(doctor);
        console.log("Doctor Added Successfully");
    }

    bookAppointment(patientName, doctorName, date) {
        const appointment = new Appointment(
            patientName,
            doctorName,
            date
        );

        this.appointments.push(appointment);
        console.log("Appointment Booked Successfully");
    }

    viewPatients() {
        console.log("\nPatients List:");
        this.patients.forEach(patient => {
            console.log(patient);
        });
    }

    viewDoctors() {
        console.log("\nDoctors List:");
        this.doctors.forEach(doctor => {
            console.log(doctor);
        });
    }

    viewAppointments() {
        console.log("\nAppointments List:");
        this.appointments.forEach(app => {
            console.log(app);
        });
    }
}

// Creating Hospital System
const hospital = new HospitalManagementSystem();

// Adding Patients
hospital.addPatient(1, "Kanishka", 21, "Fever");
hospital.addPatient(2, "Rahul", 25, "Diabetes");

// Adding Doctors
hospital.addDoctor(101, "Dr. Sharma", "Cardiologist");
hospital.addDoctor(102, "Dr. Gupta", "General Physician");

// Booking Appointments
hospital.bookAppointment(
    "Kanishka",
    "Dr. Gupta",
    "15-06-2026"
);

hospital.bookAppointment(
    "Rahul",
    "Dr. Sharma",
    "16-06-2026"
);

// Display Data
hospital.viewPatients();
hospital.viewDoctors();
hospital.viewAppointments();