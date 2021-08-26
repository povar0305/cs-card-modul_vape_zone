(function (_, $) {
    //аякс запрос + отключение полей 
    var usersEmail=document.querySelector(".cm-email");
    var usersPhone=document.querySelector("#phone_fake");
    var removeEl1=document.querySelector('#confirm_block');
    var removeEl2=document.querySelector('#verify_first');
    var msgBtn=document.querySelector('#gen_code_btn > a');
    var textUsers = document.querySelectorAll('#checkUserText');
    document.addEventListener('click', ev =>{
        var target = ev.target;
        if (!(target == usersEmail || target == usersPhone)){
            
            $.ajax({
                url: 'https://testmode.vapezone.pro/users/qqq.php', 
                method: 'POST',            
                data: {
                    phone: usersPhone.value,
                    email: usersEmail.value
                },success: function(result){
                    //console.log(result);
                    //console.log('DONE');
                    if (result==1 || result==11){
                        msgBtn.setAttribute("onclick"," ");
                       // console.log('есть');
                        alert('Такой пользователь уже есть');
                        //removeEl1.insertAdjacentHTML('beforebegin', '<p id="checkUserText">Такой пользователь уже есть</p>');
                    }else{
                        // var textUsers = document.querySelectorAll('#checkUserText');

                        // textUsers.forEach(el=>{
                        //     el.remove();
                        // })
                       msgBtn.setAttribute("onclick","$('#confirm_code_block').show();$(this).text('Отправить еще раз');$('#send_code_btn').show();fn_generate_confirm_code();");
                        //console.log('все ок');
                    };
                }   
            

        
        });
    };
    });
    


})(Tygh, Tygh.$);