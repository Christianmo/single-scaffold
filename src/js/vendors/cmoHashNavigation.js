/**
 * using the ".hash-nav" to set a scroll navigation by hash
 */

var hashNav = function(selector) {
    var hashNav = function(selector) {
        var nav = document.querySelector(selector);

        if (!nav){
            return;
        }

        var navLinks = nav.querySelectorAll('a');
        var hash;

        Array.prototype.forEach.call(navLinks, function(link) {
            link.addEventListener('click', function(evt) {

                if (link.href.indexOf('#') !== -1) {
                    evt.preventDefault();
                    nav.className = nav.className.replace(' active', '');
                    hash = '#' + link.href.split('#').pop();
                    scrollToHash(hash);
                    document.location.hash = hash;
                }

            })
        })
    }

    var scrollOnLoad = function() {
        window.addEventListener('load', function(evt) {
            evt.preventDefault();
            var hash = document.location.hash;

            if (hash !== '') {
                scrollToHash(hash);
            }
        })
    }

    var scrollToHash = function(hash) {
        var elTopPosition = document.querySelector(hash).offsetTop;
        var duration = parseInt((elTopPosition / window.innerHeight) * 200);
        duration = (duration > 400) ? duration : 400;

        $('body, html').animate({
            scrollTop: $(hash).offset().top - 30
        }, duration, function() {
            $(document).trigger('scrollEnd');
        })
    }

    hashNav(selector);
    scrollOnLoad();
}

module.exports = hashNav;