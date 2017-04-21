export const apiDomain = 'http://localhost:8000/'
export const LoginUrl = apiDomain + 'oauth/token'
export const userUrl = apiDomain + 'api/user'
export const userListUrl = apiDomain + 'api/user-list'
export const getUserConversationUrl = apiDomain + 'api/get-user-conversation'

export const getHeader = function () {
  const tokenData = JSON.parse(window.localStorage.getItem('authUser'))
  const headers = {
    'Accept': 'application/json',
    'Authorization': 'Bearer ' + tokenData.access_token
  }
  return headers
}
