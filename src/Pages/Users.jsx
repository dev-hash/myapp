import React from "react";

const Users = () => {
  return (
    <div style={{width:"100%"}}>
      <div className="flex flex-col ">
        <div className="overflow-x-auto ">
          <div className="p-1.5 w-full inline-block align-middle flex justify-center ">
            <div className="overflow-hidden border rounded-lg w-10/12  " style={{marginTop:"40px"}}>
              <table className="min-w-full divide-y divide-gray-200 border-separate border border-slate-400 ">
                <thead className="bg-green-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs text-center font-bold text-left text-gray-500 uppercase "
                    >
                      S.No.
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs text-center font-bold text-left text-gray-500 uppercase "
                    >
                      Profile
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-center text-left text-gray-500 uppercase "
                    >
                      name
                    </th>

                    <th
                      scope="col"
                      className="px-6 py-3 text-xs text-center font-bold text-right text-gray-500 uppercase "
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs text-center font-bold text-right text-gray-500 uppercase "
                    >
                      Mobile NO.
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                      1
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap flex justify-center">
                      <img
                        className="p-1 w-10 h-10 rounded-full ring-2 ring-gray-300 dark:ring-gray-500  "
                        src="https://cdn.iconscout.com/icon/free/png-256/avatar-372-456324.png"
                        alt="Bordered avatar"
                      />
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      jonne62@gmail.com
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                      <a
                        className="text-green-500 hover:text-green-700"
                        href="#"
                      >
                        Edit
                      </a>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                      <a className="text-red-500 hover:text-red-700" href="#">
                        Delete
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                      2
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      Jone Doe
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      jonne62@gmail.com
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                      <a
                        className="text-green-500 hover:text-green-700"
                        href="#"
                      >
                        Edit
                      </a>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                      <a className="text-red-500 hover:text-red-700" href="#">
                        Delete
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                      3
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      Jone Doe
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      jonne62@gmail.com
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                      <a
                        className="text-green-500 hover:text-green-700"
                        href="#"
                      >
                        Edit
                      </a>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                      <a className="text-red-500 hover:text-red-700" href="#">
                        Delete
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                      4
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      Jone Doe
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      jonne62@gmail.com
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                      <a
                        className="text-green-500 hover:text-green-700 text-center"
                        href="#"
                      >
                        Edit
                      </a>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                      <a className="text-red-500 hover:text-red-700" href="#">
                        Delete
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                      5
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      Jone Doe
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      jonne62@gmail.com
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                      <a
                        className="text-green-500 hover:text-green-700"
                        href="#"
                      >
                        Edit
                      </a>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                      <a className="text-red-500 hover:text-red-700" href="#">
                        Delete
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                      6
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      Jone Doe
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      jonne62@gmail.com
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                      <a
                        className="text-green-500 hover:text-green-700"
                        href="#"
                      >
                        Edit
                      </a>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                      <a className="text-red-500 hover:text-red-700" href="#">
                        Delete
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                      7
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      Jone Doe
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      jonne62@gmail.com
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                      <a
                        className="text-green-500 hover:text-green-700"
                        href="#"
                      >
                        Edit
                      </a>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                      <a className="text-red-500 hover:text-red-700" href="#">
                        Delete
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                      8
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      Jone Doe
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      jonne62@gmail.com
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                      <a
                        className="text-green-500 hover:text-green-700"
                        href="#"
                      >
                        Edit
                      </a>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                      <a className="text-red-500 hover:text-red-700" href="#">
                        Delete
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      </div>
  
  );
};

export default Users;
