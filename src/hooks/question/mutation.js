import { useAccessToken } from '@/hooks/auth'
import { useApiMutation2 } from '@/hooks/useApiMutation'
import { axios } from '@/lib/axios'

export const useQuestions = () => {
  const { accessToken, headers } = useAccessToken()

  return useApiMutation2({
    queryKey: ['questions'],
    mutationFun: async (_, data) => {
      if (!accessToken) {
        return null
      }
      const res = await axios.post('/api/question', data, {
        headers,
      })
      console.log(res)
      return res?.data
    },
  })
}

export const useNewQuestions = () => {
  const { accessToken, headers } = useAccessToken()
  console.log(process.env.NEXT_PUBLIC_BACKEND_URL)
  return useApiMutation2({
    queryKey: ['questions'],
    mutationFun: async (_, data) => {
      if (!accessToken) {
        return null
      }
      const res = await axios.post('/api/question-new', data, {
        headers,
      })
      return res?.data
    },
  })
}

export const useOCRQuestions = () => {
  const { accessToken, headers } = useAccessToken()
  return useApiMutation2({
    queryKey: ['questions'],
    mutationFun: async (_, data) => {
      if (!accessToken) {
        return null
      }
      const res = await axios.post('/api/uploads', data, {
        'Content-Type': 'multipart/form-data',
        headers,
      })
      return res?.data
    },
  })
}

export const useProcessQuestions = () => {
  const { accessToken, headers } = useAccessToken()
  return useApiMutation2({
    queryKey: ['questions'],
    mutationFun: async (_, data) => {
      if (!accessToken) {
        return null
      }
      const res = await axios.post('/api/question-process', data, {
        headers,
      })
      return res?.data
    },
  })
}

export default useQuestions
