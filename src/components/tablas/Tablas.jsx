import React from "react";

const Tablas = () => {
  return (
    <div>
      <table className="border-collapse border border-black-500">
        <thead>
          <tr className="bg-pink-700 text-white">
            <th className="border border-black-500 px-4 py-2">PLANES HOGAR</th>
            <th className="border border-black-500 px-4 py-2">Mb</th>
            <th className="border border-black-500 px-4 py-2">Costo Mensual</th>
            <th className="border border-black-500 px-4 py-2">
              Precio $ x Mega
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-100">
            <td className="border border-black-500 px-4 py-2">55</td>
            <td className="border border-black-500 px-4 py-2">55</td>
            <td className="border border-black-500 px-4 py-2">$55</td>
            <td className="border border-black-500 px-4 py-2">$1</td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border border-black-500 px-4 py-2">55</td>
            <td className="border border-black-500 px-4 py-2">55</td>
            <td className="border border-black-500 px-4 py-2">$55</td>
            <td className="border border-black-500 px-4 py-2">$1</td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border border-black-500 px-4 py-2">55</td>
            <td className="border border-black-500 px-4 py-2">55</td>
            <td className="border border-black-500 px-4 py-2">$55</td>
            <td className="border border-black-500 px-4 py-2">$1</td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border border-black-500 px-4 py-2">55</td>
            <td className="border border-black-500 px-4 py-2">55</td>
            <td className="border border-black-500 px-4 py-2">$55</td>
            <td className="border border-black-500 px-4 py-2">$1</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Tablas;
