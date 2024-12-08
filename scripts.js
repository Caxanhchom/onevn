  let cnkd = new Audio("chiecnonkydieu.mp3")

const items = [
  "0 1 1 0 0 0 1 2\nIkeda Shotaro",
  "1 5 1 0 0 0 3 3\nNguyen Phuong Anh",
  "1 5 1 0 0 0 3 5\nLe Anh Tuan",
  "1 5 1 0 0 0 0 1\nLam Thuy Tuong Vy",
  "1 5 1 0 0 0 1 1\nNguyen Van Duy",
  "1 5 1 0 0 0 0 9\nDao Ngoc Trung",
  "1 5 1 0 0 2 6 9\nNguyen Thi Nhung",
  "2 0 0 3 5 3\nTakanori Ikegami",
  "1 5 1 0 0 0 6 2\nVu Thi Thu Thuy",
  "1 5 1 0 0 0 2 8\nNguyen Minh Dung",
  "1 5 1 0 0 0 8 6\nNguyen Anh Tuan",
  "1 5 1 0 0 0 5 5\nBui Dieu Huong",
  "1 5 1 0 0 0 6 3\nVu Thi Huyen",
  "1 5 1 0 0 0 8 2\nChau Quang Khanh",
  "1 5 1 0 0 1 5 1\nDo Thi Ngoc Dung",
  "1 5 1 0 0 0 4 7\nNguyen Van Quang",
  "1 5 1 0 0 0 4 8\nHoang Thu Phuong",
  "1 5 1 0 0 0 6 5\nNguyen Cong Minh",
  "1 5 1 0 0 1 0 5\nTran Thanh Thuy",
  "1 5 1 0 0 0 2 9\nVien Thi Kim Phuong",
  "1 5 1 0 0 1 5 8\nNguyen Thi Thanh Thuy",
  "1 5 1 0 0 1 5 4\nLuu Thu Thao",
  "1 5 1 0 0 1 9 4\nVu Hoang Lan",
  "1 5 1 0 0 2 3 5\nDao Thi Thanh Thao",
  "1 5 1 0 0 2 5 5\nPham Ngoc Huyen",
  "1 5 1 0 0 2 5 8\nDang Minh Hieu",
  "1 5 1 0 0 2 6 8\nPham Huong Linh",
  "1 5 1 0 0 0 5 6\nBui Huu Hoa",
  "1 5 1 0 0 0 1 0\nTran Anh Tuan",
  "1 5 1 0 0 1 5 2\nDo Thi Dung",
  "1 5 1 0 0 2 1 7\nNguyen Thanh Ha",
  "1 5 1 0 0 2 5 6\nDinh Thi Dieu Anh",
  "1 5 1 0 0 2 6 7\nDang Lam Binh",
  "1 5 1 0 0 1 5 9\nNguyen Thi Xuan Thu",
  "1 5 1 0 0 1 3 0\nNguyen Thi Ngoc Uyen",
  "1 5 1 0 0 0 6 4\nBui Kim Dung",
  "1 5 1 0 0 2 6 9\nNguyen Thi Nhung",
  "1 5 1 0 0 2 6 9\nNguyen Thi Nhung",
  "1 5 1 0 0 2 0 1\nNguyen Xuan Dung",
  "1 5 1 0 0 2 1 9\nNguyen Trung Kien",
  "1 5 1 0 0 2 5 2\nTran Dang An",
  "1 5 1 0 0 0 5 9\nTran Dang Thai",
  "1 5 1 0 0 1 0 6\nNguyen Thi Thu Huong",
  "1 5 1 0 0 0 8 1\nDoan Thi Minh Tam",
  "1 5 1 0 0 0 2 4\nDao Manh Nam Hoai",
  "1 5 1 0 0 0 3 0\nVu Thi Lan Chi",
  "1 5 1 0 0 0 4 9\nDong Thi Thu Thao",
  "1 5 1 0 0 1 6 6\nLuong Thi Ngoc Huong",
  "1 5 1 0 0 1 6 5\nNguyen Trong Nhan",
  "1 5 1 0 0 1 3 2\nTran Anh Dung",
  "1 5 1 0 0 0 1 3\nTrieu Thanh Hai",
  "1 5 1 0 0 0 5 0\nNguyen Thi Minh Tam",
  "1 5 1 0 0 1 6 2\nPham Cao Long",
  "1 5 1 0 0 1 3 4\nTong Duy Thanh",
  "1 5 1 0 0 1 5 5\nNguyen Thi Quynh Anh",
  "1 5 1 0 0 0 1 4\nLe Van Chi",
  "1 5 1 0 0 1 6 1\nDo Xuan Quang",
  "1 5 1 0 0 0 3 1\nBui Hong Van",
  "1 5 1 0 0 1 0 7\nHoang Giang",
  "1 5 1 0 0 0 8 3\nPham Huu Duc",
  "1 5 1 0 0 1 3 5\nNguyen Thi Ngoc Anh",
  "1 5 1 0 0 2 6 9\nNguyen Thi Nhung",
  "1 5 1 0 0 1 6 3\nPham Thi Phuong",
  "1 5 1 0 0 1 6 4\nTran Thi Hong Nga",
  "1 5 1 0 0 1 3 6\nVu Van Chien",
  "1 5 1 0 0 1 0 8\nLuu Thi Nhan",
  "1 5 1 0 0 1 5 6\nHoang Thi Ngoc Lien",
  "1 5 1 0 0 1 3 1\nVu Van Sang",
  
];
const doors = document.querySelectorAll(".door");
document.querySelector("#spinner").addEventListener("click", spin);
document.querySelector("#reseter").addEventListener("click", init);

async function spin() {
  init(false, 1, 2);
  let a = new Audio("chiecnonkydieu.mp3")
  setTimeout(function(){ 
    a.play(); 
    }, 1) 
  setTimeout(function(){ 
      a.pause(); 
      }, 9750) 
  for (const door of doors) {
    const boxes = door.querySelector(".boxes");
    const duration = parseInt(boxes.style.transitionDuration);
    boxes.style.transform = "translateY(0)";
    await new Promise((resolve) => setTimeout(resolve, duration * 100));
  }
  
}
function init(firstInit = true, groups = 1, duration = 1) {
  for (const door of doors) {
    if (firstInit) {
      door.dataset.spinned = "0";
    } else if (door.dataset.spinned === "1") {
      return;
    }
    const boxes = door.querySelector(".boxes");
    const boxesClone = boxes.cloneNode(false);
    const pool = ["❓"];
    if (!firstInit) {
      const arr = [];
      for (let n = 0; n < (groups > 0 ? groups : 1); n++) {
        arr.push(...items);
      }
      pool.push(...shuffle(arr));
      boxesClone.addEventListener(
        "transitionstart",
        function () {
          door.dataset.spinned = "1";
          this.querySelectorAll(".box").forEach((box) => {
            box.style.filter = "blur(1px)";
          });
        },
        { once: true }
      );
      boxesClone.addEventListener(
        "transitionend",
        function () {
          this.querySelectorAll(".box").forEach((box, index) => {
            box.style.filter = "blur(0)";
            if (index > 0) this.removeChild(box);
          });
        },
        { once: true }
      );
    }
    for (let i = pool.length - 1; i >= 0; i--) {
      const box = document.createElement("div");
      box.classList.add("box");
      box.style.width = door.clientWidth + "px";
      box.style.height = door.clientHeight + "px";
      box.textContent = pool[i];
      
      boxesClone.appendChild(box);
      
    }
    boxesClone.style.transitionDuration = `9750ms`;
    boxesClone.style.transform = `translateY(-${door.clientHeight * (pool.length - 1)}px)`;
    door.replaceChild(boxesClone, boxes);
  }
}
function shuffle([...arr]) {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr;
}
init();
