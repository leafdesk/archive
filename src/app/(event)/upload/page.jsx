'use client' // Next.js v14 에서 사용자 상호 작용을 위해 최상단 고정 필수.

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { compressImage, contentUpload } from '@/utils/contentUpload'

const UploadPage = () => {
  const router = useRouter()

  const [selectedImage, setSelectedImage] = useState(null)
  const [isImageUpload, setIsImageUpload] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const [previewUrl, setPreviewUrl] = useState(null)
  const [comment, setComment] = useState('')
  const [isFocused, setIsFocused] = useState(false);

  // todo: props 전달 받아야 함.
  const teamMissionId = 9
  const missionId = 1
  const missionTitle = '미션 타이틀'

  const handleContentUploadOnclick = () => {
    contentUpload(selectedImage, teamMissionId, comment)
      .then(() => {
        router.push('/home')
      })
      .catch((error) => {
        console.error(error.message)
      })
  }

  const handleImageUpload = async (event) => {
    const file = event.target.files[0]
    if (file) {
      try {
        setIsUploading(true)
        const compressedImage = await compressImage(file)
        setSelectedImage(compressedImage)
        setPreviewUrl(URL.createObjectURL(compressedImage))
        setIsImageUpload(true)
        setIsUploading(false)
      } catch (error) {
        console.error(error.message)
        setIsUploading(false)
      }
    }
  }


  return (
    <div className="flex flex-col items-center max-w-md mx-auto h-full min-h-screen w-[430px] relative">
      <div className="w-full flex justify-between items-center absolute top-[5vh]">
        <span
          className="px-4 font-noto-sans-kr font-normal text-[18px] leading-[18px] tracking-[-0.03em] text-[#222222]">인증하기</span>
        <div
          className="w-10 h-10 mr-2 bg-[url('/icons/close.svg')] bg-no-repeat cursor-pointer"
          onClick={() => router.push('/home')}
        />
      </div>
      <div className="w-full flex flex-col items-center mt-[10vh] px-4">
        <div className="mt-[16px] w-full flex flex-col">
          <div
            className="flex items-center justify-center w-[48px] h-[22px] bg-[#E0E6F6] rounded-[8px] text-[#446CC1] font-pretendard font-medium text-[14px] leading-[14px] tracking-[-0.06em]">
            {`미션 ${missionId}`}
          </div>
          <div
            className="font-noto-sans-kr font-medium text-[24px] leading-[30px] tracking-[-0.03em] text-[#222222] mt-2">
            {missionTitle}
          </div>
        </div>

        <div
          className="mt-[36px] w-full text-left font-noto-sans-kr font-normal text-[18px] leading-[24px] tracking-[-0.03em] text-[#222222]">
          사진 올리기
        </div>

        <div className="mt-[16px] w-full flex flex-col items-center">
          <div className="relative">
            {!isImageUpload ? (
              <div
                className="cursor-pointer"
                style={{
                  width: '398px',
                  height: '218px',
                  backgroundImage: 'url(\'/icons/uploadArea.svg\')',
                  backgroundSize: 'cover',
                }}
                onClick={() => document.getElementById('fileInput').click()}
              />
            ) : (
              <img src={previewUrl} alt="Preview" className="w-[398px] h-[218px] rounded-[8px]" />
            )}
            <input
              id="fileInput"
              type="file"
              accept="image/jpeg, image/png"
              onChange={handleImageUpload}
              disabled={isUploading}
              className="hidden"
            />
          </div>

          {isImageUpload && (
            <div className="flex items-center mt-4">
              <button
                onClick={() => document.getElementById('fileInput').click()}
                className="flex items-center justify-center w-[125px] h-[34px] text-[#666666] font-noto-sans-kr font-normal text-[16px] leading-[16px] tracking-[-0.03em] rounded-[999px] border-[1px] border-[#DDDDDD] bg-[#FFFFFF]"
              >
                다시 올리기
                <div
                  className="ml-1.5"
                  style={{
                    width: '14px',
                    height: '13px',
                    backgroundImage: 'url(\'/icons/reUpload.svg\')',
                    backgroundSize: 'cover',
                  }}
                />
              </button>
            </div>
          )}
        </div>
        <div className="mt-10 w-full flex justify-between items-center">
          <div className="font-noto-sans-kr font-normal text-[18px] leading-[24px] tracking-[-0.03em] text-[#222222]">
            글입력
          </div>
          <span className="font-noto-sans-kr font-normal text-[14px] leading-[14px] tracking-[-0.03em] text-[#999999]">
            최대 00자를 입력해 주세요.
          </span>
        </div>

        <input
          type="text"
          value={comment}
          onChange={(e) => {
            setComment(e.target.value)
          }}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="border mt-4 p-4 w-full max-w-[398px] h-[54px] rounded-lg placeholder-[#999999] placeholder-pretendard placeholder-font-normal placeholder-text-[18px] placeholder-leading-[18px] placeholder-tracking-[-0.03em]"
          style={{
            borderColor: comment || isFocused ? '#0DC1C1' : '#DDDDDD',
            borderWidth: '1px',
          }}
          placeholder="글을 입력해 주세요."
        />
      </div>
      <div className="absolute bottom-[5vh] w-full flex justify-between px-4">
        <button
          onClick={handleContentUploadOnclick}
          className={`w-[398px] h-[60px] rounded-[8px] text-[20px] leading-[20px] tracking-[-0.03em] font-noto-sans-kr font-medium ${
            comment && isImageUpload ? 'bg-[#31C678] text-[#FFFFFF]' : 'bg-[#F5F5F5] text-[#666666] cursor-not-allowed'
          }`}
          disabled={comment === '' || !isImageUpload}
        >
          올리기
        </button>
      </div>
    </div>
  )
}

export default UploadPage