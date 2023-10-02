
window.addEventListener('DOMContentLoaded', () => {

  const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
    let swiper;

    breakpoint = window.matchMedia(breakpoint);

    const enableSwiper = function(className, settings) {
      swiper = new Swiper(className, settings);
      console.log(swiper);
      if (callback) {
        callback(swiper);
      }
    }

    const checker = function() {
      if (breakpoint.matches) {
        console.log('matches');
        return enableSwiper(swiperClass, swiperSettings);
      } else {
        if (swiper !== undefined) swiper.destroy(true, true);
        console.log('not matches');
        return;
      }
    };

    breakpoint.addEventListener('change', checker);
    checker();
  }

  const someFunc = (instance) => {
    if (instance) {
      instance.on('slideChange', function (e) {
        console.log('*** mySwiper.activeIndex', instance.activeIndex);
      });
    }
  };

  resizableSwiper(
    '(max-width: 767px)',
    '.swiper-companies',
    {
      loop: true,
      pagination: {
        el: '.swiper-pagination__companies',
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          enabled: true,
        },
        320: {
          slidesPerView: 1.1,
          enabled: true,
        },
        350: {
          slidesPerView: 1.3,
          enabled: true,
        },
        390: {
          slidesPerView: 1.5,
          enabled: true,
        },
        540: {
          slidesPerView: 2,
          enabled: true,
        },
        620: {
          slidesPerView: 2.1,
          enabled: true,
        },
        760: {
          slidesPerView: 2.2,
          enabled: true,
        },
      },
    },
    someFunc
  );

  resizableSwiper(
    '(max-width: 767px)',
    '.swiper-technique',
    {
      loop: true,
      pagination: {
        el: '.swiper-pagination__technique',
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          enabled: true,
        },
        320: {
          slidesPerView: 1.3,
          enabled: true,
        },
        350: {
          slidesPerView: 1.5,
          enabled: true,
        },
        390: {
          slidesPerView: 1.7,
          enabled: true,
        },
        540: {
          slidesPerView: 1.9,
          enabled: true,
        },
        620: {
          slidesPerView: 2.1,
          enabled: true,
        },
        760: {
          slidesPerView: 2.3,
          enabled: true,
        },
      },
    },
    someFunc
  );

  resizableSwiper(
    '(max-width: 767px)',
    '.swiper-prices',
    {
      loop: true,
      pagination: {
        el: '.swiper-pagination__prices',
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          enabled: true,
        },
        320: {
          slidesPerView: 1.2,
          enabled: true,
        },
        350: {
          slidesPerView: 1.5,
          enabled: true,
        },
        390: {
          slidesPerView: 1.7,
          enabled: true,
        },
        540: {
          slidesPerView: 1.9,
          enabled: true,
        },
        620: {
          slidesPerView: 2.1,
          enabled: true,
        },
        760: {
          slidesPerView: 2.3,
          enabled: true,
        },
      },
    },
    someFunc
  );

});
