// Do your work here...
console.log('Hello, world!');

  /*{ wajib ditampilkan di html
    data-bookid: id,
    data-testid: {
      bookItem: item,
      bookItemTitle: title,
      bookItemAuthor: author,
      bookItemYear: year,
      bookItemIsCompleteButton: isComplete,
      bookItemDeleteButton: delete,
      bookItemEditButton: edit
    }
  } */

let Books = 
[
  /* {
    id: String | Number,
    title: String,
    author: String,
    year: Number,
    isComplete: Boolean
  } */
];

const SAVED_EVENT = 'saved-bookshelf';
const STORAGE_KEY = 'BOOKSHELF_APP';

//periksa browser support untuk web storage
function isStorageExist() {
  // body...
  if (typeof (Storage) === undefined) {
    alert("browser kamu tidak mendukung local storage");
    return false;
  }
  return true;
}

document.addEventListener(SAVED_EVENT, function () {
  console.log(localStorage.getItem(STORAGE_KEY));
})

//fungsi untuk simpan ke local storage
function saveData() {
  if (isStorageExist()) {
    const parsed = JSON.stringify(Books);
    localStorage.setItem(STORAGE_KEY, parsed);
    document.dispatchEvent(new Event(SAVED_EVENT));
  }
}
