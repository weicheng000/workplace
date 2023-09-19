import { getCurrentInstance, ref, onMounted } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

export default {
    name: 'Top',
    template: `
<header class="p-rl d-flex">
    <div class="head_left">
        <ul class="head_list d-flex">
            <li class="h-b-style"><a href="./about_us.html" class="btn-1" :class="active === 0 ? 'active': ''">
                    <p>關於我們</p>
                    <p>About Us</p>
                </a></li>
            <li class="h-b-style"><a href="./menu.html" class="btn-1" :class="active === 1 ? 'active': ''">
                    <p>菜單</p>
                    <p>Menu</p>
                </a></li>
            <li class="h-b-style p-rl"><a href="/news.html" class="btn-1" :class="active === 2 ? 'active': ''">
                    <p>最新消息</p>
                    <p>News</p>
                </a></li>
            <li class="h-b-style"><a href="./Reservation.html" class="btn-1" :class="active === 3 ? 'active': ''">
                    <p>線上預訂</p>
                    <p>Reservation</p>
                </a></li>
            <li class="h-b-style"><a class="btn-1" @click="triggerLoginModal">
                    <p>會員登入</p>
                    <p>Login</p>
                </a></li>
        </ul>
    </div>
    <div class="head_right p-ab">
        <a href="./">
            <picture>
                <source media="(max-width: 922px)" srcset="img/icon/logo-small.png" />
                <img src="./img/icon/logo.svg" alt="Logos" class='rotateInfinite'>
            </picture>
        </a>
    </div>
    <div class="burger">
        <img src="./img/icon/Menuburger.svg" alt="">
    </div>
</header>
`,
    setup() {
        const { emit } = getCurrentInstance();

        const triggerLoginModal = () => {
            // 觸發自定義事件
            emit('show-login-modal');
        };

        // 根據網址改變高亮按鈕
        const active = ref(0);
        // -> 建立策略對象
        const strategies = {
            about: () => (active.value = 0),
            menu: () => (active.value = 1),
            news: () => (active.value = 2),
            Reservation: () => (active.value = 3),
        };
        // -> 用迴圈執行策略模式
        const initial = function getUrlToAddClassActive() {
            const currentURL = window.location.pathname;

            for (const strategyKey in strategies) {
                if (currentURL.includes(strategyKey)) {
                    strategies[strategyKey]();
                    return;
                }
            }

            active.value = -1;
        };

        onMounted(()=>{
            initial();
        });

        return {
            triggerLoginModal,
            active,
        }
    }
}