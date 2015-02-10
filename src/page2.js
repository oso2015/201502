(function () {
// -----------------------------------------------------------------------------
var textarea = $('#hd textarea');

$('#bd').on('click', 'li', function (evt) {
    var txt = $(this).text();
    textarea.val(txt);
});

$('#hd button').click(function (evt) {
    // $.ajax({
    //     url: '...',
    //     data: {val: textarea.val()},
    //     dataType: 'json',
    //     cache: false
    // });
});

// -----------------------------------------------------------------------------
})();