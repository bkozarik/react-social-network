import React from 'react';
import s from './ProfileData.module.css';


const ProfileData = (props) => {
    return (
        <div className={s.profile}>
            <div className={s.profile__bg}><img src="https://www.pmeli.ac.id/assets/images/profile-bg.jpg" alt="" /></div>
            <div className={s.profile__item}>
                <div className={s.avatar}>
                    <img src="https://www.w3schools.com/w3images/avatar2.png" alt="" />
                </div>

                <div className={s.profile__data}>
                    <div className={s.data__item, s.name}><p>{props.name}</p></div>
                    <div className={s.data__item}><p>Age: <span>{props.age}</span></p></div>
                    <div className={s.data__item}><p>Date of birth: <span>{props.date}</span></p></div>
                    <div className={s.data__item}><p>City: <span>{props.city}</span> </p></div>
                    <div className={s.data__item}><p>Education: <span>{props.education}</span> </p></div>
                </div>

            </div>
        </div>);
}

export default ProfileData;


