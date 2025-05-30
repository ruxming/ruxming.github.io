import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link href="/" className="nav-logo">
          Ruxming
        </Link>
        <ul className="nav-links">
          <li><Link href="/">首页</Link></li>
          <li><Link href="/projects">作品展示</Link></li>
          <li><Link href="/resume">简历</Link></li>
          <li><Link href="/gallery">相册</Link></li>
          <li><Link href="/music">音乐</Link></li>
        </ul>
      </div>
    </nav>
  )
}
