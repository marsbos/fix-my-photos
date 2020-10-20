import wretch from 'wretch'

/**
 * Creates a 'resource' with the given endpoint.
 * @param {*} endpoint The API's endpoint.
 * @returns Crud functions to be used in a service.
 */
export const createResource = (endpoint) => {
  const resource = wretch().url(endpoint)

  const addUrlPart = (url) => (url ? `/${url}` : '')

  const get = (url) => resource.url(addUrlPart(url)).get()
  const post = (json) => resource.post(json)
  const put = (url, json) => resource.url(addUrlPart(url)).put(json)
  const del = (url) => resource.url(addUrlPart(url)).delete()

  return { get, post, put, del }
}
