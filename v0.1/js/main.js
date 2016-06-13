require(['jquery','window'],function($,w){
    $('#a').click(function(){
        new w.Window().alert('Hello World!',function(){
            alert('你点击了关闭按钮')
        });
    });
});
