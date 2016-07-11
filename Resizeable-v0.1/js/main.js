// panel面板，ctrl控制元素，type类型
var m_panel,m_ctrl,m_type;
var moving=0,m_start_x=0,m_start_y=0,m_to_x=0,m_to_y=0;
// moving鼠标是否再控制元素，开始拖动
// m_start_x 鼠标相对ctrl的left，top
// m_start_y 鼠标的新位置
function Resizable(panel_id){
    // 为控制元素支持拖拽
    function on_mousedown(e,panel,ctrl,type){
        var e=e||window.event;
        // 计算鼠标在页面上的位置
        // 鼠标在当前元素的位置
        m_start_x=e.pageX-ctrl.offsetLeft;
        m_start_y=e.pageY-ctrl.offsetTop;

        m_panel=panel;
        m_ctrl=ctrl;
        m_type=type;

        // 开始监听处理移动事件
        moving=setInterval(on_move,10);
    }
    function on_move(){
        if(moving){
            var min_left=m_panel.offsetLeft;
            var min_top=m_panel.offsetTop-50;
            var to_x=m_to_x-m_start_x;
            var to_y=m_to_y-m_start_y;
            to_x=Math.max(to_x,min_left);
            to_y=Math.max(to_y,min_top);
            switch(m_type){
                case 'r':
                    m_ctrl.style.left=to_x+'px';
                    m_panel.style.width=to_x+10+'px';
                    break;
                case 'b':
                    m_ctrl.style.top=to_y+'px';
                    m_panel.style.height=to_y+10+'px';
                    break;
                case 'rb':
                    m_ctrl.style.left=to_x+'px';
                    m_ctrl.style.top=to_y+'px';
                    m_panel.style.width=to_x+10+'px';
                    m_panel.style.height=to_y+10+'px';
                    break;
            }

        }
    }
    // 处理鼠标在页面上移动的事件
    document.onmousemove=function(e){
        var e=e||window.event;
        e.preventDefault();
        m_to_x=e.pageX;
        m_to_y=e.pageY;
    }
    // 鼠标松开
    document.onmouseup=function(){
        clearInterval(moving);
        moving=0;
        var cls=document.getElementsByClassName('ui-Resizable-ctrl');
        for(var i=0;i<cls.length;i++){
            cls[i].style.left='';
            cls[i].style.top='';
        }
    }
    // 为面板加入控制元素
    var panel=document.getElementById(panel_id);
    var r=document.createElement('div');
    var b=document.createElement('div');
    var rb=document.createElement('div');
    r.class=r.className="ui-Resizable-r ui-Resizable-ctrl";
    b.class=b.className="ui-Resizable-b ui-Resizable-ctrl";
    rb.class=rb.className="ui-Resizable-rb ui-Resizable-ctrl";
    panel.appendChild(r);
    panel.appendChild(b);
    panel.appendChild(rb);
    // 为控制元素设置拖拽
    r.addEventListener('mousedown',function(e){
        on_mousedown(e,panel,r,'r');
    });
    b.addEventListener('mousedown',function(e){
        on_mousedown(e,panel,b,'b');
    });
    rb.addEventListener('mousedown',function(e){
        on_mousedown(e,panel,rb,'rb');
    });
}
Resizable('ui-resizable');
