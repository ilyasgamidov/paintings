const burger = (burgerSelector, burgerMenu) => {
    const btnBurger = document.querySelector(burgerSelector),
        menu = document.querySelector(burgerMenu);

        menu.style.display = 'none';

        btnBurger.addEventListener('click', () => {
            if (menu.style.display == "none" && window.screen.availWidth < 993) {
                menu.style.display = 'block';
            } else {
                menu.style.display = 'none';
            }

            window.addEventListener('resize', () => {
                if (window.screen.availWidth > 992) {
                    menu.style.display = 'none';
                }
            });
        });

};

export default burger;