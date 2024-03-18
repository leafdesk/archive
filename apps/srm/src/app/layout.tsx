import '@/styles/globals.css'
import { Inter as FontSans } from 'next/font/google'

import { cn } from '@lab/sdk/utils/shadcn'
import Navigation from './navigation'

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        // Inter 폰트 설정.
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
        )}
      >
        {/* 네비게이션 */}
        <Navigation />

        {/* 페이지 내용 */}
        {children}
      </body>
    </html>
  )
}

export default RootLayout
