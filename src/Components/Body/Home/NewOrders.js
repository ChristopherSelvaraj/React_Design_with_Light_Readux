import React , { Component } from 'react';
import { WithAppState } from '../../Context/AppState.js';
import NewOrderView from './NewOrderView.js';


class NewOrders extends Component {

    constructor(props){
        super(props);

        this.state = {
            orders : null
        }
    }

    componentDidUpdate() {
        window.scrollTo(0, 0);
    }


    render(){
        if(this.props.orders == null)
        {
            return (
                <div className="row margin-zero margin-top-medium">
                    <div className="col-md-12">
                        Loading...
                    </div>
                </div>
            )    
        }
        else if(this.props.orders.length == 0){
            return (
                <div className="row margin-zero">
                    <div className="col-md-12">
                        No Item to Display.
                    </div>
                </div>
            );
        }
        else{
            return (
                <div className="row margin-zero margin-top-medium">
                    <div className="col-md-12">
                        {   
                            this.props.orders.map((order,key) => <NewOrderView refresh={this.props.refresh} key={key} order={order} />)
                        }
                    </div>
                </div>
            );
        }
    }
}

export default NewOrders = WithAppState(NewOrders);