import React from 'react';

const LogIn = () => {
    return (
        <div>

            <header class="masthead">
                <h1 class="site-title">Please Authenticate</h1><br/>
            </header>

            <div class='wrap'>
                Login
                <form>
                    <input type='text' id='username' placeholder='Username' />
                    <input type='password' id='password' placeholder='Password' />
                </form>
                <button class='forgot'>FORGOT PASSWORD ?</button> <button class='login'>LOG IN</button>
            </div>

        </div>
    );
};

export default LogIn;