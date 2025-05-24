function showFormAdd() {
  document.getElementById("add").style.display = "block";
}
function closeFormAdd() {
  document.getElementById("add").style.display = "none";
}
function showFormUpdate() {
  document.getElementById("add").style.display = "block";

  var inputs = document.getElementById("position");
  if (inputs) {
    var valueInput = inputs.value;
    var inputsDisableclass = document.getElementById("class");
    var inputDisableFaculty = document.getElementById("faculty");

    if (valueInput == "ExternalReaders") {
      if (inputsDisableclass) inputsDisableclass.disabled = true;
      if (inputDisableFaculty) inputDisableFaculty.disabled = true;
    } else if (valueInput == "Lecturer") {
      if (inputsDisableclass) inputsDisableclass.disabled = true;
      if (inputDisableFaculty) inputDisableFaculty.disabled = false;
    } else {
      if (inputsDisableclass) inputsDisableclass.disabled = false;
      if (inputDisableFaculty) inputDisableFaculty.disabled = false;
    }
  }
}
function NoticeDelete() {
  alert("Xóa thành công");
}
function Information() {
  document.getElementById("add").style.display = "block";
  document.getElementById("title").innerText = "Thông tin độc giả";
}
