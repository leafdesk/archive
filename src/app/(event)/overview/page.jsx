'use client' // Next.js v14 에서 사용자 상호 작용을 위해 최상단 고정 필수.

import { useEffect, useState } from 'react'
import styled from 'styled-components'
import PhotoAlbum from 'react-photo-album'
import axios from 'axios'

/**
 * 전체 미션보드.
 */

const Container = styled.div`
    max-width: 420px;
    min-width: 280px;
    padding: 16px;
    background-color: #F7F7F7; // 추후 공통 color 관리
`
const OverviewPage = () => {

  const [images, setImages] = useState([])

  useEffect( () => {
    getImages()
  }, [])

  const getImages = async () => {
    const response = await axios.get("https://cba.sungrak.or.kr:9000/event/images?eventName=2024W&classification=0")
    console.log(response.data)
    const images = response.data.map( (image) => {
      return {
        src: image.url,
        width: image.width,
        height: image.height,
      }
    })
    console.log(images)
    setImages(images)
  }

  const onClickImage = (index) => {
    console.log('clicked', index)
  }

  const renderPhoto = ({ photo, wrapperStyle, renderDefaultPhoto }) => {
    console.log(renderDefaultPhoto)
    return (
      <div style={{ ...wrapperStyle }}>
        <div className='w-full h-full' style={{backgroundImage: `url(${photo.src})`, backgroundSize: 'cover'}}>
          <div className="flex w-full h-full items-end gap-2">
            <div className="text-white">test</div>
            <div className="text-white">test</div>
          </div>
        </div>
      </div>
    )
  }


  return <Container>
    <div>
      뒤로가기
    </div>
    <div>
      <div>전체 미션보드</div>
      <div className="h-48 bg-gray-200">미션 보드 이미지</div>
      <div>전체 참여율</div>
    </div>
    <div>
      <div>필터 영역</div>
      <div>
        <PhotoAlbum photos={images} layout="masonry" spacing={0} padding={3} columns={2} onClick={onClickImage} renderPhoto={renderPhoto} />
      </div>
    </div>
  </Container>
}

export default OverviewPage
