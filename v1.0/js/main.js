require(['jquery','window'],function($,w){
    $('#a').click(function(){
        var win=new w.Window();
        win.alert({
            title:'提示',
            content:'Hello World!',
            width:400,
            height:250,
            y:50,
            hasCloseBtn:true,
            skinClassName:"window_skin_a",
            text4AlertBtn:"ok",
            dragHandle:'.window_header'
        }).on('alert',function(){
            alert('123');
        }).on('close',function(){
            alert('321');
        });
    });
    $("#b").click(function(){
        var win=new w.Window();
        win.confirm({
            title:"系统消息",
            content:"您确定要删除这个文件吗？",
            width:300,
            height:150,
            y:50,
            skinClassName:"window_skin_a",
            text4ConfirmBtn:"确定",
            text4CancelBtn:"取消",
            dragHandle:".window_header",
            // hasCloseBtn:true
        }).on("confirm",function(){
            alert("确定");
        }).on('cancel',function(){
            alert("取消");
        });
    });
    $("#c").click(function(){
        var win=new w.Window();
        win.prompt({
            title:"请输入您的名字",
            content:"我们将会为您保密您输入的信息！",
            width:400,
            height:250,
            y:50,
            skinClassName:"window_skin_a",
            text4CancelBtn:"取消",
            text4PromptBtn:"输入",
            defaultValue4PromptInput:"Sakura",
            dragHandle:".window_header",
            handler4PromptBtn:function(inputValue){
                alert("您输入的内容是："+inputValue);
            },handler4CancleBtn:function(){
                alert('取消');
            }
        });
    });
    $('#d').click(function(){
        var win=new w.Window();
        win.common({
            content:"我是一个通用普通弹窗",
            width:300,
            height:150,
            y:50,
            hasCloseBtn:true,
            skinClassName:"window_skin_b",
            // isDraggable:false
        });
    })
});
