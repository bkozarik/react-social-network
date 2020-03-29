import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
    return (
    <div className={s.post__item}>
        <h3 className={s.post__title}>{props.name}</h3>
        <div className={s.post__img}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Post-It.jpg" alt=""/>
        </div>
        <div className={s.post__action}>
    <div className={s.like}><img src="https://img.icons8.com/material-outlined/96/000000/facebook-like.png"/>{props.like}</div>
            <div className={s.comment}><img src="https://img.icons8.com/windows/96/000000/comment-medical.png"/>{props.comment}</div>
            <div className={s.share}><img src="https://img.icons8.com/small/96/000000/share.png"/>{props.share}</div>
        </div>
        <p className={s.post__content}>
            {props.content}
        </p>
    </div>
    );
}

export default Post;

