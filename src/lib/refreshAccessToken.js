import { axios } from './axios'

export async function refreshAccessToken(refreshToken) {
  try {
    const result = await axios.post(
      '/auth/refresh-token',
      {},
      { headers: { Authorization: `Bearer ${refreshToken}` } },
    )
    const newAccessToken = result.data.accessToken
    return newAccessToken
  } catch (err) {
    console.log('RefreshAccessTokenError : ', err.message)
    return 'RefreshAccessTokenError'
  }
}

export default refreshAccessToken
