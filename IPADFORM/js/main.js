
(function ($) {
    "use strict";


    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        $('.formToHide').hide();
        $('.hidden').show();
        
        return false;
    });
    

})(jQuery);