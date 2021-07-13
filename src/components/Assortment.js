import '../styles/Assortment.scss'
import {useState } from 'react'
import assortment from '../assort_response.json'

export default function Assortment() {
    const [response] = useState(assortment);
    
    
    return (
        <div className="assortment">
        {/* <div className="category">
          <div className="name">Заморозка</div>
          <div className="product">
            <img className="preview" alt="" src="https://static.tildacdn.com/tild6539-3663-4635-b864-653531303138/photo.jpg"/>
            <div className="descriptions">
                <div className="name">Пельмени</div>
                <div className="price">300₽</div>
            </div>
          </div>
        </div> */}
        {console.log(response)}
        </div>
    )
}
