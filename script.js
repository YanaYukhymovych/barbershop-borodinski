(function() {
    const enter = document.querySelector(".user-login");
    const loginForm = document.querySelector(".modal-login");
    const close = document.querySelectorAll(".modal-close");
    const location = document.querySelector(".location");
    const map = document.querySelector(".modal-map");
    const modalShowClass = 'modal-show';
    const form = document.querySelector(".login-form");
    const login = loginForm.querySelector("[name=login]");
    const password = loginForm.querySelector("[name=password]");

    enter.addEventListener("click", function (evt) {
        evt.preventDefault();
        loginForm.classList.add(modalShowClass);
        login.focus();
    });

    location.addEventListener("click", function (evt) {
        evt.preventDefault();
        map.classList.add(modalShowClass);
    });

    close.forEach(
        function(closeBtn ) {
            closeBtn.addEventListener("click", function () {
                loginForm.classList.remove(modalShowClass);
                loginForm.classList.remove("modal-error");
                map.classList.remove(modalShowClass);
            });
        }
    );

    form.addEventListener("submit", function (evt) {
        evt.preventDefault();
        if (!login.value || !password.value) {
            evt.preventDefault();
            console.log("Введите логин и пароль");
            loginForm.classList.add("modal-error");
        }

    })
})();



