'use client'

import ListRowButton from '@/components/ListRowButton'
import FluidSwiper from '@/components/FluidSwiper'

const FramerPage = () => {
  return (
    <section className="flex flex-col gap-2 p-5">
      <ListRowButton>ListRowButton</ListRowButton>

      <FluidSwiper size={3} itemWidth={200} gap={2} padding={5}>
        {['item 1', 'item 2', 'item 3'].map((item) => (
          <div
            key={item}
            className="min-w-[200px] h-[200px] bg-gray-50 border-2"
          >
            {item}
          </div>
        ))}
      </FluidSwiper>
    </section>
  )
}

export default FramerPage
