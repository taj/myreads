import React, { Component } from 'react';
import PropTypes from 'prop-types'

class BooksList extends Component {
	static propTypes = {
		books: PropTypes.array.isRequired,
	}

	render() {
		let { books } = this.props
		console.log(books);
		return (
			<div className="list-books-content">
				<div className="bookshelf">
				<h2 className="bookshelf-title">All books</h2>
					<div className="bookshelf-books">
						<ol className="books-grid">
							{books.map((book) => (
								<div className="book" key={book.id}>
									<div className="book-top">
										<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
										<div className="book-shelf-changer">
											<select>
												<option value="none" disabled>Move to...</option>
												<option value="currentlyReading">Currently Reading</option>
												<option value="wantToRead">Want to Read</option>
												<option value="read">Read</option>
												<option value="none">None</option>
											</select>
										</div>
									</div>
									<div className="book-title">{book.title}</div>
									<div className="book-authors">
										{book.authors.map((author) => (
											<p key={author}>{author}</p>
										))}
									</div>
								</div>
							))}
						</ol>
					</div>
				</div>
			</div>
		);
	}
}

export default BooksList;