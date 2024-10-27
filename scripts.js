// التنقل السلس بين الأقسام
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// إدراج الفيديوهات من قناة يوتيوب
const videoContainer = document.getElementById('video-container');
const videoIds = [
    "P_iMT8ZJHHY", // الفيديو الأول
    "Bg3Zk0mBOQQ", // الفيديو الثاني
    "q_Y7mlwkyQs"  // الفيديو الثالث
];

videoIds.forEach(id => {
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${id}`;
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;
    videoContainer.appendChild(iframe);
});
