define(['jquery'],function(){
    function Window(){};
    Window.prototype={
        alert:function(content,handler){
            var boundingBox=$('<div class="window_boundingBox"></div>');
            boundingBox.appendTo('body');
            boundingBox.html('<h1>'+content+'</h1>');
            var btn=$('<input type="button" value="关闭"/>');
            btn.appendTo(boundingBox);
            btn.click(function(){
                handler&&handler();
                boundingBox.remove();
            })
        },
        confim:function(){},
        prompt:function(){}
    }
    return {
        Window:Window
    }
})
