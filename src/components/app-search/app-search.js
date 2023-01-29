import { Component } from 'react';
import './app-search.css';

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        }
    }

    onSearchChange = (e) => {
        const search = e.target.value;
        this.setState({ search: search });
        this.props.onUpdateSearch(search);
    }

    render() {
        return (
            <div className='search'>
                <i className="fas fa-magnifying-glass"></i>
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search"
                    onChange={this.onSearchChange}
                    value={this.state.search} />
            </div>

        );
    }
}

export default SearchPanel;