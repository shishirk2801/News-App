import { connect } from 'react-redux';
import React, { Component } from 'react';
import Post from '../../components/post/Post';
import * as NEWS from './../../store/action/action';
import PostsStyle from './NewsPosts.module.css';
import Spinner from './../../components/spinner/spinner';
import Error from './../../components/Error/Error';
import Aux from './../../HOC/AUX';

class NewsPost extends Component {
	componentDidMount() {
		if (!this.props.rendered) {
			this.props.initNEWS();
		}
	}
	OpenNews = (url) => {
		this.props.currentNews(url);
		this.props.history.push('/news');
	};
	onLiked = (e, url) => {
		this.props.like(url);
	};
	onBookmarked = (e, url) => {
		this.props.bookmark(url);
		this.props.bookmarked();
	};

	render() {
		let Posts = <Spinner />;
		if (this.props.articles && !this.props.fetch_failed) {
			Posts = this.props.articles.map((post) => (
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

		return (
			<Aux>
				{this.props.failed ? (
					<Error />
				) : (
					<div className={PostsStyle.Page}>
						<h1>Today's news </h1>
						<div className={PostsStyle.Posts}>{Posts}</div>
					</div>
				)}
			</Aux>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		articles: state.articles,
		rendered: state.rendered,
		failed: state.fetch_failed
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		initNEWS: () => dispatch(NEWS.initNEWS()),
		like: (url) => dispatch(NEWS.setlike(url)),
		bookmark: (url) => dispatch(NEWS.setBookmark(url)),
		currentNews: (url) => dispatch(NEWS.currentNews(url)),
		bookmarked: () => dispatch(NEWS.bookmarked())
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(NewsPost);
