export default function CartItems({ cart, handleRemoveItem }) {
  return (
    <>
      {/* Desktop version - hidden on mobile */}
      <table className="hidden sm:table min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Product
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Quantity
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Price
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Total
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            ></th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {cart.map((item) => (
            <tr key={item.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-20 w-20 object-contain"
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {item.title}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {item.quantity}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                ${item.price}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                ${(item.price * item.quantity).toFixed(2)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="text-red-600 hover:text-red-900"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Mobile version - hidden on desktop */}
      <div className="sm:hidden space-y-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex flex-col bg-white p-4 border-b border-gray-200"
          >
            <div className="flex gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="h-24 w-24 object-contain"
              />
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-medium text-gray-900 truncate">
                  {item.title}
                </h3>
                <div className="mt-2 space-y-1">
                  <p className="text-sm text-gray-500">
                    Quantity: {item.quantity}
                  </p>
                  <p className="text-sm text-gray-500">Price: ${item.price}</p>
                  <p className="text-sm font-medium text-gray-900">
                    Total: ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
            <button
              onClick={() => handleRemoveItem(item.id)}
              className="mt-4 text-red-600 text-sm font-medium hover:text-red-900"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
