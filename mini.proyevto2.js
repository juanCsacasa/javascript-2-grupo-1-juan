import Bookstore from './modules/Bookstore.js';
import Book from './modules/Book.js';
import Comic from './modules/Comic.js';

(function () {
  const bookstore1 = new Bookstore('Libreria 1', 'Calle 1');
  const sidebar = document.getElementById('sidebar');
  const menu = ['Show Books', 'Show Comics', 'Add book', 'Add Comic'];

  const initialize = () => {
    printBookstoreName();
    displayMenu();
    menuFunctionality();
  }
  
  const printBookstoreName = () => {
    sidebar.insertAdjacentHTML(
      'afterbegin',
      `<h2 class="title">
      <img src="icon/7693324_telegram_social media_logo_messenger_icon.svg" class="icon">
      ${bookstore1.getName}
      </h2>`
    )
  }
  
  const createMenu = () => {
    let menuHtml = '';
    menu.forEach((elem, index) => {
      menuHtml += `<li class="menu-item"> 
      <img src="icon/1343436_add_circle_download_plus_icon.svg" alt="add" class= "icon">
        <button id="${index}">${elem}</button>
      </li>`
    });
  
    return menuHtml;
  }
  
  const displayMenu = () => {
    sidebar.insertAdjacentHTML(
      'beforeend',
      `<ul class="menu">${createMenu()}</ul>`
    );
  }
  
  const menuFunctionality = () => {
    const items = document.querySelectorAll('.menu-item');
    items.forEach((item) => {
      item.addEventListener('click', (event) => {
        // e.stopPropagation(); // esto es para evitar que el evento se extienda/propague al los elementos padres
        event.preventDefault(); // esto es para evitar que se recargue la página cuando se hace click en el elemento, en este al elemeto li del menu
  
        const { id } = event.target
  
        switch (id) {
          case '0':
            showBooks();
            break;
          case '1':
            showComics();
            break;
          case '2':
            addBooks();
            break;
          case '3':
            addComics();
            break;
          default:
            console.log('That option does not exist');
            break;
        }
      });
    });
  }
  
  
  const showBooks = () => {
    console.log('Show Books');
    console.log(bookstore1.getBooks)
  }
  
  const showComics = () => {
    console.log('Show Comics');
    console.log(bookstore1.getComics)
  }
  
  const addBooks = () => {
    const title = prompt('Title');
    const author = prompt('Author');
    const price = prompt('Price');
    const stock = prompt('Stock');
    const year = prompt('Year');
  
    if (title && author && !isNaN(price) && !isNaN(stock) && !isNaN(year)) {
      const book = new Book(title, author, price, stock, year);
      
      const existingBook = bookstore1.getBooks.find(b => b.title === title);
      if (existingBook) {
        alert('El libro ya existe en la lista.');
        return;
      }
  
      bookstore1.setBooks = book.getInfo();
    } else {
      alert('Debe ingresar valores válidos.');
    }
  
  }
  
  const addComics = () => {
    console.log('add comics');

    const title = prompt('title')
    const author = prompt('author')
    const price = prompt('price')
    const stock = prompt('stock')
    const year = prompt('year')
    const illustrator = prompt('illustrator')
    const publisher = prompt('publisher')
    const volume = prompt('volume')

    if (title && author && !isNaN(price) && !isNaN(stock) && !isNaN(year) && illustrator && publisher && !isNaN(volume)) {
      const comic = new Comic(title, author, price, stock, year, illustrator, publisher, volume);

      const existingComic = bookstore1.getComics.find(c => c.title === title);
      if (existingComic) {
        alert('El cómic ya existe en la lista.');
        return;
      }
      bookstore1.setComics = comic.getInfo();
    } else {
      alert('Debe ingresar valores válidos.');
    }
  
  }
  
  initialize();
})();