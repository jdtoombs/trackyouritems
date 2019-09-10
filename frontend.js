function sendRequest() {
    $.ajax({
        url: "http://localhost:4000/trackyouritems",
        type: "GET"
    });
}

function doShit() {
    alert("f js");
}