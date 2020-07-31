const accordion = (triggerSelector) => {
    const triggers = document.querySelectorAll(triggerSelector);

    triggers.forEach(btn => {
        btn.addEventListener('click', function () {
            this.classList.toggle("active-style");
            this.nextElementSibling.classList.toggle('active-content');

            if (this.classList.contains('active-style')) {
                this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + 'px';
            } else {
                this.nextElementSibling.style.maxHeight = '0px';
            }
        });
    });

/*         blocks = document.querySelectorAll(blokcSelector);

    blocks.forEach(block => {
        block.classList.add('animated', 'fadeInDown');
    });

    triggers.forEach(btn => {
        btn.addEventListener('click', function() {
            if (!this.classList.contains('active', 'active-style')) {
                triggers.forEach(btn => {
                    btn.classList.remove('active', 'active-style');   
                });
                this.classList.add('active', 'active-style');
            }
        });
    }); */

};

export default accordion;