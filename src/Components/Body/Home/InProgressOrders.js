import React , { Component } from 'react';
import { WithAppState } from '../../Context/AppState.js';
import InProgressOrderView from './InProgressOrderView.js';


class InProgressOrders extends Component {

    constructor(props){
        super(props);

        this.state = {
            orders : null,
            IsCallAndSchedule : false,
            IsReviewProprosed : false,
            IsAwaitingResponse : false,
            IsOpenOrders : false
        }

        this.OnFilterSelected = this.OnFilterSelected.bind(this);
    }

    OnFilterSelected(Key){
        switch(Key){
            case "CallAndSchedule":
                this.setState((prevState) => ({IsCallAndSchedule : !prevState.IsCallAndSchedule}));
                break;
            case "ReviewProprosed":
                this.setState((prevState) => ({IsReviewProprosed : !prevState.IsReviewProprosed}));
                break;
            case "AwaitingResponse":
                this.setState((prevState) => ({IsAwaitingResponse : !prevState.IsAwaitingResponse}));
                break;
            case "OpenOrders":
                this.setState((prevState) => ({IsOpenOrders : !prevState.IsOpenOrders}));
                break;
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

            let IsOpenOrdersCount =0, IsCallAndScheduleCount=0, IsReviewProprosedCount=0, IsAwaitingResponseCount =0;

            let RenderedOrders = this.props.orders.map((order,key) => { 
                
                    if(order.BucketID == 4){
                        IsCallAndScheduleCount = IsCallAndScheduleCount + 1;
                        if(this.state.IsCallAndSchedule)
                            return (<InProgressOrderView refresh={this.props.refresh} key={key} order={order} />);
                    }

                    if(order.BucketID == 3){
                        IsReviewProprosedCount = IsReviewProprosedCount + 1;
                        if(this.state.IsReviewProprosed)
                            return (<InProgressOrderView refresh={this.props.refresh} key={key} order={order} />);
                    }

                    if(order.BucketID == 2){
                        IsAwaitingResponseCount = IsAwaitingResponseCount + 1;
                        if(this.state.IsAwaitingResponse)
                            return (<InProgressOrderView refresh={this.props.refresh} key={key} order={order} />);
                    }

                    if(order.BucketID == 1){
                        IsOpenOrdersCount = IsOpenOrdersCount + 1;
                        if(this.state.IsOpenOrders)
                            return (<InProgressOrderView refresh={this.props.refresh} key={key} order={order} />);
                    }
                
                    if(!this.state.IsAwaitingResponse && !this.state.IsOpenOrders && !this.state.IsReviewProprosed && !this.state.IsCallAndSchedule)
                        return (<InProgressOrderView refresh={this.props.refresh} key={key} order={order} />);
                    
                    return "";
            })
            

            return (
                <React.Fragment>
                    <div className="row  margin-zero vp-inprogress-filter">
                        <div className="col-md-12">
                                <div className="vp-inprogress-filter-tab">
                                    <div className={ this.state.IsCallAndSchedule ? "vp-inprogress-filter-btn vp-inprogress-filter-btn-active" : "vp-inprogress-filter-btn" } onClick={ () => this.OnFilterSelected("CallAndSchedule") }>
                                        In-Schedule <span className="badge filter-nav-badge-inprogress">{ IsCallAndScheduleCount }</span> 
                                    </div>
                                </div>
                                <div className="vp-inprogress-filter-tab">
                                    <div className={ this.state.IsReviewProprosed ? "vp-inprogress-filter-btn vp-inprogress-filter-btn-active" : "vp-inprogress-filter-btn" } onClick={ () => this.OnFilterSelected("ReviewProprosed") }>
                                        Approve Dates <span className="badge filter-nav-badge-inprogress">{ IsReviewProprosedCount }</span> 
                                    </div>
                                </div>
                                <div className="vp-inprogress-filter-tab">
                                    <div className={ this.state.IsAwaitingResponse ? "vp-inprogress-filter-btn vp-inprogress-filter-btn-active " : "vp-inprogress-filter-btn" } onClick={ () => this.OnFilterSelected("AwaitingResponse") }>
                                        Awaiting Response <span className="badge filter-nav-badge-inprogress">{ IsAwaitingResponseCount }</span>
                                    </div>
                                </div>
                                <div className="vp-inprogress-filter-tab">
                                    <div className={ this.state.IsOpenOrders ? "vp-inprogress-filter-btn vp-inprogress-filter-btn-active" : "vp-inprogress-filter-btn" } onClick={ () => this.OnFilterSelected("OpenOrders") }>
                                        Open Orders <span className="badge filter-nav-badge-inprogress">{ IsOpenOrdersCount }</span>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className="row margin-zero margin-top-medium">
                        <div className="col-md-12">
                            {   
                                RenderedOrders
                            }
                        </div>
                    </div>
                </React.Fragment>
            );
        }
    }
}

export default InProgressOrders = WithAppState(InProgressOrders);