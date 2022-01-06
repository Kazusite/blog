$(function () {
    $('#button').on("click", function () {
        var re = new RegExp($('#search').val());
        $('#result tbody tr').each(function () {
            var tr = $(this);
            tr.hide();
            $('td', this).each(function () {
                var txt = $(this).html();
                if (txt.match(re) != null) {
                    tr.show();
                }
            });
        });
    });
    $('#button2').on("click", function () {
        $('#result tr').show();
    });
});