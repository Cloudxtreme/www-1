import $ from 'jquery'

$(document).ready(() => {

  /**
   * for playing vimeo video
   */

  let video = document.getElementById('video')

  $('#play-video').on('click', (e) => {
    let self = $(e.target)
    self.fadeOut()
    self.next().fadeIn()
    $f(video).api('play')
  })

})
