$(function () {

    $.ajax({
        url: "/MyUser",
        method: "GET",
    }).done(function (data) {
        $('#token').text(`TOKEN: ${data.token}`)
    }).fail(function () {
    });
    
    $.ajax({
        url: "/MyLove",
        method: "GET",
    }).done(function (data) {
        var myUser = data.data.myUser;

        var data = data.data.response;

        // my então bloqueia resposta else aceota

        // console.log(myUser);
        // console.log(data);

        // for (var i in data) {
        //     $("#MyLove").append(
        //         `<div class="row"> 
        //             <div class="col-10">

        //             </div>
        //             <div class="col-2">
        //                 <button type="button" class="btn btn-danger" id="delete-love">Excluir</button>
        //                 <button type="button" class="btn btn-primary" id="accept-love">Aceitar</button>
        //             </div>
        //         </div>
        //         <hr />`
        //     )
        // }

    }).fail(function () {
        console.log('algo deu errado');
    });

    $("#delete-love").click(function (avent) {
        swal({
            title: "Tem certeza ?",
            text: "O(a) crush será rejeitado(a)",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            // if (willDelete) {

            //     $.ajax({
            //         url: "/deleteGoal", 
            //         method: "POST",
            //         data: {id : $("#goal-id").val()} ,
            //         dataType: "text" 
            //     }).done(function(data) {
            //         $('#exampleModal').modal('hide');
            //         $('#confirm').modal('hide');
            //         $('#table_id').DataTable().ajax.reload();

            //         swal({
            //             title: "Registro apagado!",
            //             icon: "success",
            //             button: "Continuar",
            //         });

            //     }).fail(function() { 
            //         swal({
            //             title: "Houve um erro!",
            //             icon: "error",
            //             text: "Por favor, tente novamente",
            //             button: "Continuar",
            //         });
            //     });
            // } else {
            //     swal("Ufaa! Sua meta continuar de pé");
            // }
        });
    });
    $("#accept-love").click(function (avent) {
        swal({
            title: "Tem certeza ?",
            text: "Suas metas serão compartilhas com ele(a)",
            icon: "success",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            // if (willDelete) {

            //     $.ajax({
            //         url: "/deleteGoal", 
            //         method: "POST",
            //         data: {id : $("#goal-id").val()} ,
            //         dataType: "text" 
            //     }).done(function(data) {
            //         $('#exampleModal').modal('hide');
            //         $('#confirm').modal('hide');
            //         $('#table_id').DataTable().ajax.reload();

            //         swal({
            //             title: "Registro apagado!",
            //             icon: "success",
            //             button: "Continuar",
            //         });

            //     }).fail(function() { 
            //         swal({
            //             title: "Houve um erro!",
            //             icon: "error",
            //             text: "Por favor, tente novamente",
            //             button: "Continuar",
            //         });
            //     });
            // } else {
            //     swal("Ufaa! Sua meta continuar de pé");
            // }
        });
    });

});