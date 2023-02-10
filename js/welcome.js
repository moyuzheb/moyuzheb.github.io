function welcome(){
    let welcome_text = '整了个弹窗，牛逼吧（）'
    if(document.referrer!==''){
        let referrer=document.referrer.split("/")[2];
        welcome_text="From"+referrer.toUpperCase();
        if(referrer.toUpperCase()==document.domain.toUpperCase())return;
    }
    swal({
        title: " 欢迎光临qwq~",
        text: welcome_text+'\n打开页面下方音乐以获得更佳体验\nSite updated:2/1\n本来想写个pixiv日榜接口的，贼难，不如弃 暗 投 明，直接用360壁纸的api',
        imageUrl: "/immm/sb.jpg",
        timer: 3000,
        showConfirmButton: true
    });
}
$(document).ready(()=>{
    welcome()
})