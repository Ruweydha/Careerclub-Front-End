/* eslint-disable no-restricted-globals */
//Axios
import axios from 'axios'
import { toast } from 'react-toastify';

//Css
import './css/Subscription.css';

function Subscription({subscription,userId}) {
    let unsubscribingFromMailList = ()=>{
        let askToUnsubscribe = confirm("Are you sure you want to unsubscribe")
        if(askToUnsubscribe){
            axios({
                method: "put",
                url: `${process.env.REACT_APP_BASE_URL}/mail-list/unsubscribe/${subscription.id}/${userId}`,
                headers: { 
                    "Authorization" : `Bearer ${localStorage.getItem('accessToken')}`
                }})
                .then(res=>{
                    toast(res.data.message)
                })
                .catch(err=>console.log(err))
        }

    }


    return (
        <article className="subscription">
            <div className="subscription-details">
                <div className="subscription-details-name">
                    <h1>{subscription.alertName}</h1>
                </div>
                <div className="subscription-details-tags">
                    <p>{subscription.industry.name}</p>
                    <p>{subscription.jobType.name}</p>
                    <p>{subscription.location.name}</p>
                </div>
            </div>
            <div className="subscription-unsubscribe">
                <button onClick={unsubscribingFromMailList}>Unsubscribe</button>
            </div>
        </article>
    )
}

export default Subscription