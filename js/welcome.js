function welcome(){
    let welcome_text = '整了个弹窗，牛逼吧（）'
    if(document.referrer!==''){
        let referrer=document.referrer.split("/")[2];
        welcome_text="欢迎你，来自"+referrer.toUpperCase()+"的用户！";
        if(referrer.toUpperCase()==document.domain.toUpperCase())return;
    }
    swal({
        title: " 欢迎光顾qwq~",
        text: welcome_text+'\n打开页面下方音乐以获得更佳体验！',
        imageUrl: "/immm/flag.jpg",
        timer: 3000,
        showConfirmButton: false
    });
}
$(document).ready(()=>{
    welcome()
})