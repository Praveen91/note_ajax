(function ($){
 $.fn.prepend_note_view = function(note_html){
  $(this).prepend(note_html);
 }
$(document).ready(function(){
  $('#-form-note-ajax-add #edit-container').hide();
  $('#-form-note-ajax-add .action-submit').hide();
  $('#-form-note-ajax-add .action-cancel').hide();

  $('#-form-note-ajax-add .action-add').click(function(){
    $('#-form-note-ajax-add .action-add').hide();
     $('#-form-note-ajax-add #edit-container').slideDown('fast', function(){
       $('#-form-note-ajax-add .action-submit').show();
       $('#-form-note-ajax-add .action-cancel').show();
     });
     return false;
  });

   $('#-form-note-ajax-add .action-cancel').click(function(){
    $('#-form-note-ajax-add .action-submit').hide();
    $('#-form-note-ajax-add .action-cancel').hide();

     $('#-form-note-ajax-add #edit-container').slideUp('fast', function(){
       $('#-form-note-ajax-add .action-add').show();
     });
     return false;
  });
})
}(jQuery));
