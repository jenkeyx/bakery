import '../styles/Assortment.scss'
import {useState } from 'react'
import datafile from '../assort_response.json'
import ItemCard from './ItemCard';

export default function Assortment() {
    const [response] = useState(datafile.categories);
    
    return (
        <div className="assortment">
          <div className="category">
            <div className="category-name" >
              {response[0].categoryName}
            </div>
            <div className="items">
              {
                response.map((category)=>
                  (category.categoryName === 'Заморозка') &&
                  category.products.map((item)=>
                  <ItemCard item={item}/>
                  )
               )
              }
            </div>
          </div>  
          <div className="bake">
          </div>
        </div>
    )
}
