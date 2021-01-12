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

        for (var i in data) {

            if (data[i].status == 0) {
                if (myUser == data[i].rk_user_id) {
                    $("#MyLove").append(
                        `<div class="row"> 
                        <div class="col-8">
                        Aguarde ${data[i].girlfriend_name} aceitar sua solicitação
                        </div>
                    </div>
                    <hr />`
                    )
                } else {
                    $("#MyLove").append(
                        `<div class="row div-${data[i].id}"> 
                            <div class="col-8">
                            <input type="hidden" value="${data[i].id}" id="notification_id">
                            Deseja aceitar solicitação do(a) ${data[i].user_name}
                            </div>
                            <div class="col-4">
                                <button type="button" class="btn btn-danger" onclick="deleteLove(${data[i].id},${data[i].rk_user_id},${data[i].rk_girlfriend_id})">Excluir</button>
                                <button type="button" class="btn btn-primary" onclick="acceptLove(${data[i].id},${data[i].rk_user_id},${data[i].rk_girlfriend_id})"  >Aceitar</button>
                            </div>
                        </div>
                        <hr />`
                    )
                }
            } else {
                $("#MyLove").append(
                    `<div class="row div-${data[i].id}"> 
                        <div class="col-10">
                        <input type="hidden" value="${data[i].id}" id="notification_id">
                        Sua história é compartilhada com ${(myUser == data[i].rk_user_id) ? data[i].girlfriend_name : data[i].user_name}

                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-all" viewBox="0 0 16 16" style="
                        background-color: #8cff8c;
                        border-radius: 90%;
                        width: 40px;
                        height: 40px;
                    ">
  <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l7-7zm-4.208 7l-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0z"/>
  <path d="M5.354 7.146l.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708z"/>
</svg>
                        </div>
                        <div class="col-2">
                            <button type="button" class="btn btn-danger" onclick="deleteLove(${data[i].id},${data[i].rk_user_id},${data[i].rk_girlfriend_id})" >Excluir</button>
                        </div>
                    </div>
                    <hr />`
                )
            }
        }
    }).fail(function () {
        console.log('algo deu errado');
    });
});

function acceptLove(id, user, girlfriend) {
    $.ajax({
        url: "/accept/notification",
        method: "POST",
        dataType: "json",
        data: {
            id: id,
            status: 1,
            user: user,
            girlfriend: girlfriend,
        },
    }).done(function (data) {
        swal({
            title: "Aceito com Sucesso!",
            text: "Uhull!",
            icon: "success",
        }).then(() => {
            window.location.href = '/love';
        });
    }).fail(function () {
        console.log('algo deu errado');
    });
}

function deleteLove(id, user, girlfriend) {

    swal({
        title: "Tem certeza ?",
        text: "O(a) crush será excluido(a)",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    }).then((willDelete) => {
        $.ajax({
            url: "/delete/notification",
            method: "DELETE",
            dataType: "json",
            data: {
                id: id,
                user: user,
                girlfriend: girlfriend,
            },
        }).done(function (data) {
            swal({
                title: "Aceito com Sucesso!",
                text: "Uhull!",
                icon: "success",
            }).then(() => {
                window.location.href = '/love';
            });
        }).fail(function () {
            console.log('algo deu errado');
        });
    });
}