function sliderVersions() {
    var version = new Splide('.splide', {
      type: 'loop',
      perPage: 3,
      perMove: 1,
      width: '80%',
      height: '5.8rem',
      pagination: false,
      updateOnMove: true,
      breakpoints: {
        500: {
          perPage: 1,
        },
      }
    }).mount();
  }

  document.addEventListener('DOMContentLoaded', sliderVersions);

  function opacityAnimation() {
    var visibleSliders = document.getElementsByClassName("is-visible")
    if (window.innerWidth >= 500) {
      visibleSliders.item(0).style.opacity = 0.5
      visibleSliders.item(2).style.opacity = 0.5
    }
  }

  function opacityChg() {
    var slidersElements = document.getElementsByTagName("li")

    for (var a = 0; a < slidersElements.length; a++) {
      slidersElements.item(a).style.opacity = 1
    }

    setTimeout(opacityAnimation, 500)
  }

  window.addEventListener('load', function () {
    opacityChg()
    var arrows = document.getElementsByClassName("splide__arrow")
    for (var a = 0; a < arrows.length; a++) {
      arrows[a].addEventListener("click", opacityChg)
    }

    document.getElementsByClassName("splide__track").item(0).addEventListener("mouseup", opacityChg)
  })

  function resizeOpacity() {
    var visibleSliders = document.getElementsByClassName("is-visible")
    if (window.innerWidth >=500) {
      visibleSliders.item(0).style.opacity = 0.5
      visibleSliders.item(2).style.opacity = 0.5
    }
  }

  window.onresize = resizeOpacity