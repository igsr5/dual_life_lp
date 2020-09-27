$(function() {
    var menu = $('#slide_menu'), // スライドインするメニューを指定
        menuBtn = $('.hum-btn'), // メニューボタンを指定
        menuWidth = menu.outerWidth();

    // メニューボタンをクリックした時の動き
    menuBtn.on('click', function() {
        // body に open クラスを付与する
        menu.toggleClass('open');
        menuBtn.toggleClass('toggle-btn', 500);
        if (menu.hasClass('open')) {
            // open クラスが body についていたらメニューをスライドインする
            menu.animate({ 'left': 0 }, 300);

        } else {
            // open クラスが body についていなかったらスライドアウトする
            menu.animate({ 'left': -menuWidth }, 300);
        }
    });
});