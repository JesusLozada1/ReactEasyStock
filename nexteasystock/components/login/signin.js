import Link from 'next/link';
import styles from './signin.module.css'

export default function Form() {
    return (
        <div className={styles.loginwrapper}>
            <div className={styles.login + " shadow-lg mb-5"}>
                <div className={styles['form-header']}>
                    <h2 className="text-center mb-0 mt-3">Admin Login</h2>
                </div>

                <form className={styles['form-pop'] + ' my-2'} action="">
                    <div>
                        <p>
                            <svg className={styles['input-icon']} id="Outline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>94 user</title><path d="M12,12A6,6,0,1,0,6,6,6.006,6.006,0,0,0,12,12ZM12,2A4,4,0,1,1,8,6,4,4,0,0,1,12,2Z"/><path d="M12,14a9.01,9.01,0,0,0-9,9,1,1,0,0,0,2,0,7,7,0,0,1,14,0,1,1,0,0,0,2,0A9.01,9.01,0,0,0,12,14Z"/></svg>
                            <input className={styles.input + " form-control rounded-0"} type="text" name="Username" placeholder="Enter username" required/>
                        </p>
                        <p>
                            <svg className={styles['input-icon']} id="Outline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>71 lock</title><path d="M19,8.424V7A7,7,0,0,0,5,7V8.424A5,5,0,0,0,2,13v6a5.006,5.006,0,0,0,5,5H17a5.006,5.006,0,0,0,5-5V13A5,5,0,0,0,19,8.424ZM7,7A5,5,0,0,1,17,7V8H7ZM20,19a3,3,0,0,1-3,3H7a3,3,0,0,1-3-3V13a3,3,0,0,1,3-3H17a3,3,0,0,1,3,3Z"/><path d="M12,14a1,1,0,0,0-1,1v2a1,1,0,0,0,2,0V15A1,1,0,0,0,12,14Z"/></svg>
                            <input className={styles.input + " form-control rounded-0"} type="password" name="Password" placeholder="Password" requiered/>
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
        </div>
    )
}