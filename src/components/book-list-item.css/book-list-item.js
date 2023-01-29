import './book-list-item.css';

const BookListItem = (props) => {
    const { title, author, onDelete, onMarks, marks } = props;

    let classNames = "book-item d-flex align-items-center";
    if (marks) {
        classNames += ' marks';
    }

    return (
        <div className={classNames}>
            <i className="fa-solid fa-check"></i>
            <img src="../book-1.png" alt="book-img" onClick={onMarks}></img>
            <div>
                <p className='title'>{title}</p>
                <p className='author'>{author}</p>
            </div>
            <div className='ms-auto d-flex align-items-center'>
                <button type="button"
                    className="btn-trash"
                    onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
            </div>
        </div>
    );
}

export default BookListItem;
