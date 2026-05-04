  let swiper = new Swiper(".swiper-container", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false
    },

    navigation: {
      nextEl: ".swiper-button-next.next0",
      prevEl: ".swiper-button-prev.prev0"
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      1024: {
        slidesPerView: 1,
        spaceBetween: 10
      }
    }
  });

  let swiper1 = new Swiper(".swiper-container1", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false
    },

    navigation: {
      nextEl: ".swiper-button-next.next1",
      prevEl: ".swiper-button-prev.prev1"
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      1024: {
        slidesPerView: 1,
        spaceBetween: 10
      }
    }
  });

  let swiper2 = new Swiper(".swiper-container2", {
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next.next2",
      prevEl: ".swiper-button-prev.prev2"
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 10
      },
      768: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 10
      },
      1024: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 10
      }
    }
  });

  let swiper3 = new Swiper(".swiper-container3", {
    slidesPerView: 2,
    slidesPerGroup: 2,
    // 輪播一組幾個↑
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next.next3",
      prevEl: ".swiper-button-prev.prev3"
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 10
      }
    }
  });

  let swiper31 = new Swiper(".swiper-container31", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    // 輪播一組幾個↑
    spaceBetween: 5,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next.next31",
      prevEl: ".swiper-button-prev.prev31"
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 10
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 10
      },
      1024: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 10
      }
    }
  });

  let swiper4 = new Swiper(".swiper-container4", {
    slidesPerView: 2,
    slidesPerGroup: 2,
    // 輪播一組幾個↑
    spaceBetween: 10,
    // loop: false,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next.next4",
      prevEl: ".swiper-button-prev.prev4"
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 10
      }
    }
  });

  let swiper41 = new Swiper(".swiper-container41", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    // 輪播一組幾個↑
    spaceBetween: 5,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next.next41",
      prevEl: ".swiper-button-prev.prev41"
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 10
      },
      768: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 10
      },
      1024: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 10
      }
    }
  });

  let swiper42 = new Swiper(".swiper-container42", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    // 輪播一組幾個↑
    spaceBetween: 10,
    loop: false,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next.next42",
      prevEl: ".swiper-button-prev.prev42"
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 10
      }
    }
  });

  let swiper48 = new Swiper(".swiper-container48", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    // 輪播一組幾個↑
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next.next48",
      prevEl: ".swiper-button-prev.prev48"
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 10
      }
    }
  });

  let swiperindex = new Swiper(".swiperindex", {
    slidesPerView: 2,
    slidesPerGroup: 2,
    // 輪播一組幾個↑
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next.nextindex",
      prevEl: ".swiper-button-prev.previndex"
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 5,
        slidesPerGroup: 5,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 7,
        slidesPerGroup: 7,
        spaceBetween: 10
      }
    }
  });

  let swiper5 = new Swiper(".swiperflip", {
    effect: "flip",
    grabCursor: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination"
    },
    navigation: {
      nextEl: ".swiper-button-next.nextflip",
      prevEl: ".swiper-button-prev.prevflip"
    }
  });

  let swiper6 = new Swiper(".swiperCover", {
    effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        },
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        pagination: {
          el: ".swiper-pagination",
        }

  });

  let swiper7 = new Swiper(".swiperCube", {
    effect: "cube",
    grabCursor: true,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false
    },
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94
    },
    pagination: {
      el: ".swiper-pagination"
    },
    navigation: {
      nextEl: ".swiper-button-next.nextCube",
      prevEl: ".swiper-button-prev.prevCube"
    }
  });

  
  var swiper8 = new Swiper(".mySwiper-perview", {
    slidesPerView: "auto",
    spaceBetween: 5,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


  var swipervertical = new Swiper(".Swiper-vertical", {
    direction: "vertical",
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });



