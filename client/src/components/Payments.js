import React, {Component} from 'react';
import StripeCheckout from 'react-stripe-checkout';
import {connect} from 'react-redux';


//import {stripePublishableKey} from '../config/keys'; //We could have gone this way also... But its boring
import * as actions from '../actions';

class Payments extends Component {
    render() {
        const {handleToken} = this.props;
        return(
            <StripeCheckout 
            name='Mail Helperr'
            description='₹5000 for 5 email credits'
            amount={500000}
            currency='INR'
            token={token => handleToken(token)}
            stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
                <button className="btn">
                    Add Credits
                </button>
            </StripeCheckout>
        );
    }
}

export default connect(null,actions)(Payments);