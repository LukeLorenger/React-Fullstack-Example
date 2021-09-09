import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these services we provide!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src='images/img-9.jpg'
                        text='Web Design'
                        label='Software Development'
                        path='/services'
                        />
                        <CardItem 
                        src='images/img-2.jpg'
                        text='Game Development'
                        label='Software Development'
                        path='/services'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                        src='images/img-9.jpg'
                        text='Mobile Development'
                        label='Software Development'
                        path='/services'
                        />
                        <CardItem 
                        src='images/img-2.jpg'
                        text='Networking'
                        label='Create & Deploy'
                        path='/services'
                        />
                        <CardItem 
                        src='images/img-2.jpg'
                        text='Consulting'
                        label='Business'
                        path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
