$(document).ready(function(){
    var inv_data = [];
    var person = prompt("Please enter your Steam 64bit ID:", "enter here");
    $.getJSON("http://localhost:4000/trackyouritems/" + person, function(data){
        $.each(data.descriptions, function(key, value){
            if(value.marketable == 1 && value.type != "Base Grade Graffiti"){
                inv_data.push(value.market_hash_name);
            }
        });

       // no longer spamming get requests to server 
        $.getJSON('http://localhost:4000/prices', function(data){
            var inv_price ='';
            var price_count = [];
            var sum = 0;
            if(data.status == "fail"){
                alert(data.data.error_message);
            }else{
                // for(i=1; i<arr.length; i++){
                $.each(data.prices, function(i, item){
                    for(k = 0; k<inv_data.length; k++){    
                        if(item.market_hash_name == inv_data[k]){
                            inv_price += '<tr>';
                            inv_price += '<td><img src=' + item.icon_url + ' height=100 width=100></img></td>';
                            inv_price += '<td>' + item.market_hash_name + '</td>';
                            inv_price += '<td>$' + item.price + '</td>';
                            price_count.push(item.price);
                            inv_price += '</tr>';
                        }
                    }
                }); 
                $('#item_table').append(inv_price);
                // still a string must convert to int
                for(j = 0; j < price_count.length; j++){
                    // alert(price_count[j]);
                    sum += parseFloat(price_count[j]);
                }
                $('#tyi').append('$'+sum.toFixed(2)+' USD');
                // alert('Total value of inventory is $' + sum.toFixed(2));
            }


        });

    });
});
