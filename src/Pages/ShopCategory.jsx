import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
/*import dropdown_img from '../components/Assets/dropdown.png';*/
import Item from '../components/Item/Item';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className='shop-category'>
      
      <div className="shopcategory-products">
        {all_product.map((item, i) => {
          
          if (item.category.toLowerCase().includes(props.category.toLowerCase())) {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />;
          } else {
            return null; 
          }
        })}
      </div>
    </div>
  );
};

export default ShopCategory;
