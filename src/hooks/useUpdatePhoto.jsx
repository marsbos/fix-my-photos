import { photoService } from '../service/photoService'
import { useFetchWithProgress } from './useFetchWithProgress'

const { updatePhoto } = photoService()
/**
 * React Hook for adding an undo item.
 */
export const useUpdatePhoto = () => {
  return useFetchWithProgress(updatePhoto)
}
