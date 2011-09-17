var triggerPhrases = /karma whore/i;

$('.entry').each(function() {
    var comment = $(this);
    if ($('.usertext-body', comment).text().match(triggerPhrases)) {
        comment.css('opacity', 0.5);
    }
});
