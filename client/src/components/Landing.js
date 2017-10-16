import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

class Landing extends Component {
    // componentWillMount() { Why is this so useless?
    //     if(this.props._id){ Maybe because promises consume a lots of time...
    //         this.props.history.push('/surveys');
    //      }
    // }
    render() {
        if(this.props._id){
            this.props.history.push('/surveys');
        }
        return(
            <div className="card darken-1" >
                <div className="card-content">
                    <span className="card-title">Hi and welcome to Mail Helperr</span>
                    <p>
                        This is a mail service app which is designed to send review mails to multiple accounts.
                        And then later have yes or no responses from them.
                        To use this app you need to sign up with a google email id(so have that ready).
                        You get 5 free credits if you want more then pay with your own credit card :P:P.
                        Just joking you may use 42(8times) as your credit card number and may get more credits.
                    </p>
                    <h5>
                        Have Fun 
                    </h5>
                    <p className="right">
                   
                    </p>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {...state.auth};
}

export default connect(mapStateToProps)(withRouter(Landing));