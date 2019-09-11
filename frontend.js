$(document).ready(function(){
    $.getJSON("http://localhost:4000/trackyouritems", function(data){
        var inv_data = '';
        var checkParse = JSON.parse(data);
        alert(checkParse);
        $.each(data, function(key, value){
            inv_data += '<tr>';
            inv_data += '<td>' + value.total_inventory_count + '<td>';
            // inv_data += '<td>' + value.documents[key].market_hash_name + '<td>';
            inv_data += '</tr>';
        });
        $('item_table').append(inv_data);
    });

});

// var request = new XMLHttpRequest();
// request.open('GET', 'http://localhost:4000/trackyouritems', true);

// request.onload = function () {
//     // Begin accessing JSON data here
//     if (request.status>= 200 && request.status < 400) {

    
//         var checkParse = JSON.parse(this.response);
//         console.log(checkParse.total_inventory_count);

//         var i;
//         var wstream = fs.createWriteStream('myOutput.txt');
//         var output = document.getElementById('output');
//         output.innerHTML = checkParse.total_inventory_count;
//         for(i in checkParse.descriptions){
    
//             console.log(checkParse.descriptions[i].market_hash_name);
//             // wstream.write(checkParse.descriptions[i].market_hash_name + '\n');
//         }
//     }else {
//         console.error("ERROR");
//     }  
// }
  
//   // Send request
//   request.send();
