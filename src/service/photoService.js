import { Settings } from '@material-ui/icons'
import { createResource } from './fetchResource'

const photoResource = createResource('api/photos')

/**
 * Service for the Photos Rest API.
 */
export const photoService = {
  getPhoto: (id) => photoResource.get(id).json(),
  addPhoto: (photo) => photoResource.post(photo).json(),
  updatePhoto: (id, photo) => {
    // simulate updating photo:
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(photoResource.put(id, photo).json())
      }, 3000)
    })
  }
}
