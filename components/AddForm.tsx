import React from "react";

const arr = ["Name", "Phone number", "Email", "Hobbies"];

interface Props {
  showForm: boolean;
}

const AddForm = ({ showForm }: Props) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center z-10 backdrop-blur-sm">
      <div className="w-80 md:w-96 p-6 bg-white rounded-md shadow-lg border-2">
        <form>
          {arr.map((e) => (
            <div key={e} className="flex flex-col mb-4">
              <label htmlFor={e} className="mb-1">
                {e}
              </label>
              <input
                type="text"
                id={e}
                name={e}
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
          ))}
          <button
            type="submit"
            className="w-full p-2 bg-black text-white rounded-md hover:bg-gray-600"
          >
            Submit
          </button>
          <button className="w-full p-2 bg-white text-black border border-black rounded-md mt-4">
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddForm;
