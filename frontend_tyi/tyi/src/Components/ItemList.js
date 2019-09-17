import React from 'react';
import axios from 'axios';

export default class ItemList extends React.Component {
    state = {
        items:[],
        itemsWithPrice: []
    }

    componentDidMount(){
        axios.get('http://localhost:4000/trackyouritems/76561198042252133')
            .then(res =>{
                this.setState({items: res.data.descriptions});

            });
        axios.get('http://localhost:4000/prices')
        .then(res=>{
            this.setState({itemsWithPrice: res.prices});
        });
    }

    getInventoryData = () => {
        let data = [];
        this.state.items.map(item => { 
            if(item.marketable === 1 && item.type !== "Base Grade Graffiti")
                data.push(item.market_hash_name)
        })
        for(let i=0; i<data.length; i++){
            // this.state.itemsWithPrice.map(workplz => { if(workplz.market_hash_name == data[i])
                // return <li>workplz.market_hash_name</li>
            // })
            alert(i)
            //return <h1>{i}</h1>
            
        }

        return <h1>gadsg</h1>
    }
    

    render(){
        
        return <h1>{this.getInventoryData()}</h1>
    }
}