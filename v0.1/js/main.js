require(['jquery','window'],function($,w){
    $('#a').click(function(){
        new w.Window().alert('Hello World!');
    });
});
