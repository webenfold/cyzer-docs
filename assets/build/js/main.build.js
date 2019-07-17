// var editor = ace.edit("editor");
// editor.setTheme("ace/theme/monokai");
// editor.session.setMode("ace/mode/javascript");

// dropdown class

function dropdown_menu() {
    $('.dd-item').on('click', function () {
        var ele = $(this).parents('.parent-dd').find('.child-dd');

        ele.toggleClass('open');
    });
}

function functionSequence() {
    dropdown_menu();
}

// =========================================================
// On Load
// =========================================================
if (window.addEventListener) {
    window.addEventListener('load', function () {
        functionSequence();
    });
} else {
    window.attachEvent('onload', function () {
        functionSequence();
    });
}