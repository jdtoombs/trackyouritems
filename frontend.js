$(document).ready(function(){
    $.getJSON("http://localhost:4000/trackyouritems", function(data){
        var inv_data = '';
        $.each(data.descriptions, function(key, value){
            if(value.marketable == 1 && value.type != "Base Grade Graffiti"){
                inv_data += '<tr>';
                inv_data += '<td>' + value.market_hash_name + '<td>';
                inv_data += '</tr>';
            }
        });
        $('#item_table').append(inv_data);
            // Get data for first column and use it to hit localhost:4000/prices
        var arr = [];
        $("#item_table tr").each(function(){
            arr.push($(this).find("td:first").text());
        });
        for (i=0;i<arr.length - 10;i++) {
            // 10 undefined so added - 10 who knows why lol
            // first cell is blank
            // alert(arr[i+1]);
            $.getJSON("http://localhost:4000/prices/"+ arr[i+1], function(data){
                // set up params on server to handle which get to send to steam itll be =arr[i+1]

            });
        }
    });
});
