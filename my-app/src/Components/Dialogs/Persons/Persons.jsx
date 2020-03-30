import React from 'react';
import './../../../App.css';
import s from './Persons.module.css';
import { NavLink } from "react-router-dom";


const Persons = (props) => {
    return (

                <NavLink to={"/dialogs/" + props.id} className={s.person}>
                    <img src="https://www.w3schools.com/w3images/avatar2.png" alt="" />
                    <p>{props.name}</p>
                </NavLink>

    );
}

export default Persons;
