// install 'notp', 'thirty-two' packages first
// need to figure out how to do below in client side js
// var totp = require('notp').totp;
// var base32 = require('thirty-two');
// var codeName = totp.gen(base32.decode('SECRET_SHOWN_BY_BITSKINS')).toString;

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
        // $.getJSON('https://bitskins.com/api/v1/get_all_item_prices/?api_key=*********&code=' + codeName + '&app_id=730', function(data){
        //     for(i=1; i<arr.length; i++){
        //         $.each(data, function(i, item){
        //             if(item.market_hash_name == a[i]){
        //                 // alert(item.lowest_price);
        //                 inv_price += '<tr>';
        //                 inv_price += '<td>' + item.lowest_price + '</td>';
        //                 inv_price += '</tr>';
        //             }
        //         });
        //         $('item_table').append(inv_price);
        //     }

        // });

    });
});
