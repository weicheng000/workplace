import { onMounted } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs';

export default {
    name: 'ReservationSwiper',
    template:`
<div class="swiper-control">
    <div class="swiper mySwiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img src="./img/item/rs-t-01.jpg" alt="">
                <p class="ms-1">第一間<br>適合1~4人</p>
            </div>
            <div class="swiper-slide">
                <div class="swiper-slide">
                    <img src="./img/item/rs-t-01.jpg" alt="">
                    <p class="ms-1">第二間<br>適合2~6人</p>
                </div>
            </div>
            <div class="swiper-slide">
                <div class="swiper-slide">
                    <img src="./img/item/rs-t-01.jpg" alt="">
                    <p class="ms-1">第三間<br>適合1~2人</p>
                </div>
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</div>    
`,setup(){
    onMounted(() => {
        const swiper = new Swiper(".mySwiper", {
            direction: "vertical",
            slidesPerView: 1,
            spaceBetween: 30,
            mousewheel: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
    });
    return{

    }
}
}