class Book {
  #title;
  #author;
  #price;
  #stock;
  #year;

  constructor(title, author, price, stock, year) {
    this.#title = title;
    this.#author = author;
    this.#price = price;
    this.#stock = stock;
    this.#year = year;
  }

  getInfo() {
    return {
      title: this.#title,
      author: this.#author,
      price: this.#price,
      year: this.#year,
      stock: !this.#stock ? 'No hay ejemplares disponibles' : this.#stock
    }
  }

  // setters
  set setStock(stock) {
    this.#stock = stock;
  }

  set setYear(year) {
    this.#year = year;
  }
}

export default Book;
