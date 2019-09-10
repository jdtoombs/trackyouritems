function sendRequest() {
    $.ajax({
        url: 'http://localhost:4000/trackyouritems',
        type: 'GET',
        // This is the important part
        xhrFields: {
            withCredentials: false
        },
        // This is the important part
        // data: data,
        success: function (response) {
            // console.log("Very nice");
            alert("it worjkbked");
            alert(response.body);
            var checkParse = JSON.parse(response);
            // var totalInvCount = checkParse.total_inventory_count;
            alert(checkParse.total_inventory_count);
            console.log(checkParse.total_inventory_count);
            // handle the response
        },
        error: function (xhr, status) {
            // handle errors
        }
    });
}

var request = new XMLHttpRequest()
