import { useState } from 'react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('about')

  const skills = [
    { name: '前端开发', level: 85 },
    { name: '后端架构', level: 70 },
    { name: 'UI 设计', level: 60 },
    { name: '数据分析', level: 75 },
  ]

  const projects = [
    { title: '山水画卷', desc: '一个基于 Canvas 的中国风水墨动画项目', tag: '创意' },
    { title: '诗词雅集', desc: '古诗词检索与赏析平台，收录唐宋名篇三千首', tag: '文化' },
    { title: '节气日历', desc: '二十四节气养生与农事提醒小程序', tag: '工具' },
  ]

  return (
    <div className="page">
      {/* 顶部装饰 */}
      <div className="cloud-decoration">
        <span className="cloud cloud-1">☁</span>
        <span className="cloud cloud-2">☁</span>
      </div>

      {/* 头部 */}
      <header className="header">
        <div className="avatar">
          <div className="avatar-inner">
            <span className="avatar-char">墨</span>
          </div>
          <div className="seal">印</div>
        </div>
        <div className="intro">
          <h1 className="name">张 墨 白</h1>
          <p className="title">全栈工程师 · 独立开发者</p>
          <p className="motto">「 路漫漫其修远兮，吾将上下而求索 」</p>
        </div>
      </header>

      {/* 导航 */}
      <nav className="nav">
        {['about', 'skills', 'projects', 'contact'].map((item) => (
          <button
            key={item}
            className={`nav-item ${activeSection === item ? 'active' : ''}`}
            onClick={() => setActiveSection(item)}
          >
            {item === 'about' && '关于'}
            {item === 'skills' && '技艺'}
            {item === 'projects' && '作品'}
            {item === 'contact' && '联络'}
          </button>
        ))}
      </nav>

      {/* 内容区 */}
      <main className="content">
        {activeSection === 'about' && (
          <section className="section about">
            <h2 className="section-title">
              <span className="title-line"></span>
              关 于 我
              <span className="title-line"></span>
            </h2>
            <div className="about-text">
              <p>
                你好，我是张墨白，一名来自杭州的软件工程师。热爱编程，也热爱传统文化。
                工作之余喜欢写毛笔字、读古诗词、爬爬山，偶尔也会做点小玩具。
              </p>
              <p>
                相信技术应当服务于人，代码也可以写得像诗一样优雅。
                目前专注于 Web 全栈开发与用户体验设计，希望做出有温度的产品。
              </p>
            </div>
            <div className="info-grid">
              <div className="info-item">
                <span className="info-label">所在地</span>
                <span className="info-value">浙江 · 杭州</span>
              </div>
              <div className="info-item">
                <span className="info-label">职业</span>
                <span className="info-value">软件工程师</span>
              </div>
              <div className="info-item">
                <span className="info-label">经验</span>
                <span className="info-value">五年有余</span>
              </div>
              <div className="info-item">
                <span className="info-label">状态</span>
                <span className="info-value status-online">开放合作</span>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'skills' && (
          <section className="section skills">
            <h2 className="section-title">
              <span className="title-line"></span>
              技 艺
              <span className="title-line"></span>
            </h2>
            <div className="skill-list">
              {skills.map((skill) => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-fill"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="hobbies">
              <h3>闲情逸致</h3>
              <div className="hobby-tags">
                {['书法', '诗词', '摄影', '登山', '茶道', '围棋'].map((h) => (
                  <span key={h} className="hobby-tag">{h}</span>
                ))}
              </div>
            </div>
          </section>
        )}

        {activeSection === 'projects' && (
          <section className="section projects">
            <h2 className="section-title">
              <span className="title-line"></span>
              作 品
              <span className="title-line"></span>
            </h2>
            <div className="project-list">
              {projects.map((p) => (
                <div key={p.title} className="project-card">
                  <div className="project-tag">{p.tag}</div>
                  <h3 className="project-title">{p.title}</h3>
                  <p className="project-desc">{p.desc}</p>
                  <a href="#" className="project-link">查看详情 →</a>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeSection === 'contact' && (
          <section className="section contact">
            <h2 className="section-title">
              <span className="title-line"></span>
              联 络
              <span className="title-line"></span>
            </h2>
            <div className="contact-list">
              <a href="mailto:zhangmobai@example.com" className="contact-item">
                <span className="contact-icon">✉</span>
                <span className="contact-text">zhangmobai@example.com</span>
              </a>
              <a href="#" className="contact-item">
                <span className="contact-icon">⌨</span>
                <span className="contact-text">github.com/zhangmobai</span>
              </a>
              <a href="#" className="contact-item">
                <span className="contact-icon">✎</span>
                <span className="contact-text">微信：zhangmobai_dev</span>
              </a>
            </div>
            <p className="contact-note">欢迎交流技术、文化与合作机会</p>
          </section>
        )}
      </main>

      {/* 页脚 */}
      <footer className="footer">
        <p>© 2026 张墨白 · 以代码为笔，以网络为纸</p>
      </footer>
    </div>
  )
}

export default App
