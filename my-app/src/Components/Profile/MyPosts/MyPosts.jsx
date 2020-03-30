import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';

let postData = [
    {
        name: "My Post",
        like: "756",
        comment: "32",
        share: "12",
        content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, totam recusandae. Aliquam voluptate nisi blanditiis adipisci. Corporis quo deserunt deleniti quia culpa aperiam eligendi exercitationem, quidem nobis veniam dicta repudiandae vitae recusandae unde voluptate eum ullam!"
    },
    {
        name: "My Post2",
        like: "756",
        comment: "32",
        share: "12",
        content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, totam recusandae. Aliquam voluptate nisi blanditiis adipisci. Corporis quo deserunt deleniti quia culpa aperiam eligendi exercitationem, quidem nobis veniam dicta repudiandae vitae recusandae unde voluptate eum ullam!"
    }
];
let postElement = postData.map((post) => {
    return (
        <Post name={post.name} like={post.like} comment={post.comment} share={post.share} content={post.content} />
    )
});

const MyPosts = (props) => {
    return (
        <div className={s.posts}>
            <h2>{props.title}</h2>
            <div className={s.add__post}>
                <textarea cols="30" rows="10" placeholder="Post content"></textarea>
                <div className={s.add__post__right}>
                    <input type="text" placeholder="Post title" />
                    <input type="file" className={s.file} accept="image/*" />
                    <button>Add post</button>
                </div>
            </div>

            {postElement}

        </div>
    );
}

export default MyPosts;

