import { Suspense } from 'react'
import './globals.css'
import Loading from './loading'


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
        <Suspense fallback={<Loading />}>
          {children}
        </Suspense>
      </body>
    </html>
  )
}
