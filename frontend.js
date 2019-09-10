function sendRequest() {
    $.ajax({
        url: 'http://localhost:4000/trackyouritems',
        type: 'GET',
        // This is the important part
        xhrFields: {
            withCredentials: true
        },
        // This is the important part
        // data: data,
        success: function (response) {
            console.log("Very nice");
            // handle the response
        },
        error: function (xhr, status) {
            // handle errors
        }
    });
}

function doShit() {
    alert("f js");
}