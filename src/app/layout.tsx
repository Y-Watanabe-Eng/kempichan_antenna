import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'けんぴ。ちゃんてな',
  description: 'けんぴ。さんのYoutube動画一覧',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>
        {children}
      </body>
    </html>
  )
}
