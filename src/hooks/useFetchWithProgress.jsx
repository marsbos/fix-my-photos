import { useCallback, useState } from 'react'
import { ApiProgressStatus } from '../service/constants'

/**
 * React Hook for tracking progress while executing fetch requests.
 */
export const useFetchWithProgress = (apiFetcher) => {
  const [status, setStatus] = useState()
  const [data, setData] = useState()

  const fetcher = useCallback(
    (...args) => {
      setStatus(ApiProgressStatus.PENDING)
      apiFetcher(...args)
        .then(setData)
        .then(() => {
          setStatus(ApiProgressStatus.READY)
        })
        .catch(() => setStatus(ApiProgressStatus.FAILURE))
    },
    [apiFetcher]
  )

  return [fetcher, status, data]
}
