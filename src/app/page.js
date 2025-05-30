import Link from 'next/link'

export default function Home() {
  return (
    <div className="page-container">
      <div className="hero-section">
        <h1 className="page-title">欢迎来到我的个人作品集</h1>
        <div className="hero-content">
          <div className="hero-text">
            <h2>你好，我是 Ruxming</h2>
            <p className="hero-description">
              一名充满热情的软件开发者，专注于创造有意义的数字体验。
              在这里，您可以了解我的技术作品、职业经历，以及我的生活点滴。
            </p>
            <div className="hero-buttons">
              <Link href="/projects" className="btn">查看我的作品</Link>
              <Link href="/resume" className="btn btn-secondary">了解我的经历</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="features-section">
        <div className="grid grid-2">
          <div className="feature-card card">
            <h3 className="card-title">💻 软件作品</h3>
            <p className="card-description">
              展示我开发的各种软件项目，包括桌面应用、Web应用和移动应用。
            </p>
            <Link href="/projects" className="btn">查看作品</Link>
          </div>

          <div className="feature-card card">
            <h3 className="card-title">📄 个人简历</h3>
            <p className="card-description">
              了解我的教育背景、工作经验和技能专长。
            </p>
            <Link href="/resume" className="btn">查看简历</Link>
          </div>

          <div className="feature-card card">
            <h3 className="card-title">📸 生活相册</h3>
            <p className="card-description">
              分享我的生活瞬间和旅行回忆。
            </p>
            <Link href="/gallery" className="btn">浏览相册</Link>
          </div>

          <div className="feature-card card">
            <h3 className="card-title">🎵 音乐空间</h3>
            <p className="card-description">
              聆听我喜欢的音乐，感受音乐带来的美好。
            </p>
            <Link href="/music" className="btn">播放音乐</Link>
          </div>
        </div>
      </div>

      <div className="about-section section">
        <h2 className="section-title">关于我</h2>
        <p>
          我是一名热爱技术的开发者，致力于通过代码创造价值。我相信技术可以改变世界，
          每一行代码都有其存在的意义。在工作之余，我喜欢摄影、音乐和旅行，
          这些爱好让我的生活更加丰富多彩。
        </p>
      </div>
    </div>
  )
}
