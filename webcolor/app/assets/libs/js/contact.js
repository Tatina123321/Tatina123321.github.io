$(document).ready(function(){
    
    (function($) {
        "use strict";

    
    jQuery.validator.addMethod('answercheck', function (value, element) {
        return this.optional(element) || /^\bcat\b$/.test(value)
    }, "type the correct answer -_-");

    // validate contactForm form
    $(function() {
        $('#contactForm').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                subject: {
                    required: true,
                    minlength: 4
                },
                number: {
                    required: true,
                    minlength: 5
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true,
                    minlength: 20
                }
            },
            messages: {
                name: {
                    required: "У Вас есть имя, не так ли?",
                    minlength: "Ваше имя должно состоять как минимум из 2 символов"
                },
                subject: {
                    required: "У Вас есть тема, не так ли?",
                    minlength: "Ваша тема должна состоять как минимум из 4х символов"
                },
                number: {
                    required: "У Вас есть номер, не так ли?",
                    minlength: "Ваш номер должен состоять как минимум из 5 символов"
                },
                email: {
                    required: "Нет электронной почты, нет сообщений"
                },
                message: {
                    required: "хм ... да, вы должны написать что-то, чтобы отправить эту форму.",
                    minlength: "Это все? действительно?"
                }
            },
            submitHandler: function(form) {
                $(form).ajaxSubmit({
                    type:"POST",
                    data: $(form).serialize(),
                    url:"contact.php",
                    success: function() {
                        $('#contactForm :input').attr('disabled', 'disabled');
                        $('#contactForm').fadeTo( "slow", 1, function() {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor','default');
                            $('#success').fadeIn()
                            $('.modal').modal('hide');
		                	$('#success').modal('show');
                        })
                    },
                    error: function() {
                        $('#contactForm').fadeTo( "slow", 1, function() {
                            $('#error').fadeIn()
                            $('.modal').modal('hide');
		                	$('#error').modal('show');
                        })
                    }
                })
            }
        })
    })
 })(jQuery)
})