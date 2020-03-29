import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';


const Profile = () => {
  return (
      <div>
      <div className={s.profile}>
      <div className={s.profile__bg}><img src="https://www.pmeli.ac.id/assets/images/profile-bg.jpg" alt="" /></div>
      <div className={s.profile__item}>
        <div className={s.avatar}>
          <img src="https://www.w3schools.com/w3images/avatar2.png" alt="" />
        </div>

        <div className={s.profile__data}>
          <div className={s.data__item, s.name}><p>Bohdan Kozarik</p></div>
            <div className={s.data__item}><p>Date of birth: <span>10 may</span></p></div>
          <div className={s.data__item}><p>City: <span>Khust</span> </p></div>
          <div className={s.data__item}><p>Education: <span>School 6</span> </p></div>
          <div className={s.data__item}><p>Web Site: <span><a href="https://www.devthem.xyz">https://www.devthem.xyz</a></span> </p></div>
        </div>

      </div>
    </div>

    <MyPosts btnText="Добавить пост"/>

  </div>);
}

export default Profile;

