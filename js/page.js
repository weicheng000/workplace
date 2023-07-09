//總頁數
var total = 20;
$(function () {
    makePage(total, 1);
});
function makePage(total, page) {
    let pageHtml = '';
    let ddd = '<div class="fy_d"></div><div class="fy_d"></div><div class="fy_d"></div>';

    function createPage(index) { //單頁碼生成
        if (page == index) {
            //當前選中帶頁碼active狀態的
            pageHtml += '<div class="fy_y selected" >' + page + '</div>';
        } else {
            pageHtml += '<div class="fy_y" onclick="pageClick(this)">' + index + '</div>';
        }
    }

    if (total <= 10) { //總頁數小於10
        for (let i = 1; i <= total; i++) {
            //正常生成排列
            createPage(i);
        }
    } else {
        if (page <= 4) { //總頁數大於10且當前頁數遠離總頁數(小於4)
            for (let i = 1; i <= 4 + 1; i++) { //顯示1-5
                createPage(i);
            }
            //三个点...
            pageHtml += ddd;
            //三个点后面 生成最后一个页数
            createPage(total);

        } else if (page > total - 4) { //總頁數大於10且2當前頁接近總頁數(大於總頁數-4)
            //第一頁
            createPage(1);
            //三个點...
            pageHtml += ddd;
            //生成最後5个頁數
            for (let i = total - 4; i <= total; i++) {
                createPage(i);
            }
        } else { //除了上面兩種情況 頁數在中間
            //頁數1
            createPage(1);
            //三个點...
            pageHtml += ddd;
            //生成当前页和 前跟后一个页数
            for (let i = page - 1; i <= page + 1; i++) {
                createPage(i);
            }
            //三个点...
            pageHtml += ddd;
            //最后一个页数
            createPage(total);
        }
    }

    if (page > 1 && total > 1) { // 上一页
        pageHtml += '<div class="previous" onclick="previous()">上一頁</div>';
    } else {
        pageHtml += '<div class="previous">上一頁</div>';
    }
    if (page < total && total > 1) { // 下一页
        pageHtml += '<div class="next" onclick="next()">下一頁</div>';
    } else {
        pageHtml += '<div class="next">下一頁</div>';
    }
    //赋值生成html
    $('.rb_bottom').html(pageHtml);
}
//上一页点击事件
function previous() {
    //获取当前页
    let page = $('.rb_bottom>.selected').text();
    if (page <= 1) {
        return;
    }
    makePage(total, page - 1);
}
//下一页点击事件
function next() {
    //获取当前页
    let page = $('.rb_bottom>.selected').text();
    if (page >= total) {
        return;
    }
    makePage(total, page * 1 + 1);
}
//直接点击页数事件
function pageClick(that) {
    var page = $(that).html();
    makePage(total, page * 1);
}