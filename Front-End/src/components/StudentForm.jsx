import { useForm } from "react-hook-form";

function StudentForm() {
  const { handleSubmit, register } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <h1 className="text-3xl text-center text-orange-400 font-bold mb-8 mt-8">
        Student Form
      </h1>
      <form
        className="max-w-md mx-auto mt-8 p-4 bg-white rounded shadow-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            First Name:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...register("firstName")}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Middle Name:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...register("middleName")}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Last Name:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...register("lastName")}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            WhatsApp Number:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...register("whatsAppNumber")}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Birthdate:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="date"
            {...register("birthdate")}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            City in India:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...register("cityIndia")}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            City in Canada:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...register("cityCanada")}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Address in Canada:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...register("addressCanada")}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Skills:
          </label>
          <div className="flex">
            <div className="mr-4">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-5 text-orange-500"
                {...register("skills", { value: "Dance" })}
              />
              <label className="ml-2">Dance</label>
            </div>
            <div className="mr-4">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-5 text-orange-500"
                {...register("skills", { value: "Speech" })}
              />
              <label className="ml-2">Speech</label>
            </div>
            <div className="mr-4">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-5 text-orange-500"
                {...register("skills", { value: "Acting" })}
              />
              <label className="ml-2">Acting</label>
            </div>
          </div>
          <div className="mt-2">
            <label className="mr-3 text-gray-600 text-sm font-bold mb-2 ">
              Other Skills:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register("otherSkills")}
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Status:
          </label>
          <div className="flex flex-col">
            <div className="mb-2">
              <input
                type="radio"
                className="form-radio h-5 w-5 text-orange-500"
                {...register("status", { value: "Citizen" })}
              />
              <label className="ml-2">Citizen</label>
            </div>
            <div className="mb-2">
              <input
                type="radio"
                className="form-radio h-5 w-5 text-orange-500"
                {...register("status", { value: "Permanent Resident" })}
              />
              <label className="ml-2">Permanent Resident</label>
            </div>
            <div className="mb-2">
              <input
                type="radio"
                className="form-radio h-5 w-5 text-orange-500"
                {...register("status", { value: "Student Visa" })}
              />
              <label className="ml-2">Student Visa</label>
            </div>
            <div className="mb-2">
              <input
                type="radio"
                className="form-radio h-5 w-5 text-orange-500"
                {...register("status", { value: "Work Permit" })}
              />
              <label className="ml-2">Work Permit</label>
            </div>
          </div>
        </div>

        <button
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default StudentForm;
