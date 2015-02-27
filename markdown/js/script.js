$(function() {
    marked.setOptions({
        langPrefix: ''
    });

    $('#edit').keyup(function() {
        var md = sanitize($(this).val());
        var html = marked(md);
        $('#preview').html(html);
        $('#preview pre code').each(function(i, e) {
            $(e).text(unsanitize($(e).text()));
            hljs.highlightBlock(e, e.className);
        });
    });

});

function sanitize(html) {
    return $('<div />').text(html).html().replace(/&gt;/g, ">");

}
function unsanitize(html) {
    return $('<div />').html(html).text();
}
