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

});
