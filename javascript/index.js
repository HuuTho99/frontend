document.addEventListener("DOMContentLoaded",function() {
   
    //dang nhap
    var login=document.getElementById('login');
    
    var quenmk_dk=document.querySelector('.quenmk-dk');
    
    var signin=document.getElementById('signin');
    var den=document.querySelector('.den-form');
    var form_login=document.querySelector('.login-form');
    var form_signup=document.querySelector('.signup-form')
    login.onclick=function(){
        den.classList.add('hienthi');
        form_login.classList.add('hienthiform');
    }
    signin.onclick=function(){
        den.classList.add('hienthi');
        form_signup.classList.add('hienthiform');
    }
    den.onclick=function(){
        den.classList.remove('hienthi');
        form_login.classList.remove('hienthiform');
        den.classList.remove('hienthi');
        form_signup.classList.remove('hienthiform');
    }
    //xử lý nút đăng nhập form đăng ký
    var dn_ben_dk=document.getElementById('dn-ben-dk');
    dn_ben_dk.onclick=function(){
        den.classList.add('hienthi');
        form_login.classList.add('hienthiform');
        form_signup.classList.remove('hienthiform');
    }
    //xử lý nút đăng ký bên đăng nhập
    var dk_ben_dn=document.getElementById('dk-ben-dn');
    dk_ben_dn.onclick=function(){
        den.classList.add('hienthi');
        form_login.classList.remove('hienthiform');
        form_signup.classList.add('hienthiform');
    }
    
    //het dang nhap
    
    //wow animation
    new WOW().init();
    

    
    
},false)
