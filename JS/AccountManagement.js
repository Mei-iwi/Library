function changeItems() {
  // Đúng name là "selectItems" (không phải "role")
  let selected = document.querySelector('input[name="selectItems"]:checked');

  if (selected && selected.value === "reader") {
    document.getElementById("title").innerHTML =
      "<h2>Thông tin tài khoản độc giả</h2>";
  } else {
    document.getElementById("title").innerHTML =
      "<h2>Thông tin tài khoản nhân viên</h2>";
  }
}
