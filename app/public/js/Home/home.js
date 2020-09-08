$(document).ready(function() {

    var table= $('#table_id').DataTable({
        "language": {
            "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Portuguese.json"
        },
        "ajax": "getGoals",
        "order":[0,'desc'],
        "columns": [
            { "data": "id" },
            { "data": "name" },
            { "data": "rk_user_id" },
            { 
                data: 'concluded',
                render:  data => {
                    if(data != null)
                    {
                    return dateFormat(data,'date-front');
                    }else{return null}
                }
            }, 
            { 
                data: 'created_at',
                render:  data => dateFormat(data,'date-front')
            }, 
            { 
                data: 'id',
                render:  data => `<button type="button" value="'+data+'" class="btn" data-toggle="modal" data-target="#exampleModal"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-gear-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 0 0-5.86 2.929 2.929 0 0 0 0 5.858z"/>
                </svg></button>`
            }, 
        ]
    });

    $("#saveGoal").click(function(){
        $.ajax({
            url: "/createGoals",
            method: "POST",
            data: { name : $("#newGoals").val().capitalize() },
            dataType: "html"
        }).done(function(data) {
            swal({
                title: "Meta cadastrada!",
                text: "Uhull!",
                icon: "success",
                button: "Continuar",
            });
            $('#table_id').DataTable().ajax.reload();
            $('#newGoals').val(``);
        }).fail(function() {
            console.log('algo deu errado');
        }); 
    });

    $("#table_id tbody").on( 'click', 'button', function () {
        var dataRow = table.row( $(this).parents('tr') ).data();

        console.log(dataRow);
        console.log(moment(dataRow.created_at).format('YYYY-MM-DD'));
        console.log(moment(dataRow.concluded).format('YYYY-MM-DD'));
        
        $("#goal-date-concluded").val('');
        
        $("#goal-id").val(dataRow.id);
        $("#goal-title").html(dataRow.name);
        $("#goal-create-by").val(dataRow.rk_user_id);
        $("#goal-create-date").val(dateFormat(dataRow.created_at,'date-front'));
        $("#goal-observation").val(dataRow.obs);

        if(dataRow.concluded)
        {
            $("#goal-date-concluded").val(dateFormat(dataRow.concluded),'date-back');
        }

        
        $("#data-concluded-clear").click(function(avent){
            $("#goal-date-concluded").val('');
        });
        
    });  
    
    $("#modal-save-goals").click(function(avent){
        $.ajax({
            url: "/updateGoals", 
            method: "POST",
            dataType: "text",
            data: {
                id : $("#goal-id").val(),
                obs : $("#goal-observation").val(),
                concluded : $("#goal-date-concluded").val()
            } ,
            beforeSend : function(data){
                $('#exampleModal').modal('hide');
                swal({
                    title: "Meta atualizada com sucesso !",
                    icon: "success",
                    button: "Continuar",
                });
            }
        });

        $('#table_id').DataTable().ajax.reload();
    });

    $("#delete-force-goal").click(function(avent){
        swal({
            title: "Tem certeza ?",
            text: "Cuidado, sua meta será deletada",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                
                $.ajax({
                    url: "/deleteGoal", 
                    method: "POST",
                    data: {id : $("#goal-id").val()} ,
                    dataType: "text" 
                }).done(function(data) {
                    $('#exampleModal').modal('hide');
                    $('#confirm').modal('hide');
                    $('#table_id').DataTable().ajax.reload();

                    swal({
                        title: "Registro apagado!",
                        icon: "success",
                        button: "Continuar",
                    });

                }).fail(function() { 
                    swal({
                        title: "Houve um erro!",
                        icon: "error",
                        text: "Por favor, tente novamente",
                        button: "Continuar",
                    });
                });
            } else {
                swal("Ufaa! Sua meta continuar de pé");
            }
        });
    });

    function dateFormat(date,arg=null)
    {   
        switch(arg)
        {
            case 'date-front':
                return moment(date).format('DD/MM/YYYY');
            break;
            case 'date-back':
                return moment(date).format('YYYY-MM-DD');
            break;
            case 'dateTime':
                return moment(date).format('YYYY-MM-DDTHH:mm:ss');
            break;
            default:
                return moment(date).format('YYYY-MM-DD');
                break;
        }
    }

    String.prototype.capitalize = function() {
        return this.charAt(0).toUpperCase() + this.slice(1);
    }      
});