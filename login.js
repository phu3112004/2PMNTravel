function showPassword() {
    var eyeIcon = event.target;
    var inputPassword = eyeIcon.closest('.login-input').querySelector('input');
    if (inputPassword) {
        if(inputPassword.type === 'password')
        {
            inputPassword.type = 'text'
            eyeIcon.classList.remove('fa-eye');
            eyeIcon.classList.add('fa-eye-slash');
        }
        else
        {
            inputPassword.type = 'password'
            eyeIcon.classList.remove('fa-eye-slash');
            eyeIcon.classList.add('fa-eye');
        }
    }
}
function stopPropagation(event) {
    event.preventDefault(); 
}
function goToSign(){
    var loginArea = document.querySelector('.login-area');
    loginArea.innerHTML = `<h1>Create an account</h1>
                            <p>Enter your email to sign up</p>
                            <div class="login-form">
                                <div class="login-input">
                                    <i class="fa-solid fa-user"></i>
                                    <input type="text" name="email" placeholder="Email">
                                </div>
                                <div class="login-input">
                                    <i class="fa-solid fa-lock"></i>
                                    <input style="width: 80%;" type="password" name="password" placeholder="Password">
                                    <i class="fa-solid fa-eye" onclick="showPassword()"></i>
                                </div>
                                <div class="login-input">
                                    <i class="fa-solid fa-lock"></i>
                                    <input style="width: 80%;" type="password" name="confirm-password" placeholder="Confirm password">
                                    <i class="fa-solid fa-eye" onclick="showPassword()"></i>
                                </div>
                                <button>Sign up with email</button>
                            </div>
                            <div class="login-google">
                                <div class="login-line-divide">
                                    <span>or continue with:</span>
                                </div>
                                <button class="login-google-button">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png" alt="">
                                    Google
                                </button>
                            </div>
                            <div class="login-tele">
                                <p>Already have an account?</p>
                                <a onclick="goToLog()">Log in</a>
                            </div>
                            <div class="login-tele">
                                <p>By clicking continue, you agree to our</p>
                                <a href="#">Terms of Service</a>
                                <p>and</p>
                                <a href="#">Privacy Policy</a>
                            </div>`
}
function goToLog(){
    var loginArea = document.querySelector('.login-area');
    loginArea.innerHTML = `<h1>Log in</h1>
                        <p>Enter your email to log in</p>
                        <div class="login-form">
                            <div class="login-input">
                                <i class="fa-solid fa-user"></i>
                                <input type="text" name="email" placeholder="Email">
                            </div>
                            <div class="login-input">
                                <i class="fa-solid fa-lock"></i>
                                <input style="width: 80%;" type="password" name="password" placeholder="Password">
                                <i class="fa-solid fa-eye" onclick="showPassword()"></i>
                            </div>
                            <button>Log in with email</button>
                        </div>
                        <div class="login-google">
                            <div class="login-line-divide">
                                <span>or continue with:</span>
                            </div>
                            <button class="login-google-button">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png" alt="">
                                Google
                            </button>
                        </div>
                        <div class="login-tele">
                            <p>Don't have an account?</p>
                            <a onclick="goToSign()">Sign up</a>
                        </div>
                        <div class="login-tele">
                            <p>By clicking continue, you agree to our</p>
                            <a href="#">Terms of Service</a>
                            <p>and</p>
                            <a href="#">Privacy Policy</a>
                        </div> `
}