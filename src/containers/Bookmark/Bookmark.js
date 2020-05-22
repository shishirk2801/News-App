import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from '../../components/post/Post';
import * as NEWS from './../../store/action/action';
import NewsPoststyle from './../NewsPosts/NewsPosts.module.css';
class Bookmark extends Component {
	onLiked = (e, url) => {
		this.props.like(url);
	};
	onBookmarked = (e, url) => {
		this.props.bookmark(url);
		this.props.bookmarked();
	};
	OpenNews = (url) => {
		this.props.currentNews(url);
		this.props.history.push('/news');
	};
	render() {
		console.log(this.props.bookmarks);

		let showBookmarked;
		if (this.props.bookmarks === null) {
			showBookmarked = 'You have not bookmarked  yet';
		} else {
			showBookmarked = this.props.bookmarks.map((post) => (
				<Post
					openNews={() => this.OpenNews(post.url)}
					key={post.urlToImage}
					image={post.urlToImage}
					title={post.title}
					like={post.like}
					bookmark={post.bookmark}
					liked={(e) => this.onLiked(e, post.url)}
					bookmarked={(e) => this.onBookmarked(e, post.url)}
				/>
			));
		}
		if (this.props.bookmarks.length === 0) {
			showBookmarked = 'You have not bookmarked  yet';
		}
		return (
			<div>
				<h1>
					<u>Your Bookmark:</u>
				</h1>

				<div className={NewsPoststyle.Posts}>{showBookmarked}</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		articles: state.articles,
		bookmarks: state.bookmarks
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		like: (url) => dispatch(NEWS.setlike(url)),
		bookmark: (url) => dispatch(NEWS.setBookmark(url)),
		currentNews: (url) => dispatch(NEWS.currentNews(url)),
		bookmarked: () => dispatch(NEWS.bookmarked())
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(Bookmark);
