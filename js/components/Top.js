export default {
    name: 'Top',
    template: `
<header class="p-rl d-flex">
    <div class="head_left">
        <ul class="head_list d-flex">
            <li class="h-b-style"><a href="./about_us.html" class="btn-1">
                    <p>關於我們</p>
                    <p>About Us</p>
                </a></li>
            <li class="h-b-style"><a href="./menu.html" class="btn-1">
                    <p>菜單</p>
                    <p>Menu</p>
                </a></li>
            <li class="h-b-style p-rl"><a href="#" class="btn-1">
                    <p>最新消息</p>
                    <p>News</p>
                </a>
                <ul class="drop_list">
                    <li class="h-b-style"><a href="./news.html" class="btn-1">
                            <p>最新消息</p>
                            <p>Last News</p>
                        </a></li>
                    <li class="h-b-style"><a href="./news2.html" class="btn-1">
                            <p>最新折扣</p>
                            <p>Last Bonus</p>
                        </a></li>
                </ul>
            </li>
            <li class="h-b-style"><a href="./Reservation.html" class="btn-1">
                    <p>線上預訂</p>
                    <p>Reservation</p>
                </a></li>
            <li class="h-b-style"><a href="./login.html" class="btn-1">
                    <p>會員登入</p>
                    <p>Login</p>
                </a></li>
        </ul>
    </div>
    <div class="head_right p-ab">
        <a href="./">
            <picture>
                <source media="(max-width: 922px)" srcset="img/icon/logo-small.png" />
                <img src="./img/icon/logo.svg" alt="Horses in Hawaii">
            </picture>
        </a>
    </div>
    <div class="burger">
        <img src="./img/icon/Menuburger.svg" alt="">
    </div>
</header>
`,
    setup() {
        return {

        }
    }
}