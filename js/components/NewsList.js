import { getCurrentInstance } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

export default {
    name: 'NewsList',
    props: ['parentData'],
    emits: ['change'],
    template: `
<div class="col-12 row mb-1 justify-space-between align-item-center">
    <div>
        <h1>{{ parentData.TCtitle }}</h1>
        <h1>{{ parentData.ENtitle }}</h1>
    </div>
    <div class="row align-item-center change" @click="change">
        <div class="me-1 row align-item-center arror">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em"
                viewBox="0 0 448 512">
                <path
                    d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
            </svg>
        </div>
        <p>{{ parentData.TCtitle === '最新消息' ? '最新折扣' : '最新消息' }}</p>
    </div>
</div>
<ul>
    <li v-for="(item, index) in parentData.list" :key="index" class="news_style p-rl">
        <div class="news_title">
            <p class="fb">{{ item.title }}</p>
            <p>{{ item.content }}</p>
        </div>
        <br>
        <div class="news_time p-ab">
            <p>{{ item.date }}</p>
        </div>
    </li>
</ul>
`,
    setup() {
        const { emit } = getCurrentInstance();

        const change = () => {
            // 觸發自定義事件
            emit('change');
        };
        return {
            change
        }
    }
}