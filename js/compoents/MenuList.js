import { ref } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

export default {
name: 'MenuList',
template: `
<nav class="left_block">
    <ul class="list">
        <li class="select" :class="toggleClass[0] ? '-on': ''" @click="change(0)">
            <a href="#scroll0" class="navItem" :class="toggleClass[0] ? 'textWhite': ''">
                <p>經典風味</p>
                <p>Classic</p>
            </a>
        </li>
        <li class="select" :class="toggleClass[1] ? '-on': ''" @click="change(1)">
            <a href="#scroll1" class="navItem" :class="toggleClass[1] ? 'textWhite': ''">
                <p>港式燒臘</p>
                <p>Hong Kong</p>
            </a>
        </li>
        <li class="select" :class="toggleClass[2] ? '-on': ''" @click="change(2)">
            <a href="#scroll2" class="navItem" :class="toggleClass[2] ? 'textWhite': ''">
                <p>日式風情</p>
                <p>Japanese</p>
            </a>
        </li>
        <li class="select" :class="toggleClass[3] ? '-on': ''" @click="change(3)">
            <a href="#scroll3" class="navItem" :class="toggleClass[3] ? 'textWhite': ''">
                <p>湯點飲品</p>
                <p>Soup&Drink</p>
            </a>
        </li>
        <li class="select" :class="toggleClass[4] ? '-on': ''" @click="change(4)">
            <a href="#scroll4" class="navItem" :class="toggleClass[4] ? 'textWhite': ''">
                <p>小菜</p>
                <p>Side Dish</p>
            </a>
        </li>
        <hr>
        <li class="select">
            <a>
                <p>購物車</p>
                <p>Cart</p>
            </a>
        </li>
    </ul>
</nav>
`,
setup() {
const toggleClass = ref([true, false, false, false, false]);

const change = function ChangeTheClassCssAttribute(index) {
toggleClass.value = Array(5).fill(false);
toggleClass.value[index] = true;
};

return {
toggleClass,
change
}
}
}