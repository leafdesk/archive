import Link from 'next/link'
import { useRouter } from 'next/router'

const Tab = ({ icon, text, path }) => {
  return (
    <Link href={path}>
      <div className="w-1/5 text-center">
        <img src={icon} alt={text} className="w-[24px] h-[24px] inline-block" />
        <div className="mt-1 text-center text-xs">{text}</div>
      </div>
    </Link>
  )
}

const Navbar = () => {
  const router = useRouter()

  return (
    <>
      {/* blank */}
      <div className="h-16" />

      <section
        className={`fixed bottom-0 flex items-center justify-around border-t border-[#D9D9D9] rounded-t-xl bg-white z-50 w-full pt-[9px] pb-[9px] shadow-[0_-4px_15px_-8px_rgba(0,0,0,0.3)]`}
      >
        <Tab
          text="lorem"
          path="/home"
          icon={
            router.pathname == '/home'
              ? '/icons/nav_home_on.svg'
              : '/icons/nav_home.svg'
          }
        />
        <Tab
          text="ipsum"
          path="/worship"
          icon={
            router.pathname == '/worship'
              ? '/icons/nav_worship_on.svg'
              : '/icons/nav_worship.svg'
          }
        />
        <Tab
          text="dolor"
          path={`/bible`}
          icon={
            router.pathname == '/bible'
              ? '/icons/nav_bible_on.svg'
              : '/icons/nav_bible.svg'
          }
        />
        <Tab
          text="sit"
          path="/contents"
          icon={
            router.pathname == '/contents'
              ? '/icons/nav_feed_on.svg'
              : '/icons/nav_feed.svg'
          }
        />
        <Tab
          text="amet"
          path="/menu"
          icon={
            router.pathname == '/menu'
              ? '/icons/nav_all_on.svg'
              : '/icons/nav_all.svg'
          }
        />
      </section>
    </>
  )
}

export default Navbar
