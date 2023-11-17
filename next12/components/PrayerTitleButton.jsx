import { useRouter } from 'next/router'

const PrayerTitleButton = () => {
  const router = useRouter()

  return (
    <div className="py-5 px-5" onClick={() => router.push('/prayer')}>
      <div
        className={`flex items-center justify-center bg-[#EFEAF1] h-[53px] rounded-[5px] gap-1`}
      >
        <span className="text-base font-normal text-[#222222]">
          Lorem ipsum dolor
        </span>
        <span className="text-base font-medium text-[#7D3C97]">sit amet</span>
      </div>
    </div>
  )
}

export default PrayerTitleButton
