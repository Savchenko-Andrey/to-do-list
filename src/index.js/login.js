const refs = {
    form: document.querySelector('.login-form'),
};

const handleSubmit = (e) => {
    e.preventDefault()

    const {login, password} = e.target.elements;
    const loginValue = login.value;
    const passwordValue = password.value;

    console.log(loginValue, passwordValue);


};

refs.form.addEventListener('submit', handleSubmit)