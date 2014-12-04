(function($){
  var confirm_msg = '添付漏れはありませんか？';
  var reg_textarea = /添付/;
  var cls_direct = 'direct';
  var cls_clone = 'clone';
  var selector_direct = '.'+cls_direct;

  var contentArea = $('#bodyLeft');
  var addTickectButton = $('input[type="button"].submitbtn', contentArea);
  var submitButton;

  addTickectButton.each(function(){
    var $this = $(this);
    $this.clone().removeClass(cls_direct).addClass(cls_clone).insertAfter($this);
    $this.hide();
  });

  submitButton = $('input[type="submit"]' + ', input.'+cls_clone , contentArea);

  submitButton.on('click', function(){
    var $this = $(this);
    var keyword = $this.closest('form[enctype="multipart/form-data"]').find('textarea').val();
    var $direct = $this.prev(selector_direct);
    if(reg_textarea.test(keyword)){
      submitFlag = confirm(confirm_msg);
      if(submitFlag){
        if($this.hasClass(cls_clone)){
          $direct.trigger('click');
        }
        return true;
      }else{
        return false;
      }
    }else{
      if($this.hasClass(cls_clone)){
        $direct.trigger('click');
      }
      return true;
    }
  })
})(jQuery);
