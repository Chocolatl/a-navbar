/*
 ** name  : navbar.js
 ** author: chocolatl
 ** date  : 2017-02-01
 */


//但愿页面上只有一个导航条

$(function() {

    var $navbarNav = $(".navbar .navbar-nav");

    var $navLis = $(".navbar > .navbar-nav > li");

    //拥有下拉菜单的主菜单项
    var $dropLi = $navLis.filter(".dropdown");

    //移动设备下的导航条切换按钮
    var $navToggle = $(".navbar > .navbar-head > .navbar-toggle");

    function isSmallScreen() {
        return $(".navbar .navbar-head").is(":visible");
    }

    function closeDropdownMenu() {
        $navLis.removeClass("move");
        $dropLi.removeClass("open");
    }

    function openDropdownMenu(target) {
        $navLis.addClass("move");
        $(target).addClass("open");
    }

    //阻止拥有下拉菜单的主菜单项链接的默认行为
    $dropLi.children(".dropdown-toggle").click(function(e) {
        e.preventDefault();
    });

    //注册移动设备菜单关闭事件
    $navbarNav.on("navbar-close", function() {
        if ($(this).hasClass("open")) {

            //取消对菜单高度的设置
            $navbarNav[0].style.height = "";

            $(this).removeClass("open");

            closeDropdownMenu();

            $("#sidenav-overlay").animate({ opacity: 0 }, 300, function() {
                $("#sidenav-overlay").remove();
            });
        }
    });

    //注册移动设备菜单打开事件
    $navbarNav.on("navbar-open", function() {

        //防止在大屏幕设备打开下拉菜单后切换为小屏幕显示错乱
        closeDropdownMenu();
        
        if (isSmallScreen()) {
            var $that = $(this);

            //设置菜单高度与窗口相同
            $navbarNav[0].style.height = $(window).height() + "px";

            $(this).addClass("open");

            //创建遮盖层 id:sidenav-overlay
            $('<div id="sidenav-overlay" class="sidenav-overlay"></div>')
            .appendTo("body")
            .css("opacity", 0)
            .animate({ opacity: 0.7 }, 400)

            //遮盖层被点击时触发关闭导航栏事件
            .one("click", function() {
                $that.trigger("navbar-close");
            });

            //改变窗口尺寸时关闭移动设备导航
            $(window).one("resize", function() {
                $navbarNav.trigger("navbar-close");
            });
        }
    });


    //处理移动设备下导航条切换按钮被单击的事件
    $navToggle.click(function(e) {
        $navbarNav.trigger("navbar-open");
        e.preventDefault();
    });

    //处理下拉菜单显示/关闭的事件
    $(".navbar").on("mouseenter mouseleave click", ".dropdown", function(e) {
        //this = li.dropdown
        //由于下拉菜单（包括::before生成的返回按钮）是主菜单菜单项的子元素，所以也会触发这个事件

        //移动设备样式
        if (isSmallScreen()) {
            if (e.type == "click") {

                //主菜单所有菜单项
                var $navLis = $(this).parent().children();

                //点击的是下拉菜单的返回按钮（.dropdown-menu::before）
                if ($(e.target).is(".dropdown-menu")) {
                    closeDropdownMenu();
                }
                //点击的是主菜单拥有下拉菜单的菜单项
                else if ($(e.target).is(".dropdown-toggle")) {
                    openDropdownMenu(this);
                }
            }
        }
        //非移动设备样式
        else {
            if (e.type == "mouseenter") {
                $(this).addClass("open");
            } else if (e.type == "mouseleave") {
                $(this).removeClass("open");
            }
        }
    });

    //下拉菜单中所有项和主菜单中不用于弹出下拉菜单的项被单击时关闭菜单
    $(".navbar > .navbar-nav li").not(".dropdown").on("click", function() {
        if(isSmallScreen()){
            $navbarNav.trigger("navbar-close");
        } else {
            $dropLi.removeClass("open");
        }
    });

});