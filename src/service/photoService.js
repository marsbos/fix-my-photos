import { createResource } from './fetchResource'

const photoResource = createResource('api/photos')

/**
 * Service for the Photos Rest API.
 */
export const photoService = {
  getPhoto: (id) => photoResource.get(id).json(),
  searchPhoto: (searchTerm) => photoResource.get(`?q=${searchTerm}`).json(),
  addPhoto: (undo) => photoResource.post(undo).json(),
  updatePhoto: (id, undo) => photoResource.put(id, undo).json(),
  deletePhoto: (id) => photoResource.del(id).json()
}
