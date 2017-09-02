import React from 'react'
import * as BooksAPI from './BooksAPI'
import BooksList from './BooksList'
import './App.css'

class BooksApp extends React.Component {
	state = {
		/**
		 * TODO: Instead of using this state variable to keep track of which page
		 * we're on, use the URL in the browser's address bar. This will ensure that
		 * users can use the browser's back and forward buttons to navigate between
		 * pages, as well as provide a good URL they can bookmark and share.
		 */
		showSearchPage: true,
		currentlyReadingBooks: [],
		wantToReadBooks: [],
		readBooks: []
	}

	componentDidMount() {
		BooksAPI.getAll().then((books) => {
			this.setState({ currentlyReadingBooks: books.filter((book) => book.shelf == "currentlyReading" ) })
			this.setState({ wantToReadBooks: books.filter((book) => book.shelf == "wantToRead" ) })
			this.setState({ readBooks: books.filter((book) => book.shelf == "read" ) })
		})
	}

	render() {
		return (
			<div className="app">
				<div className="list-books-title">
					<h1>MyReads</h1>
				</div>
				<div className="list-books-content">
					<BooksList books={this.state.currentlyReadingBooks} listTitle="Currently Reading" />
					<BooksList books={this.state.wantToReadBooks} listTitle="Want to Read" />
					<BooksList books={this.state.readBooks} listTitle="Read" />
				</div>
			</div>
		)
	}
}

export default BooksApp
