import { ref } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';
export default {
    name: 'counter',
    template: `
      <div class="card-form justify-space-between">
        <button type="button" class="count-btn plus" @click="change(1)">+</button>
        <span>{{ count }}</span>
        <button type="button" class="count-btn minus" @click="change(-1)">-</button>
        <input type="submit" value="OK!" class="count-submit">
      </div>
    `,
    setup() {
        const count = ref(0);

        const change = function changeTheCounterValue(changeValue) {
            if (count.value + changeValue >= 0) {
                count.value = count.value + changeValue;
            } else {
                count.value = 0;
            }
        }
        return {
            count,
            change
        }
    }
}
