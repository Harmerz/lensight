import { useAccessToken } from '@/hooks/auth'
import { useApiMutation2 } from '@/hooks/useApiMutation'
import { axios } from '@/lib/axios'

export const useUserSending = () => {
  const { accessToken, headers } = useAccessToken()

  return useApiMutation2({
    queryKey: ['questions'],
    mutationFun: async (_, data) => {
      if (!accessToken) {
        return null
      }
      const res = await axios.post('/api/user', data, {
        headers,
      })
      return res?.data
    },
  })
}
export default useUserSending
