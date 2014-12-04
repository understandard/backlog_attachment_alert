(function($, p$, p$$){
  var extensionID = 'backlog_attachment_alert';




  var contentArea = $('#bodyLeft');
  var submitButton = $('input[type="submit"], .submitbtn', contentArea);
  var addTicketForm = $('#AddIssueConfirm');




  var $dummyDirect = $('<input class="submitbtn Btn-gray" value="★追加★" type="button"/>');
  var $direct = $('.submitbtn.direct');
  var directID = extensionID + '_direct';
  $dummyDirect.on('click', function(){
    if (checkAddFiles($(this))) {
      p$(directID).simulate('click');
    }
  });
  $direct.after($dummyDirect);
  $direct.attr('id', directID);
  $direct.hide();




  submitButton.on('click', function(){
    if ($(this).is('.direct')) {
      return;
    }
    return checkAddFiles($(this));
  });




  function checkAddFiles($btn){
    var $textarea = $btn.closest('form[enctype="multipart/form-data"]').find('textarea');
    var keyword = '';
    $textarea.each(function(){
      keyword += $(this).val();
    });
    if(/添付/.test(keyword)){
      return confirm('添付漏れはありませんか？');
    }
  };




})(jQuery, $, $$);
