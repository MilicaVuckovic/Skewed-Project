$(document).ready(function () {

    if ($('.contact-form').length > 0) {
        $(function () {
            $(".contact-form").validate({
                highlight: function (element) {
                    $(element).addClass("is-invalid").removeClass("is-valid");
                },
                unhighlight: function (element) {
                    $(element).removeClass('is-invalid').addClass('is-valid');
                },
                rules: {
                    name: {
                        required: true,
                        rangelength: [2, 20]
                    },
                    email: {
                        required: true,
                        email: true
                    }

                },
                messages: {
                    name: {
                        required: 'Ime je obavezno polje',
                        rangelength: 'Ime mora imati izmedju 2 i 20 karaktera'
                    },
                    email: {
                        required: 'Email je obavezno polje',
                        email: 'Molimo Vas unesite validan email'
                    }

                },
                errorElement: 'p',
                errorPlacement: function (error, element) {
                    error.appendTo($(element).closest('.form-group').find('.invalid-feedback'));
                }

            });
        });

    }

    if ($('.counter').length > 0) {
        $('.counter').countUp({
            'time': 2000,
            'delay': 10
        });

    }

});