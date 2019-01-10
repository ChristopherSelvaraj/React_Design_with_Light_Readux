
import { AcceptOrderAPI } from '../Constants/OrderAPI';

const PostFormJsonData = (url, data) => {

    return fetch(url, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, cors, *same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, same-origin, *omit
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                //"Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
            },
            //redirect: "follow", // manual, *follow, error
            referrer: "no-referrer", // no-referrer, *client
            body: JSON.stringify(data), // body data type must match "Content-Type" header
        })
        .then(response => response.json());

}



export const AcceptOrder = (orderId, orderItemId, data) => {

    let url = AcceptOrderAPI + orderId + "/"+orderItemId;
    // data Validation if required

    return PostFormJsonData(url,data);

}