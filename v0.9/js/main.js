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
            text4ConfirmBtn:"是",
            text4CancelBtn:"否",
            dragHandle:".window_header",
            // hasCloseBtn:true
        }).on("confirm",function(){
            alert("确定");
        }).on('cancel',function(){
            alert("取消");
        });
    })

});
