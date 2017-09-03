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
		books: [],
		currentlyReadingBooks: [],
		wantToReadBooks: [],
		readBooks: []
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
		return (
			<div className="app">
				<div className="list-books">
					<div className="list-books-title">
						<h1>MyReads</h1>
					</div>
					<div className="list-books-content">
						<BooksList books={this.state.books} onUpdateBookShelf={this.onUpdateBookShelf} />
					</div>
				</div>
			</div>
		)
	}
}

export default BooksApp
