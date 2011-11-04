var triggers1 = /(‽|karma whore|upvote|downvote|reddit enhancement suite|fap|ftfy|kardashian)/i,
    triggers2 = /(RES\W)/;

$('.entry').each(function() {
    var comment = $(this), text = $('.usertext-body', comment).text();
    if (text.match(triggers1) || text.match(triggers2))
        comment.css('opacity', 0.5);
});

$('.sponsorshipbox').hide();
