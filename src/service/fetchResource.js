import wretch from 'wretch'

export const createResource = (endpoint) => {
  const resource = wretch().url(endpoint)

  const addUrlPart = (url) => (url ? `/${url}` : '')

  const get = (url) => resource.url(addUrlPart(url)).get()
  const post = (json) => resource.post(json)
  const put = (url, json) => resource.url(addUrlPart(url)).put(json)
  const del = (url) => resource.url(addUrlPart(url)).delete()

  return { get, post, put, del }
}
