import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Router, Switch, Route } from 'react-router-dom' 
import history from '../history' 
import TopPage from '../containers/TopPage'
import PostNew from '../containers/PostNew'
import PostShow from '../containers/PostShow'
import PostEdit from '../containers/PostEdit'
import Navbar from '../containers/Navbar'

const App = ({ store }) => (
  <Provider store={store}>
    <Router history={history}>
      <Navbar />
      <Switch>
        <Route exact path="/" component={TopPage} />
        <Route exact path="/posts/new" component={PostNew} />
        <Route exact path="/posts/:id" component={PostShow} />
        <Route exact path="/posts/:id/edit" component={PostEdit} /> 
      </Switch>
    </Router>
  </Provider>
)

App.propTypes = {
  store: PropTypes.object.isRequired
}

export default App