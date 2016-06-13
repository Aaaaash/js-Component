define(['jquery','jqueryUI'],function($,$UI){
    function Window(){
        this.cfg={
            width:500,
            height:300,
            title:"系统消息",
            content:"",
            handler4AlertBtn:null,
            hasCloseBtn:false,
            skinClassName:null,
            handler4CloseBtn:null,
            text4AlertBtn:"确定",
            isDraggable:true,
            dragHandle:null
        };
        this.handlers={};
    };
    Window.prototype={
        alert:function(cfg){
                that=this;
                var CFG=$.extend(this.cfg,cfg);
                var boundingBox=$(
                    '<div class="window_boundingBox">'+
                        '<div class="window_header">'+CFG.title+'</div>'+
                        '<div class="window_body">'+CFG.content+'</div>'+
                        '<div class="window_footer"><input type="button" value="'+CFG.text4AlertBtn+'" class="window_alertBtn"/></div>'+
                    '</div>'
                );
                var btn=boundingBox.find('.window_alertBtn');
                boundingBox.appendTo('body');
                btn.click(function(){
                    CFG.handler4AlertBtn && CFG.handler4AlertBtn();
                    boundingBox.remove();
                    that.fire('alert');
                });
                boundingBox.css({
                    width:CFG.width+'px',
                    height:CFG.height+'px',
                    left:(CFG.x||(window.innerWidth-CFG.width)/2)+'px',
                    top:(CFG.y||(window.innerHeight-CFG.height)/2)+'px'
                });
                if(CFG.hasCloseBtn){
                    var closeBtn=$('<span class="window_closeBtn"></span>');
                    closeBtn.appendTo(boundingBox);
                    closeBtn.click(function(){
                        CFG.handler4CloseBtn && CFG.handler4CloseBtn();
                        boundingBox.remove();
                        that.fire('close');
                    });
                };
                if(CFG.skinClassName){
                    boundingBox.addClass(CFG.skinClassName);
                };
                if(CFG.isDraggable){
                    if(CFG.dragHandle){
                        boundingBox.draggable({handle:CFG.dragHandle});
                    }else{
                        boundingBox.draggable();
                    }
                };
                if(CFG.handler4AlertBtn){
                    this.on('alert',CFG.handler4AlertBtn);
                };
                if(CFG.handler4CloseBtn){
                    this.on('close',CFG.handler4CloseBtn);
                }
        },
        confim:function(){},
        prompt:function(){},
        on:function(type,handler){
                if(typeof this.handlers[type]=="undefined"){
                    this.handlers[type]=[];
                }
                this.handlers[type].push(handler);
        },
        fire:function(type,data){
                if(this.handlers[type] instanceof Array){
                    var handlers=this.handlers[type];
                    for(var i=0,len=handlers.length;i<len;i++){
                        handlers[i](data);
                    }
                }
        }
    }
    return {
        Window:Window
    }
});
