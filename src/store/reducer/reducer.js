import * as actionTypes from './../action/actionType';
import { updateObject } from '../utility';
let intialState = {
	Current_News: [],
	articles: null,
	rendered: false,
	fetch_failed: false,
	bookmarks: []
};
//initialising the fetched articles
const SetNews = (state, action) => {
	return updateObject(state, {
		articles: action.articles,
		rendered: true,
		fetch_failed: false
	});
};
//Setting likes
const setLike = (state, action) => {
	return updateObject(state, {
		articles: state.articles.map((obj) => (action.url === obj.url ? { ...obj, like: like(obj.like) } : obj))
	});
};
//manipulating the like whne changed
const like = (like) => {
	if (like.liked) {
		return { liked: false, likes: like.likes - 1 };
	} else {
		return { liked: true, likes: like.likes + 1 };
	}
};
//setiing the bookmarks
const setBookmark = (state, action) => {
	return updateObject(state, {
		articles: state.articles.map((obj) => (action.url === obj.url ? { ...obj, bookmark: !obj.bookmark } : obj))
	});
};
//changing  the bookmark array
const bookmarked = (state, action) => {
	return updateObject(state, {
		bookmarks: state.articles.filter((obj) => obj.bookmark === true)
	});
};
//setting the current viewing news
const setCurrentNews = (state, action) => {
	return updateObject(state, {
		Current_News: state.articles.filter((obj) => (action.url === obj.url ? true : false))
	});
};
//error handling on fetch fail
const fetchFailed = (state, action) => {
	return updateObject(state, { fetch_failed: true });
};
const reducer = (state = intialState, action) => {
	switch (action.type) {
		case actionTypes.SET_NEWS:
			return SetNews(state, action);
		case actionTypes.SET_LIKE:
			return setLike(state, action);
		case actionTypes.SET_BOOKMARK:
			return setBookmark(state, action);
		case actionTypes.BOOKMARKED:
			return bookmarked(state, action);
		case actionTypes.SET_CURRENT_NEWS:
			return setCurrentNews(state, action);
		case actionTypes.FETCH_FAILED:
			return fetchFailed(state, action);
		default:
			return state;
	}
};
export default reducer;
