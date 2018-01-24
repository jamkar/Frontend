// window.addEventListener("load", displayWelcome, false);

function displayWelcome() {
    window.removeEventListener("load", displayWelcome, false);
    alert("Hello");
}


function onClickFactory(category) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if(this.readyState === 4 && this.status === 200) {
            changeContent(xhr);
        }
    };

    var url = "https://reqres.in/api/" + category;

    return function() {
        xhr.open("GET", url, true);
        xhr.send();
    }
}

var onMotorClick = onClickFactory("products/2");
var onFashionClick = onClickFactory("products/3");


function changeContent(xhr) {
    var responseData = JSON.parse(xhr.responseText);
    document.getElementsByClassName("content")[0].innerHTML = responseData.data.name;

}