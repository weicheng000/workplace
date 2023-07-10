$(function () {
    $(".nav-button").click(function () {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#elementtoScrollToID").offset().top
        }, 2000);
    });
    $('.plus').on('click', function () {
        let count = $(this).next().val();
        count++;
        // console.log(count);
        $(this).next().val(count);
    })
    $('.minus').on('click', function () {
        let count = $(this).prev().val();
        count--;
        if (count > 0) {
            $(this).prev().val(count);
        } else {
            count = 0;
            $(this).prev().val(0);
        }
    })
})
var scroll_block_el = document.getElementById("scroll_block");
scroll_block.addEventListener("scroll", function () {
    let left_links = this.closest("div.parent_block").querySelectorAll("a.link");
    for (let i = 0; i < left_links.length; i++) {
        left_links[i].classList.remove("-on");
    }
    let blocks = this.querySelectorAll("ul.each_block");
    // console.log(blocks);
    let link;
    for (i = 0; i < blocks.length; i++) {
        let each_pos = blocks[i].offsetTop - this.scrollTop;
        if (each_pos <= 0 && each_pos >= -blocks[i].offsetHeight) {
            console.log(i);
            let link_id = blocks[i].getAttribute("data-id");
            console.log(link_id);
            link = document.getElementById(link_id);
        }
    }

    // code
    // console.log( blocks[0].offsetTop);
    // console.log(blocks[0].offsetTop - this.scrollTop);
    link.classList.add("-on");
});
let leftlinks = document.querySelectorAll("a.link");
for (let i = 0; i < leftlinks.length; i++) {
    leftlinks[i].addEventListener("click", function (e) {
        e.preventDefault();
        let link_id = this.getAttribute("id");
        // console.log(link_id);
        // let block = document.querySelector("div.each_block[data-id='" + link_id + "']");
        let block = document.querySelector(`ul.each_block[data-id=${link_id}]`);
        // console.log(block);
        // scroll_block_el.scrollTop = block.offsetTop + 1;
        scroll_block_el.scrollTo({
            top: block.offsetTop + 1,
            behavior: "smooth"
        });
    })
}