const Patient = () => {
    return(
        <div className="bg-white m-3 rounded-xl shadow-md px-5 py-10">
            <p className="mb-3 uppercase text-gray-700 font-bold">Name: {""}
                <span className="font-normal normal-case">Michi</span>
            </p>
            <p className="mb-3 uppercase text-gray-700 font-bold">Owner: {""}
                <span className="font-normal normal-case">Jesus</span>
            </p>
            <p className="mb-3 uppercase text-gray-700 font-bold">Email: {""}
                <span className="font-normal normal-case">email@email.com</span>
            </p>
            <p className="mb-3 uppercase text-gray-700 font-bold">Discharge date: {""}
                <span className="font-normal normal-case">March 21th 2023</span>
            </p>
            <p className="mb-3 uppercase text-gray-700 font-bold">Symptoms: {""}
                <span className="font-normal normal-case">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui culpa optio nihil labore voluptate consequatur, incidunt commodi dolore numquam, sequi, et magni excepturi est possimus tempora perferendis dolor nobis aperiam?</span>
            </p>
        </div>
    )
}

export default Patient