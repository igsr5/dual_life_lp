$(function() {
    var skip_top = $('.skip_top');
    var skip_about = $('.skip_about');
    var skip_pre = $('.skip_pre');
    var skip_semi = $('.skip_semi');
    var skip_gui = $('.skip_gui');
    var skip_contact = $('.skip_contact');

    skip_top.click(function() {
        $('body, html').animate({ scrollTop: 0 }, 500, "swing");
        return false;
    });
    skip_about.click(function() {
        var about = $(".about").offset().top;
        $('body, html').animate({ scrollTop: about }, 500, "swing");
        return false;
    });
    skip_pre.click(function() {
        var skill = $(".program").offset().top;
        $('body, html').animate({ scrollTop: skill }, 500, "swing");
        return false;
    });
    skip_semi.click(function() {
        var works = $(".seminar").offset().top;
        $('body, html').animate({ scrollTop: works }, 500, "swing");
        return false;
    });
    skip_gui.click(function() {
        var guidance = $(".guidance").offset().top;
        $('body, html').animate({ scrollTop: guidance }, 500, "swing");
        return false;
    });
    skip_contact.click(function() {
        var contact = $("footer").offset().top;
        $('body, html').animate({ scrollTop: contact }, 500, "swing");
        return false;
    });

});