(function(){
    $(document).ready(function(){
        $('#shorten').submit(function (e) {
            e.preventDefault();
    
            $.post('/shorten', $('#shorten').serialize(), function(data){
                $('#content').html('<p class="text-center success">Url: localhost:1984/' + data + '</p>');
            })
            .done(function (data) {
                console.log("DONE!!!")
            })
            .fail(function(){
                $('#content').html('<p class="text-center warn">Failed to shoten url.</p>');
            });
            return false;
        });
    });
})();