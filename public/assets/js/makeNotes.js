$(document).ready( () => {
    $('#note').on('submit', function() {
        let note = {}

        note.title = $('#title').val();
        note.text = $('#text').val();

        console.log(note)
        $.ajax({
            type: 'POST',
            url: "/api/db",
            data: note,
        })
    })
});