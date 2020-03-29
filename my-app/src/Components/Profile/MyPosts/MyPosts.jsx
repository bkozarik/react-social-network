import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {
    return (
        <div className={s.posts}>
            <h2>{props.title}</h2>
                <div className={s.add__post}>
                    <textarea cols="30" rows="10" placeholder="Post content"></textarea>
                        <div className={s.add__post__right}>
                            <input type="text" placeholder="Post title" />
                            <input type="file" className={s.file} accept="image/*"/>
                            <button>{props.btnText}</button>
                        </div>
                </div>
            <Post name="My Post" like="237" comment="14" share="7" content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, totam recusandae. Aliquam voluptate nisi blanditiis adipisci. Corporis quo deserunt deleniti quia culpa aperiam eligendi exercitationem, quidem nobis veniam dicta repudiandae vitae recusandae unde voluptate eum ullam!"/>
            <Post name="My Post2" like="756" comment="32" share="12" content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, totam recusandae. Aliquam voluptate nisi blanditiis adipisci. Corporis quo deserunt deleniti quia culpa aperiam eligendi exercitationem, quidem nobis veniam dicta repudiandae vitae recusandae unde voluptate eum ullam!"/>
        </div>
    );
}

export default MyPosts;

