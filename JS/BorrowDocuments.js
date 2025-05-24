const documents = [
  ["1001238501", "Giáo trình C++", "NXB Giáo Dục", "50,000", "10"],
  ["1001238502", "Lập trình Web", "NXB Khoa Học Kỹ Thuật", "60,000", "5"],
  ["1001238503", "Hướng Dẫn SQL", "NXB Tin Học", "45,000", "12"],
  ["1001238504", "Lập trình Java", "NXB Sư Phạm", "55,000", "8"],
  ["1001238505", "Cơ sở dữ liệu", "NXB Kinh Tế", "50,000", "15"],
  ["1001238506", "Lập trình Python", "NXB Công Nghệ", "55,000", "7"],
  ["1001238507", "Học máy", "NXB Khoa Học", "70,000", "6"],
  ["1001238508", "Kỹ thuật phần mềm", "NXB Kỹ Thuật", "65,000", "9"],
  ["1001238509", "Hệ quản trị cơ sở dữ liệu", "NXB Giáo Dục", "50,000", "20"],
];

function fillTable() {
  let searchValue = document
    .querySelector(".SearchDocuments")
    .value.toLowerCase();
  let tableBody = document.querySelector(".TableInfo tbody");
  tableBody.innerHTML = "";

  let filteredDocs = documents.filter((doc) => {
    return doc.some((item) => item.toLowerCase().includes(searchValue));
  });

  filteredDocs.forEach((doc, index) => {
    let row = document.createElement("tr");

    let sttCell = document.createElement("td");
    sttCell.textContent = index + 1;
    row.appendChild(sttCell);

    doc.forEach((data) => {
      let cell = document.createElement("td");
      cell.textContent = data;
      row.appendChild(cell);
    });

    tableBody.appendChild(row);
  });

  ClickEvent();
}
function ClickEvent() {
  $(".TableInfo tbody tr").click(function () {
    var STT = $(this).find("td:eq(0)").text();
    var MaTL = $(this).find("td:eq(1)").text();
    var TenTL = $(this).find("td:eq(2)").text();
    var NXB = $(this).find("td:eq(3)").text();
    var ChiPhi = $(this).find("td:eq(4)").text();
    var SL = $(this).find("td:eq(5)").text();
    $("#MaTL").val(MaTL);
    $("#SL").val(1);
  });
}
