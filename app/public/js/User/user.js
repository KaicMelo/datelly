$(function(){
    $.ajax({
        url: "/MyUser",
        method: "GET",
    }).done(function(data) { 
        $('#token').text(`TOKEN: ${data.token}`)

        $("#user_id").val(data.data[0].id)
        $("#inputCrush").val(data.data[0].rk_girlfriend_id);
        $("#inputNome").val(data.data[0].name);
        $("#inputEmail").val(data.data[0].email);
        $("#inputLogin").val(data.data[0].login);
    }).fail(function() {
        console.log('algo deu errado');
    });   
    $("#userUpdate").on('submit',function(event){
        event.preventDefault();
    
        const formData = {
            "id":$("#user_id").val(),
            "rk_girlfriend_id":$("#inputCrush").val(),
            "name":$("#inputNome").val(),
            "email":$("#inputEmail").val(),
            "login":$("#inputLogin").val(),
            "password":$("#inputPassword").val(),
        }
    
        
        $.ajax({
            url: "/user/"+$("#user_id").val(),
            method: "PUT",
            data: formData ,
            dataType: "json",
            beforeSend: function(data) {
                console.log(data)
                swal({
                    title: "Atualizado com Sucesso!",
                    text: "Uhull!",
                    icon: "success",
                    button: "Continuar",
                });
            }
        })
    })
});
