<!DOCTYPE html>
<html lang="en">

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset="utf-8">
    <title>Login / Sign Up Form</title>
    <title>Welcome page</title>
    <title>Confirmation page</title>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css">
    <link rel="shortcut icon" href="/assets/favicon.ico">
    <link rel="stylesheet" href="/css/Patient/otr/main.css">
</head>

<body>
    <div class="container">

        <form class="form-welcome" id="welcome">
            <h1 class="form__title">Data Sharing Agreement</h1>
            <div class="form__message form__message--error"></div>

            <div class="form__input-group">
                <div class="form__input-error-message"></div>
            </div>
            <h5>This is the Data Sharing Agreement...</h5>
            <div class="form__input-error-message"></div>

            <a class="form__link" href="./" id="linkWelcome">
                <button class="form__button">Agree</button>
            </a>

            <a href="#" onClick="disagree()">
                <button class="form__button">Disagree</button>
            </a>
        </form>

        <form class="form form--hidden" id="login">
            <h1 class="form__title">Login</h1>
            <div class="form__message form__message--error"></div>

            <div class="form__input-group">
                <input type="text" class="form__input" autofocus placeholder="Username or email">
                <div class="form__input-error-message"></div>
            </div>

            <div class="form__input-group">
                <input type="password" class="form__input" autofocus placeholder="Password">
                <div class="form__input-error-message"></div>
            </div>

            <button class="form__button" type="submit">Login</button>
            <p class="form__text">
                <a href="#" class="form__link" href="./" id="linkForgot">Forgot your password?</a>
            </p>

            <p class="form__text">
                <a class="form__link" href="./" id="linkCreateAccount">Don't have an account? Create account</a>
            </p>
        </form>

        <form class="form form--hidden" id="createAccount">
            <h1 class="form__title">Register Account</h1>
            <div class="form__message form__message--error"></div>

            <div class="form__input-group">
                <input type="text" id="signupUsername" class="form__input" autofocus placeholder="First name">
                <div class="form__input-error-message"></div>
            </div>

            <div class="form__input-group">
                <input type="text" id="signupUsername" class="form__input" autofocus placeholder="Last name">
                <div class="form__input-error-message"></div>
            </div>

            <div class="form__input-group">
                <input type="text" id="signupUsername-age" class="form__input" autofocus placeholder="Age">
                <div class="form__input-error-message"></div>
            </div>

            <div class="form__input-group">
                <input type="text" id="signupUsername" class="form__input" autofocus placeholder="Address">
                <div class="form__input-error-message"></div>
            </div>

            <div class="form__input-group">
                <input type="text" id="signupUsername-contact" class="form__input"  autofocus placeholder="Contact number">
                <div class="form__input-error-message"></div>
            </div>

            <div class="form__input-group">
                <input type="password" id="signupUsername-password" class="form__input" autocomplete="off" autofocus placeholder="Password">
                <div class="form__input-error-message"></div>
            </div>

            <div class="form__input-group">
                <input type="password" id="signupUsername-confirm" class="form__input" autocomplete="off"  autofocus placeholder="Confirm password">
                <div class="form__input-error-message"></div>
            </div>

            <a class="form__link" href="./" id="linkConfirmation">
                <button class="form__button">Register</button>
            </a>

            <p class="form__text">
                <a class="form__link" href="./" id="linkLogin">Already have an account? Sign in</a>
            </p>
        </form>

        <form class="form form--hidden" id="confirmation">
            <h1 class="form__title">Would you like to confirm your submission?</h1>
            <div class="form__message form__message--error"></div>

            <div class="form__input-group">
                <div class="form__input-error-message"></div>
            </div>

             <a class="form__link" href="./" id="linkConfirm">
                <button class="form__button">Confirm</button>
            </a>

             <a class="form__link" href="./" id="linkBack">
                <button class="form__button">Back</button>
            </a>
        </form>

        <form class="form form--hidden" id="forgot">
            <h1 class="form__title">Password Reset</h1>
            <div class="form__message form__message--error"></div>

            <div class="form__input-group">
                <div class="form__input-error-message"></div>
            </div>

            <h5>We've sent a verification code on your email</h5>
            <div class="form__input-error-message"></div>

            <div class="form__input-group">
                <input type="text" class="form__input" autofocus placeholder="Code">
                <div class="form__input-error-message"></div>
            </div>

            <div class="form__input-group">
                <input type="password" class="form__input" id = "resetPassword" autofocus placeholder="New Password">
                <div class="form__input-error-message"></div>
            </div>

            <div class="form__input-group">
                <input type="password" class="form__input" id = "resetConfirm" autofocus placeholder="Confirm New Password">
                <div class="form__input-error-message"></div>
            </div>

            <a href="#" onClick="resetpw()">
                <button class="form__button">Reset Password</button>
            </a>

            <a class="form__link" href="./" id="linkLogin">
                <button class="form__button">Cancel</button>
            </a>
        </form>
    </div>

    <script src="css/Patient/otr/main.js"></script>
</body>
