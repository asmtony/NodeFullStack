import React,  {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions';
import Landing from './Landing';
import Header from './header';


const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>Survey New</h2>

class App extends Component {

  componentDidMount(){
    this.props.fetchUser();
  }
  render(){
  return (
    <div className="container">
      <BrowserRouter>
      
        <div>
          <Header />
          <Route path="/" component={Landing} />
          <Route path="/surveys" component={Dashboard} />
          <Route path="/surveys/surveysnew" component={SurveyNew} />
        </div>
      
      </BrowserRouter>     
    </div>
  );
  }
}

export default connect(null, actions) (App);
