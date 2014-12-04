(function($){
  var contentArea = $('#bodyLeft');
  var addTicketForm = $('#AddIssueConfirm');
  var addTickectButton = $('input[type="button"].submitbtn', contentArea);
  addTickectButton.each(function(){
    $(this).clone().removeClass('direct').addClass('clone').insertAfter($(this));
    $(this).hide();
  });
  var submitButton = $('input[type="submit"], input.clone', contentArea);

  submitButton.on('click', function(){
    var keyword = $(this).closest('form[enctype="multipart/form-data"]').find('textarea').val();
    if(/添付/.test(keyword)){
      submitFlag = confirm('添付漏れはありませんか？');
      if(submitFlag){
        if($(this).hasClass('clone')){
          $(this).prev('.direct').trigger('click');
        }
        return true;
      }else{
        return false;
      }
    }else{
      if($(this).hasClass('clone')){
        $(this).prev('.direct').trigger('click');
      }
      return true;
    }
  })
})(jQuery);