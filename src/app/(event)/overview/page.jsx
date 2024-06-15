'use client' // Next.js v14 에서 사용자 상호 작용을 위해 최상단 고정 필수.

import { useEffect, useState } from 'react'
import { components } from 'react-select'
import { IoCheckmark } from 'react-icons/io5'
import { IoIosArrowRoundBack } from 'react-icons/io'
import PhotoAlbum from 'react-photo-album'
import dynamic from 'next/dynamic'
import axios from 'axios'

const AsyncSelect = dynamic(() => import('react-select'), { ssr: false })

/**
 * 전체 미션보드.
 */
const OverviewPage = () => {

  const [images, setImages] = useState([])

  const options1 = [
    { value: 'team1', label: '1팀' },
    { value: 'team2', label: '2팀' },
    { value: 'team3', label: '3팀' },
    { value: 'team3', label: '4팀' },
  ]

  const options2 = [
    { value: 'parking1', label: '미션1' },
    { value: 'parking2', label: '미션2' },
    { value: 'parking3', label: '미션3' },
    { value: 'parking4', label: '미션4' },
    { value: 'parking5', label: '미션5' },
    { value: 'parking6', label: '미션6' },
    { value: 'parking7', label: '미션7' },
    { value: 'parking8', label: '미션8' },
  ]

  const customStyles = {
    control: (provided) => ({
      ...provided,
      minWidth: 40,
      marginRight: 10,
      borderColor: '#999999',
    }),
    indicatorSeparator: () => ({
      display: 'none',
    }),
    placeholder: (provided) => ({
      ...provided,
      color: '#999999',
    }),
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? '#ffffff' : '#999999',
      backgroundColor: state.isSelected ? '#666666' : '#ffffff',
      '&:hover': {
        backgroundColor: '#cccccc',
        color: '#666666',
      },
    }),
    input: (provided) => ({
      ...provided,
      display: 'none',
    }),
  }

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

  const onClickImage = (index) => {
    console.log('clicked', index)
  }

  const renderPhoto = ({ photo, wrapperStyle, renderDefaultPhoto }) => {
    return (
      <div style={{ ...wrapperStyle }}>
        <div className="w-full h-full rounded-lg"
             style={{ backgroundImage: `url(${photo.src})`, backgroundSize: 'cover' }}>
          <div className="flex w-full h-full items-end gap-2">
            <div className="text-white">test</div>
            <div className="text-white">test</div>
          </div>
        </div>
      </div>
    )
  }

  const CustomMultiValue = ({ index, getValue, ...props }) => {
    const selectedValues = getValue()
    const remaining = selectedValues.length - index - 1

    const containerStyle = {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      color: '#999999',
    }

    if (index === 0 && selectedValues.length > 1) {
      return (
        <div style={containerStyle}>
          {props.data.label} 외 {remaining}개
        </div>
      )
    } else if (index > 0) {
      return null
    } else {
      return (
        <div style={containerStyle}>
          {props.data.label}
        </div>
      )
    }
  }

  const DropdownIndicator = (props) => {
    console.log(props)
    return (
      <components.DropdownIndicator {...props}>
        <svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" className="css-tj5bde-Svg">
          <path fill="#999999"
                d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
        </svg>
      </components.DropdownIndicator>
    )
  }

  const ClearIndicator = (props) => {
    return (
      <components.ClearIndicator {...props}>
        <svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" className="css-tj5bde-Svg">
          <path fill="#999999"
                d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path>
        </svg>
      </components.ClearIndicator>
    )
  }

  return <div className="p-4">
    <div>
      <IoIosArrowRoundBack size={40} />
    </div>
    <div className="flex flex-col gap-2.5">
      <div className="text-2xl font-medium">전체 미션보드</div>
      <div className="text-sm text-[#666]">전체 참여율 70%</div>
    </div>
    <div className="mt-2">
      <div className="h-[270px] bg-gray-200">미션 보드 이미지</div>
    </div>
    <div>
      <div className="flex">
        <AsyncSelect
          isMulti
          options={options1}
          styles={customStyles}
          placeholder="팀"
          components={{ MultiValue: CustomMultiValue, DropdownIndicator, ClearIndicator }}
        />
        <AsyncSelect
          isMulti
          options={options2}
          styles={customStyles}
          placeholder="미션"
          components={{ MultiValue: CustomMultiValue, DropdownIndicator, ClearIndicator }}
        />
        <div className="flex items-center">
          <IoCheckmark />
        </div>
      </div>
      <div>
        <PhotoAlbum photos={images} layout="masonry" spacing={6} padding={0} columns={2} onClick={onClickImage}
                    renderPhoto={renderPhoto} />
      </div>
    </div>
  </div>
}

export default OverviewPage
