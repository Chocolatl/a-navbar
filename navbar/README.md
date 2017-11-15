## 用法
```html
<!-- 可选的.navbar-fixed用于固定导航条在页面顶端 -->
<nav class="navbar navbar-fixed">
    <div class="navbar-head">
        <button class="navbar-toggle">≡</button>
    </div>
    <ul class="navbar-nav">

        <!-- 添加.active的项突出显示 -->
        <li class="active"><a href="#">主页</a></li>

        <!-- 拥有下拉菜单的项添加.dropdown -->
        <li class="dropdown">

            <!-- a标签默认行为会被阻止 -->
            <a href="#" class="dropdown-toggle">食物</a>

             <!-- 下拉菜单 -->
            <ul class="dropdown-menu">
                <li><a href="#">巧克力</a></li>
                <li><a href="#">咖啡</a></li>
                <li><a href="#">奶茶</a></li>
                <li><a href="#">辣条</a></li>
            </ul>
        </li>
        <li><a href="#">关于</a></li>
    </ul>
</nav>
```

移动设备下，菜单在文章页的时候可以用来充当文章目录，h2标签和h3标签标题作为主菜单和下拉菜单的项。

## 备注
暂时凑合着用，以后需要重写。