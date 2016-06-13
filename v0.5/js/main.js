require(['jquery','jqueryUI','window'],function($,$UI,w){
    $('#a').click(function(){
        new w.Window().alert({
            title:'提示',
            content:'Hello World!',
            handler4AlertBtn:function(){
                // alert('你点击了关闭按钮');
            },
            handler4CloseBtn:function(){
                // alert('你真的点了关闭按钮');
            },
            width:400,
            height:250,
            y:50,
            hasCloseBtn:true,
            skinClassName:"window_skin_a",
            text4AlertBtn:"ok",
            dragHandle:'.window_header'
        });
    });
});
