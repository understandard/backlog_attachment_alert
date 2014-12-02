(function($){
  var contentArea = $('#bodyLeft');
  var submitButton = $('input[type="submit"], .submitbtn', contentArea);
  var addTicketForm = $('#AddIssueConfirm');

  submitButton.on('click', function(){
    var keyword = $(this).siblings().find('textarea').val();
    if(keyword.indexOf('添付') !== -1){
      addTicketForm.off('submit');
      return confirm('添付漏れはありませんか？');
    }
  })
})(jQuery);