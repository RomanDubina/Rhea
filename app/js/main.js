$(function () {
  $(".places__slider").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    centerMode: true,
    variableWidth: true,
    centerPadding: 0,
    arrows: true,
  });

  $(".categories__slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    variableWidth: true,
    centerPadding: 0,

    responsive: [
      {
        breakpoint: 625,
        settings: {
          slidesToShow: 1,
          centerMode: false
        }
      } 
      
    ]
  });

  $(".experiences__slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    infinite: false

  });

  const menuBtn = document.querySelector('.menu-btn')
  const menu = document.querySelector('.header__menu')
  let menuOpen = false
  menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
      menuBtn.classList.add('open')
      $('.header__menu').slideToggle();
      menuOpen = true
    } else {
      menuBtn.classList.remove('open')
      $('.header__menu').slideToggle();
      menuOpen = false
    }
  })

  $(".order-form__form-date").datepicker({
    todayButton: new Date(),
  });

  $("#rate-nepal").rateYo({
    starWidth: "21px",
    rating: 3,
    readOnly: true,
    normalFill: "#3984f3",
    ratedFill: "#3984f3",
    starSvg:
      '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24"' +
      'viewBox="0 0 24 24">' +
      "<title>star_outline</title>" +
      '<path d="M12 15.422l3.75 2.25-0.984-4.266 3.328-2.906-4.406-0.375-1.688-4.031-1.688 4.031-4.406 0.375 3.328 2.906-0.984 4.266zM21.984 9.234l-5.438 4.734 1.641 7.031-6.188-3.75-6.188 3.75 1.641-7.031-5.438-4.734 7.172-0.609 2.813-6.609 2.813 6.609z"></path>' +
      "</svg>",
  });

  $("#rate-indonesia").rateYo({
    starWidth: "21px",
    rating: 4,
    readOnly: true,
    normalFill: "#3984f3",
    ratedFill: "#3984f3",
    starSvg:
      '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24"' +
      'viewBox="0 0 24 24">' +
      "<title>star_outline</title>" +
      '<path d="M12 15.422l3.75 2.25-0.984-4.266 3.328-2.906-4.406-0.375-1.688-4.031-1.688 4.031-4.406 0.375 3.328 2.906-0.984 4.266zM21.984 9.234l-5.438 4.734 1.641 7.031-6.188-3.75-6.188 3.75 1.641-7.031-5.438-4.734 7.172-0.609 2.813-6.609 2.813 6.609z"></path>' +
      "</svg>",
  });
  $("#rate-maldives").rateYo({
    starWidth: "21px",
    rating: 5,
    readOnly: true,
    normalFill: "#3984f3",
    ratedFill: "#3984f3",
    starSvg:
      '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24"' +
      'viewBox="0 0 24 24">' +
      "<title>star_outline</title>" +
      '<path d="M12 15.422l3.75 2.25-0.984-4.266 3.328-2.906-4.406-0.375-1.688-4.031-1.688 4.031-4.406 0.375 3.328 2.906-0.984 4.266zM21.984 9.234l-5.438 4.734 1.641 7.031-6.188-3.75-6.188 3.75 1.641-7.031-5.438-4.734 7.172-0.609 2.813-6.609 2.813 6.609z"></path>' +
      "</svg>",
  });

  let video = $("#video");
  let juice = $(".controls__progress-bar--juice");
  let preload = $(".controls__progress-bar--preload");
  let btnPlayPause = $("#play-pause");
  let btnStop = $("#stop");
  let btnBigPlay = $(".btn-play");
  let videoCover = $(".videos__cover");
  let progress = $(".controls__progress-bar");
  let volume = $(".volume");
  let volumeState = $("#volume-state");
  let times = $(".videos__times");
  let player = $(".videos__box-player");
  let btnFullScreen = $("#full-screen");
  let videoControlPanel = $(".controls");
  let volumeBar = $('.volume-box__bar');
  let timeoutControlPanel;

player.on('mousemove', function(){
  showPanel()
  timeoutControlPanel = setTimeout(hidePanel, 3000)

})

  function showPanel() {
    clearTimeout(timeoutControlPanel)
    videoControlPanel.css({
      transform: "translate(0)",
    });
  }

  function hidePanel() {
    videoControlPanel.css({
      transform: "translateY(100%) translateY(-5px)",
    });
  }

  btnFullScreen.on("click", function () {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      player[0].requestFullscreen();
      video.css({
        height: "100%",
      });
    }
  });

  function getDataCurrentVideo() {
    let videoList = [];
    videoList = $(".videos__menu-list").find("li");
    $.each(videoList, function (indexInArray, valueOfElement) {
      let titleVideo = $(this).find(".v-thumbs__descr-title").text().trim();
      let durationVideo = $(this).find(".v-thumbs__descr-duration").text();
      $(".videos__info-title").text(titleVideo);
      $(".videos__info-duration").text(durationVideo);
      times.text(`${video[0].currentTime} / ${durationVideo}`);
      return indexInArray > 0;
    });
  }
  getDataCurrentVideo();

  function videoStop() {
    video[0].pause();
    video[0].currentTime = 0;
    setTimeout(() => {
      times.text(`
      ${secondsToHms(video[0].currentTime)} / ${secondsToHms(video[0].duration)}
    `);
    }, 500);
    btnBigPlay.css("display", "block");
    videoCover.css("display", "block");
    btnPlayPause.attr("class", "play");
  }

  btnStop.on("click", function () {
    let savePoster = video.attr("poster");
    let saveSrc = video.attr("src");
    if (
      !video[0].paused ||
      video[0].currentTime > 0 ||
      video[0].currentTime == video[0].duration
    ) {
      videoStop();
      setTimeout(() => {
        $(".videos__box-video").attr({
          src: saveSrc,
          poster: savePoster,
        });
      }, 50);
    }
  });

  function togglePlayPause() {
    if (video[0].paused) {
      btnBigPlay.css("display", "none");
      videoCover.css("display", "none");
      btnPlayPause.attr("class", "pause");
      video[0].play();
    } else {
      btnBigPlay.css("display", "block");
      videoCover.css("display", "block");
      btnPlayPause.attr("class", "play");
      video[0].pause();
    }
  }
  videoCover.on("click", function () {
    togglePlayPause();
  });
  video.on("click", function () {
    togglePlayPause();
  });

  btnPlayPause.on("click", function () {
    togglePlayPause();
  });

  $(".v-thumbs").on("click", function () {
    videoStop();
    setTimeout(() => {
      let vidTitle = $(this).find(".v-thumbs__descr-title").text();
      let vidDuration = $(this).find(".v-thumbs__descr-duration").text();
      $(".videos__info-title").html(vidTitle);
      $(".videos__info-duration").html(vidDuration);

      let urlVideo = $(this).attr("data-urlVideo");
      let urlPoster = $(this).attr("data-urlPoster");

      $(".videos__box-video").attr({
        src: urlVideo,
        poster: urlPoster,
      });
    }, 50);
  });

  video[0].addEventListener("timeupdate", function () {
    let currentTime = Math.floor(video[0].currentTime);
    let duration = Math.floor(video[0].duration);
    let juicePos = currentTime / duration;
    juice.css({
      width: juicePos * 100 + "%",
    });

    times.text(`
      ${secondsToHms(currentTime)} / ${secondsToHms(duration)}
    `);
  });

  video[0].addEventListener("progress", function () {
    let duration = video[0].duration;
    if (duration > 0) {
      for (var i = 0; i < video[0].buffered.length; i++) {
        if (
          video[0].buffered.start(video[0].buffered.length - 1 - i) <
          video[0].currentTime
        ) {
          preload.css({
            width:
              (video[0].buffered.end(video[0].buffered.length - 1 - i) /
                duration) *
                100 +
              "%",
          });
          break;
        }
      }
    }
  });

  $(".v-thumbs").on("click", function () {
    $(this).parent().find(".active").removeClass("active");
    $(this).addClass("active");
  });

  progress.on("click", function (e) {
    let w = $(this).width();
    let o = e.offsetX;
    juice.css({
      width: (100 * o) / w + "%",
    });

    video[0].pause();
    video[0].currentTime = video[0].duration * (o / w);
  });
  volumeBarInit()
  function volumeBarInit() {
    volumeBar.css('width', `calc(${volume.val()}% - 5px)`)
  }
  volumeState.on("click", function () {
    if (video[0].volume > 0) {
      video[0].volume = 0;
      $(this).attr("class", "vol-off");
    } else {
      video[0].volume = volume.val() / 100;
      $(this).removeClass("vol-off");
      
      
    }
  });

  volume.on("input", function () {
    let vol = $(this).val();
    vol = vol / 100;
    video[0].volume = vol;
    

    volumeBar.css('width', `calc(${vol*100}% - ${vol*15}px)`)

    if (vol < 0.1) {
      volumeState.attr("class", "vol-mute");
    } else if (vol > 0.1 && vol < 0.5) {
      volumeState.attr("class", "vol-down");
    } else if (vol > 0.5) {
      volumeState.attr("class", "vol-up");
    }
  });

  function secondsToHms(d) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor((d % 3600) / 60);
    var s = Math.floor((d % 3600) % 60);

    var hDisplay = h > 0 ? h + "." : "";
    var mDisplay = m > 0 ? m + "." : "0.";
    var sDisplay = s > 0 ? (s < 10 ? "0" : "") + s : "00";
    return hDisplay + mDisplay + sDisplay;
  }



  
});
