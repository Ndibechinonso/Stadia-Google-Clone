import Reat from 'react';
import App from '../App';
import '../App.css'

export default function TopBar(props) {
    return (
        <div className={props.className}>

            <div className={props.barDiv}>
                <i class="fas fa-shopping-bag"></i>
                <h5 className={props.barHeader} >Play Cyberpunk 2077 on Stadia!</h5>
            </div>
            <p className={props.text}><a>Click here to Buy Now.</a> No subscription required.</p>

        </div>
    )
}