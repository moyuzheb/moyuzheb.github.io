function welcome(){
    let welcome_text = '整了个弹窗，牛逼吧（）'
    
    swal({
        title: " 欢迎光临qwq~",
        text: welcome_text+'\n不要问我为什么挂了Transgender Flag，问就是尊重',
        text: welcome_text+'\n打开页面下方音乐以获得更佳体验',
        text: welcome_text+'\nSite updated:2/1',
        text: welcome_text+'\n本来想写个pixiv日榜接口的，贼难，不如弃 暗 投 明，直接用360壁纸的api',
        imageUrl: "/immm/flag.jpg",
        timer: 3000,
        showConfirmButton: false
    });
}
$(document).ready(()=>{
    welcome()
})