import '@/styles/globals.css'
import { Inter as FontSans } from 'next/font/google'

import { cn } from '@lab/sdk/utils/shadcn'

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
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
        )}
      >
        {children}
      </body>
    </html>
  )
}

export default RootLayout
