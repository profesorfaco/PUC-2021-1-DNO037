var secundario = document.getElementById("secundario").offsetHeight;
window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    console.log(scroll);

    if (scroll > secundario + 10) {
        document.getElementById("principal").classList.add("fixed-top");
    } else {
        document.getElementById("principal").classList.remove("fixed-top");
    }
});
var portfolio = [
    { title: "Lorem ipsum dolor sit amet", text: "Vestibulum sit amet augue congue sem rutrum dictum.", image: "https://picsum.photos/300?random=1" },
    { title: "Ut sit amet magna lacinia", text: "Vestibulum sit amet augue congue sem rutrum dictum.", image: "https://picsum.photos/300?random=2" },
    { title: "Aenean ultrices eros nec dui porttitor", text: "Vestibulum sit amet augue congue sem rutrum dictum.", image: "https://picsum.photos/300?random=3" },
    { title: "Mauris fermentum eros vitae ante efficitur", text: "Vestibulum sit amet augue congue sem rutrum dictum.", image: "https://picsum.photos/300?random=4" },
    { title: "Integer porttitor neque id pulvinar facilisis", text: "Vestibulum sit amet augue congue sem rutrum dictum.", image: "https://picsum.photos/300?random=5" },
    { title: "Mauris ut ante rutrum", text: "Vestibulum sit amet augue congue sem rutrum dictum.", image: "https://picsum.photos/300?random=6" },
    { title: "Sed eu ligula ac odio bibendum faucibus eu et tellus", text: "Vestibulum sit amet augue congue sem rutrum dictum.", image: "https://picsum.photos/300?random=7" },
    { title: "Aliquam imperdiet eros ultricies risus dignissim", text: "Vestibulum sit amet augue congue sem rutrum dictum.", image: "https://picsum.photos/300?random=8" },
    { title: "Cras id tincidunt nisl", text: "Vestibulum sit amet augue congue sem rutrum dictum.", image: "https://picsum.photos/300?random=9" },
    { title: "Mauris ut ante rutrum", text: "Vestibulum sit amet augue congue sem rutrum dictum.", image: "https://picsum.photos/300?random=10" },
    { title: "Sed eu ligula ac odio bibendum faucibus eu et tellus", text: "Vestibulum sit amet augue congue sem rutrum dictum.", image: "https://picsum.photos/300?random=11" },
    { title: "Aenean ultrices eros nec dui porttitor", text: "Vestibulum sit amet augue congue sem rutrum dictum.", image: "https://picsum.photos/300?random=12" },
];
portfolio.forEach(function (trabajo) {
    document.getElementById("portfolio").innerHTML +=
        '<div class="col-sm-6 col-lg-4 col-xxl-3"><div class="card shadow-sm"><img src="' +
        trabajo.image +
        '" class="card-img-top" alt="' +
        trabajo.title +
        '"><div class="card-body"><h5 class="card-title">' +
        trabajo.title +
        '</h5><p class="card-text">' +
        trabajo.text +
        "</p></div></div></div>";
});
