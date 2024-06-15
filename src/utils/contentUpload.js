import Compressor from 'compressorjs'
import { API } from '@/api/api'

export const compressImage = async (file) => {
  if (!file) throw new Error('No file provided')
  if (!['image/jpeg', 'image/png'].includes(file.type)) throw new Error('Invalid file type')

  try {
    const compressedFile = await new Promise((resolve, reject) => {
      new Compressor(file, {
        maxWidth: 1920,
        maxHeight: 1080,
        quality: 0.8,
        success: resolve,
        error: reject,
      })
    })

    return compressedFile
  } catch (error) {
    throw new Error('Image compression failed')
  }
}


export const contentUpload = async (compressedFile, teamMissionId, comment) => {

  const token = 'sungrak-upload-secret-key' // 하드코딩된 토큰 값

  try {
    const formData = new FormData()
    formData.append('images', compressedFile, compressedFile.name)
    formData.append('token', token)

    const responseBS = await fetch('https://cba.sungrak.or.kr:9000/api/upload', {
      method: 'POST',
      body: formData,
    })

    if (!responseBS.ok) throw new Error('Failed to upload to CBA backend')
    const reponseBSData = await responseBS.json()
    const image_height = reponseBSData[0].height
    const file_url = reponseBSData[0].url
    const image_width = reponseBSData[0].width

    const response = await API.contentUpload({
      team_mission_id: teamMissionId,
      comment,
      file_url,
      image_width,
      image_height,
      file_type: 'IMAGE',
    })

  } catch (error) {
    throw new Error('Image upload failed')
  }
}