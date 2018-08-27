$(function() {
    $('a').bind('touchstart', function(e) {
        
        var t = $(this);
        
        t.addClass('active');
    });

    $('a').bind('touchend', function(e) {
        $(this).removeClass('active');
    });

    $('a').bind('touchcancel', function(e) {
        $(this).removeClass('active');
    });

    $('a').bind('touchleave', function(e) {
        $(this).removeClass('active');
    });
});
