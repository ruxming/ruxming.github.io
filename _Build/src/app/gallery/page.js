'use client'
import { useState } from 'react'

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  // 示例照片数据 - 实际使用时替换为真实图片
  const photos = [
    {
      id: 1,
      src: "/images/gallery/photo1.jpg",
      alt: "风景照片1",
      title: "美丽的日落",
      description: "在海边拍摄的绚烂日落",
      category: "风景"
    },
    {
      id: 2,
      src: "/images/gallery/photo2.jpg",
      alt: "风景照片2",
      title: "山间小径",
      description: "徒步旅行中发现的美景",
      category: "风景"
    },
    {
      id: 3,
      src: "/images/gallery/photo3.jpg",
      alt: "生活照片1",
      title: "咖啡时光",
      description: "悠闲的午后咖啡时光",
      category: "生活"
    },
    {
      id: 4,
      src: "/images/gallery/photo4.jpg",
      alt: "旅行照片1",
      title: "古城探索",
      description: "探索古老城市的魅力",
      category: "旅行"
    },
    {
      id: 5,
      src: "/images/gallery/photo5.jpg",
      alt: "风景照片3",
      title: "星空夜景",
      description: "深夜拍摄的璀璨星空",
      category: "风景"
    },
    {
      id: 6,
      src: "/images/gallery/photo6.jpg",
      alt: "生活照片2",
      title: "工作空间",
      description: "我的日常工作环境",
      category: "生活"
    }
  ];

  const categories = ["全部", "风景", "生活", "旅行"];
  const [activeCategory, setActiveCategory] = useState("全部");

  const filteredPhotos = activeCategory === "全部" 
    ? photos 
    : photos.filter(photo => photo.category === activeCategory);

  const openModal = (photo) => {
    setSelectedImage(photo);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="page-container">
      <h1 className="page-title">我的相册</h1>
      
      <div className="gallery-intro section">
        <p>
          这里记录了我生活中的美好瞬间，包括旅行风景、日常生活和工作点滴。
          每一张照片都承载着特殊的回忆和故事。
        </p>
      </div>

      {/* 分类筛选 */}
      <div className="category-filter">
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* 照片网格 */}
      <div className="photo-grid">
        {filteredPhotos.map((photo) => (
          <div key={photo.id} className="photo-item" onClick={() => openModal(photo)}>
            <div className="photo-placeholder">
              <div className="photo-content">
                <h3>{photo.title}</h3>
                <p>{photo.description}</p>
                <span className="photo-category">{photo.category}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 模态框 */}
      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <div className="modal-image-placeholder">
              <h2>{selectedImage.title}</h2>
              <p>{selectedImage.description}</p>
              <span className="modal-category">{selectedImage.category}</span>
            </div>
          </div>
        </div>
      )}

      {/* 照片统计 */}
      <div className="gallery-stats section">
        <h2 className="section-title">📊 相册统计</h2>
        <div className="stats-grid">
          <div className="stat-item">
            <h3>{photos.length}</h3>
            <p>总照片数</p>
          </div>
          <div className="stat-item">
            <h3>{photos.filter(p => p.category === "风景").length}</h3>
            <p>风景照片</p>
          </div>
          <div className="stat-item">
            <h3>{photos.filter(p => p.category === "生活").length}</h3>
            <p>生活照片</p>
          </div>
          <div className="stat-item">
            <h3>{photos.filter(p => p.category === "旅行").length}</h3>
            <p>旅行照片</p>
          </div>
        </div>
      </div>
    </div>
  )
}
