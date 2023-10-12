// lấy phần tử button
let element_btn = document.querySelector("button");

// lấy phần tử hình ảnh
let element_img = document.querySelector(`img[src="bugatti.jpg"]`);

console.log("Phần tử button lấy được:\n", element_btn);

console.log("Phần tử img lấy được:\n", element_img);

// thuộc tính trạng thái
let status = true;

element_btn.addEventListener("click", function(event){
    // khi click button
    // thì trạng thái sẽ bị thay đổi
    status = !status;

    if (status == true) {
        element_img.style.visibility = "visible";
    }
    else if (status == false) {
        element_img.style.visibility = "hidden";
    }
});