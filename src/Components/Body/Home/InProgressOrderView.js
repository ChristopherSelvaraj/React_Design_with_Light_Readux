import React , { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { WithAppState } from '../../Context/AppState.js';
import { BPOURLAPI } from '../../Constants/OrderAPI';
import Modal from '../../UI-Util/Modal';

class InProgressOrderView extends Component{
    
    constructor(props){
        super(props);

        this.state = {
        }
    }

    getbuckettext(id){
        switch(id){
            case 1 : return "OpenOrder";
            case 2 : return "AwaitingResponse";
            case 3 : return "ReviewProprosed";
            case 4 : return "CallAndSchedule";
        }
    }

    getOrderButtons(order){
        let buttons = [];

        if(order.NeedsAppointmentSet){
            buttons.push(
                (<div key="0" className="order-list-view-body-btn"> 
                    <div className="order-list-view-body-btn-icon"><span className="glyphicon glyphicon-calendar xome-text" /></div>
                    <div className="order-list-view-body-btn-text"> Set Appointment </div>
                </div>)
            );
        }

        if(order.AnalyticsAvailable){
            buttons.push(
                (<div key="1" className="order-list-view-body-btn"> 
                    <div className="order-list-view-body-btn-icon"><span className="glyphicon glyphicon-stats xome-text" /></div>
                    <div className="order-list-view-body-btn-text"> Property Analytics </div>
                </div>)
            );
        }

        if(order.MapAvailable){
            buttons.push(
                (<div key="2" className="order-list-view-body-btn"> 
                    <div className="order-list-view-body-btn-icon"><span className="glyphicon glyphicon-pushpin xome-text" /></div>
                    <div className="order-list-view-body-btn-text"> Map </div>
                </div>)
            );
        }

        if(order.ShowBPOURL && order.IntegrationType == 'iBPO'){
            buttons.push(
                (<div key="3" className="order-list-view-body-btn" onClick={ () => {this.OpenInNewWindow(order.BPOURL, "BPO")} } > 
                    <div className="order-list-view-body-btn-icon"><span className="glyphicon glyphicon-resize-full xome-text" /></div>
                    <div className="order-list-view-body-btn-text"> Fill BPO </div>
                </div>)
            );
        }

        if(order.ShowRMVURL && order.IntegrationType == 'iRMV'){
            buttons.push(
                (<div key="4" className="order-list-view-body-btn" onClick={ () => {this.OpenInNewWindow(order.RMVURL, "RMV")} } > 
                    <div className="order-list-view-body-btn-icon"><span className="glyphicon glyphicon-resize-full xome-text" /></div>
                    <div className="order-list-view-body-btn-text"> Fill BPO </div>
                </div>)
            );
        }

        if(order.ShowDVIInspectionURL && order.IntegrationType == 'iDVI-I'){
            buttons.push(
                (<div key="5" className="order-list-view-body-btn" onClick={ () => {this.OpenInNewWindow(order.DVIInspectionURL, "BPO")} } > 
                    <div className="order-list-view-body-btn-icon"><span className="glyphicon glyphicon-resize-full xome-text" /></div>
                    <div className="order-list-view-body-btn-text"> Fill BPO </div>
                </div>)
            );
        }

        if(order.ShowDVIValuationURL &&  order.IntegrationType == 'iDVI-V'){
            buttons.push(
                (<div key="6" className="order-list-view-body-btn" onClick={ () => {this.OpenInNewWindow(order.DVIValuationURL, "BPO")} } > 
                    <div className="order-list-view-body-btn-icon"><span className="glyphicon glyphicon-resize-full xome-text" /></div>
                    <div className="order-list-view-body-btn-text"> Fill BPO </div>
                </div>)
            );
        }

        if(order.ShowBPOURL && order.IntegrationType == 'qBPO'){
            buttons.push(
                (<div key="7" className="order-list-view-body-btn" onClick={ () => {this.fetchBPOLink(BPOURLAPI.QBPOURL,order.OrderID, order.OrderItemID,"BPO")} } > 
                    <div className="order-list-view-body-btn-icon"><span className="glyphicon glyphicon-resize-full xome-text" /></div>
                    <div className="order-list-view-body-btn-text"> Fill BPO </div>
                </div>)
            );
        }

        if(order.ShowRMVURL && order.IntegrationType == 'qRMV'){
            buttons.push(
                    (<div key="8" className="order-list-view-body-btn" onClick={ () => {this.fetchBPOLink(BPOURLAPI.QRMVURL,order.OrderID, order.OrderItemID,"RMV")} } > 
                    <div className="order-list-view-body-btn-icon"><span className="glyphicon glyphicon-resize-full xome-text" /></div>
                    <div className="order-list-view-body-btn-text"> Fill BPO </div>
                </div>)
            );
        }

        if(order.ShowDVIInspectionURL && order.IntegrationType == 'qDVI-I'){
            buttons.push(
                (<div key="9" className="order-list-view-body-btn" onClick={ () => {this.fetchBPOLink(BPOURLAPI.QDVIInspectionURL,order.OrderID, order.OrderItemID,"DVI-I")} } > 
                    <div className="order-list-view-body-btn-icon"><span className="glyphicon glyphicon-resize-full xome-text" /></div>
                    <div className="order-list-view-body-btn-text"> Fill BPO </div>
                </div>)
            );
        }

        if(order.ShowDVIValuationURL && order.IntegrationType == 'qDVI-V'){
            buttons.push(
                (<div key="10" className="order-list-view-body-btn" onClick={ () => {this.fetchBPOLink(BPOURLAPI.QDVIValuationURL,order.OrderID, order.OrderItemID,"DVI-V")} } > 
                    <div className="order-list-view-body-btn-icon"><span className="glyphicon glyphicon-resize-full xome-text" /></div>
                    <div className="order-list-view-body-btn-text"> Fill BPO </div>
                </div>)
            );
        }

        if(order.ShowQValURL && order.IntegrationType == 'qVal'){
            buttons.push(
                (<div key="11" className="order-list-view-body-btn" onClick={ () => {this.fetchBPOLink(BPOURLAPI.QValURL,order.OrderID, order.OrderItemID,"QVal")} } > 
                    <div className="order-list-view-body-btn-icon"><span className="glyphicon glyphicon-resize-full xome-text" /></div>
                    <div className="order-list-view-body-btn-text"> Fill BPO </div>
                </div>)
            );
        }

        return buttons;
    }

    fetchBPOLink(URL, OrderId, OrderItemID, WinName){
        
        this.props.context.Loader.OpenLoader();
        URL = URL + OrderId +'/'+OrderItemID;
        fetch(URL,{ credentials : "same-origin", contentType : "application/json; charset=utf-8", dataType: "json"} )
        .then(res => res.text())
        .then(
            (result) => {
                console.log(result);
                if(result != null){
                    this.OpenInNewWindow(result,WinName);
                }
                this.props.context.Loader.CloseLoader();
            },
            (error) => {
                console.log(error);
            }
        );
    }

    OpenInNewWindow(URL,WinName) {
        var strWindowFeatures = "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes";
        window.open(URL, WinName, strWindowFeatures);
    }

    getInProgress(order,history){
        return(
            <div id={"OrderListView"+order.OrderID} key={order.OrderID} className="order-list-view">
                <div className="order-list-view-body-content">
                    <div className="order-list-view-body-content-row">
                        <div className="order-list-view-body-content-col-3">
                            <div className="order-list-view-body-content-key">ORDER #</div>
                            <div className="order-list-view-body-content-value">
                                {order.OrderID}.{order.OrderItemID}
                            </div>
                        </div>
                        <div className="order-list-view-body-content-col-7">
                            <div className="order-list-view-body-content-key">ADDRESS</div>
                            <div className="order-list-view-body-content-value">
                                <span className="glyphicon glyphicon-map-marker xome-text"/> {order.SubjectProperty}
                            </div>
                        </div>
                    </div>
                    <div className="order-list-view-body-content-row" >
                        <div className="order-list-view-body-content-col-7">
                            <div className="order-list-view-body-content-key">CLIENT NAME</div>
                            <div className="order-list-view-body-content-value">{order.ClientName}</div>
                        </div>
                    </div>
                    <div className="order-list-view-body-content-row">
                        <div className="order-list-view-body-content-col-3">
                            <div className="order-list-view-body-content-key">FEE</div>
                            <div className="order-list-view-body-content-value">{order.Fee} $</div>
                        </div>
                        <div className="order-list-view-body-content-col-3">
                            <div className="order-list-view-body-content-key">PRODUCT</div>
                            <div className="order-list-view-body-content-value">{order.ProductName}</div>
                        </div>
                        <div className="order-list-view-body-content-col-3">
                            <div className="order-list-view-body-content-key">DUE DATE</div>
                            <div className="order-list-view-body-content-value">{ (new Date(Number(order.DueDate.match(/\d+/)[0]))).toDateString() }</div>
                        </div>
                    </div>
                </div>
                <div className="order-list-view-body-footer">
                    <div className="order-list-view-body-footer-badges">
                        <span className="badge filter-nav-badge-inprogress"> { this.getbuckettext(order.BucketID) } </span>
                    </div>
                    <div className="order-list-view-body-buttons">                        
                        <div className="order-list-view-body-btn" onClick={() => history.push('UI/order/'+order.OrderID+'/'+order.OrderItemID)}> 
                            <div className="order-list-view-body-btn-icon"><span className="glyphicon glyphicon-info-sign xome-text" /></div>
                            <div className="order-list-view-body-btn-text"> Detials </div>
                        </div>
                        <div className="order-list-view-body-btn"> 
                            <div className="order-list-view-body-btn-icon"><span className="glyphicon glyphicon-comment xome-text" /></div>
                            <div className="order-list-view-body-btn-text"> Add Comment </div>
                        </div>
                        {
                            this.getOrderButtons(order)
                        }
                    </div>
                </div>
            </div>
        );
    }

    render(){
        const { order } = this.props;
        return this.getInProgress(order,this.props.history);
    }

}

export default withRouter(WithAppState(InProgressOrderView));


            
/* 
<div className="btn btn-default order-list-view-body-btn" onClick={() => history.push('/order/'+order.OrderID+'/'+order.OrderItemID)}> <span className="glyphicon glyphicon-info-sign xome-text" /> Detials</div>
<div className="btn btn-default order-list-view-body-btn"><span className="glyphicon glyphicon-ok-sign xome-text" /> Accept </div>
<div className="btn btn-default order-list-view-body-btn"> <span className="glyphicon glyphicon-question-sign xome-text" />  Conditionally Accept</div>
<div className="btn btn-default order-list-view-body-btn"><span className="glyphicon glyphicon-remove-sign xome-text" /> Reject</div>
*/

/*

*/