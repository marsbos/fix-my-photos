import { photoService } from '../service/photoService'
import { useFetchWithProgress } from './useFetchWithProgress'

const { getPhoto } = photoService()
/**
 * React Hook for fetching photos
 */
export const useGetPhotos = () => {
  return useFetchWithProgress(getPhoto)
}
