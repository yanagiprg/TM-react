// import configureMockStore from 'redux-mockstore'
// import thunk from 'redux-thunk'
// import fetchMock from 'fetch-mock'

// import * as actions from '../redux/post/post.actions'
// import PostActionTypes from '../redux/post/post.types'

// const middlewares = [thunk]
// const mockStore = configureMockStore(middlewares)
// const apiUrl = 'http://localhost:3001'

// describe('async actions', () => {
//   afterEach(() => {
//     fetchMock.restore()
//   })

//   it('creates FETCH_TODOS_SUCCESS when fetching todos has been done', () => {
//     fetchMock.getOnce((`${apiUrl}/posts`), {
//     posts: {}
//     })
//   })

//   const expectedAction = {
//     type: PostActionTypes.FETCH_POSTS_SUCCESS,
//     posts
//   }
// })
