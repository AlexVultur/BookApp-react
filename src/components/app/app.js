import { Component } from 'react';
import './app.css';
import AppSearch from '../app-search/app-search';
import BooksList from '../book-list/book-list';
import BookAddForm from '../book-add-form/book-add-form';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { title: 'Goodnight Moon', author: 'Margaret Brown', marks: false, id: 1 },
                { title: 'The Very Hungry Caterpillar', author: 'Eric Carle', marks: false, id: 2 }
            ],
            search: ''
        }
        this.maxId = 3;
    }

    addItem = (title, author) => {
        const newItem = {
            title,
            author,
            marks: false,
            id: this.maxId++
        }
        this.setState(({ data }) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    deleteItem = (id) => {
        this.setState(({ data }) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    onMarks = (id) => {
        this.setState(({ data }) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return { ...item, marks: !item.marks }
                }
                return item;
            })
        }))
    }

    searchEmp = (items, search) => {
        if (search.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.title.indexOf(search) > -1 || item.author.indexOf(search) > -1
        })
    }

    onUpdateSearch = (search) => {
        this.setState({ search: search });
    }

    render() {
        const { data, search } = this.state;
        const visibleData = this.searchEmp(data, search);

        return (
            <div className="app">
                <div className='app-header'>
                    <h5>book<span>app</span></h5>
                    <AppSearch onUpdateSearch={this.onUpdateSearch} />
                </div>
                <div className='list-book'>
                    <BooksList
                        data={visibleData}
                        onDelete={this.deleteItem}
                        onMarks={this.onMarks} />
                </div>
                <div className='book-form'>
                    <BookAddForm onAdd={this.addItem} />
                </div>

            </div>
        );
    }
}

export default App;