export default{
    name: 'Foot',
    template:`
    <footer class="d-flex p-rl">
    <div class="flex-grow-1 worktime">
        <ul>
            <li class="footer_type">營業時間 Our Hours</li>
            <li class="footer_type">禮拜二 到 禮拜五 / <span></span> 早上 11點 到 晚上 8點</li>
            <li class="footer_type">禮拜六 跟 禮拜天 / <span></span>早上 10點 到 晚上 9點</li>
            <li class="footer_type">禮拜一 公休</li>
        </ul>
    </div>
    <div class="flex-grow-1 address">
        <ul>
            <li class="instagram d-flex flex-a-c footer_type"><img src="img/icon/instagram.png" alt=""></li>
            <li class="footer_type">台北市南京東路120號</li>
            <li class="footer_type">02-85696678</li>
            <li class="footer_type">logorestaurant@gmail.com</li>
        </ul>
    </div>
    <div class="flex-grow-1">
        <ul class="d-flex">
            <li class="flex-grow-1">
                <ul>
                    <li class="footer_type"><a href="./menu.html" class=" footer_type">菜單</a></li>
                    <li class="footer_type"><a href="./about_us.html" class="footer_type">關於我們</a></li>
                    <li class="footer_type"><a href="./news.html" class="footer_type">最新消息</a></li>
                </ul>
            </li>
            <li class="flex-grow-1">
                <ul>
                    <li class="footer_type"><a href="./Reservation.html" class="footer_type">線上預訂</a></li>
                    <li class="footer_type"><a href="./login.html" class="footer_type">會員登錄</a></li>
                    <li class="footer_type"><a href="#" class="footer_type">外送服務</a></li>
                </ul>
            </li>
        </ul>
    </div>
    <div class="p-ab alert">
        <p class="footer_type">本網站為緯育TibaMe【第85期】前端工程師專業技術養成班學員作品,僅供學習、展示之用途。</p>
    </div>
</footer>
    `,
    setup(){
        return{

        }
    }
}