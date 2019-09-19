import React from 'react'

import '../../style/login.css'

export default class index extends React.Component {
    render() {
        return (
            <div>
                <div className="wrapper fadeInDown">
                    <div id="formContent">
                        <form>
                            <input type="text" id="login" className="fadeIn second" name="login" placeholder="login"></input>
                            <input type="text" id="password" className="fadeIn third" name="login" placeholder="password"></input>
                            <input type="submit" className="fadeIn fourth" value="Lon in"></input>
                        </form>
                        <div>
                            <a className="underlineHover" href="#">Forgot Password?</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
