(function() {
    let howDoesItWork = document.getElementById('how-does-it-work');
    let toolsAndPrinciples = document.getElementById('tools-and-principles');
    let secureData = document.getElementById('secure-data');
    let guide = document.getElementById('guide');
    let page = window.location.pathname.split("/").pop();




    var hammertime = new Hammer(document.body);
    hammertime.get('swipe').set({ direction: Hammer.DIRECTION_ALL });

    var hero = $('.main-section_hero_primary');
    var heroTop = $('.hero__top_primary');
    var heroMid = $('.hero__mid_primary');
    var heroBot = $('.hero__bot_primary');
    var heroTitle = $('.hero__title_primary');
    
    let contentFirst = document.querySelector('.content-first');
    let contentSecond = document.querySelector('.content-second');
    let contentThird = document.querySelector('.content-third');
    if (document.querySelector('.content-fourth')) {
        var contentFourth = document.querySelector('.content-fourth');
    }
    if (document.querySelector('.content-fifth')) {
        var contentFifth = document.querySelector('.content-fifth');
    }
    let sc = 0;

    var HDIWmain = document.querySelectorAll('.HDIWmain');
    var HDIWfirst = document.getElementById('HDIWfirst');
    var HDIWsecond = document.getElementById('HDIWsecond');
    var HDIWthird = document.getElementById('HDIWthird');

    var TAPmain = document.querySelectorAll('.TAPmain');
    var TAPfirst = document.getElementById('TAPfirst');
    var TAPsecond = document.getElementById('TAPsecond');
    var TAPthird = document.getElementById('TAPthird');
    var TAPfourth = document.getElementById('TAPfourth');
    var TAPfifth = document.getElementById('TAPfifth');
    
    var SDmain = document.querySelectorAll('.SDmain');
    var SDfirst = document.getElementById('SDfirst');
    var SDsecond = document.getElementById('SDsecond');
    var SDthird = document.getElementById('SDthird');
    var SDfourth = document.getElementById('SDfourth');

    var Gmain = document.querySelectorAll('.Gmain');
    var Gfirst = document.getElementById('Gfirst');
    var Gsecond = document.getElementById('Gsecond');
    var Gthird = document.getElementById('Gthird');
    var Gfourth = document.getElementById('Gfourth');
    
    var timeout;

    if (window.matchMedia("(max-width: 767px)").matches) {
        if (!hero.hasClass('main-section_hero')) {
            document.querySelector('.main-section').style.height = '100vh';
            document.querySelector('.main-section').style.display = 'flex';
            document.querySelector('.main-section').style.alignItems = 'center';
        }
    }
    
    function changeCss(css) {
        let link = document.getElementsByTagName('link');
        link = link[0];
        let href = link.getAttribute('href').split('/');
        href.pop();
        href.push(css);
        href = href.join('/');
        link.setAttribute('href', href);
    }
    function toMain() {
        switch (this.className) {
            case 'nav__item-first HDIWmain':
                howDoesItWork.style.display = 'block';
                toolsAndPrinciples.style.display = 'none';
                secureData.style.display = 'none';
                guide.style.display = 'none';
                changeCss('how-does-it-work.css')
                break;
            case 'nav__item-first TAPmain':
                howDoesItWork.style.display = 'none';
                toolsAndPrinciples.style.display = 'block';
                secureData.style.display = 'none';
                guide.style.display = 'none';
                changeCss('tools-and-principles.css')
                break;
            case 'nav__item-first SDmain':
                howDoesItWork.style.display = 'none';
                toolsAndPrinciples.style.display = 'none';
                secureData.style.display = 'block';
                guide.style.display = 'none';
                changeCss('secure-data.css')
                break;    
            case 'nav__item-first Gmain':
                howDoesItWork.style.display = 'none';
                toolsAndPrinciples.style.display = 'none';
                secureData.style.display = 'none';
                guide.style.display = 'block';
                changeCss('guide.css')
                break;
        }
        clearTimeout(timeout);
        $('.content-first').hide();
        $('.content-second').hide();
        $('.content-third').hide();
        if (contentFourth) $('.content-fourth').hide();
        if(contentFifth) $('.content-fifth').hide();

        hero.removeClass('main-section_hero');
        heroTop.removeClass('hero__top');    
        heroMid.removeClass('hero__mid');    
        heroBot.removeClass('hero__bot');  
        heroTitle.removeClass('hero__title');
        
        
        if(!(howDoesItWork.style.display == 'none')) {
            document.querySelector('.hero__mid_primary > span').style.display = 'inline';
            document.querySelector('.hero__bot_primary > span').style.display = 'none';
        }

        for (let item of document.querySelectorAll('.nav__sub-item')) {
            item.classList.remove('nav__sub-item_active');
        }

        if (window.matchMedia("(max-width: 767px)").matches) {
            if (!hero.hasClass('main-section_hero')) {
                $('.main-section').css('height', '100vh');
                $('.main-section').css('display', 'flex');
                $('.main-section').css('align-items', 'center');
            }
        }
    }
    function toFirst () { 
        clearTimeout(timeout);
        timeout = setTimeout(()=> $('.content-first').fadeIn(200), 210)
        $('.content-second').hide();
        $('.content-third').hide();
        if (contentFourth) $('.content-fourth').hide();
        if(contentFifth) $('.content-fifth').hide();

        hero.addClass('main-section_hero');
        heroTop.addClass('hero__top');    
        heroMid.addClass('hero__mid');    
        heroBot.addClass('hero__bot');  
        heroTitle.addClass('hero__title');
        

        for (let item of document.querySelectorAll('.nav__sub-item')) {
            item.classList.remove('nav__sub-item_active');
        }

        HDIWfirst.classList.add('nav__sub-item_active');
        TAPfirst.classList.add('nav__sub-item_active');
        SDfirst.classList.add('nav__sub-item_active');
        Gfirst.classList.add('nav__sub-item_active');

        if(!(howDoesItWork.style.display == 'none')) {
            document.querySelector('.hero__mid > span').style.display = 'none';
            document.querySelector('.hero__bot > span').style.display = 'inline';

            if (window.matchMedia("(max-width: 1499px)").matches) {
                document.querySelector('.hero__mid > span').style.display = 'inline';
                document.querySelector('.hero__bot > span').style.display = 'none';
        }
        }
        if (window.matchMedia("(max-width: 767px)").matches) {
            if (hero.hasClass('main-section_hero')) {
                $('.main-section').css('height', 'auto');
                $('.main-section').css('display', 'block');
                $('.main-section').css('align-items', '');
            }
        }
    }

    function toSecond() {
        clearTimeout(timeout);
        $('.content-first').hide();
        timeout = setTimeout(()=> $('.content-second').fadeIn(200),210)
        $('.content-third').hide();
        if (contentFourth) $('.content-fourth').hide();
        if(contentFifth) $('.content-fifth').hide();

        hero.addClass('main-section_hero');
        heroTop.addClass('hero__top');    
        heroMid.addClass('hero__mid');    
        heroBot.addClass('hero__bot');  
        heroTitle.addClass('hero__title');
        
        for (let item of document.querySelectorAll('.nav__sub-item')) {
            item.classList.remove('nav__sub-item_active');
        }

        HDIWsecond.classList.add('nav__sub-item_active');
        TAPsecond.classList.add('nav__sub-item_active');
        SDsecond.classList.add('nav__sub-item_active');
        Gsecond.classList.add('nav__sub-item_active');

        if(!(howDoesItWork.style.display == 'none')) {
            document.querySelector('.hero__mid > span').style.display = 'none';
            document.querySelector('.hero__bot > span').style.display = 'inline';

            if (window.matchMedia("(max-width: 1499px)").matches) {
                document.querySelector('.hero__mid > span').style.display = 'inline';
                document.querySelector('.hero__bot > span').style.display = 'none';
            }
        }
        if (window.matchMedia("(max-width: 767px)").matches) {
            if (hero.hasClass('main-section_hero')) {
                $('.main-section').css('height', 'auto');
                $('.main-section').css('display', 'block');
                $('.main-section').css('align-items', '');
            }
        }
    }
    function toThird() {
        clearTimeout(timeout);
        $('.content-first').hide();
        $('.content-second').hide();
        timeout = setTimeout(()=> $('.content-third').fadeIn(200), 210)
        if (contentFourth) $('.content-fourth').hide();
        if(contentFifth) $('.content-fifth').hide();

        hero.addClass('main-section_hero');
        heroTop.addClass('hero__top');    
        heroMid.addClass('hero__mid');    
        heroBot.addClass('hero__bot');  
        heroTitle.addClass('hero__title');

        for (let item of document.querySelectorAll('.nav__sub-item')) {
            item.classList.remove('nav__sub-item_active');
        }

        HDIWthird.classList.add('nav__sub-item_active');
        TAPthird.classList.add('nav__sub-item_active');
        SDthird.classList.add('nav__sub-item_active');
        Gthird.classList.add('nav__sub-item_active');

        if(!(howDoesItWork.style.display == 'none')) {
            document.querySelector('.hero__mid > span').style.display = 'none';
            document.querySelector('.hero__bot > span').style.display = 'inline';
    
            if (window.matchMedia("(max-width: 1499px)").matches) {
                document.querySelector('.hero__mid > span').style.display = 'inline';
                document.querySelector('.hero__bot > span').style.display = 'none';
            }
        }
        if (window.matchMedia("(max-width: 767px)").matches) {
            if (hero.hasClass('main-section_hero')) {
                $('.main-section').css('height', 'auto');
                $('.main-section').css('display', 'block');
                $('.main-section').css('align-items', '');
            }
        }
    }
    function toFourth() {
        clearTimeout(timeout);
        $('.content-first').hide();
        $('.content-second').hide();
        $('.content-third').hide();
        timeout = setTimeout(()=> $('.content-fourth').fadeIn(200), 210);
        if(contentFifth) $('.content-fifth').hide();

        hero.addClass('main-section_hero');
        heroTop.addClass('hero__top');    
        heroMid.addClass('hero__mid');    
        heroBot.addClass('hero__bot');  
        heroTitle.addClass('hero__title');

        for (let item of document.querySelectorAll('.nav__sub-item')) {
            item.classList.remove('nav__sub-item_active');
        }

        TAPfourth.classList.add('nav__sub-item_active');
        SDfourth.classList.add('nav__sub-item_active');
        Gfourth.classList.add('nav__sub-item_active');
        
        if (window.matchMedia("(max-width: 767px)").matches) {
            if (hero.hasClass('main-section_hero')) {
                $('.main-section').css('height', 'auto');
                $('.main-section').css('display', 'block');
                $('.main-section').css('align-items', '');
            }
        }
    }
    function toFifth() {
        clearTimeout(timeout);
        $('.content-first').hide();
        $('.content-second').hide();
        $('.content-third').hide();
        $('.content-fourth').hide();
        timeout = setTimeout(()=> $('.content-fifth').fadeIn(200), 210);

        hero.addClass('main-section_hero');
        heroTop.addClass('hero__top');    
        heroMid.addClass('hero__mid');    
        heroBot.addClass('hero__bot');  
        heroTitle.addClass('hero__title');

        for (let item of document.querySelectorAll('.nav__sub-item')) {
            item.classList.remove('nav__sub-item_active');
        }

        TAPfifth.classList.add('nav__sub-item_active');


        if (window.matchMedia("(max-width: 767px)").matches) {
            if (hero.hasClass('main-section_hero')) {
                $('.main-section').css('height', 'auto');
                $('.main-section').css('display', 'block');
                $('.main-section').css('align-items', '');
            }
        }
    }

//  scroll event
    document.addEventListener('wheel', function(e){
        sc += e.deltaY;
        if (sc > 0) {
            swipeUp();
            sc = 0;
        } else if (sc < 0) {
            swipeDown();
            sc = 0;
        }
    });

//  swipe event 
    function swipeUp() {
        if (
            !hero.hasClass('main-section_hero')
            && (contentFirst.style.display == 'none'
                || contentFirst.style.display == '')
            && (contentSecond.style.display == 'none'
                || contentSecond.style.display == '')
            && (contentThird.style.display == 'none'
                || contentThird.style.display == '')
            && (!contentFourth
                || contentFourth.style.display == 'none'
                || contentFourth.style.display == '')
            && (!contentFifth
                || contentFifth.style.display == 'none'
                || contentFifth.style.display == '')
            ) {
            toFirst();
        } else if (
            hero.hasClass('main-section_hero')
            && (contentFirst.style.display == 'block')
            && (contentSecond.style.display == 'none'
                || contentSecond.style.display == '')
            && (contentThird.style.display == 'none'
                || contentThird.style.display == '')
            && (!contentFourth
                || contentFourth.style.display == 'none'
                || contentFourth.style.display == '')
            && (!contentFifth
                || contentFifth.style.display == 'none'
                || contentFifth.style.display == '')
            ) {
                toSecond();
        } else if(
            hero.hasClass('main-section_hero')
            && (contentFirst.style.display == 'none'
                || contentFirst.style.display == '')
            && (contentSecond.style.display == 'block')
            && (contentThird.style.display == 'none'
                || contentThird.style.display == '')
            && (!contentFourth
                || contentFourth.style.display == 'none'
                || contentFourth.style.display == '')
            && (!contentFifth
                || contentFifth.style.display == 'none'
                || contentFifth.style.display == '')
        ) {
            toThird();
        } else if(
            hero.hasClass('main-section_hero')
            && (contentFirst.style.display == 'none'
                || contentFirst.style.display == '')
            && (contentSecond.style.display == 'none'
                || contentSecond.style.display == '')
            && (contentThird.style.display == 'block')
            && (!contentFourth
                || contentFourth.style.display == 'none'
                || contentFourth.style.display == '')
            && (!contentFifth
                || contentFifth.style.display == 'none'
                || contentFifth.style.display == '')
        ) {
            if (!(howDoesItWork.style.display == 'none')) {
                toolsAndPrinciples.style.display = 'block';
                howDoesItWork.style.display = 'none';
                 changeCss('tools-and-principles.css');
                 toMain();
            } else toFourth();     
        } else if (
            hero.hasClass('main-section_hero')
            && (contentFirst.style.display == 'none'
                || contentFirst.style.display == '')
            && (contentSecond.style.display == 'none'
                || contentSecond.style.display == '')
            && (contentThird.style.display == 'none'
                || contentThird.style.display == '')
            && (contentFourth
                && contentFourth.style.display == 'block')
            && (!contentFifth
                || contentFifth.style.display == 'none'
                || contentFifth.style.display == '')
        ) {
            if(!(toolsAndPrinciples.style.display == 'none')) {
                toFifth();
            } else if(!(secureData.style.display == 'none')) {
                guide.style.display = 'block';
                secureData.style.display = 'none';
                changeCss('guide.css');
                toMain();
            } else if(!(guide.style.display == 'none')) {
                return false;
            }
        } else if (
            hero.hasClass('main-section_hero')
            && (contentFirst.style.display == 'none'
                || contentFirst.style.display == '')
            && (contentSecond.style.display == 'none'
                || contentSecond.style.display == '')
            && (contentThird.style.display == 'none'
                || contentThird.style.display == '')
            && (!contentFourth
                || contentFourth.style.display == 'none'
                || contentFourth.style.display == '')
            && (contentFifth
                && contentFifth.style.display == 'block')
        ) {
            if(!(toolsAndPrinciples.style.display == 'none')) {
                secureData.style.display = 'block';
                toolsAndPrinciples.style.display = 'none';
                changeCss('secure-data.css');
                toMain();
            } else false;
        }
    }
function swipeDown() {
    if (
        !hero.hasClass('main-section_hero')
        && (contentFirst.style.display == 'none'
            || contentFirst.style.display == '')
        && (contentSecond.style.display == 'none'
            || contentSecond.style.display == '')
        && (contentThird.style.display == 'none'
            || contentThird.style.display == '')
        && (!contentFourth
            || contentFourth.style.display == 'none'
            || contentFourth.style.display == '')
        && (!contentFifth
            || contentFifth.style.display == 'none'
            || contentFifth.style.display == '')
        ) {
            if(!(howDoesItWork.style.display == 'none')) {
                return false
            } if(!(toolsAndPrinciples.style.display == 'none')) {
                toolsAndPrinciples.style.display = 'none';
                howDoesItWork.style.display = 'block';
                changeCss('how-does-it-work.css');
                toMain();
            } else if(!(secureData.style.display == 'none')) {
                secureData.style.display = 'none';
                toolsAndPrinciples.style.display = 'block';
                changeCss('tools-and-principles.css');
                toMain();
            } else if(!(guide.style.display == 'none')) {
                guide.style.display = 'none';
                secureData.style.display = 'block';
                changeCss('secure-data.css');
                toMain();
            } else false
    } else if (
        hero.hasClass('main-section_hero')
        && (contentFirst.style.display == 'block')
        && (contentSecond.style.display == 'none'
            || contentSecond.style.display == '')
        && (contentThird.style.display == 'none'
            || contentThird.style.display == '')
        && (!contentFourth
            || contentFourth.style.display == 'none'
            || contentFourth.style.display == '')
        && (!contentFifth
            || contentFifth.style.display == 'none'
            || contentFifth.style.display == '')
        ) {
            toMain();
    } else if(
        hero.hasClass('main-section_hero')
        && (contentFirst.style.display == 'none'
            || contentFirst.style.display == '')
        && (contentSecond.style.display == 'block')
        && (contentThird.style.display == 'none'
            || contentThird.style.display == '')
        && (!contentFourth
            || contentFourth.style.display == 'none'
            || contentFourth.style.display == '')
        && (!contentFifth
            || contentFifth.style.display == 'none'
            || contentFifth.style.display == '')
    ) {
        toFirst();
    } else if(
        hero.hasClass('main-section_hero')
        && (contentFirst.style.display == 'none'
            || contentFirst.style.display == '')
        && (contentSecond.style.display == 'none'
            || contentSecond.style.display == '')
        && (contentThird.style.display == 'block')
        && (!contentFourth
            || contentFourth.style.display == 'none'
            || contentFourth.style.display == '')
        && (!contentFifth
            || contentFifth.style.display == 'none'
            || contentFifth.style.display == '')
    ) {
        toSecond();
    } else if (
        hero.hasClass('main-section_hero')
        && (contentFirst.style.display == 'none'
            || contentFirst.style.display == '')
        && (contentSecond.style.display == 'none'
            || contentSecond.style.display == '')
        && (contentThird.style.display == 'none'
            || contentThird.style.display == '')
        && (contentFourth
            && contentFourth.style.display == 'block')
        && (!contentFifth
            || contentFifth.style.display == 'none'
            || contentFifth.style.display == '')
    ) {
        toThird();
    } else if (
        hero.hasClass('main-section_hero')
        && (contentFirst.style.display == 'none'
            || contentFirst.style.display == '')
        && (contentSecond.style.display == 'none'
            || contentSecond.style.display == '')
        && (contentThird.style.display == 'none'
            || contentThird.style.display == '')
        && (!contentFourth
            || contentFourth.style.display == 'none'
            || contentFourth.style.display == '')
        && (contentFifth
            && contentFifth.style.display == 'block')
    ) {
        toFourth();
    }
}

    
    // detectswipe('body',swipe);

    hammertime.on("swipeup", swipeUp); 
    hammertime.on("swipedown", swipeDown);

    
    for (let main of HDIWmain) {
        main.addEventListener('click', toMain);
    }
    HDIWfirst.addEventListener('click', toFirst);
    HDIWsecond.addEventListener('click', toSecond);
    HDIWthird.addEventListener('click', toThird);

    for (let main of TAPmain) {
        main.addEventListener('click', toMain);
    }
    TAPfirst.addEventListener('click', toFirst);
    TAPsecond.addEventListener('click', toSecond);
    TAPthird.addEventListener('click', toThird);
    TAPfourth.addEventListener('click', toFourth);
    TAPfifth.addEventListener('click', toFifth);

    for (let main of SDmain) {
        main.addEventListener('click', toMain);
    }
    SDfirst.addEventListener('click', toFirst);
    SDsecond.addEventListener('click', toSecond);
    SDthird.addEventListener('click', toThird);
    SDfourth.addEventListener('click', toFourth);

    for (let main of Gmain) {
        main.addEventListener('click', toMain);
    }
    Gfirst.addEventListener('click', toFirst);
    Gsecond.addEventListener('click', toSecond);
    Gthird.addEventListener('click', toThird);
    Gfourth.addEventListener('click', toFourth);
})()










