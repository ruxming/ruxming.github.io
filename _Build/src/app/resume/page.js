export default function Resume() {
  const highlights = [
    "5年+ 全栈开发经验",
    "精通 React、Next.js、Node.js 等现代技术栈",
    "成功交付 20+ 个项目",
    "团队协作和项目管理经验丰富",
    "持续学习新技术，保持技术敏感度"
  ];

  const experiences = [
    {
      company: "科技创新有限公司",
      position: "高级前端开发工程师",
      period: "2022.03 - 至今",
      responsibilities: [
        "负责公司核心产品的前端架构设计和开发",
        "带领 3 人前端团队完成多个重要项目",
        "优化应用性能，提升用户体验",
        "制定前端开发规范和最佳实践"
      ]
    },
    {
      company: "互联网科技公司",
      position: "全栈开发工程师",
      period: "2020.06 - 2022.02",
      responsibilities: [
        "参与产品从 0 到 1 的完整开发流程",
        "负责前后端接口设计和实现",
        "维护和优化现有系统",
        "参与技术选型和架构决策"
      ]
    },
    {
      company: "软件开发公司",
      position: "初级开发工程师",
      period: "2019.07 - 2020.05",
      responsibilities: [
        "参与 Web 应用的开发和维护",
        "学习和掌握现代前端技术栈",
        "协助完成项目需求分析和设计",
        "参与代码审查和测试工作"
      ]
    }
  ];

  const skills = {
    frontend: ["React", "Next.js", "Vue.js", "TypeScript", "HTML5", "CSS3", "Sass"],
    backend: ["Node.js", "Express", "Python", "Django", "MySQL", "MongoDB"],
    tools: ["Git", "Docker", "Webpack", "Vite", "Jest", "Figma"],
    others: ["项目管理", "团队协作", "敏捷开发", "UI/UX设计"]
  };

  const education = {
    degree: "计算机科学与技术 学士学位",
    school: "某某大学",
    period: "2015.09 - 2019.06",
    achievements: [
      "GPA: 3.8/4.0",
      "获得校级优秀学生奖学金",
      "参与多个校内技术项目",
      "担任计算机社团技术部长"
    ]
  };

  return (
    <div className="page-container">
      <h1 className="page-title">个人简历</h1>

      {/* 高光总结 */}
      <div className="highlights-section section">
        <h2 className="section-title">🌟 职业亮点</h2>
        <div className="highlights-grid">
          {highlights.map((highlight, index) => (
            <div key={index} className="highlight-item">
              <span className="highlight-icon">✓</span>
              <span>{highlight}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 工作经验 */}
      <div className="experience-section section">
        <h2 className="section-title">💼 工作经验</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="job-title">{exp.position}</h3>
                <h4 className="company-name">{exp.company}</h4>
                <p className="job-period">{exp.period}</p>
                <ul className="responsibilities">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 技能专长 */}
      <div className="skills-section section">
        <h2 className="section-title">🛠️ 技能专长</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>前端技术</h3>
            <div className="skill-tags">
              {skills.frontend.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
          <div className="skill-category">
            <h3>后端技术</h3>
            <div className="skill-tags">
              {skills.backend.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
          <div className="skill-category">
            <h3>开发工具</h3>
            <div className="skill-tags">
              {skills.tools.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
          <div className="skill-category">
            <h3>其他能力</h3>
            <div className="skill-tags">
              {skills.others.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 教育背景 */}
      <div className="education-section section">
        <h2 className="section-title">🎓 教育背景</h2>
        <div className="education-content">
          <h3>{education.degree}</h3>
          <h4>{education.school}</h4>
          <p className="education-period">{education.period}</p>
          <ul className="achievements">
            {education.achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* 联系方式 */}
      <div className="contact-section section">
        <h2 className="section-title">📧 联系方式</h2>
        <div className="contact-info">
          <p><strong>邮箱：</strong> ruxming@example.com</p>
          <p><strong>GitHub：</strong> <a href="https://github.com/ruxming" target="_blank" rel="noopener noreferrer">github.com/ruxming</a></p>
          <p><strong>LinkedIn：</strong> <a href="#" target="_blank" rel="noopener noreferrer">linkedin.com/in/ruxming</a></p>
        </div>
      </div>
    </div>
  )
}
