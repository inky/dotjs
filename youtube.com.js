$('.ad-div').css('visibility', 'hidden');

$('.watch-module-body').each(function() {
    var related = $('.video-list, #watch-more-related-button', this),
        hidden = false,
        bg = '#fff', bgHover = '#d1e1fa',
        border = '#eaeaea', borderHover = '#b6d0f7';
    $('h4', this).click(function() {
        related.css('visibility', (hidden) ? 'visible' : 'hidden');
        hidden = !hidden;
    }).css({
        background: '#fff',
        border: '1px solid #eaeaea',
        borderRadius: '4px',
        cursor: 'pointer',
        display: 'table',
        padding: '0.5em'
    });
});

$('#watch-video').delay(250).removeClass('has-ad')
