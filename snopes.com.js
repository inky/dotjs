var noop = function() { return true; }

if (typeof document.onselectstart != 'undefined')
    document.onselectstart = noop;
else
    document.onmousedown = noop;
