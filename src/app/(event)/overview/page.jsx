'use client'

import { useEffect, useState } from 'react'
import Select from 'react-select'
import { IoCheckmark } from 'react-icons/io5'
import { IoIosArrowRoundBack } from 'react-icons/io'
import PhotoAlbum from 'react-photo-album'
import axios from 'axios'
import {
  ClearIndicator,
  CustomMultiValue,
  customStyles,
  DropdownIndicator,
  NoWarningInput,
} from '@/components/react-select-custom'
import PostPhoto from '@/components/PostPhoto'
import Skeleton from 'react-loading-skeleton'


/**
 * 전체 미션보드.
 */
const OverviewPage = () => {

  const [images, setImages] = useState([])

  const teams = [
    { value: 1, label: '1팀' },
    { value: 2, label: '2팀' },
    { value: 3, label: '3팀' },
    { value: 4, label: '4팀' },
  ]

  const missionInfo = [
    { value: 1, label: '미션1', bgColor: '#E0E6F6', color: '#446CC1' },
    { value: 2, label: '미션2', bgColor: '#ECF8F4', color: '#107054' },
    { value: 3, label: '미션3', bgColor: '#F0FCFC', color: '#11758D' },
    { value: 4, label: '미션4', bgColor: '#FFF9E2', color: '#997A00' },
    { value: 5, label: '미션5', bgColor: '#FFEFEC', color: '#EF4424' },
    { value: 6, label: '미션6', bgColor: '#EFF6E0', color: '#547708' },
    { value: 7, label: '미션7', bgColor: '#FFF2E7', color: '#D37E36' },
    { value: 8, label: '미션8', bgColor: '#E0E6F6', color: '#446CC1' },
  ]

  useEffect(() => {
    getImages()
  }, [])

  const getImages = async () => {
    const response = await axios.get('https://cba.sungrak.or.kr:9000/event/images?eventName=2024W&classification=0')
    const images = response.data.map((image) => {
      return {
        src: image.url,
        width: image.width,
        height: image.height,
      }
    })
    setImages(images.slice(0, 30))
  }

  const onClickImage = (photo) => {
    // TODO :: 히스토리 상세 구현
    console.log(photo)
  }

  const renderPhoto = ({ photo, wrapperStyle, layoutOptions }) => {
    const { onClick } = layoutOptions

    return (
      <div style={{ ...wrapperStyle }} onClick={() => onClick(photo)}>
        <PostPhoto photo={photo} missionInfo={missionInfo[0]} />
      </div>
    )
  }

  return <div className="bg-[#F7F7F7] max-w-[430px]">
    <div className="p-4">
      <div>
        <IoIosArrowRoundBack size={40} />
      </div>
      <div className="flex flex-col gap-2.5">
        <div className="text-2xl font-medium">전체 미션보드</div>
        <div className="text-sm text-[#666]">전체 참여율 70%</div>
        <div className="h-[270px] bg-gray-200">미션 보드 이미지</div>
      </div>
    </div>
    <div className="mt-8 p-4 bg-white border-t-[1px]">
      <div className="text-lg color-[#222]">히스토리</div>
      <div className="flex mt-4">
        <Select
          instanceId="team-select"
          isMulti
          options={teams}
          styles={customStyles}
          placeholder="팀"
          components={{ MultiValue: CustomMultiValue, DropdownIndicator, ClearIndicator, Input: NoWarningInput }}
        />
        <Select
          instanceId="mission-select"
          isMulti
          options={missionInfo}
          styles={customStyles}
          placeholder="미션"
          components={{ MultiValue: CustomMultiValue, DropdownIndicator, ClearIndicator, Input: NoWarningInput }}
        />
        <div className="flex items-center">
          <IoCheckmark />
        </div>
      </div>
      <div className="mt-4">
        {/*TODO :: skeleton loading*/}
        {images.length === 0 ? (<Skeleton height="1500px" />) :
          <PhotoAlbum photos={images} layout="masonry" spacing={6} padding={0} columns={2} onClick={onClickImage}
                      renderPhoto={renderPhoto} />}
      </div>
    </div>
  </div>
}

export default OverviewPage
