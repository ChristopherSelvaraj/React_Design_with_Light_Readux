import React , { Component } from 'react';
import FilterNav from './FilterNav.js';
import { WithAppState } from '../../Context/AppState';
import TabView from '../../UI-Util/TabView/TabView';
import TabHeader from '../../UI-Util/TabView/TabHeader';
import TabHeaderLinks from '../../UI-Util/TabView/TabHeaderLinks';
import TabBody from '../../UI-Util/TabView/TabBody';
import TabBodyContent from '../../UI-Util/TabView/TabBodyContent';
import NewOrders from './NewOrders';
import CorrectionOrders from './CorrectionOrders';
import InProgressOrders from './InProgressOrders';
import { NewOrderAPI, InProgressAPI, CorrectionAPI, OnHoldAPI } from '../../Constants/OrderAPI';


class Home extends Component {
    constructor(props){
        super(props);

        this.state = {
            NewOrder : null,
            NewOrderCount : 0,
            ProgressOrder : null,
            ProgressOrderCount : 0,
            CorrectionOrder : null,
            CorrectionOrderCount : 0,
            HoldOrderCount : 0
        };

        this.GetNewOrders =  this.GetNewOrders.bind(this);
        this.GetProgressOrders =  this.GetProgressOrders.bind(this);
        this.GetCorrectionOrders =  this.GetCorrectionOrders.bind(this);
        this.RefreshOrderWithLoader = this.RefreshOrderWithLoader.bind(this);
        this.RefreshOrder = this.RefreshOrder.bind(this);
    }

    componentDidMount(){
        this.RefreshOrderWithLoader();
    }

    RefreshOrderWithLoader(){
        this.props.context.Loader.OpenLoader();
        this.RefreshOrder();
    }

    RefreshOrder(){
        this.GetNewOrders();
        this.GetProgressOrders();
        this.GetCorrectionOrders();
    }



    GetNewOrders(){
        fetch(NewOrderAPI,{ credentials : "same-origin"} )
        .then(res => res.json())
        .then(
            (result) => {
                if(result != null){
                    this.setState({
                        NewOrder : result,
                        NewOrderCount : result.length
                    });
                }
                this.props.context.Loader.CloseLoader();
            },
            (error) => {
                console.log(error);
            }
        );
    }

    GetProgressOrders(){
        fetch(InProgressAPI,{ credentials : "same-origin"} )
        .then(res => res.json())
        .then(
            (result) => {
                if(result != null){
                    this.setState({
                        ProgressOrder : result,
                        ProgressOrderCount : result.length
                    });
                }
                this.props.context.Loader.CloseLoader();
            },
            (error) => {
                console.log(error);
            }
        );
    }

    GetCorrectionOrders(){
        fetch(CorrectionAPI,{ credentials : "same-origin"} )
        .then(res => res.json())
        .then(
            (result) => {
                if(result != null){
                    this.setState({
                        CorrectionOrder : result,
                        CorrectionOrderCount : result.length
                    });
                }
                this.props.context.Loader.CloseLoader();
            },
            (error) => {
                console.log(error);
            }
        );
    }

    render(){
        return(
            <div id="BodyViewPort" className="container-fluid vp-body-bg-white">
                <div id="Home" className="row">
                    <div className="col-md-12 padding-zero">
                        <TabView>
                            <TabHeader>
                                <TabHeaderLinks id="NewOrders"> <div className="vp-order-tab"> New  <span className="badge filter-nav-badge">{ this.state.NewOrderCount }</span> </div> </TabHeaderLinks>
                                <TabHeaderLinks id="ProgressOrders"> <div className="vp-order-tab"> In-Progress <span className="badge filter-nav-badge">{ this.state.ProgressOrderCount }</span> </div> </TabHeaderLinks>
                                <TabHeaderLinks id="CorrectionOrders"> <div className="vp-order-tab"> Corrections <span className="badge filter-nav-badge">{ this.state.CorrectionOrderCount }</span> </div> </TabHeaderLinks>
                                <TabHeaderLinks id="HoldOrders"> <div className="vp-order-tab"> on Hold <span className="badge filter-nav-badge">{ this.state.HoldOrderCount }</span> </div> </TabHeaderLinks>
                            </TabHeader>
                            <TabBody>
                                <TabBodyContent forId="NewOrders">
                                    <NewOrders refresh={this.RefreshOrderWithLoader} orders={this.state.NewOrder} />
                                </TabBodyContent>
                                <TabBodyContent forId="ProgressOrders">
                                    <InProgressOrders refresh={this.RefreshOrderWithLoader} orders={this.state.ProgressOrder} />
                                </TabBodyContent>
                                <TabBodyContent forId="CorrectionOrders">
                                    <CorrectionOrders refresh={this.RefreshOrderWithLoader} orders={this.state.CorrectionOrder} />                                   
                                </TabBodyContent>
                                <TabBodyContent forId="HoldOrders">
                                    <div> No Hold Orders </div>
                                </TabBodyContent>
                            </TabBody>
                        </TabView>
                    </div>
                </div>
            </div>
        );

    }
}

export default Home = WithAppState(Home);

/*
<div className="row box-shadow-bottom margin-zero">
    <div className="col-md-12 padding-zero">
        {
            this.state.filterConstant.map((filter,key) => (
                <FilterNav key={key} description={filter.Key} isActive={filter.isActive} URL={filter.URL} onClick={ this.onFilterNavClick } count={filter.Count}/>)
                )
        }
    </div>
</div>

{
    this.state.filterConstant.map((filter,key) => (
                <OrderList key={key} URL={filter.URL} isActive={filter.isActive} Key={filter.Key} setFilterNavCount = {this.setFilterNavCount} />
            )
        )
}

previousPage(){
    var page = this.state.onpage
    page = page -1 ;
    if(page <= 0){
        page = 1;
    }
    var displayOrders  = this.state.orders.slice( (page-1)*10 , (page-1)* 10 + 10);
    this.setState({
        onpage : page,
        displayed : displayOrders
    })
}

nextPage(){
    var page = this.state.onpage
    page = page + 1 ;
    if(page > this.state.total){
        page = this.state.total;
    }
    var displayOrders  = this.state.orders.slice( (page-1)*10 , (page-1)* 10 + 10);
    this.setState({
        onpage : page,
        displayed : displayOrders
    })
}
*/