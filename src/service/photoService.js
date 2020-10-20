import { createResource } from './fetchResource'

const photoResource = createResource('api/photos')

/**
 * Service for the Photos Rest API.
 */
export const photoService = {
  getPhoto: (id) => photoResource.get(id).json(),
  addPhoto: (undo) => photoResource.post(undo).json(),
  updatePhoto: (id, undo) => photoResource.put(id, undo).json()
}
