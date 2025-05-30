'use client'
import { useState, useRef, useEffect } from 'react'

export default function Music() {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  // 示例音乐数据 - 实际使用时替换为真实音频文件
  const playlist = [
    {
      id: 1,
      title: "宁静的夜晚",
      artist: "Ruxming",
      album: "个人作品集",
      duration: "3:45",
      src: "/music/track1.mp3", // 实际使用时需要添加音频文件
      cover: "/images/music/cover1.jpg"
    },
    {
      id: 2,
      title: "代码之歌",
      artist: "Ruxming",
      album: "个人作品集",
      duration: "4:12",
      src: "/music/track2.mp3",
      cover: "/images/music/cover2.jpg"
    },
    {
      id: 3,
      title: "梦想启航",
      artist: "Ruxming",
      album: "个人作品集",
      duration: "3:28",
      src: "/music/track3.mp3",
      cover: "/images/music/cover3.jpg"
    },
    {
      id: 4,
      title: "午后阳光",
      artist: "Ruxming",
      album: "个人作品集",
      duration: "5:03",
      src: "/music/track4.mp3",
      cover: "/images/music/cover4.jpg"
    }
  ];

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const updateTime = () => setCurrentTime(audio.currentTime);
      const updateDuration = () => setDuration(audio.duration);
      
      audio.addEventListener('timeupdate', updateTime);
      audio.addEventListener('loadedmetadata', updateDuration);
      
      return () => {
        audio.removeEventListener('timeupdate', updateTime);
        audio.removeEventListener('loadedmetadata', updateDuration);
      };
    }
  }, [currentTrack]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const playTrack = (index) => {
    setCurrentTrack(index);
    setIsPlaying(true);
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play();
      }
    }, 100);
  };

  const nextTrack = () => {
    const nextIndex = (currentTrack + 1) % playlist.length;
    playTrack(nextIndex);
  };

  const prevTrack = () => {
    const prevIndex = currentTrack === 0 ? playlist.length - 1 : currentTrack - 1;
    playTrack(prevIndex);
  };

  const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleProgressClick = (e) => {
    const audio = audioRef.current;
    if (audio && duration) {
      const rect = e.currentTarget.getBoundingClientRect();
      const percent = (e.clientX - rect.left) / rect.width;
      const newTime = percent * duration;
      audio.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  return (
    <div className="page-container">
      <h1 className="page-title">我的音乐空间</h1>
      
      <div className="music-intro section">
        <p>
          欢迎来到我的音乐空间！这里收录了我喜欢的音乐作品，
          包括一些个人创作和精选的音乐。让音乐陪伴我们度过美好时光。
        </p>
      </div>

      <div className="music-player-container">
        {/* 音频元素 */}
        <audio
          ref={audioRef}
          src={playlist[currentTrack]?.src}
          onEnded={nextTrack}
        />

        {/* 当前播放信息 */}
        <div className="now-playing section">
          <div className="track-info">
            <div className="album-cover">
              <div className="cover-placeholder">
                <span>🎵</span>
              </div>
            </div>
            <div className="track-details">
              <h2>{playlist[currentTrack]?.title}</h2>
              <p>{playlist[currentTrack]?.artist}</p>
              <p className="album">{playlist[currentTrack]?.album}</p>
            </div>
          </div>

          {/* 播放控制 */}
          <div className="player-controls">
            <button className="control-btn" onClick={prevTrack}>⏮</button>
            <button className="play-btn" onClick={togglePlay}>
              {isPlaying ? '⏸' : '▶'}
            </button>
            <button className="control-btn" onClick={nextTrack}>⏭</button>
          </div>

          {/* 进度条 */}
          <div className="progress-container">
            <span className="time">{formatTime(currentTime)}</span>
            <div className="progress-bar" onClick={handleProgressClick}>
              <div 
                className="progress-fill"
                style={{ width: duration ? `${(currentTime / duration) * 100}%` : '0%' }}
              ></div>
            </div>
            <span className="time">{formatTime(duration)}</span>
          </div>
        </div>

        {/* 播放列表 */}
        <div className="playlist section">
          <h2 className="section-title">播放列表</h2>
          <div className="playlist-items">
            {playlist.map((track, index) => (
              <div 
                key={track.id} 
                className={`playlist-item ${index === currentTrack ? 'active' : ''}`}
                onClick={() => playTrack(index)}
              >
                <div className="track-number">
                  {index === currentTrack && isPlaying ? '🔊' : index + 1}
                </div>
                <div className="track-info-list">
                  <h4>{track.title}</h4>
                  <p>{track.artist}</p>
                </div>
                <div className="track-duration">{track.duration}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 音乐统计 */}
        <div className="music-stats section">
          <h2 className="section-title">🎼 音乐统计</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <h3>{playlist.length}</h3>
              <p>总曲目数</p>
            </div>
            <div className="stat-item">
              <h3>1</h3>
              <p>专辑数量</p>
            </div>
            <div className="stat-item">
              <h3>16:28</h3>
              <p>总时长</p>
            </div>
            <div className="stat-item">
              <h3>2024</h3>
              <p>创作年份</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
