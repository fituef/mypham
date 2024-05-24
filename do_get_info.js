// Get the input field
// Execute a function when the user releases a key on the keyboard
const form = document.forms['submit-to-google-sheet'];
form.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        form.submit();
    }
});

function stepSetSinhVien() {
    var masv = $.trim($("input[name='txtHoTen']").val());
    if (masv == '') {
        alert("Vui lòng điền họ tên");
        return false;
    }
    var hoten = $.trim($("input[name='txtSDT']").val());
    if (hoten == '') {
        alert("Vui lòng điền số điện thoại");
        return false;
    }
    var hoten = $.trim($("input[name='txtDiaChi']").val());
    if (hoten == '') {
        alert("Vui lòng điền địa chỉ");
        return false;
    }
    var phone = $.trim($("select[name='txtSanPham']").val());
    if (phone == '') {
        alert("Vui lòng chọn sản phẩm");
        return false;
    }
    doLoading()
        .then(doSetSinhVien)
        .then(doComplete);
}

function doLoading() {
    return new Promise(function(resolve, reject) {
        $("#btnDoSV").hide();
        resolve();
    });
}

function doSetSinhVien() {
    return new Promise(function(resolve, reject) {
        resolve();
    });
}

function doComplete() {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            $("#btnDoSV").show();
        }, 2000);
        resolve();
    });
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbxYvTjLg3ldR03iWZA0jQKRPXTW1L3LeLM0iwDhiqAhPYJwjAfCTpeDs35TN7JKtOo_kQ/exec';

form.addEventListener('submit', e => {
    debugger;
    e.preventDefault();
    showLoadingIndicator();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => showSuccessMessage(response))
        .catch(error => showErrorMessage(error));
})

function showLoadingIndicator() {
    $("#btnDoSV").hide(); 
}

function showSuccessMessage(response) {
    console.log('Success!', response);
    alert("CẢM ƠN QUÝ KHÁCH. CHÚNG TÔI SẼ LIÊN HỆ SỚM!!!")
    location.reload();
}

function showErrorMessage(error) {
    console.error('Error!', error.message);
    setTimeout(() => {
        alert("LỖI!!!");
    }, 1000);
}
