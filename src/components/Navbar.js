import React, {useContext} from 'react'
import { BookContext } from '../contexts/BookContext'

const Navbar = () => {

const {books}=useContext(BookContext);



  return (
    <div className='navbar'>
        <h1>Kitap Listesi</h1>
        <p>Şuan {books.length} adet kitap bulunmaktadır.</p>
    </div>
  )
}

export default Navbar