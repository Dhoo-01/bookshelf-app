const modal = document.getElementById("modal");
const openBtn = document.getElementById("openModal");
const closeBtn = document.querySelector(".close");

openBtn.onclick = () => {
  modal.style.display = "block";
};

closeBtn.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (e) => {
  if (e.target === modal) modal.style.display = "none";
};

document.getElementById("bookForm").onsubmit = function (e) {
  e.preventDefault();
  alert("Buku berhasil ditambahkan!");
  modal.style.display = "none";
};

console.log("miawwww")
