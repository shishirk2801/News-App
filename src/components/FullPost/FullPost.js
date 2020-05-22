import React from 'react';
import { connect } from 'react-redux';
import NewsStyle from './FullPost.module.css';

const News = (props) => {
	let News = props.article ? (
		<div>
			<span onClick={props.history.goBack} id={NewsStyle.Close} className="material-icons">
				close
			</span>
			<h1>{props.article.title}</h1>
			<img src={props.article.urlToImage} alt=" displayed" />
			<p>{props.article.content}</p>
			<p>Published by:{props.article.author}</p>
			<a href={props.article.url} target="blank">
				Open Article
			</a>
		</div>
	) : (
		<div>No articles selected</div>
	);

	return <div className={NewsStyle.News}>{News}</div>;
};
const mapStateToProps = (state) => {
	return {
		article: state.Current_News[0]
	};
};
export default connect(mapStateToProps)(News);
