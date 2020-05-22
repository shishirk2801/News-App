import * as actionTypes from './actionType';
//Action to map the fetched article to the state
export const setNEWS = (articles) => {
	return {
		type: actionTypes.SET_NEWS,
		articles: articles.map((obj) => ({
			...obj,
			like: {
				likes: Math.floor(Math.random() * (1000 - 0 + 1)) + 0,
				liked: false
			},
			bookmark: false
		}))
	};
};
//Action to map the like to the given article using url as id
export const setlike = (url) => {
	return {
		type: actionTypes.SET_LIKE,
		url: url
	};
};
//Action to map the Bookmark to the given article using url as id
export const setBookmark = (url) => {
	return {
		type: actionTypes.SET_BOOKMARK,
		url: url
	};
};
//Updating the bookmark
export const bookmarked = () => {
	return {
		type: actionTypes.BOOKMARKED
	};
};
//Setting the current news to be read using url
export const currentNews = (url) => {
	return {
		type: actionTypes.SET_CURRENT_NEWS,
		url: url
	};
};
//Action to set the failed state from the fetch being failed
export const fetchFailed = () => {
	return {
		type: actionTypes.FETCH_FAILED
	};
};
//Fetching the news from the API and ahndling the fetch error
export const initNEWS = () => {
	return (dispatch) => {
		//let apiKey = 'apiKey=ce47fc92d23d432ba1b5a9ace0c8c154';
		//cors-anywhere is a proxy server
		var url =
			'https://cors-anywhere.herokuapp.com/' +
			'http://newsapi.org/v2/top-headlines?' +
			'country=us&' +
			'apiKey=ce47fc92d23d432ba1b5a9ace0c8c154';
		fetch(url)
			.then((response) => {
				return response.json();
			})
			.then((data) => dispatch(setNEWS(data.articles)))
			.catch((error) => {
				dispatch(fetchFailed());
			});
	};
};
