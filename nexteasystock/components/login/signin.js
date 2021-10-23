import Link from 'next/link';
import styles from './signin.module.css'

export default function Form() {
    return (
        <div>
            <form action="">
                <h1><span>Admin</span> Login</h1>
                <div>
                    <p>
                        <label htmlFor="Username">USERNAME</label>
                        <input type="text" name="Username" placeholder="Enter username" required/>
                    </p>
                    <p>
                        <label htmlFor="password">PASSWORD</label>
                        <input type="password" name="Password" placeholder="password" requiered/>
                    </p>
                    <p>
                        <input type="checkbox" name="remember" id="remember"/>
                        <label htmlFor="remember">Remember me for 14 days</label>
                    </p>
                </div>

                <p>
                    <span><a href="#">Forgot password?</a></span>
                    <input type="submit" value="Login"/>
                </p>
            </form>
        </div>
    )
}