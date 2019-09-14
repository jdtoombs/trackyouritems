$(document).ready(function(){
    var inv_data = [];
    alert("Ready to load?");
    $.getJSON("http://localhost:4000/trackyouritems", function(data){
        $.each(data.descriptions, function(key, value){
            if(value.marketable == 1 && value.type != "Base Grade Graffiti"){
                inv_data.push(value.market_hash_name);
            }
        });

       // no longer spamming get requests to server 
        $.getJSON('http://localhost:4000/prices', function(data){
            var inv_price ='';
            if(data.status == "fail"){
                alert(data.data.error_message);
            }else{
                // for(i=1; i<arr.length; i++){
            $.each(data.prices, function(i, item){
                for(k = 0; k<inv_data.length; k++){    
                    if(item.market_hash_name == inv_data[k]){
                        inv_price += '<tr>';
                        inv_price += '<td>' + item.market_hash_name + '</td>';
                        inv_price += '<td>' + item.price + '</td>';
                        inv_price += '</tr>';
                    }
                }
            }); 
            $('#item_table').append(inv_price);
                
            }


        });

    });
});
