const ArrayContentEvent = [
  {
    title: "“BEST UNIVERSITY LIBRARY",
    image: "../Images/kgtv1.png",
    content:
      "Thư viện Trường Đại học Công Thương  đã chính thức giành quán quân trong cuộc thi “Best University Library",
  },
  {
    title: "Thư viện 20 tỷ trường Đại học ",
    image: "../Images/IMG_7212.JPG",
    content:
      "Thư viện 20 tỷ trường Đại học Công Thương  TP.HCM - không gian đẹp ngỡ như khách sạn 5 sao",
  },
  {
    title: "Tổ chức Hội thảo Khoa học quốc tế ",
    image: "../Images/Hoithao.jpg",
    content: "Phát triển bền vững trong nông nghiệp và thực phẩm, Lần 1 – 2025",
  },
  {
    title: "“HUIT’s Iconic 2024",
    image: "../Images/iconic.png",
    content:
      " Hai Quán quân lan tỏa tinh thần đoàn kết và khát vọng truyền cảm hứng”",
  },
];
const ArrayContentNotice = [
  {
    title: " THÔNG BÁO: ",
    image: "../Images/nghile.jpg",
    content:
      "Thời gian nghỉ lễ Từ thứ Tư, ngày 30/04/2025 đến hết Chủ nhật, ngày 04/05/2025.",
  },
  {
    title: "ĐĂNG KÝ CTXH SỐ 0078",
    image: "../Images/ctxh1.jpg",
    content: "Hỗ trợ công tác phục vụ bạn đọc tại Thư viện trong tháng 5 ",
  },
  {
    title: "THÔNG BÁO NGHỈ LỄ GIỖ TỔ HÙNG VƯƠNG",
    image: "../Images/gthv.jpg",
    content:
      "Trung tâm Thông tin - Thư viện Trường Đại học Công Thương TP. Hồ Chí Minh  thông báo thời gian nghỉ",
  },
  {
    title: "THÔNG BÁO LỊCH NGHỈ TẾT 2025",
    image: "../Images/tnd.jpg",
    content:
      "Nghỉ Tết: từ ngày 18/01/2025 đến hết ngày 16/02/202 Bắt đầu làm việc trở lại sau Tết: Thứ Hai, 17/02/2025",
  },
];
const ArrayNewBook = [
  {
    title: "Giáo trình toán rời rạc",
    image: "../Images/toaroirac.jpg",
    content: "Giá mua: 50.000 VNĐ <br> Chi phí đảm bao khi mượn: 25.000 VNĐ",
  },
  {
    title: "Giáo trình xác xuất thống kê",
    image: "../Images/xxtk.jpg",
    content: "Giá mua: 50.000 VNĐ <br> Chi phí đảm bao khi mượn: 25.000 VNĐ",
  },
  {
    title: "Giáo trình triết học Mac  - Lenin",
    image: "../Images/maclenin.jpg",
    content: "Giá mua: 60.000 VNĐ <br> Chi phí đảm bao khi mượn: 30.000 VNĐ",
  },
  {
    title: "Giáo trình lập trình hướng đối tượng",
    image: "../Images/oop.png",
    content: "Giá mua: 100.000 VNĐ <br> Chi phí đảm bao khi mượn: 250.000 VNĐ",
  },
];
const ArrayNewMagazine = [
  {
    title: "Tạp chí",
    image: "../Images/tapchichinhtri.jpeg",
    content: "Lý luận chính trị và truyền thông",
  },
  {
    title: "Tạp chí khoa học",
    image: "../Images/tapchicongnghe.jpeg",
    content: "Khoa học và công nghệ Việt Nam",
  },
  {
    title: "Tạp chí Khoa Học",
    image: "../Images/tapchikhoahoc.png",
    content: "Khoa học ",
  },
  {
    title: "Tạp chính sinh  học",
    image: "../Images/tapchisinhhoc.webp",
    content: "Cấu trúc côn trùng",
  },
];
var countRight1 = 0;
function ChangeRight() {
  const container = document.getElementById("ChangeContent1");
  const item = ArrayContentEvent[countRight1];
  container.innerHTML = `<span><strong>${item.title}</strong></span>
  <img class="picturecontent" src="${item.image}">
  <span>${item.content}</span>
  `;
  countRight1 = (countRight1 + 1) % ArrayContentEvent.length;
}
var countLeft1 = 0;
function ChangeLeft() {
  const container = document.getElementById("ChangeContent1");
  const item = ArrayContentEvent[countLeft1];
  container.innerHTML = `<span><strong>${item.title}</strong></span>
  <img class="picturecontent" src="${item.image}">
  <span>${item.content}</span>
  `;
  countLeft1 =
    (countLeft1 - 1 + ArrayContentEvent.length) % ArrayContentEvent.length;
}
var countRight2 = 0;
function ChangeRightNotice() {
  const container = document.getElementById("ChangeNotice");
  const item = ArrayContentNotice[countRight1];
  container.innerHTML = `<span><strong>${item.title}</strong></span>
  <img class="picturecontent" src="${item.image}">
  <span>${item.content}</span>
  `;
  countRight1 = (countRight1 + 1) % ArrayContentNotice.length;
}

var countLeft2 = 0;
function ChangeLefNoice() {
  const container = document.getElementById("ChangeNotice");
  const item = ArrayContentNotice[countLeft2];
  container.innerHTML = `<span><strong>${item.title}</strong></span>
  <img class="picturecontent" src="${item.image}">
  <span>${item.content}</span>
  `;
  countLeft2 =
    (countLeft2 - 1 + ArrayContentNotice.length) % ArrayContentNotice.length;
}
var countRight3 = 0;
function ChangeNewBookRight() {
  const container = document.getElementById("ChangeNewBook");
  const item = ArrayNewBook[countRight3];
  container.innerHTML = `<span><strong>${item.title}</strong></span>
  <img class="picturecontent" src="${item.image}">
  <span>${item.content}</span>
  `;
  countRight3 = (countRight3 + 1) % ArrayNewBook.length;
}

var countLeft3 = 0;
function ChangeNewBookLeft() {
  const container = document.getElementById("ChangeNewBook");
  const item = ArrayNewBook[countLeft3];
  container.innerHTML = `<span><strong>${item.title}</strong></span>
  <img class="picturecontent" src="${item.image}">
  <span>${item.content}</span>
  `;
  countLeft3 = (countLeft3 - 1 + ArrayNewBook.length) % ArrayNewBook.length;
}

var countRight4 = 0;
function ChangeNewMagazineRight() {
  const container = document.getElementById("NewMagazine");
  const item = ArrayNewMagazine[countRight4];
  container.innerHTML = `<span><strong>${item.title}</strong></span>
  <img class="picturecontent" src="${item.image}">
  <span>${item.content}</span>
  `;
  countRight4 = (countRight4 + 1) % ArrayNewMagazine.length;
}

var countLeft4 = 0;
function ChangeNewMagazineLeft() {
  const container = document.getElementById("NewMagazine");
  const item = ArrayNewMagazine[countLeft4];
  container.innerHTML = `<span><strong>${item.title}</strong></span>
  <img class="picturecontent" src="${item.image}">
  <span>${item.content}</span>
  `;
  countLeft4 =
    (countLeft4 - 1 + ArrayNewMagazine.length) % ArrayNewMagazine.length;
}

window.onload = function () {
  ChangeRight();
  ChangeLefNoice();
  ChangeNewBookRight();
  ChangeNewMagazineRight();
};
