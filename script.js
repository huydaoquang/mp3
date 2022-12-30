const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const PlAYER_STORAGE_KEY = "F8_PLAYER";

const player = $(".player");
const cd = $(".cd");
const heading = $("header h2");
const cdThumb = $(".cd-thumb");
const audio = $("#audio");
const playBtn = $(".btn-toggle-play");
const progress = $("#progress");
const prevBtn = $(".btn-prev");
const nextBtn = $(".btn-next");
const randomBtn = $(".btn-random");
const repeatBtn = $(".btn-repeat");
const playlist = $(".playlist");

const app = {
  currentIndex: 0,
  isPlaying: false,
  isRandom: false,
  isRepeat: false,
  config: {},
  // (1/2) Uncomment the line below to use localStorage
  // config: JSON.parse(localStorage.getItem(PlAYER_STORAGE_KEY)) || {},
  songs: [
    {
      name: " Alan Walker Greatest Hits Full Album 2022",
      singer: " Alan Walker",
      path: "./music/Y2Mate.is - Alan Walker 노래 모음 광고없는 - Top 20 Alan Walker Songs 2021-3U2dNKBM28o-160k-1654873255654.mp3",
      image:
        "https://i.ytimg.com/vi/smwSXm7816M/sddefault.jpg?sqp=-oaymwEmCIAFEOAD8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGD4gWShyMA8=&rs=AOn4CLC2psozAamVkOcxjCgLzYNDGsCRDA",
    },
    {
      name: "Top 15 Bản Nhạc EDM Nghe Hoài Không Chán | Nhạc Điện Tử Gây Nghiện Hay Nhất",
      singer: "YING",
      path: "./music/Y2Mate.is - Top 15 Bản Nhạc EDM Nghe Hoài Không Chán  Nhạc Điện Tử Gây Nghiện Hay Nhất  YING-C3UJBMAy5xE-160k-1659816669348.mp3",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCSeKBkpOBzMe6HQ_AhrZqXw23P5SgCnOYx_M0571Xcb9aEYlru_hhB3vczkWh6pNCY8I&usqp=CAU",
    },
    {
      name: "Sao Cũng Được Lofi - Thà Yêu Lấy Một Người Bình Thường Để Đêm Về Thì Thầm Nhớ Thương Lofi Chill Buồn",
      singer: "gió đông chill",
      path: "./music/y2mate.com - Sao Cũng Được Lofi  Thà Yêu Lấy Một Người Bình Thường Để Đêm Về Thì Thầm Nhớ Thương Lofi Chill Buồn.mp3",
      image:
        "https://i.pinimg.com/originals/6c/a8/2d/6ca82d50ef05f6b7b00173c8e329cb00.jpg",
    },
    {
      name: "Nắng Nhẹ Nhàng Êm Êm Giấc Ngủ Dịu Dàng - Sao Cũng Được Lofi - Thà Yêu Lấy Một Người Bình Thường Lofi",
      singer: "gió đông chill",
      path: "./music/y2mate.com - Nắng Nhẹ Nhàng Êm Êm Giấc Ngủ Dịu Dàng  Sao Cũng Được Lofi  Thà Yêu Lấy Một Người Bình Thường Lofi.mp3",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrWkCzqWaJBH42JjMEGgMiCopDKRRmn6ChaO2H9CQ4aHDZ3rhoCvxxlE_iBGi4ecPrXZ4&usqp=CAU",
    },
    {
      name: "playlist j.fla cover ",
      singer: "cover by J.Fla",
      path: "./music/Y2Mate.is - Lagu Barat Terbaru  2018 Terpopuler Di Indonesia  Lagu Cocok Untuk Menemani Saat Kerja dan Santai-vSsKK6G117I-160k-1659830309475.mp3",
      image:
        "https://i.ytimg.com/vi/f-A82N3Bht0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDwlHHGVJ-wOfkfYme0born9EhTCg",
    },
    {
      name: "Monsters",
      singer: "Katie sky",
      path: "./music/Y2Mate.is - Monsters - Katie Sky (Lyrics + Vietsub) ♫-ritnXLZHgmc-160k-1659815161250.mp3",
      image:
        "https://avatar-ex-swe.nixcdn.com/song/2019/09/05/2/6/c/4/1567654853186_640.jpg",
    },
    {
      name: "Ignite",
      singer: " Alan Walker",
      path: "./music/Y2Mate.is - K-391 & Alan Walker - Ignite (feat. Julie Bergan & Seungri)-Az-mGR-CehY-160k-1654505353795.mp3",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNFEvLhTeebd_u2K40GSanlBndnfS3rcPi9bsoxjKgV37BxyTYDTbd-mdcYRVQDMVImVM&usqp=CAU",
    },
    {
      name: "Shape Of You ",
      singer: "cover by J.Fla",
      path: "./music/Y2Mate.is - Ed Sheeran - Shape Of You ( cover by J.Fla )-MhQKe-aERsU-128k-1654207369818.mp3",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw6vtSC_g9RhouQI5xOFTkQ_bURVsxWdKHm9Vu3haXEA&s",
    },

    {
      name: "Khắc Cốt Ghi Tâm",
      singer: " Karik, Seachains, Dlow",
      path: "./music/Y2Mate.is - Karik, Seachains, Dlow - Khắc Cốt Ghi Tâm - Team Karik  Rap Việt - Mùa 2 [MV Lyrics]-FpdWpH7mPqA-160k-1659818288065.mp3",
      image: "https://2sao.vietnamnetjsc.vn/images/2022/03/15/10/52/rv2.png",
    },
    {
      name: "Cảm Nhận ",
      singer: "Seachains",
      path: "./music/Y2Mate.is - Seachains - Cảm Nhận - Team Karik  Rap Việt - Mùa 2  [MV Lyrics]-0DYwShgG4ak-160k-1659818281979.mp3",
      image:
        "https://2sao.vietnamnetjsc.vn/images/2021/10/16/23/43/rap-viet-Seachains-2.jpg",
    },
    {
      name: "Cánh Cửa Và Người Đàn Ông ",
      singer: "Seachains",
      path: "./music/Y2Mate.is - Seachains - Cánh Cửa Và Người Đàn Ông - Team Karik  Rap Việt - Mùa 2 [MV Lyrics]-O_vzVAKTsV8-160k-1659818194559.mp3",
      image:
        "https://media.vov.vn/sites/default/files/styles/large/public/2022-01/vie_channel_vieon_photos_rv2_seachains_2.jpg",
    },
    {
      name: "Không Phải Tại Nó ",
      singer: "Mai Ngô",
      path: "./music/Y2Mate.is - Mai Ngô - Không Phải Tại Nó - Team Rhymastic  Rap Việt - Mùa 2  [MV Lyrics]-XekAF8bX51U-160k-1655676864272.mp3",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR63gb1izy5ZOiDRVwLkmo0u1bBnsJ9ob7fYw&usqp=CAU",
    },
    {
      name: "LÀ BẠN KHÔNG THỂ YÊU ",
      singer: "LOU HOÀNG",
      path: "./music/Y2Mate.is - LÀ BẠN KHÔNG THỂ YÊU  LOU HOÀNG  STAGE VERSION-TLVK0iTDev0-160k-1654208356514.mp3",
      image:
        "https://35express.org/wp-content/uploads/2021/01/lou-hoang-la-ai-2-35express.jpg",
    },
    {
      name: " Phụ Tình",
      singer: "Trịnh Đình Quang",
      path: "./music/Y2Mate.is - Phụ Tình - Trịnh Đình Quang-QjLtWdD75WY-160k-1659831425587.mp3",
      image:
        "https://i.ytimg.com/vi/QjLtWdD75WY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBCcwHMh0bExsak-gR0us1dGCdztg",
    },
    {
      name: " CON TRAI CƯNG",
      singer: "K-ICM ft B Ray",
      path: "./music/Y2Mate.is - CON TRAI CƯNG (Piano Version)  K-ICM ft B Ray  MV Official-l4RyIm0dZyo-160k-1655771829399.mp3",
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/7/1/b/1/71b166227f44f5a2ea975e1f2dcf4601.jpg",
    },
    {
      name: " Kẻ Theo Đuổi Ánh Sáng",
      singer: "Huy Vạc x Tiến Nguyễn",
      path: "./music/Y2Mate.is - Kẻ Theo Đuổi Ánh Sáng - Huy Vạc x Tiến Nguyễn (Official MV)-2g2QOisCvhs-160k-1659913603563.mp3",
      image:
        "https://images.genius.com/b300e31633322383f2c392c303707d78.500x500x1.jpg",
    },
    {
      name: " Âm Thầm Bên Em",
      singer: "(Lofi Ver. By Besu) - Sơn Tùng M-TP",
      path: "./music/Y2Mate.is - Âm Thầm Bên Em (Lofi Ver. By Besu) - Sơn Tùng M-TP  Khi bên anh em thấy điều chi...-bTwQe2apZPk-160k-1659913737323.mp3",
      image: "https://i1.sndcdn.com/artworks-000125406918-vc8ej9-t500x500.jpg",
    },
  ],
  setConfig: function (key, value) {
    this.config[key] = value;
    // (2/2) Uncomment the line below to use localStorage
    // localStorage.setItem(PlAYER_STORAGE_KEY, JSON.stringify(this.config));
  },
  render: function () {
    const htmls = this.songs.map((song, index) => {
      return `
                        <div class="song ${
                          index === this.currentIndex ? "active" : ""
                        }" data-index="${index}">
                            <div class="thumb"
                                style="background-image: url('${song.image}')">
                            </div>
                            <div class="body">
                                <h3 class="title">${song.name}</h3>
                                <p class="author">${song.singer}</p>
                            </div>
                            <div class="option">
                                <i class="fas fa-ellipsis-h"></i>
                            </div>
                        </div>
                    `;
    });
    playlist.innerHTML = htmls.join("");
  },
  defineProperties: function () {
    Object.defineProperty(this, "currentSong", {
      get: function () {
        return this.songs[this.currentIndex];
      },
    });
  },
  handleEvents: function () {
    const _this = this;
    const cdWidth = cd.offsetWidth;

    // Xử lý CD quay / dừng
    // Handle CD spins / stops
    const cdThumbAnimate = cdThumb.animate([{ transform: "rotate(360deg)" }], {
      duration: 10000, // 10 seconds
      iterations: Infinity,
    });
    cdThumbAnimate.pause();

    // Xử lý phóng to / thu nhỏ CD
    // Handles CD enlargement / reduction
    document.onscroll = function () {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const newCdWidth = cdWidth - scrollTop;

      cd.style.width = newCdWidth > 0 ? newCdWidth + "px" : 0;
      cd.style.opacity = newCdWidth / cdWidth;
    };

    // Xử lý khi click play
    // Handle when click play
    playBtn.onclick = function () {
      if (_this.isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
    };

    // Khi song được play
    // When the song is played
    audio.onplay = function () {
      _this.isPlaying = true;
      player.classList.add("playing");
      cdThumbAnimate.play();
    };

    // Khi song bị pause
    // When the song is pause
    audio.onpause = function () {
      _this.isPlaying = false;
      player.classList.remove("playing");
      cdThumbAnimate.pause();
    };

    // Khi tiến độ bài hát thay đổi
    // When the song progress changes
    audio.ontimeupdate = function () {
      if (audio.duration) {
        const progressPercent = Math.floor(
          (audio.currentTime / audio.duration) * 100
        );
        progress.value = progressPercent;
      }
    };

    // Xử lý khi tua song
    // Handling when seek
    progress.onchange = function (e) {
      const seekTime = (audio.duration / 100) * e.target.value;
      audio.currentTime = seekTime;
    };

    // Khi next song
    // When next song
    nextBtn.onclick = function () {
      if (_this.isRandom) {
        _this.playRandomSong();
      } else {
        _this.nextSong();
      }
      audio.play();
      _this.render();
      _this.scrollToActiveSong();
    };

    // Khi prev song
    // When prev song
    prevBtn.onclick = function () {
      if (_this.isRandom) {
        _this.playRandomSong();
      } else {
        _this.prevSong();
      }
      audio.play();
      _this.render();
      _this.scrollToActiveSong();
    };

    // Xử lý bật / tắt random song
    // Handling on / off random song
    randomBtn.onclick = function (e) {
      _this.isRandom = !_this.isRandom;
      _this.setConfig("isRandom", _this.isRandom);
      randomBtn.classList.toggle("active", _this.isRandom);
    };

    // Xử lý lặp lại một song
    // Single-parallel repeat processing
    repeatBtn.onclick = function (e) {
      _this.isRepeat = !_this.isRepeat;
      _this.setConfig("isRepeat", _this.isRepeat);
      repeatBtn.classList.toggle("active", _this.isRepeat);
    };

    // Xử lý next song khi audio ended
    // Handle next song when audio ended
    audio.onended = function () {
      if (_this.isRepeat) {
        audio.play();
      } else {
        nextBtn.click();
      }
    };

    // Lắng nghe hành vi click vào playlist
    // Listen to playlist clicks
    playlist.onclick = function (e) {
      const songNode = e.target.closest(".song:not(.active)");

      if (songNode || e.target.closest(".option")) {
        // Xử lý khi click vào song
        // Handle when clicking on the song
        if (songNode) {
          _this.currentIndex = Number(songNode.dataset.index);
          _this.loadCurrentSong();
          _this.render();
          audio.play();
        }

        // Xử lý khi click vào song option
        // Handle when clicking on the song option
        if (e.target.closest(".option")) {
        }
      }
    };
  },
  scrollToActiveSong: function () {
    setTimeout(() => {
      $(".song.active").scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }, 300);
  },
  loadCurrentSong: function () {
    heading.textContent = this.currentSong.name;
    cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
    audio.src = this.currentSong.path;
  },
  loadConfig: function () {
    this.isRandom = this.config.isRandom;
    this.isRepeat = this.config.isRepeat;
  },
  nextSong: function () {
    this.currentIndex++;
    if (this.currentIndex >= this.songs.length) {
      this.currentIndex = 0;
    }
    this.loadCurrentSong();
  },
  prevSong: function () {
    this.currentIndex--;
    if (this.currentIndex < 0) {
      this.currentIndex = this.songs.length - 1;
    }
    this.loadCurrentSong();
  },
  playRandomSong: function () {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * this.songs.length);
    } while (newIndex === this.currentIndex);

    this.currentIndex = newIndex;
    this.loadCurrentSong();
  },
  start: function () {
    // Gán cấu hình từ config vào ứng dụng
    // Assign configuration from config to application
    this.loadConfig();

    // Định nghĩa các thuộc tính cho object
    // Defines properties for the object
    this.defineProperties();

    // Lắng nghe / xử lý các sự kiện (DOM events)
    // Listening / handling events (DOM events)
    this.handleEvents();

    // Tải thông tin bài hát đầu tiên vào UI khi chạy ứng dụng
    // Load the first song information into the UI when running the app
    this.loadCurrentSong();

    // Render playlist
    this.render();

    // Hiển thị trạng thái ban đầu của button repeat & random
    // Display the initial state of the repeat & random button
    randomBtn.classList.toggle("active", this.isRandom);
    repeatBtn.classList.toggle("active", this.isRepeat);
  },
};

app.start();
