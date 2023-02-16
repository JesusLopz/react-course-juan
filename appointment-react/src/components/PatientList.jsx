const PatientList = () => {
    return(
        <div className="md:w-1/2 lg:w-3/5">
            <h2 className="font-black text-3xl text-center mb-5">Patient List</h2>
            <p className="text-lg text-center mb-10">Manage your <span className="text-indigo-600 font-bold">Patients and appointments</span></p>

            <div className="bg-white m-3 rounded-lg p-3">
                <p className="px-5 py-3  uppercase text-gray-700 font-bold">Name: {""}
                    <span className="font-normal normal-case">Michi</span>
                </p>
                <p className="px-5 py-3  uppercase text-gray-700 font-bold">Owner: {""}
                    <span className="font-normal normal-case">Jesus</span>
                </p>
                <p className="px-5 py-3  uppercase text-gray-700 font-bold">Email: {""}
                    <span className="font-normal normal-case">email@email.com</span>
                </p>
                <p className="px-5 py-3  uppercase text-gray-700 font-bold">Discharge date: {""}
                    <span className="font-normal normal-case">March 21th 2023</span>
                </p>
                <p className="px-5 py-3  uppercase text-gray-700 font-bold">Symptoms: {""}
                    <span className="font-normal normal-case">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui culpa optio nihil labore voluptate consequatur, incidunt commodi dolore numquam, sequi, et magni excepturi est possimus tempora perferendis dolor nobis aperiam?</span>
                </p>
            </div>
        </div>
    )
}

export default PatientList;