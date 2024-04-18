import React from "react";

const Tablas = () => {
  return (
    <>
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
          <tr className="bg-gray-100 font-bold">
            <td className="border border-black-500 px-4 py-2">SUPER Hogar 10 Mb</td>
            <td className="border border-black-500 px-4 py-2">10</td>
            <td className="border border-black-500 px-4 py-2">$20</td>
            <td className="border border-black-500 px-4 py-2">$2</td>
          </tr>
          <tr className="bg-gray-100 font-bold">
            <td className="border border-black-500 px-4 py-2">ULTRA Hogar 14 Mb</td>
            <td className="border border-black-500 px-4 py-2">14</td>
            <td className="border border-black-500 px-4 py-2">$30</td>
            <td className="border border-black-500 px-4 py-2">$2.14</td>
          </tr>
          <tr className="bg-gray-100 font-bold">
            <td className="border border-black-500 px-4 py-2">ULTRA Hogar 17 Mb</td>
            <td className="border border-black-500 px-4 py-2">17</td>
            <td className="border border-black-500 px-4 py-2">$35</td>
            <td className="border border-black-500 px-4 py-2">$2.06</td>
          </tr>
          <tr className="bg-gray-100 font-bold">
            <td className="border border-black-500 px-4 py-2">ULTRA Hogar 20 Mb</td>
            <td className="border border-black-500 px-4 py-2">20</td>
            <td className="border border-black-500 px-4 py-2">$40</td>
            <td className="border border-black-500 px-4 py-2">$2</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Tablas;
