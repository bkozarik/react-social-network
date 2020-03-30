import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileData from './profileData/ProfileData';


let profileData = [
  { name: "Bohdan Kozarik", age: "15", date: "10 may", city: "Khust", education: "School 6" }
];
let ProfileElem = profileData.map((p) => {
  return (
    <ProfileData name={p.name} age={p.age} date={p.date} city={p.city} education={p.education} />
  );
});

const Profile = () => {
  return (
    <div>

      {ProfileElem}
      <MyPosts />

    </div>);
}

export default Profile;

