$(function () {
    $("#form-signin").submit(function (event) {
        event.preventDefault();
        $.ajax({
            url: "/authenticate",
            method: "POST",
            data: {
                login: $("#inputLogin").val(),
                password: $("#inputPassword").val(),
            },
            dataType: "json"
        }).done(function (data) { 
            console.log(data)
            window.location.href = "/home";
            return
        }).fail(function (data) { 
            console.log(data)
            document.getElementById('alertLogin').style.visibility = 'visible';
        });
    }); 

});