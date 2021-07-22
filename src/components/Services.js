import React from 'react'
import '../styles/Services.scss'
import createOrderBg from '../res/ui/create_order_bg.svg'
import historyBg from '../res/ui/history_bg.svg'

export default function Services() {
    return (
        <div className="services">
            <div className="item">
                <div className="name">Создать заказ</div>
                <img className="card" src={createOrderBg} alt="Сделать новый заказ"/>
            </div>
            <div className="item">
                <div className="name">История заказов</div>
                <img className="card" src={historyBg} alt="История заказов"/>
            </div>
        </div>
    )
}
