define(['jquery'],function(){
    function Window(){
        this.cfg={
            width:500,
            height:300,
            title:"系统消息",
            content:"",
            handler:null
        }
    };
    Window.prototype={
        alert:function(cfg){
                var CFG=$.extend(this.cfg,cfg);
                var boundingBox=$(
                    '<div class="window_boundingBox">'+
                        '<div class="window_header">'+CFG.title+'</div>'+
                        '<div class="window_body">'+CFG.content+'</div>'+
                        '<div class="window_footer"><input type="button" value="关闭"/></div>'+
                    '</div>'
                );
                var btn=boundingBox.find('.window_footer input');
                boundingBox.appendTo('body');
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
