import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

import { setCurrentUser } from './redux/user/user.actions';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      
      if(userAuth) {
          const userRef = await createUserProfileDocument(userAuth);

          /*
          You can listen to a document with the onSnapshot() method. 
          An initial call using the callback you provide 
          creates a document snapshot immediately with the current contents 
          of the single document. 
          Then, each time the contents change, 
          another call updates the document snapshot.
          */
          userRef.onSnapshot(snapShot => {
            this.props.setCurrentUser({
                id: snapShot.id,
                ...snapShot.data()
              }
            );
          });
      } else {
        this.props.setCurrentUser(userAuth);
      }
      
      //createUserProfileDocument(user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/'  component={ HomePage } />
          <Route path='/shop' component={ ShopPage } />
          <Route path='/signin' exact render={() => this.props.currentUser ? <Redirect to='/' /> : <SignInAndSignUp />} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
