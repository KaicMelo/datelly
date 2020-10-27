 

$("#register").on('submit',function(event){
    event.preventDefault();


    // $.ajax({
    //     url: "/cre",
    //     method: "POST",
    //     data: { name : $("#newGoals").val().capitalize() },
    //     dataType: "html"
    // }).done(function(data) {
    //     swal({
    //         title: "Meta cadastrada!",
    //         text: "Uhull!",
    //         icon: "success",
    //         button: "Continuar",
    //     });
    //     $('#table_id').DataTable().ajax.reload();
    //     $('#newGoals').val(``);
    // }).fail(function() {
    //     console.log('algo deu errado');
    // });  
})