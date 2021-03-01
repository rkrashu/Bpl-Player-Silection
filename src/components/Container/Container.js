import React from 'react';
import './container.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

const Container = (props) => {
    const {name, age, nationality,salary,picture} = props.player
    const handleClick = props.handleClick
    return (
        <div className='player-container'>
            <div className='image-container'>
                <img src={picture} alt=""/>
                <h6>Price: <FontAwesomeIcon icon={faDollarSign} /> {salary}</h6>
            </div>
            <div className='info-container'>
            <h6 className='player-name'>{name}</h6>
            <p>Age: {age}</p>
            <h6>Nationality: {nationality}</h6>
            <button className='add-player' onClick={()=>handleClick(props.player)}> <FontAwesomeIcon icon={faUserPlus} /> Add To Team</button>
            </div>
        </div>
    );
};

export default Container;