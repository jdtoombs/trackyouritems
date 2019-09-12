$(document).ready(function(){
    $.getJSON("http://localhost:4000/trackyouritems", function(data){
        var inv_data = '';
        $.each(data.descriptions, function(key, value){
            inv_data += '<tr>';
            inv_data += '<td>' + value.market_hash_name + '<td>';
            inv_data += '</tr>';
        });
        $('#item_table').append(inv_data);
    });

});
