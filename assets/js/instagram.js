var initDemo = function () {
    var header = document.getElementById("header");
    var skin = location.href.split('skin=')[1];

    if (!skin) {
        skin = 'Snapgram';
    }

    if (skin.indexOf('#') !== -1) {
        skin = skin.split('#')[0];
    }

    var skins = {
        'Snapgram': {
            'avatars': true,
            'list': false,
            'autoFullScreen': false,
            'cubeEffect': true
        },

        'VemDeZAP': {
            'avatars': false,
            'list': true,
            'autoFullScreen': false,
            'cubeEffect': false
        },

        'FaceSnap': {
            'avatars': true,
            'list': false,
            'autoFullScreen': true,
            'cubeEffect': false
        },

        'Snapssenger': {
            'avatars': false,
            'list': false,
            'autoFullScreen': false,
            'cubeEffect': false
        }
    };

    var timeIndex = 0;
    var shifts = [35, 60, 60 * 3, 60 * 60 * 2, 60 * 60 * 25, 60 * 60 * 24 * 4, 60 * 60 * 24 * 10];
    var timestamp = function () {
        var now = new Date();
        var shift = shifts[timeIndex++] || 0;
        var date = new Date(now - shift * 1000);

        return date.getTime() / 1000;
    };

    var stories = new Zuck('stories', {
        backNative: true,
        previousTap: true,
        autoFullScreen: skins[skin]['autoFullScreen'],
        skin: skin,
        avatars: skins[skin]['avatars'],
        list: skins[skin]['list'],
        cubeEffect: skins[skin]['cubeEffect'],
        localStorage: true,
        stories: [
            {
                id: "ramon",
                photo: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/users/1.jpg",
                name: "Ramon",
                link: "https://ramon.codes",
                lastUpdated: timestamp(),
                items: [
                    Zuck.buildItem("ramon-1", "photo", 3, "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/1.jpg", "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/1.jpg", '', false, false, timestamp()),
                    Zuck.buildItem("ramon-2", "video", 0, "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/2.mp4", "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/2.jpg", '', false, false, timestamp()),
                    Zuck.buildItem("ramon-3", "photo", 3, "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/3.png", "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/3.png", 'https://ramon.codes', 'Visit my Portfolio', false, timestamp())
                ]
            },
            {
                id: "gorillaz",
                photo: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/users/2.jpg",
                name: "Gorillaz",
                link: "",
                lastUpdated: timestamp(),
                items: [
                    Zuck.buildItem("gorillaz-1", "video", 0, "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/4.mp4", "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/4.jpg", '', false, false, timestamp()),
                    Zuck.buildItem("gorillaz-2", "photo", 3, "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/5.jpg", "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/5.jpg", '', false, false, timestamp()),
                ]
            },
            {
                id: "ladygaga",
                photo: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/users/3.jpg",
                name: "Lady Gaga",
                link: "",
                lastUpdated: timestamp(),
                items: [
                    Zuck.buildItem("ladygaga-1", "photo", 5, "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/6.jpg", "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/6.jpg", '', false, false, timestamp()),
                    Zuck.buildItem("ladygaga-2", "photo", 3, "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/7.jpg", "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/7.jpg", 'http://ladygaga.com', false, false, timestamp()),
                ]
            },
            {
                id: "starboy",
                photo: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/users/4.jpg",
                name: "The Weeknd",
                link: "",
                lastUpdated: timestamp(),
                items: [
                    Zuck.buildItem("starboy-1", "photo", 5, "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/8.jpg", "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/8.jpg", '', false, false, timestamp())
                ]
            },
            {
                id: "riversquomo",
                photo: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/users/5.jpg",
                name: "Rivers Cuomo",
                link: "",
                lastUpdated: timestamp(),
                items: [
                    Zuck.buildItem("riverscuomo", "photo", 10, "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/9.jpg", "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/9.jpg", '', false, false, timestamp())
                ]
            }
        ]
    });

    var el = document.querySelectorAll('#skin option');
    var total = el.length;
    for (var i = 0; i < total; i++) {
        var what = (skin == el[i].value) ? true : false;

        if (what) {
            el[i].setAttribute('selected', what);

            header.innerHTML = skin;
            header.className = skin;
        } else {
            el[i].removeAttribute('selected');
        }
    }

    document.body.style.display = 'block';
};

initDemo();


$(document).ready(function () {
    $(".none-like").on("click", function () {
        $(this).parent().find(".like").addClass("d-block");
        $(this).parent().find(".none-like").addClass("like");
        $(this).parent().find(".none-like").removeClass("d-block");
    });
    $(".like").on("click", function () {
        $(this).parent().find(".none-like").addClass("d-block");
        $(this).parent().find(".none-like").removeClass("like");
        $(this).parent().find(".like").removeClass("d-block");
    });
});



$(document).ready(function () {
    $(".none-save").on("click", function () {
        $(this).parent().find(".d-none").addClass("d-block");
        $(this).parent().find(".none-save").addClass("d-none");
        $(this).parent().find(".none-save").removeClass("d-block");
    });
    $(".d-none").on("click", function () {
        $(this).parent().find(".none-save").addClass("d-block");
        $(this).parent().find(".none-save").removeClass("d-none");
        $(this).parent().find(".d-none").removeClass("d-block");
    });
});



var postImages = $(".post-img-area");
postImages.on("touchstart", tapHandler);

var tapedTwice = false;

function tapHandler(event) {
    if (!tapedTwice) {
        tapedTwice = true;
        setTimeout(function () { tapedTwice = false; }, 300);
        return false;
    }
    event.preventDefault();
    setTimeout(function () {
        $(".fa-heart").removeClass("d-flex");
        $(".fa-heart").addClass("d-none");
    }, 700);
    $(this).parent().find(".fa-heart").addClass("d-flex");
    $(this).parent().find(".fa-heart").removeClass("d-none");
    $(this).parent().find(".like").addClass("d-block");
    $(this).parent().find(".none-like").addClass("like");
    $(this).parent().find(".none-like").removeClass("d-block");
}



var postImages = $(".post-video-area");
postImages.on("touchstart", tapHandler);

var tapedTwice = false;

function tapHandler(event) {
    if (!tapedTwice) {
        tapedTwice = true;
        setTimeout(function () { tapedTwice = false; }, 300);
        return false;
    }
    event.preventDefault();
    setTimeout(function () {
        $(".fa-heart").removeClass("d-flex");
        $(".fa-heart").addClass("d-none");
    }, 700);
    $(this).parent().find(".fa-heart").addClass("d-flex");
    $(this).parent().find(".fa-heart").removeClass("d-none");
    $(this).parent().find(".like").addClass("d-block");
    $(this).parent().find(".none-like").addClass("like");
    $(this).parent().find(".none-like").removeClass("d-block");
}




$(document).ready(function () {
    $(".logo-modal-area").hide();
    $(".logo > a").on("click", function () {
        if ($(this).attr("data-click-state") == 0) {
            $(this).attr("data-click-state", 1);
            $(".logo-modal-area").show();

        }
        else {
            $(this).attr("data-click-state", 0);
            $(".logo-modal-area").hide();
        }
    });
});



$(document).mouseup(function (e) {
    var container = $(".logo-modal-area");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.hide();
    }
})





window.addEventListener('load', videoScroll);
window.addEventListener('scroll', videoScroll);

function videoScroll() {
    if (document.querySelectorAll('video[autoplay]').length > 0) {
        var windowHeight = window.innerHeight,
            videoEl = document.querySelectorAll('video[autoplay]');

        for (var i = 0; i < videoEl.length; i++) {

            var thisVideoEl = videoEl[i],
                videoHeight = thisVideoEl.clientHeight,
                videoClientRect = thisVideoEl.getBoundingClientRect().top;

            if (videoClientRect <= ((windowHeight) - (videoHeight * .5)) && videoClientRect >= (0 - (videoHeight * .5))) {
                thisVideoEl.play();
            } else {
                thisVideoEl.pause();
            }
        }
    }
}



var vid = document.getElementById("video-muted");
function enableMute() {
    vid.muted = true;
}
function disableMute() {
    vid.muted = false;
}


$(document).ready(function () {
    $(".sound-off").on("click", function () {
        $(this).parent().find(".sound-off").addClass("d-none");
        $(this).parent().find(".sound-on").addClass("d-flex");
    })
    $(".sound-on").on("click", function () {
        $(this).parent().find(".sound-on").removeClass("d-flex");
        $(this).parent().find(".sound-on").addClass("d-none");
        $(this).parent().find(".sound-off").removeClass("d-none");
        $(this).parent().find(".sound-off").addClass("d-flex");
    });
});


$('.owl-carousel').owlCarousel({
    loop: false,
    margin: 10,
    nav:true,
    navText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    dots: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});


$(document).ready(function () {
    $(".share-modal-area").on("click", function () {
        $(".share-modal-content").addClass("d-block");
        $(".backblackfilter").addClass("d-block");
    });
    $(document).mouseup(function (e) {
        var container = $(".share-modal-content");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            container.hide();
            $(".share-modal-content").removeClass("d-block");
            $(".backblackfilter").removeClass("d-block");
        }
    })
});