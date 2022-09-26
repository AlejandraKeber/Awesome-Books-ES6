// Import modules
import Book from './modules/book.js';
import Store from './modules/store.js';
import UI from './modules/ui.js';
import { DateTime } from './node_modules/luxon/build/es6/luxon.js';

// Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

document.querySelector('#book-form').addEventListener('submit', (e) => {
    e.preventDefault();
    // Get values from form
    const title = document.querySelector('#Title').value;
    const author = document.querySelector('#Author').value;
    // Generate random number per seconds
    const id = Date.now().toString();

    // Instantiate book
    const book = new Book(title, author, id);

    // Add book to UI
    UI.addBookToList(book);
    // Add book to store
    Store.addBook(book);
    // clear fields
    UI.clearFields();
});

// Event: Remove a book
document.querySelector('.main').addEventListener('click', (e) => {
    const id = document.querySelector('.id');
    // Remove book from UI
    UI.deleteBook(e.target);
    // Remove from store
    Store.removeBook(id.textContent);
});

// Display date using Luxon library
document.getElementById('date-time').innerHTML = DateTime.now();

// Show each section as a Single Page Application
const list = document.getElementById('list');
const book = document.getElementById('book');
const contact = document.getElementById('contact');

list.addEventListener('click', () => {
    document.querySelector('.book-app').style.display = 'flex';
    document.querySelector('.book-add').style.display = 'none';
    document.querySelector('.contact').style.display = 'none';
});

book.addEventListener('click', () => {
    document.querySelector('.book-app').style.display = 'none';
    document.querySelector('.book-add').style.display = 'flex';
    document.querySelector('.contact').style.display = 'none';
});

contact.addEventListener('click', () => {
    document.querySelector('.book-app').style.display = 'none';
    document.querySelector('.book-add').style.display = 'none';
    document.querySelector('.contact').style.display = 'flex';
});