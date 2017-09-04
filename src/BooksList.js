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
		let currentlyReadingBooks = books.filter((book) => book.shelf === "currentlyReading");
		let wantToReadBooks = books.filter((book) => book.shelf === "wantToRead");
		let readBooks = books.filter((book) => book.shelf === "read");

		return (
			<div className="list-books">
				<div className="list-books-title">
					<h1>MyReads</h1>
				</div>
				<div className="list-books-content">
					<BookShelf books={currentlyReadingBooks} shelfTitle={"Currently Reading"} onUpdateBookShelf={onUpdateBookShelf} />
					<BookShelf books={wantToReadBooks} shelfTitle={"Want to Read"} onUpdateBookShelf={onUpdateBookShelf} />
					<BookShelf books={readBooks} shelfTitle={"Read"} onUpdateBookShelf={onUpdateBookShelf} />
				</div>
				<div className="open-search">
					<Link to='/search'>Add Contact</Link>
				</div>
			</div>
		);
	}
}

export default BooksList;