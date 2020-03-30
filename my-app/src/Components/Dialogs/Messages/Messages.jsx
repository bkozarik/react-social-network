import React from 'react';
import './../../../App.css';
import s from './Messages.module.css';


const Messages = (props) => {
    return (

        <div className={s.messages}>
            <div className={s.message}>
                <img src="https://www.w3schools.com/w3images/avatar2.png" alt="" />
                <p>{props.message}</p>
            </div>
        </div>


    );
}

export default Messages;
