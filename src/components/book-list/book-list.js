import BookListItem from '../book-list-item.css/book-list-item';
import './book-list.css';

const BooksList = ({data, onDelete, onMarks}) => {
    
    const elements = data.map(item => {
        const {id, ...itemProps} = item;

        return (
            <BookListItem 
            key={id} 
            {...itemProps}
            onDelete={() => onDelete(id)}
            onMarks={() => onMarks(id)}/>
        )
    })

    return (
        <div className="app-list">
             <p className='m-0'>Books</p>
            {elements}
        </div>
    );
}

export default BooksList;