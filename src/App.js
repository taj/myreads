import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import BooksList from './BooksList';
import Search from './Search';
import './App.css'

class BooksApp extends React.Component {
	state = {
		/**
		 * TODO: Instead of using this state variable to keep track of which page
		 * we're on, use the URL in the browser's address bar. This will ensure that
		 * users can use the browser's back and forward buttons to navigate between
		 * pages, as well as provide a good URL they can bookmark and share.
		 */
		books: [],
	}

	componentDidMount() {
		BooksAPI.getAll().then((books) => {
			this.setState({ books: books });
		})
	}

	onUpdateBookShelf = (book, newShelf) => {
		BooksAPI.update(book, newShelf).then(() => {
			BooksAPI.getAll().then(books => {
				this.setState({
					books: books
				})
			})
		});
	}

	render() {
		// BooksAPI.search('ring', 2).then((dontKnow) => {
		// 	debugger;
		// });
		return (
			<Router>
				<div className="app">
					<Route exact path="/" render={() => (
						<BooksList
							books={this.state.books}
							onUpdateBookShelf={this.onUpdateBookShelf} />
					)} />

					<Route exact path="/search" render={() => (
						<Search />
					)} />
				</div>
			</Router>
		)
	}
}

export default BooksApp
