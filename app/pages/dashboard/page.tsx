import React from "react";

export default function Page() {
  return (
    <div>
      <h1 className="max-w-xs align-center mx-auto">Dashboard</h1>
      <div className="align-center mx-auto">
        <div className="bg-white shadow-xl rounded-lg py-3">
          <div className="photo-wrapper p-2">
            <img
              className="w-32 h-32 rounded-full mx-auto"
              src="https://i.pinimg.com/236x/6e/45/c8/6e45c8b9984ee028ab7dcbe44e7f3b13.jpg"
              alt="John Doe"
            ></img>
          </div>
          <div className="p-2">
            <h3 className="text-center text-xl text-gray-900 font-medium leading-8">
              Jane Doe
            </h3>
            <div className="text-center text-gray-400 text-xs font-semibold">
              <p>Active learner and teacher!</p>
            </div>
            <table className="text-xs my-3">
              <tbody>
                <tr>
                  <td className="px-2 py-2 text-gray-500 font-semibold">
                    Points:{" "}
                  </td>
                  <td className="px-2 py-2">40</td>
                </tr>
                <tr>
                  <td className="px-2 py-2 text-gray-500 font-semibold">
                    Lessons Uploaded:
                  </td>
                  <td className="px-2 py-2">4</td>
                </tr>
                <tr>
                  <td className="px-2 py-2 text-gray-500 font-semibold">
                    Lessons Learned Today:{" "}
                  </td>
                  <td className="px-2 py-2">4</td>
                </tr>
                <tr>
                  <td className="px-2 py-2 text-gray-500 font-semibold">
                    Email
                  </td>
                  <td className="px-2 py-2">john@exmaple.com</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
