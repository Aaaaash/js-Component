define(['jquery'],function(){
    function Window(){};
    Window.prototype={
        alert:function(content){
            var boundingBox=$('<div class="window_boundingBox"></div>');
            boundingBox.appendTo('body');
            boundingBox.html('<h1>'+content+'</h1>');
        },
        confim:function(){},
        prompt:function(){}
    }
    return {
        Window:Window
    }
})
