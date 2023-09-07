 import './book.css'

export default function Books({book}){
     const {name,price}=book;
    return (
        <div className='book'>
             <h3>book Name: {name}</h3>
             <p>book price: {price}</p>
        </div>
    )
}