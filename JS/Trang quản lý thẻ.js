let readers = [];
let currentId = 1;
const today = new Date("2025-05-16"); // Ngày hiện tại: 16/05/2025

function addReader() {
  const cardId = document.getElementById("cardId").value;
  const name = document.getElementById("name").value;
  const address = document.getElementById("address").value;
  const role = document.getElementById("role").value;
  const status = document.getElementById("status").value;

  if (readers.some((reader) => reader.cardId === cardId)) {
    alert("Mã số thẻ đã tồn tại! Vui lòng sử dụng mã số khác.");
    return;
  }

  if (cardId && name && address && role) {
    const expiryDate = new Date(today);
    expiryDate.setFullYear(expiryDate.getFullYear() + 1);
    readers.push({
      id: currentId++,
      cardId,
      name,
      address,
      role,
      status,
      expiryDate,
    });
    updateTable();
    clearForm();
  } else {
    alert("Vui lòng nhập đầy đủ thông tin!");
  }
}

function deleteReader() {
  const cardId = document.getElementById("cardId").value;
  readers = readers.filter((reader) => reader.cardId !== cardId);
  updateTable();
  clearForm();
}

function updateReader() {
  const cardId = document.getElementById("cardId").value;
  const reader = readers.find((r) => r.cardId === cardId);
  if (reader) {
    reader.name = document.getElementById("name").value;
    reader.address = document.getElementById("address").value;
    reader.role = document.getElementById("role").value;
    reader.status = document.getElementById("status").value;
    updateTable();
    clearForm();
  } else {
    alert("Không tìm thấy độc giả với mã số thẻ này!");
  }
}

function extendReader() {
  const cardId = document.getElementById("cardId").value;
  const extendYears = parseInt(document.getElementById("extendYears").value);
  const reader = readers.find((r) => r.cardId === cardId);

  if (!reader) {
    alert("Không tìm thấy độc giả với mã số thẻ này!");
    return;
  }

  if (isNaN(extendYears) || extendYears < 1) {
    alert("Số năm gia hạn phải là số nguyên dương!");
    return;
  }

  const currentExpiryDate = new Date(reader.expiryDate);
  const isExpired = currentExpiryDate < today;
  const baseDate = isExpired ? today : currentExpiryDate;
  const newExpiryDate = new Date(baseDate);
  newExpiryDate.setFullYear(newExpiryDate.getFullYear() + extendYears);

  reader.expiryDate = newExpiryDate;
  reader.status = "active";
  updateTable();
  clearForm();
  alert(
    `Thẻ của độc giả ${
      reader.name
    } đã được gia hạn ${extendYears} năm. Ngày hết hạn mới: ${newExpiryDate.toLocaleDateString(
      "vi-VN"
    )}. Trạng thái: Hoạt động.`
  );
}

function exit() {
  window.location.reload();
}

function updateTable() {
  const tbody = document.querySelector("#readerTable tbody");
  tbody.innerHTML = "";
  readers.forEach((reader) => {
    const row = document.createElement("tr");
    row.innerHTML = `
                    <td>${reader.id}</td>
                    <td>${reader.cardId}</td>
                    <td>${reader.name}</td>
                    <td>${reader.address}</td>
                    <td>${reader.role}</td>
                    <td>${
                      reader.status === "active"
                        ? "Hoạt động"
                        : "Không hoạt động"
                    }</td>
                    <td>${
                      reader.expiryDate
                        ? reader.expiryDate.toLocaleDateString("vi-VN")
                        : ""
                    }</td>
                `;
    tbody.appendChild(row);
  });
}

function clearForm() {
  document.getElementById("cardId").value = "";
  document.getElementById("name").value = "";
  document.getElementById("address").value = "";
  document.getElementById("role").value = "";
  document.getElementById("status").value = "active";
  document.getElementById("extendYears").value = "1";
}
