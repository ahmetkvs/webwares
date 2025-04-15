function AdditionalInformationTab() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold mb-4">Additional Information</h3>
      <p className="text-sm text-gray-600">
        Please note that this is a general guideline only. Sizing may vary
        depending on the specific style and fit. We recommend checking your
        chest measurement.
      </p>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 text-sm">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th
                scope="col"
                className="py-2 px-3 text-left font-medium tracking-wider border-r border-gray-500"
              >
                SIZE
              </th>
              <th
                scope="col"
                className="py-2 px-3 text-center font-medium tracking-wider border-r border-gray-500"
              >
                XS
              </th>
              <th
                scope="col"
                className="py-2 px-3 text-center font-medium tracking-wider border-r border-gray-500"
              >
                S
              </th>
              <th
                scope="col"
                className="py-2 px-3 text-center font-medium tracking-wider border-r border-gray-500"
              >
                M
              </th>
              <th
                scope="col"
                className="py-2 px-3 text-center font-medium tracking-wider border-r border-gray-500"
              >
                L
              </th>
              <th
                scope="col"
                className="py-2 px-3 text-center font-medium tracking-wider border-r border-gray-500"
              >
                XL
              </th>
              <th
                scope="col"
                className="py-2 px-3 text-center font-medium tracking-wider"
              >
                XXL
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="py-2 px-3 font-medium text-gray-700 border-r border-gray-300">
                EU, FR, ES
              </td>
              <td className="py-2 px-3 text-center text-gray-600 border-r border-gray-300">
                32
              </td>
              <td className="py-2 px-3 text-center text-gray-600 border-r border-gray-300">
                34
              </td>
              <td className="py-2 px-3 text-center text-gray-600 border-r border-gray-300">
                36
              </td>
              <td className="py-2 px-3 text-center text-gray-600 border-r border-gray-300">
                38
              </td>
              <td className="py-2 px-3 text-center text-gray-600 border-r border-gray-300">
                40
              </td>
              <td className="py-2 px-3 text-center text-gray-600">42</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="py-2 px-3 font-medium text-gray-700 border-r border-gray-300">
                Chest (cm)
              </td>
              <td className="py-2 px-3 text-center text-gray-600 border-r border-gray-300">
                82-84.5
              </td>
              <td className="py-2 px-3 text-center text-gray-600 border-r border-gray-300">
                85-87.5
              </td>
              <td className="py-2 px-3 text-center text-gray-600 border-r border-gray-300">
                88-90
              </td>
              <td className="py-2 px-3 text-center text-gray-600 border-r border-gray-300">
                90.5-92.5
              </td>
              <td className="py-2 px-3 text-center text-gray-600 border-r border-gray-300">
                93-95
              </td>
              <td className="py-2 px-3 text-center text-gray-600">96.5-99</td>
            </tr>
            <tr>
              <td className="py-2 px-3 font-medium text-gray-700 border-r border-gray-300">
                Waist (cm)
              </td>
              <td className="py-2 px-3 text-center text-gray-600 border-r border-gray-300">
                61-63.5
              </td>
              <td className="py-2 px-3 text-center text-gray-600 border-r border-gray-300">
                64-67
              </td>
              <td className="py-2 px-3 text-center text-gray-600 border-r border-gray-300">
                68-70
              </td>
              <td className="py-2 px-3 text-center text-gray-600 border-r border-gray-300">
                70-72.5
              </td>
              <td className="py-2 px-3 text-center text-gray-600 border-r border-gray-300">
                73-75
              </td>
              <td className="py-2 px-3 text-center text-gray-600">76-78</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-xs text-gray-500 mt-4">
        Measurements are approximate. Refer to specific product details if
        available.
      </p>
    </div>
  );
}

export default AdditionalInformationTab;
