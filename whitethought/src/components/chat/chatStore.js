import Vue from 'vue'
import Resource from 'vue-resource'

import {userListUrl, getHeader, getUserConversationUrl} from './../../config'

Vue.use(Resource)

const state = {
  userList: {},
  currentChatUser: null,
  conversation: null
}

const mutations = {
  SET_USER_LIST (state, userList) {
    state.userList = userList
  },
  SET_CURRENT_CHAT_USER (state, user) {
    state.currentChatUser = user
  },
  SET_CONVERSATION (state, conversation) {
    state.conversation = conversation
  }
}

const actions = {
  setUserList: ({commit}, userList) => {
    return Vue.http.get(userListUrl, {header: getHeader()})
      .then(response => {
        console.log(response)
        if (response.status === 200) {
          commit('SET_USER_LIST', response.body.data)
          return response.body.data
        }
      })
  },

  setCurrentChatUser: ({commit}, user) => {
    commit('SET_CURRENT_CHAT_USER', user)
    let postID = {id: user.id}
    console.log('Hello')
    console.log(getUserConversationUrl, postID, {header: getHeader()})
    console.log('Hello22')
    return Vue.http.  (getUserConversationUrl, postID, {header: getHeader()})
     .then(response => {
       console.log('Hello33***************3')
       console.log(response.body.data)
       commit('SET_CURRENT_CHAT_USER', user)
       commit('SET_CONVERSATION', response.body.data)
     })
  }
}

export default {
  state, mutations, actions
}
