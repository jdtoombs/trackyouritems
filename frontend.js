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
       // starts at index 1 first one is undefined
       // no longer spamming get requests to server 
        $.getJSON('http://localhost:4000/prices', function(data){
            if(data.status == "fail"){
                alert(data.data.error_message);
            }else{
                for(i=1; i<arr.length; i++){
                    $.each(data.prices, function(i, item){
                        alert(item);
                        if(item.market_hash_name == a[i]){
                            // alert(item.lowest_price);
                            // inv_price += '<tr>';
                            // inv_price += '<td>' + item.price + '</td>';
                            // inv_price += '</tr>';
                        }
                    });
                    //$('item_table').append(inv_price);
                }
            }


        });

    });
});
