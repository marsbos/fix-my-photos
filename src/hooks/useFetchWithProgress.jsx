import { useCallback, useState } from 'react'
import { ApiProgressStatus } from '../service/ApiProgressStatus'

/**
 * React Hook for tracking progress while executing fetch requests.
 *
 * It plays nicely with a resource created with wretch or axios.
 * Usage:
 * ```
 * const [getPhotos, status, photosFromfetch] = useFetchWithProgress(
 *   photoService.getPhoto
 * )
 * Now, getPhotos can be used as an api call.
 * The status is updated each time the fetch changes to another state.
 * photosFromFetch holds the response.
 *
 * ```
 * @param {*} apiFetcher The api method to use.
 * @returns a fetch function, the fetch status and the response json data.
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
