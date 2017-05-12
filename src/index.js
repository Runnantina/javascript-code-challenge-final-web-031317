$(document).ready(function(){
  // your code here!

  $('#photo-form').on('submit', function(event){
    event.preventDefault();

  var imageURL = $("#image_input").val()
  var captionInput = $("#caption_input").val()
  // $('#image_input').on('submit', `${imageURL}` function())

    renderImage = $('#photo-list').append(`<div><image scr= "${imageURL}" id = 'photo-id'></div>`)
    // make "#photo-id dynamic, make a model?"
    $('#photo-id').append(`<p>${captionInput}</p>`)



    // $('#photo-form').on('click', `#submit_button`, function(){
    //   $('#photo-list').append(`<ul>${imageURL}</ul>`)
    //
    // })

    $("#image_input").val('')
    $("#caption_input").val('')

  })


  // $('body').on('click', `#submit_button`, function(){
  //   $('#photo-list').append(`${captionRender}`)
  //
  // })

})
