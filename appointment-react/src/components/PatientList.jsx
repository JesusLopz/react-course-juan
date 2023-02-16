import Patient from "./Patient.jsx"

const PatientList = () => {
    return(
        <div className="md:w-1/2 lg:w-3/5">
            <h2 className="font-black text-3xl text-center">Patient List</h2>
            <p className="text-lg text-center mt-5 mb-10">Manage your <span className="text-indigo-600 font-bold">Patients and Appointments</span></p>

            <Patient />
            <Patient />
            <Patient />
            <Patient />
            <Patient />
        </div>
    )
}

export default PatientList;