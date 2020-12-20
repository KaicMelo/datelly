$("#register").on('submit',function(event){
    event.preventDefault();

    const formData = {
        "rk_girlfriend_id":$("#inputCrush").val(),
        "name":$("#inputNome").val(),
        "email":$("#inputEmail").val(),
        "login":$("#inputLogin").val(),
        "password":$("#inputPassword").val(),
    }

    $.ajax({
        url: "/account/create",
        method: "POST",
        data: formData ,
    }).done(function(data) {
        swal({
            title: "Meta cadastrada!",
            text: "Uhull!",
            icon: "success",
            button: "Continuar",
        }).then( () => {
            window.location.href = '/';
        })

    }).fail(function() {
        console.log('algo deu errado');
    });  
})