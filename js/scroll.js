$(function() {
    var skip_top = $('.skip_top');
    var skip_about = $('.skip_about');
    var skip_skill = $('.skip_skill');
    var skip_works = $('.skip_works');
    var skip_contact = $('.skip_contact');

    skip_top.click(function() {
        $('body, html').animate({ scrollTop: 0 }, 500, "swing");
        return false;
    });
    skip_about.click(function() {
        var about = $(".about").offset().top;
        $('body, html').animate({ scrollTop: about - 50 }, 500, "swing");
        return false;
    });
    skip_skill.click(function() {
        var skill = $(".skill").offset().top;
        $('body, html').animate({ scrollTop: skill - 50 }, 500, "swing");
        return false;
    });
    skip_works.click(function() {
        var works = $(".works").offset().top;
        $('body, html').animate({ scrollTop: works - 50 }, 500, "swing");
        return false;
    });
    skip_contact.click(function() {
        var contact = $(".contact").offset().top;
        $('body, html').animate({ scrollTop: contact - 50 }, 500, "swing");
        return false;
    });

});