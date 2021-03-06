import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Header extends Component{

    renderContent(){
        console.log('renderContent: ' + this.props.auth);
        switch(this.props.auth){
            case null:
                return;
            case false:
                return <li><a href='/auth/google'>Login with Googlw</a></li>;
            default: 
            return <li><a href="/api/logout">Logout</a></li>;
        }
    }

    render(){
        console.log('this.props: ' + JSON.stringify(this.props));
        return (
            <nav>
                <div className="nav-wrapper" >
                <Link 
                    to={this.props.auth? '/surveys': '/'} 
                    className="left brand-logo"
                >
                Emaily
                </Link> 
                <ul className="right">
                    {this.renderContent()}
                </ul>           
                </div>
            </nav>
        );
    }
}

function mapStateToProps( {auth}){
    return {auth};
 }

export default connect(mapStateToProps)( Header);