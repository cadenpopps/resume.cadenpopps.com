
$(document).ready(function () {
    var url = "https://script.google.com/macros/s/AKfycbxWccZsbotAFJdARvuJf4EcDdafVpGz_qAOXuEYw6tUwh5DRXY/exec";
    $.get(url, function (data) {
        handleData(JSON.parse(data));
    });
});

function handleData(data) {
    $("#pageviews").html(data.pageviews);
    $("#users").html(data.users);
    $("#pageviews").digits();
    $("#users").digits();
}

$.fn.digits = function () {
    return this.each(function () {
        $(this).text($(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
}