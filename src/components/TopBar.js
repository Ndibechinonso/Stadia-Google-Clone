import Reat from 'react';
import App from '../App';
import '../App.css'

export default function TopBar(props) {
    return (
        <div className="topbar">

            <div className="stadiaStore">
                <i class="fas fa-shopping-bag hi"></i>
                <h5 className="stadiaStoreList" >Play Cyberpunk 2077 on Stadia!</h5>
            </div>
            <p className="stadiaStoreLinks"><a>Click here to Buy Now.</a> No subscription required.</p>

        </div>
    )
}