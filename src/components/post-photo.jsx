'use client'

import { useState } from 'react'
import ImageBadge from '@/components/image-badge'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const PostPhoto = ({ photo, missionInfo }) => {
  const [isLoading, setLoading] = useState(true)

  const img = new Image();
  img.src = photo.src;
  img.onload = () => {setLoading(false)};

  if (isLoading) return (
    <div className="w-full h-full rounded-lg">
      <Skeleton height="100%"></Skeleton>
    </div>
  )
  return (
      <div className="w-full h-full rounded-lg"
           style={{ backgroundImage: `url(${photo.src})`, backgroundSize: 'cover' }}>
        <div className="flex w-full h-full items-end gap-1.5 pl-2 pb-2">
          <ImageBadge text="1팀" bgColor="#222222" />
          <ImageBadge text={missionInfo.label} bgColor={missionInfo.bgColor} color={missionInfo.color} />
        </div>
      </div>
  )
}

export default PostPhoto
