$(function () {

    $("#quantity").keyup(function () {
        $("#form-data").empty();

        var quantity = $("#quantity").val();

        $("#form-data").append(`
            <input type="hidden" id="quantity_products" value="${quantity}">
        `)

        for (var i = 0; i < quantity; i++) {
            $("#form-data").append(`
                <div class="input-group mb-2">
                    <div class="input-group-prepend">
                        <div class="input-group-text">${i + 1}</div>
                    </div>
                    <input type="text" class="form-control" name="product_${i + 1}" placeholder="Produto">
                    <input type="text" class="form-control money" name="price_${i + 1}" placeholder="Preço">
                </div>
            `);
            $('.money').mask("#.##0,00", { reverse: true });
        }
    });



}); 