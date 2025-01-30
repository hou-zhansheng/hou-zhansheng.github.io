const slides = document.querySelectorAll('.slide');
const dotsContainer = document.querySelector('.dots-container');
let currentSlide = 0;
let interval;

// 创建底部小圆点
function createDots() {
  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (i === 0) {
      dot.classList.add('active');
    }
    dot.addEventListener('click', () => {
      showSlide(i);
    });
    dotsContainer.appendChild(dot);
  }
}

// 显示指定索引的幻灯片
function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.style.display = 'block';
      slide.classList.add('fade');
      setTimeout(() => {
        slide.style.opacity = 1;
      }, 100);
    } else {
      slide.style.display = 'none';
      slide.style.opacity = 0;
      slide.classList.remove('fade');
    }
  });
  currentSlide = index;
  updateDots();
}

// 更新小圆点的激活状态
function updateDots() {
  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot, i) => {
    if (i === currentSlide) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

// 自动播放函数
function autoPlay() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
  interval = setTimeout(autoPlay, 3000); // 每3秒切换一次，可调整时间间隔
}

// 鼠标悬停暂停自动播放
const slidesContainer = document.querySelector('.slides-container');
slidesContainer.addEventListener('mouseenter', () => {
  clearTimeout(interval);
});
slidesContainer.addEventListener('mouseleave', () => {
  autoPlay();
});

createDots();
showSlide(currentSlide);
autoPlay();


