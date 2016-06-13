define(['jquery'],function(){
    function Window(){
        this.cfg={
            width:500,
            height:300,
            content:"",
            handler:null
        }
    };
    Window.prototype={
        alert:function(cfg){
                var CFG=$.extend(this.cfg,cfg);
                var boundingBox=$('<div class="window_boundingBox"></div>');
                boundingBox.appendTo('body');
                boundingBox.html('<h1>'+CFG.content+'</h1>');
                var btn=$('<input type="button" value="关闭"/>');
                btn.appendTo(boundingBox);
                btn.click(function(){
                    CFG.handler && CFG.handler();
                    boundingBox.remove();
                });
                boundingBox.css({
                    width:CFG.width+'px',
                    height:CFG.height+'px',
                    left:(CFG.x||(window.innerWidth-CFG.width)/2)+'px',
                    top:(CFG.y||(window.innerHeight-CFG.height)/2)+'px'
                });
        },
        confim:function(){},
        prompt:function(){}
    }
    return {
        Window:Window
    }
})
