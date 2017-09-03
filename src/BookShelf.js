import React, { Component } from 'react';
import Book from './Book';
import PropTypes from 'prop-types';

class BookShelf extends Component {
	static propTypes = {
		books: PropTypes.array.isRequired,
		shelfTitle: PropTypes.string.isRequired,
	}

	render() {
		let { books, shelfTitle, onUpdateBookShelf } = this.props;

		return (
			<div className="bookshelf">
				<h2 className="bookshelf-title">{shelfTitle}</h2>
				<div className="bookshelf-books">
					<ol className="books-grid">
						{books.map((book) => (
							<li key={book.id}>
								<Book book={book} onUpdateBookShelf={onUpdateBookShelf} />
							</li>
						))}
					</ol>
				</div>
			</div>
		)
	}
}

export default BookShelf;