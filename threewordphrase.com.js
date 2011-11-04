if (document.location.pathname == '/archive.htm') {
    var links = $('.links a'),
        randomLink = $('<a href="#">Random</a>').click(function() {
            var i = Math.floor(Math.random() * links.length);
            $(this).attr('href', $(links[i]).attr('href'));
        });
    $(links[0]).prepend('<br/>').prepend(randomLink);
}
