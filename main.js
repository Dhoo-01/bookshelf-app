// Do your work here...
console.log("Hello, world!");

let books = [
  /* {
    id: number | string,
    title: string,
    author: string,
    year: number,
    isCompleted: boolean
  } */
];

const SAVED_EVENT = "saved-book";
const STORAGE_KEY = "BOOKSHELF_APPS";

// fungsi untuk memeriksa apakah browser support local storage
function isStorageExist() {
  if (typeof Storage === undefined) {
    alert("browser kamu tidak mendukung local storage");
    return false;
  }

  return true;
}

// fungsi untuk menyimpan ke local storage
function saveData() {
  if (isStorageExist()) {
    const parsed = JSON.stringify(books);
    localStorage.setItem(STORAGE_KEY, parsed);
    document.dispatchEvent(new Event(SAVED_EVENT));
  }
}

function generateId() {
  return Number(new Date());
}

function generateBookObject(id, title, author, year, isCompleted) {
  return {
    id,
    title,
    author,
    year,
    isCompleted,
  };
}

function addBook() {
  const id = generateId();
  const title = document.getElementById("bookFormTitle").value;
  const author = document.getElementById("bookFormAuthor").value;
  const year = document.getElementById("bookFormYear").value;
  const isCompleted = document.getElementById("bookFormIsComplete").checked;
  // const isCompletedCheck = isCompleted.checked;

  const bookObject = generateBookObject(id, title, author, year, isCompleted);
  books.push(bookObject);

  document.dispatchEvent(new Event(SAVED_EVENT));
}

document.addEventListener("DOMContentLoaded", function () {
  const submitForm = document.getElementById("bookForm");
  submitForm.addEventListener("submit", function (e) {
    e.preventDefault();
    addBook();
    submitForm.reset();
  });
});

document.addEventListener(SAVED_EVENT, function () {
  console.log(books);
  const incompleteBookList = document.getElementById("incompleteBookList");
  incompleteBookList.innerHTML = "";
  
  for (const bookItems of books) {
    const bookElement = makeBook(bookItems);
    incompleteBookList.append(bookElement);
  }
});

function makeBook(bookObject) {
  //pembungkus book
  const bookItem = document.createElement("div");
  bookItem.setAttribute("class", "bookItem");
  bookItem.setAttribute("data-bookid", `${bookObject.id}`);
  bookItem.setAttribute("data-testid", "bookItem");
  
  const bookTitle = document.createElement("h3");
  bookTitle.setAttribute("data-testid", "bookItemTitle");
  bookTitle.innerText = bookObject.title;
  
  const bookAuthor = document.createElement("p");
  bookAuthor.setAttribute("data-testid", "bookItemAuthor");
  bookAuthor.innerText = `Penulis:  ${bookObject.author}`;

  const bookYear = document.createElement("p");
  bookYear.setAttribute("data-testid", "bookItemYear");
  bookYear.innerText = `Tahun: ${bookObject.year}`;
  
  const btnWrap = document.createElement("div");
  
  const completeBtn = document.createElement("button");
  completeBtn.setAttribute("data-testid", "bookItemIsCompleteButton");
  completeBtn.innerText = "Selesai dibaca";
  
  const deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("data-testid", "bookItemDeleteButton");
  deleteBtn.innerText = "Hapus Buku";
  
  const editBtn = document.createElement("button");
  editBtn.setAttribute("data-testid", "bookItemEditButton");
  editBtn.innerText = "Edit Buku";
  
  btnWrap.append(completeBtn, deleteBtn, editBtn);
  
  bookItem.append(bookTitle, bookAuthor, bookYear, btnWrap);
  
  return bookItem;
}
