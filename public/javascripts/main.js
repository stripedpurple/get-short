(function(){
    $(document).ready(function(){
        var hostname = window.location.hostname, port = window.location.port;
        $('#shorten').submit(function (e) {
            e.preventDefault();
    
            $.post('/shorten', $('#shorten').serialize(), function(data){
                $('#content').html('<p class="text-center success">Url: ' + hostname + (port ? ":" + port : "") + '/' + data + '</p>');
            })
            .done(function () {
                console.log("DONE!!!");
            })
            .fail(function(){
                $('#content').html('<p class="text-center warn">Failed to shoten url.</p>');
            });
            return false;
        });
    });
})();