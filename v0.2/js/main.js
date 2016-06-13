require(['jquery','window'],function($,w){
    $('#a').click(function(){
        new w.Window().alert({
            content:'Hello World!',
            handler:function(){
                alert('你点击了关闭按钮');
            },
            width:300,
            height:150,
            y:50
        });
    });
});
