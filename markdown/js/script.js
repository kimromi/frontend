$(function() {
    marked.setOptions({
    	langPrefix: ''
    });


    $('#edit textarea').keyup(function() {
    	  var md = escape($(this).val());
        var html = marked(md);
        $('#preview').html(html);
        $('#preview pre code').each(function(i, e) {
        		$(e).text(unescape($(e).text()));
            hljs.highlightBlock(e, e.className);
        });
    });
    $('#edit textarea').keyup();

});

function escape(html) {
	return $('<div />').text(html).html();
}
function unescape(html) {
	return $('<div />').html(html).text();
}