import React from 'react'
import "../styles/ItemCard.scss"
import { useState } from 'react'
import imgPlaceholder from "/Users/sergejmhitaran/VSCodeProjects/bakery/src/res/stubs/img_placeholder.png"

export default function ItemCard(props) {
    return (
        <div className="item-card">
            <Preview/>
            <div className="name"> 
                {props.item.name}
            </div>
            <div className="price"> 
                {props.item.price + "₽"}
            </div>
        </div>
    )
}

function Preview(props) {
    const [src] = useState(imgPlaceholder)


    return (
        <div className="preview">
            <div className="image">
                <img src={src} alt={props.alt}/>
            </div>
            <div className="extra-info">
                {props.extraInfo}
            </div>
        </div>
    )
}

