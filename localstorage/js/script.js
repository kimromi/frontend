$(function() {

    display_todos();

    $('#add').click(function() {
        var todos = JSON.parse(localStorage.getItem("todos"));
        if (!todos) todos = new Object();
        todos[now()] = $('#input').val();
        localStorage.setItem("todos",JSON.stringify(todos));
        display_todos();
    });

    $('#clear').click(function() {
        localStorage.clear();
        display_todos();
    });

});

function display_todos() {
    $('#todos').html('');
    var todos = JSON.parse(localStorage.getItem("todos"));
    
    if (!todos) return;

    for (id in todos) {
        $('#todos').append($('<li/>').append(todos[id]).append($('<input type="button" value="削除"　id="' + id + '"/>')));
    }
}

function now() {
    var now = new Date();
    var year = now.getFullYear() + "";
    var month = now.getMonth() + 1  + "";
    var day = now.getDate() + "";
    var hour = now.getHours() + "";
    var minute = now.getMinutes() + "";
    var second = now.getSeconds() + "";
    return year + month + day + hour + minute + second;
}