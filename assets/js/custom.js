var navbar_position = $('#navbar').offset();

$(window).scroll(function(){
    if($(window).scrollTop() > navbar_position.top){
        $('#navbar').css('position','fixed').css('top','0');
        console.log("GG");
    }
    else{
        $('#navbar').css('position', 'static')
    }
});

$('#scroll_to_navbar').click(function(){
    $('html, body').animate({
        scrollTop: navbar_position.top
    }, 1000);
});

function deselect(e){
    $('#messenger_pop').slideFadeToggle(function(){
        e.removeClass('selected');
    });
}

$.fn.slideFadeToggle = function(easing, callback){
    return this.stop().animate({ opacity: 'toggle', height: 'toggle'}, 'fast', easing, callback);
};

$(function(){
    $('#messenger').on('click', function(){
        if($(this).hasClass('selected')){
            deselect($(this));
        }
        else{
            $(this).addClass('selected')
            $('#messenger_pop').slideFadeToggle();
        }
    });
    
    $('#messenger_close').on('click', function(){
        deselect($('#messenger'));
        return false;
    });
})