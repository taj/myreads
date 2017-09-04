import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Book extends Component {
	constructor(props) {
		super(props);
		this.state = {shelf: this.props.shelf, onUpdateBookShelf: this.props.onUpdateBookShelf};

		this.handleChange = this.handleChange.bind(this);
	}

	static propTypes = {
		book: PropTypes.object.isRequired,
	}

	handleChange(e) {
		var value = e.target.value.trim();
		this.props.onUpdateBookShelf(this.props.book, value);
	}

	render() {
		let { book } = this.props;
		let authors = [];
		let shelf = 'none';
		if (book.authors) {
			authors = book.authors;
		}

		return (
			<div className="book">
				<div className="book-top">
					<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
					<div className="book-shelf-changer">
						<select value={book.shelf} onChange={this.handleChange}>
							<option value="" disabled>Move to...</option>
							<option value="currentlyReading">Currently Reading</option>
							<option value="wantToRead">Want to Read</option>
							<option value="read">Read</option>
							<option value="none">None</option>
						</select>
					</div>
				</div>
				<div className="book-title">{book.title}</div>
				<div className="book-authors">
					{authors.map((author) => (
						<span key={author}>{author}</span>
					))}
				</div>
			</div>
		);
	}
}

export default Book;