import React from 'react'
import './card.style.scss'
import Button from '../button/Button'
function Card( props ) {

    const member = props.member

    return (
        <div className='Card'>
            <div className='container'><img src={member.img}/></div>
            <div className='detail'>
                <div className='name'>{member.Name}</div>
                <div className='id'>{member.id}</div>
                <p>{member.detail}</p>
            </div>
            <div className='button-div'><Button/></div>
        </div>
    )
}

export default Card