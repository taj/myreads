import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import BooksList from './BooksList';
import Search from './Search';
import './App.css'

class BooksApp extends React.Component {
	state = {
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
				});
			})
		});
	}

	render() {
		return (
			<Router>
				<div className="app">
					<Route exact path="/" render={() => (
						<BooksList
							books={this.state.books}
							onUpdateBookShelf={this.onUpdateBookShelf} />
					)} />

					<Route exact path="/search" render={() => (
						<Search
							booksFromShelf={this.state.books}
							onUpdateBookShelf={this.onUpdateBookShelf}/>
					)} />
				</div>
			</Router>
		)
	}
}

export default BooksApp
