
import './AddBook.css'
import {useState} from 'react'
import {v4 as uuidv4 } from 'uuid'

const someBooksList =[
  {
    id:uuidv4(),
    title:"Introduction to Dream Land",
    author:"Bhagat Singh",
    imageUrl:"https://www.targetacademy.in/wp-content/uploads/2019/04/519BiBsrJPL.jpg"

  },
  {
    id:uuidv4(),
    title:"The Wine makers Wife",
    author:"Kristin Harmel",
    imageUrl:"https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781982112301/the-winemakers-wife-9781982112301_xlg.jpg"

  },
  {
    id:uuidv4(),
    title:"The Hiding Places",
    author:"Katherine Webb",
    imageUrl:"https://katherinewebbauthor.com/upld/tt/timthumb.php?src=upld/articles/Hiding_Places_HB_s_457f4e1a45d3.jpg&q=88&w=700&h=700&zc=1"

  }

]

const AddBook = () =>{
  const [booksList,setBooksList] = useState(someBooksList)
  const [title,setTitle] = useState("")
  const [author,setAuthor] = useState("")
  const [imageUrl,setImageUrl] = useState("")

  const onAddBooks = (event) =>{
    event.preventDefault()
    
    const newBook ={
      title,
      author,
      imageUrl
    }
    setBooksList([...booksList,newBook])
  }

  return (
    <div className='form-books-container'>
<div class="login-form">
 <form onSubmit={onAddBooks} className='book-form'>
  <label className='label-name'  htmlFor="title" >BOOK TITLE</label>
  <br/>
  <input className='input-name' onChange={(event) =>setTitle(event.target.value)} type="text" name="title" id ="title"placeholder='Enter Book Title'/>
  <br/>
  <label className='label-name' htmlFor="author" >AUTHOR NAME</label>
  <input className='input-name' onChange={(event) => setAuthor(event.target.value)} type="text" name="author" id ="author"placeholder='Enter Book Author'/>
  <br/>
  <label className='label-name'  htmlFor="image" >IMAGE URL</label>
  <br/>
  <input className='input-name' onChange={(event) => setImageUrl(event.target.value)} type="text" name="image" id ="image" placeholder='Enter Book Url'/>
  <br/>
  <button class="btn" type="submit">Add Book</button>
 </form>
</div>
<div className='books-container'>
  {booksList.map((book,i) =>(
<li className='new-book-container' key={i}>
  <img src={book.imageUrl} alt={book.title} className='image' />
  <h1 className='title'> {book.title}</h1> 
  <h1 className='title'>Author: <span style={{color:"#99A98F" }} className='author'>{book.author}</span></h1> 

</li>
  ))}


</div>
</div>
  )
}
    
    


export default AddBook;