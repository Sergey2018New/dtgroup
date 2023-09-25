// import Plyr from 'plyr';
import Player from '@vimeo/player';

export default function video() {
  const videoItems = document.querySelectorAll('.js-video');
  let isMobile;
  let players = [];

  // videoItems.forEach((item) => {
  //   const videoPlayButton = item.querySelector('.js-video-play-button');
  //   const videoPlay = item.querySelector('.js-video-play');
  //   const videoFrame = item.querySelector('.js-video-frame');
  //   const videoClose = item.querySelector('.js-video-close');
  //   let isClose = false;

  //   if (videoClose) {
  //     videoClose.addEventListener('click', (event) => {
  //       if (isClose) {
  //         event.preventDefault();
  //         stopVideo();
  //       }
  //     });
  //   }


  function playVideo(videoEl) {
    const activeVideo = document.querySelector('.js-video.is-active');
    const videoFrame = videoEl.querySelector('.js-video-frame');
    const videoIframe = videoEl.querySelector('iframe');
    const videoClose = videoEl.querySelector('.js-video-close');
    const videoId = videoEl.getAttribute('data-video-id') || new Date().valueOf();
    let player = players[videoId];
    let urlVideo;

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i
      .test(navigator.userAgent)) {
      isMobile = true;
    } else {
      isMobile = false;
    }

    if (videoClose) {
      videoClose.style.display = null;
    }

    // if (videoIframe) {
      const iframeSrc = () => {
        return videoIframe.getAttribute('src') || videoIframe.getAttribute('data-src') || '';
      };

      if (iframeSrc()) {
        videoIframe.setAttribute('data-src', iframeSrc());

        if (iframeSrc().indexOf('vimeo') < 0) {
          videoIframe.setAttribute('src', iframeSrc());
        }
      }

      if (!players[videoId]) {
        if (iframeSrc().indexOf('vimeo') >= 0) {
          videoEl.setAttribute('data-video-id', videoId);
        
          // if (!videoIframe.getAttribute('src')) {
          //   videoIframe.setAttribute('src', iframeSrc());
          // }
          

          videoFrame.setAttribute('id', `video-${videoId}`);

          videoIframe.remove();

          players[videoId] = new Player(`video-${videoId}`, {
            url: iframeSrc(),
            pip: false,
            transcript: false,
            muted: true,
            title: false,
          });

          players[videoId].play();

          setTimeout(() => {
           
          }, 1000);
  
          // if (isMobile) {
          //   players[videoId].requestFullscreen();
          // }
        }

        // if (videoFrame) {
        //   players[videoId] = new Plyr(videoFrame, {
        //     // autoplay: true,
        //     ratio: '16:9',
        //     controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'airplay', 'fullscreen'],
        //     fullscreen: {iosNative: true },
        //     playsinline: true,
        //   });

        //   // players[videoId].on('pause', () => {
        //   //   // if (player.currentTime > 0) {
        //   //     stopVideo(item, player);

        //   //     if (isMobile) {
        //   //       player.fullscreen.exit();
        //   //     }
        //   //   // }
        //   // });
      
        //   players[videoId].on('ended', () => {
        //     stopVideo(videoEl);
        //   });
      
        //   players[videoId].on('enterfullscreen', () => {
        //     videoEl.classList.add('is-fullscreen');
        //   });
          
        //   players[videoId].on('exitfullscreen', () => {
        //     if (isMobile) {
        //       stopVideo(videoEl);
        //     }

        //     videoEl.classList.remove('is-fullscreen');
        //   });

        //   players[videoId].on('ready', () => {
        //     if (isMobile) {
        //       // players[videoId].fullscreen.enter();
        //     }

        //     players[videoId].play();

        //     players[videoId].on('playing', () => {
        //       if (videoClose.style.display) {
        //         videoClose.style.display = null;
        //       }
        //     });
        //   });
        // }
      } else {
        players[videoId].play();
        
        // players[videoId].play();

        // if (isMobile) {
        //   players[videoId].requestFullscreen();
        // }
      }
    // }

    // if (type === 'mp4') {
    //   videoIframe = `<video width="100%" height="100%" controls controlsList="nodownload" >
    //     <source src="${src}" type="video/mp4" />
    //   </video>`
    // } else {
    //   videoIframe = `<iframe width="100%" height="100%" src="${src}" allow="accelerometer; autoplay; clipboard-write; 
    //   encrypted-media; gyroscope; picture-in-picture"  allowfullscreen></iframe>`
    // }

  
    if (activeVideo && videoEl !== activeVideo) {
      stopVideo(activeVideo);
    }

    if (!videoEl.classList.contains('is-active')) {
      videoEl.classList.add('is-active');
    }
  }

  function stopVideo(videoEl) {
    const videoIframe = videoEl.querySelector('iframe');
    const videoClose = videoEl.querySelector('.js-video-close');
    const videoId = videoEl.getAttribute('data-video-id');

    if (videoIframe && videoIframe.getAttribute('src')) {
      if (videoIframe.getAttribute('src').indexOf('vimeo') >= 0 && players[videoId]) {
        players[videoId].pause();
      } else {
        videoIframe.setAttribute('src', '');
      }
    }

    videoEl.classList.remove('is-active');

    if (videoClose) {
      videoClose.style.display = 'none';
    }

    // if (players[videoId]) {
    //   players[videoId].stop();
    //   players[videoId].fullscreen.exit();
    // }
  }

  document.addEventListener('click', (event) => {
    const { target } = event;
    const isTargetPlay = target.classList.contains('js-video-play') 
    || target.classList.contains('js-video-play-button');
    const isTargetPlayInner = target.closest('.js-video-play') 
    || target.closest('.js-video-play-button');
    const isTargetClose = target.closest('.js-video-close') 
    || target.classList.contains('.js-video-close');

    if (isTargetPlay || isTargetPlayInner) {
      const videoEl = target.closest('.js-video');
    
      if (videoEl) {
        playVideo(videoEl);
      }

      event.preventDefault();
    } else if (isTargetClose) {
      const videoEl = target.closest('.js-video');
    
      if (videoEl) {
        stopVideo(videoEl);
      }
    }
  });

  const videoHovers = document.querySelectorAll('.js-video-hover');

  for (let i = 0; i < videoHovers.length; i++) {
    const videoHover = videoHovers[i];

    videoHover.addEventListener('mouseenter', () => {
      const video = videoHover.querySelector('video');

      if (video) {
        const videoSrc = video.getAttribute('data-src');

        if (!video.src) {
          video.src = videoSrc;
        }

        video.play(); 
      }
    });

    videoHover.addEventListener('mouseleave', () => {
      const video = videoHover.querySelector('video');

      if (video) {
        video.pause(); 
      }
    });
  }

  const focusedVideo = () => {
    const videoItems = document.querySelectorAll('.js-video');

    for (let i = 0; i < videoItems.length; i++) {
      const video = videoItems[i];
      const { top, height } = video.getBoundingClientRect();

      if (top <= window.innerHeight / 2 && (top + height * 1.4) >= window.innerHeight / 2) {
        video.classList.add('is-visible-mobile');
      } else {
        video.classList.remove('is-visible-mobile');
      }
    }
  };

  window.addEventListener('scroll', () => {
    const windowWidth = window.innerWidth;

    if (windowWidth < 768) {
      focusedVideo();
    }
  });
}
