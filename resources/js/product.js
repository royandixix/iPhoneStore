document.addEventListener('DOMContentLoaded', function () {
    const priceInput = document.getElementById('price');

    if (priceInput) {
        priceInput.addEventListener('input', function (e) {
            let value = e.target.value.replace(/\D/g, '');
            e.target.value = new Intl.NumberFormat('id-ID').format(value);
        });
    }
});


