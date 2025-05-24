function showTableDocument() {
  const doc = document.getElementById("Documents");
  const clas = document.getElementById("classrooms");
  const btn1 = document.getElementById("doc");
  const btn2 = document.getElementById("clas");
  doc.style.display = "block";
  clas.style.display = "none";
  btn1.style.backgroundColor = "white";
  btn2.style.backgroundColor = "gray";
}
function showTableClassrooms() {
  const doc = document.getElementById("Documents");
  const clas = document.getElementById("classrooms");
  const btn1 = document.getElementById("doc");
  const btn2 = document.getElementById("clas");
  doc.style.display = "none";
  clas.style.display = "block";
  btn1.style.backgroundColor = "gray";
  btn2.style.backgroundColor = "white";
}
window.onload = function () {
  const doc = document.getElementById("Documents");
  const clas = document.getElementById("classrooms");
  const btn1 = document.getElementById("doc");
  const btn2 = document.getElementById("clas");
  doc.style.display = "block";
  clas.style.display = "none";
  btn1.style.backgroundColor = "white";
  btn2.style.backgroundColor = "gray";
};
function showInfoDocument() {
  var doc = document.getElementById("requestDocuments");
  doc.style.display = "block";
}
function showInfoClassrooms() {
  var clas = document.getElementById("requestClassrooms");
  clas.style.display = "block";
}
