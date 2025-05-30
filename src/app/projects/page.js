export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "智能任务管理器",
      description: "一个功能强大的桌面任务管理应用，支持项目分组、时间跟踪和团队协作。采用 Electron + React 技术栈开发。",
      technologies: ["Electron", "React", "Node.js", "SQLite"],
      downloadLink: "#",
      githubLink: "#",
      features: [
        "直观的任务管理界面",
        "时间跟踪和统计",
        "团队协作功能",
        "数据同步和备份"
      ]
    },
    {
      id: 2,
      title: "个人财务助手",
      description: "帮助用户管理个人财务的Web应用，包括收支记录、预算规划和投资跟踪功能。",
      technologies: ["React", "Next.js", "Chart.js", "Firebase"],
      downloadLink: "#",
      githubLink: "#",
      features: [
        "收支记录和分类",
        "预算制定和监控",
        "投资组合跟踪",
        "财务报表生成"
      ]
    },
    {
      id: 3,
      title: "代码片段管理工具",
      description: "为开发者设计的代码片段管理工具，支持多种编程语言的语法高亮和智能搜索。",
      technologies: ["Vue.js", "Express.js", "MongoDB", "Prism.js"],
      downloadLink: "#",
      githubLink: "#",
      features: [
        "多语言语法高亮",
        "智能标签分类",
        "全文搜索功能",
        "导入导出功能"
      ]
    },
    {
      id: 4,
      title: "图像处理工具箱",
      description: "集成多种图像处理功能的桌面应用，包括格式转换、批量处理和滤镜效果。",
      technologies: ["Python", "Tkinter", "Pillow", "OpenCV"],
      downloadLink: "#",
      githubLink: "#",
      features: [
        "批量格式转换",
        "图像尺寸调整",
        "滤镜和特效",
        "水印添加功能"
      ]
    }
  ];

  return (
    <div className="page-container">
      <h1 className="page-title">我的软件作品</h1>
      
      <div className="projects-intro section">
        <p>
          以下是我开发的一些软件项目，涵盖了桌面应用、Web应用等不同类型。
          每个项目都体现了我对技术的热情和对用户体验的追求。
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card card">
            <h3 className="card-title">{project.title}</h3>
            <p className="card-description">{project.description}</p>
            
            <div className="project-technologies">
              <h4>技术栈：</h4>
              <div className="tech-tags">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>

            <div className="project-features">
              <h4>主要功能：</h4>
              <ul>
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="project-actions">
              <a href={project.downloadLink} className="btn" target="_blank" rel="noopener noreferrer">
                下载应用
              </a>
              <a href={project.githubLink} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                查看源码
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
