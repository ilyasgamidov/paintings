// import checkInputNumberOrNo from './checkInputNumberOrNo';

const forms = () => {

    const form = document.querySelectorAll('form'),
        input = document.querySelectorAll('input'),
        upload = document.querySelectorAll('[name="upload"]');
        
        // checkInputNumberOrNo('input[name="user_phone"');/

    const message = {
        load: 'Загрузка...',
        success: 'Сообщение отправлено',
        err: 'Упс, что-то не так...',
        spinner: 'assets/img/spinner.gif',
        ok: 'assets/img/ok.png',
        fail: 'assets/img/fail.png'
    };

    const path = {
        designer: 'assets/server.php',
        question: 'assets/question.php',
    };

    const postData = async (url, data) => {
        let result = await fetch(url, {
            method: 'POST',
            body: data
        });

        return await result.text();
    };

    const clearInputs = () => {
        input.forEach(item => {
            item.value = '';
        });

        upload.forEach(item => {
            item.previousElementSibling.textContent = 'Файл не выбран';
        });
    };

    upload.forEach(item => {
        item.addEventListener('input', () => {
            console.log(item.files[0]);

            let dots;
            const arr = item.files[0].name.split('.');
            arr[0].length > 5 ? dots = '...' : dots = '.';
            const name = arr[0].slice(0, 5) + dots + arr[1];
            item.previousElementSibling.textContent = name;
        });
    });

    upload.forEach(item => {

    });

    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.parentNode.appendChild(statusMessage);

            item.classList.add('animated', 'fadeOutUp');
            setTimeout(() => {
                item.style.display = 'none';
            }, 400);

            let statusImg = document.createElement('img');
            statusImg.setAttribute('src', message.spinner);
            statusImg.classList.add('animated', 'fadeIntUp');
            statusMessage.appendChild(statusImg);

            let textMessage = document.createElement('div');
            textMessage.textContent = message.load;
            statusMessage.appendChild(textMessage);

            const formData = new FormData(item);
            let api;
            item.closest('.popup-design') || item.classList.contains('calc_form') ? api = path.designer : api = path.question;
            console.log(api);


            postData(api, formData)
                .then(result => {
                    console.log(result);
                    statusImg.setAttribute('src', message.ok);
                    textMessage.textContent = message.success;
                })
                .catch(() => {
                    textMessage.textContent = message.err;
                    statusImg.setAttribute('src', message.fail);
                })
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                        item.style.display = 'block';
                        item.classList.remove('fadeOutUp');
                        item.classList.add('fadeInUp');
                    }, 5000);
                });
            
        });
    });

};

export default forms;