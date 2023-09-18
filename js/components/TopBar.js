import { ref } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';
import Top from './Top.js';

export default {
    name:'TopBar',
    components: {
        Top
    },
    template: `
<top @show-login-modal="openLoginModal"></top>
<transition mode="out-in">
    <template v-if="loginModal">
        <div class="modalBase" @click="openLoginModal">
            <div class="modalPage row" @click.stop>
                <!-- main side -->
                <div class="col-5 col-md-12">
                    <div class="mb-1">
                        <div class="row">
                            <div class="row flex-ja-c modalTitle">
                                <img src="./img/icon/logo.png" alt="">
                                <h4 class="sp-1">藍星鐵路便當</h4>
                            </div>
                        </div>
                    </div>


                    <div class="mb-1 p-1 cardTitle">
                        <h3 class="sp-1">歡迎回到</h3>
                        <h1 class="sp-1">藍星便當</h1>
                    </div>
                    <div class="p-1">
                        <div class="mb-1">
                            <label for="account" class="sp-1">帳號 Account:</label>
                            <input type="text" id="account" class="modalInput sp-1" placeholder="請輸入帳號">
                        </div>
                        <div class="mb-1">
                            <label for="pwsede" class="sp-1">密碼 password:</label>
                            <input type="password" id="pwsede" class="modalInput sp-1" placeholder="請輸入密碼">
                        </div>
                        <div class="row justify-space-between mb-1">
                            <div>
                                <input type="radio" id="remember" class="me-1">
                                <label for="remember" class="sp-1">記住我的帳號</label>
                            </div>
                            <div>
                                <a href="#" class="sp-1">忘記密碼?</a>
                            </div>
                        </div>
                        <div class="col-12 mb-1">
                            <button type="button" class="btn-2">登入</button>
                        </div>
                        <div class="row justify-end">
                            <span class="sp-1">還沒有帳號嗎? 請點擊<a href="#">註冊會員</a></span>
                        </div>
                    </div>
                </div>
                <!-- intro side -->
                <div class="col-7 col-md-fade intro">
                    <p class="mb-1">加入會員，即可享受：</p>
                    <p class="mb-1">1.會員獨享的積分制度</p>
                    <p class="mb-1">2.每月輪換優惠</p>
                    <p class="mb-1">3.每月固定次數預約內用免服務費</p>
                    <p class="mb-1">4.還有更多驚喜，等你發現！</p>
                </div>
            </div>
        </div>
    </template>
</transition>
`,
    setup() {
        const loginModal = ref(false);

        const openLoginModal = () => {
            loginModal.value = !loginModal.value;
        };
        return {
            loginModal,
            openLoginModal
        }
    }
}