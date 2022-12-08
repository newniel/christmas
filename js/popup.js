$modal = $('.modal-wrap');

function closeModal() {
    $modal.removeClass('active');
}

$('.modal-popup').click(function() {
  $modal.toggleClass('active');
})

$('.modal-overlay').click(function() {
  closeModal();
})

$('.close').click(function() {
    closeModal();
})

// keyCode 27 = ESC
  $(document).keyup(function(e) {
    if(e.which === 27) {
      closeModal();
    }
})

