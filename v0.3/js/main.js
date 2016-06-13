require(['jquery','window'],function($,w){
    $('#a').click(function(){
        new w.Window().alert({
            title:'提示',
            content:'Hello World!',
            handler:function(){
                alert('你点击了关闭按钮');
            },
            width:400,
            height:250,
            y:50
        });
    });
});
