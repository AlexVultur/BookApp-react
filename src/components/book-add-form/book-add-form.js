import { Component } from 'react';
import './book-add-form.css';

class BookAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            author: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.title && this.state.author) {
            this.props.onAdd(this.state.title, this.state.author);
            this.setState({
                title: '',
                author: ''
            })
        }
    }

    render() {
        const { title, author } = this.state;

        return (
            <div className='add-book'>
                <p>New Book</p>
                <form
                    onSubmit={this.onSubmit}>
                    <span>Title</span>
                    <input type="text"
                        className="form-control new-book-label"
                        placeholder="e.q. Charlie and the Chocolate Factory"
                        name="title"
                        value={title}
                        onChange={this.onValueChange} />
                    <span>Author</span>
                    <input type="text"
                        className="form-control new-book-label"
                        placeholder="e.q. Roald Dahl"
                        name="author"
                        value={author}
                        onChange={this.onValueChange} />
                    <button type="submit"
                        className="button-add ">ADD <i className="fa-solid fa-circle-plus ms-2"></i></button>
                </form>
            </div>
        );
    }
}

export default BookAddForm;