import $ from 'jquery'

let player, isReady
global.onYouTubePlayerAPIReady = () => {
  player = new YT.Player('video', {
    events: {
      'onReady': () => {
        isReady = true
      }
    }
  })
}

$(document).ready(() => {

  // $.stellar({
  //   // hideDistantElements: false,
  //   horizontalScrolling: false
  // })

  if( !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    skrollr.init()
  }

  /**
   * for playing vimeo video
   */

  $('.video').on('click', (e) => {
    let video = $('#play-video')

    if (isReady) {
      video.fadeOut()
      video.next().fadeIn()
      player.playVideo()
    }
  })

})


var tag = document.createElement('script')
tag.src = "//www.youtube.com/player_api"
var firstScriptTag = document.getElementsByTagName('script')[0]
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
