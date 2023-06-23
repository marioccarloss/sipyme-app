export default function SkeletonTable() {
  return (
    <div className="relative border-t-[#e5ebed] overflow-x-auto shadow-xl rounded-lg">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-sm text-gray-900 bg-[#f5f5fa]">
          <tr className="bg-gray-200 ">
            {Array.from({ length: 7 }, (_, index) => (
              <th
                key={`header-${index}`}
                className="text-[#8484a7] px-6 py-4 border-b font-bold"
              >
                <div className="h-2 bg-gray-100 rounded p-3 animate-pulse" />
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="table__body">
          {Array.from({ length: 10 }, (_, rowIndex) => (
            <tr key={rowIndex} className="bg-white border-b hover:bg-gray-50">
              {Array.from({ length: 7 }, (__, columnIndex) => (
                <td key={columnIndex} className="px-6 py-4">
                  <div className="h-4 bg-gray-200 rounded p-3 animate-pulse" />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
