import React from "react";
import Sidebar from "../Components/Sidebar";


const IMAPConfig=()=>{
    return (
        <>
        <div style={{width:"100%"}}>
          {/* <Sidebar/> */}
          <div className=" flex justify-end btnmargin">
            <button className="bg-blue-500 hover:bg-blue-700 justify-items-end text-white font-bold py-2 px-4 border border-blue-700 rounded">
              Add IMAP
            </button>
          </div>
          <div className="flex flex-col tablemargin">
            <div className="overflow-x-auto ">
              <div className="p-1.5 w-full inline-block align-middle flex justify-center ">
                <div className="overflow-hidden border rounded-lg w-10/12  ">
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
                          Catelog id
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-bold text-center text-left text-gray-500 uppercase "
                        >
                          Email
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs text-center font-bold text-right text-gray-500 uppercase "
                        >
                          IMAP SERVER HOST
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs text-center font-bold text-right text-gray-500 uppercase "
                        >
                         IMAP SERVER PORT
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                          1
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
        </>
      );
 
}

export default IMAPConfig;