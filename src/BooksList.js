import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf';
import PropTypes from 'prop-types';

class BooksList extends Component {
	static propTypes = {
		books: PropTypes.array.isRequired,
	}

	render() {
		let { books, onUpdateBookShelf } = this.props
		let booksToDisplay = [];
		booksToDisplay[0] = {
			"shelfTitle" : "Currently Reading",
			"books": books.filter((book) => book.shelf === "currentlyReading"),
		}
		booksToDisplay[1] = {
			"shelfTitle" : "Want to Read",
			"books": books.filter((book) => book.shelf === "wantToRead"),
		}
		booksToDisplay[2] = {
			"shelfTitle" : "Read",
			"books": books.filter((book) => book.shelf === "read"),
		}

		return (
			<div className="list-books">
				<div className="list-books-title">
					<h1>MyReads</h1>
				</div>
				<div className="list-books-content">
					{booksToDisplay.map((books) => (
						<BookShelf key={books['shelfTitle']} books={books["books"]} shelfTitle={books['shelfTitle']} onUpdateBookShelf={onUpdateBookShelf} />
					))}
				</div>
				<div className="open-search">
					<Link to='/search'>Add Contact</Link>
				</div>
			</div>
		);
	}
}

export default BooksList;