import React from 'react';

const Cart = () => {
  const products = [
  { id: 3, name: 'Watch', price: '₹899', image: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw34d84041/images/Titan/Catalog/1698KM02_1.jpg?sw=800&sh=800' },
  { id: 4, name: 'Cap', price: '₹999', image: 'https://www.shutterstock.com/image-photo/plain-purple-baseball-cap-isolated-600nw-2540750647.jpg' },
];

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map(product => (
        <div key={product.id} className="bg-white p-4 rounded-lg shadow-md text-center">
          <img src={product.image} alt={product.name} className="mx-auto mb-3 rounded-md" />
          <h3 className="text-xl font-semibold">{product.name}</h3>
          <p className="text-gray-600 mb-3">{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;
