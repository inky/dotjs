$('td, .comment').css({
    fontSize: '14px',
    lineHeight: '20px'
});

if (window.location.pathname.match(/^\/(news)?$/)) {
    $('table td > table')[1].style.padding = '16px';
    $('.subtext').css({
        fontSize: '12px',
        paddingBottom: '16px'
    });
}
