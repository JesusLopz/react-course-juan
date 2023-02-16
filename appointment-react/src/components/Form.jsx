const Form = () => {
  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Patient Tracking</h2>

      <p className="mt-5 text-lg text-center mb-10">
        Add Patients and{" "}
        <span className="font-bold text-indigo-600">Manage</span>
      </p>

      <form action="" className="bg-white shadow-md px-5 py-10 rounded-lg mb-10">

        <div className="mb-5">
          <label htmlFor="Name" className="block text-gray-700 uppercase font-bold">
            Pet's Name
          </label>

          <input
            id="Name"
            type="text"
            placeholder="Pet's Name"
            className="w-full border-2 p-2 mt-2 placeholder-gray-400  rounded-md"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="Owner" className="block text-gray-700 uppercase font-bold">
            Owner's Name
          </label>

          <input
            id="Owner"
            type="text"
            placeholder="Owner's Name"
            className="w-full border-2 p-2 mt-2 placeholder-gray-400  rounded-md"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
            Email
          </label>

          <input
            id="email"
            type="email"
            placeholder="Owner's email contact"
            className="w-full border-2 p-2 mt-2 placeholder-gray-400  rounded-md"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="discharge" className="block text-gray-700 uppercase font-bold">
            Discharge
          </label>

          <input
            id="discharge"
            type="date"
            className="w-full border-2 p-2 mt-2 placeholder-gray-400  rounded-md"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="symptoms" className="block text-gray-700 uppercase font-bold">
            Symptoms
          </label>

          <textarea     
            id="symptoms"
            type="text"
            placeholder="Describe your pet symptoms"
            className="w-full border-2 p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>

        <input 
            type="submit"
            value="add patient "
            className="w-full bg-indigo-600 uppercase p-3 text-white font-bold hover:bg-indigo-700 cursor-pointer transition-all"
        />
      </form>
    </div>
  );
};

export default Form;
