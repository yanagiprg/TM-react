import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Router, Switch, Route } from 'react-router-dom' 
import history from './history' 
import PostIndex from './components/post/PostIndex'
import PostNew from './components/post/PostNew'
import PostShow from './components/post/PostShow'
import PostEdit from './components/post/PostEdit'
import Navbar from './components/shared/Navibar/Navbar'

// App全体のRenderingを定義
const App = ({ store }) => (
// Routerを囲いStoreを適用させる
  <Provider store={store}>
{/* 画面遷移しても履歴を引き継ぐためにImportしたHistoryをRouterに適用させる */}
    <Router history={history}>
      <Navbar />
{/* SwitchでマッチしたUrlに遷移するようにRoutingを設定する */}
      <Switch>
        <Route exact path="/" component={PostIndex} />
        <Route exact path="/posts/new" component={PostNew} />
        <Route exact path="/posts/:id" component={PostShow} />
        <Route exact path="/posts/:id/edit" component={PostEdit} /> 
      </Switch>
    </Router>
  </Provider>
)

// StoreのObjectの引数の入力のチェックを行うためにPropTypesを定義
App.propTypes = {
  store: PropTypes.object.isRequired
}

export default App