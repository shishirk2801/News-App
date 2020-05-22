import React from 'react';
import PostStyle from './Post.module.css';
const Post = (props) => {
	let likeColor = 'white';
	if (props.like.liked) {
		likeColor = 'red';
	}
	let bookmarkColor = 'white';
	if (props.bookmark) {
		bookmarkColor = 'black';
	}
	return (
		<div className={PostStyle.Post}>
			<div onClick={props.openNews} className={PostStyle.wrap}>
				<img src={props.image} alt="images" />
				<p>{props.title}</p>
			</div>
			<div className={PostStyle.Icons}>
				<i onClick={props.liked} className={'fas fa-heart ' + PostStyle.heart} style={{ color: likeColor }} />
				<span>{props.like.likes} Likes</span>
				<i
					onClick={props.bookmarked}
					className={'fas fa-bookmark ' + PostStyle.bookmark}
					style={{ color: bookmarkColor }}
				/>
			</div>
		</div>
	);
};
export default Post;
