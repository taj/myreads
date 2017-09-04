import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf';
import PropTypes from 'prop-types';
import * as BooksAPI from './BooksAPI';

class Search extends Component {
	static propTypes = {
		booksFromShelf: PropTypes.array.isRequired,
	}

	constructor(props) {
		super(props);

		this.state = { books: [] };
		
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange = (e) => {
		var value = e.target.value.trim();
		this.searchBooks(value);
	}
	
	searchBooks = (keyword) => {
		if (keyword === '') {
			this.setState({ books: [] });
			return
		}
		BooksAPI.search(keyword, 20).then((result) => {
			console.log(result)
			if (result.error) {
				this.setState({ books: [] });
				return
			}

			let { booksFromShelf } = this.props;

			const foundBooks = result.map((book) => {
				let foundBook = booksFromShelf.find((bookFromShelf) => bookFromShelf.id === book.id);

				if (!foundBook) {
					foundBook = book;
					foundBook.shelf = 'none'
				}

				return foundBook;
			});

			this.setState({
				books: foundBooks
			});
		});
	}

	render() {
		let { onUpdateBookShelf } = this.props
		return (
			<div className="search-books">
				<div className="search-books-bar">
					<Link className="close-search" to='/'>Close</Link>
					<div className="search-books-input-wrapper">
						<input type="text" placeholder="Search by title or author" onChange={this.handleChange}/>
					</div>
				</div>
				<div className="search-books-results">
					<ol className="books-grid">
						<BookShelf books={this.state.books} shelfTitle={""} onUpdateBookShelf={onUpdateBookShelf} />
					</ol>
				</div>
			</div>
		)
	}
}

export default Search;