import ScrollMagic from 'scrollmagic';
export const currentSection = () => {
    const controller = new ScrollMagic.Controller();

    const scene = new ScrollMagic.Scene({
        triggerElement: '#home',
        duration: '10000'
    }).addTo(controller);

    const getOffsetById = id => document.getElementById(id).offsetTop;

    const about = getOffsetById('about');
    const services = getOffsetById('services');
    const prices = getOffsetById('prices');
    const process = getOffsetById('process');
    const clients = getOffsetById('clients');

    const asideBar = document.getElementById('aside-bar');
    const asideBarToggleClass = newNum => {
        asideBar.classList.add(`aside_bar-filled-${newNum}`);
        asideBar.classList.remove(`aside_bar-filled-${newNum - 1}`);
        asideBar.classList.remove(`aside_bar-filled-${newNum + 1}`);
        asideBar.style.setProperty('--progress-height', '15%');
    };

    const calculatePosition = () => {
        const currentScrollTop = window.pageYOffset;

        switch (true) {
            case currentScrollTop > about && currentScrollTop < services:
                asideBarToggleClass(2);
                break;
            case currentScrollTop > services && currentScrollTop < prices:
                asideBarToggleClass(3);
                break;
            case currentScrollTop > prices && currentScrollTop < process:
                asideBarToggleClass(4);
                break;
            case currentScrollTop > process && currentScrollTop < clients:
                asideBarToggleClass(5);
                break;
            case currentScrollTop > clients:
                asideBarToggleClass(6);
                break;
            default:
                asideBarToggleClass(1);
        }
    };

    scene.on('progress', function() {
        calculatePosition();
    });
};

// 300 - x
// 754 - 0.166
