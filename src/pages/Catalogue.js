import React from 'react';

const products = [
  { id: 1, name: 'T-Shirt', price: '₹499', width:"200px",image: 'https://resanskrit.com/cdn/shop/files/Sanatani_orange_front-hanger.jpg?v=1711644028' ,width:'200px'},
  { id: 2, name: 'Sneakers', price: '₹1,299',width:"200px", image: 'https://assets.levelshoes.com/cdn-cgi/image/width=800,height=1120,quality=85,format=jpeg/media/catalog/product/m/1/m1000egr-901_1.jpg?ts=20250509030858' },
  { id: 3, name: 'Watch', price: '₹899', image: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw34d84041/images/Titan/Catalog/1698KM02_1.jpg?sw=800&sh=800' },
  { id: 4, name: 'Cap', price: '₹999', image: 'https://www.shutterstock.com/image-photo/plain-purple-baseball-cap-isolated-600nw-2540750647.jpg' },
  { id: 5, name: 'Dress', price: '₹1500', image: 'https://m.media-amazon.com/images/I/81aeFg1-00L._AC_UY350_.jpg'},
  { id: 6, name: 'Teddy bear', price: '₹700', image: 'https://m.media-amazon.com/images/I/41XgdHttb8L._AC_UF1000,1000_QL80_.jpg' },
  { id: 7, name: 'Krishna idol', price: '₹600', image: 'https://productimages.withfloats.com/tile/65f15715ca2de9dc47429387.jpg' },
  { id: 8, name: 'Formal shirt', price: '₹999', image: 'https://assets.ajio.com/medias/sys_master/root/20231012/cJFi/6528297eddf779151938200b/-473Wx593H-469514981-darkblue-MODEL.jpg' },
  { id: 9, name: 'Kajal', price: '₹399', image: 'https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/resize-w:540/1112998/N6DJyTnIft-1112998_1.jpg' }
];

const Catalogue = () => {
  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map(product => (
        <div key={product.id} className="bg-white p-4 rounded-lg shadow-md text-center">
          <img src={product.image} alt={product.name} className="mx-auto mb-3 rounded-md" />
          <h3 className="text-xl font-semibold">{product.name}</h3>
          <p className="text-gray-600 mb-3">{product.price}</p>
          <button className="bg-blue-500 px-4 py-2 text-white rounded hover:bg-blue-600">Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Catalogue;
