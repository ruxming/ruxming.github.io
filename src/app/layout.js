import './globals.css'
import Navigation from '../components/Navigation'

export const metadata = {
  title: 'Ruxming - 个人作品集',
  description: '欢迎来到我的个人作品集网站，展示我的软件作品、简历、相册和音乐。',
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>
        <Navigation />
        <main className="main-content">
          {children}
        </main>
        <footer className="footer">
          <p>&copy; 2024 Ruxming. All rights reserved.</p>
        </footer>
      </body>
    </html>
  )
}
