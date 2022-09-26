import React from "react";
import UserImg from './Assets/user.png';
import "./Styles/global.css";
// add bootstrap css
import "bootstrap/dist/css/bootstrap.css";
import "./Styles/custom.scss"

const Header = ({ headClass, leftTxt, rightTxt, btnClass }) => {
    return (
        <div className={`${headClass ? headClass : 'bg-lightgrey position-fixed w-100'}`} style={{ height: 44 }}>
            <div className="container">
                <div className="d-flex justify-content-between ">
                    <div className="pt-2 col">
                        <a>{leftTxt ? leftTxt : 'Yardım ve Destek'}</a>
                    </div>
                    <div className="col d-flex flex-row-reverse">
                        <div className="position-relative d-inline-block">
                            <button className="border-0">
                                <a className={`${btnClass ? btnClass : "bg-orange text-decoration-none text-white p-2 rounded"}`}>
                                    <img src={UserImg} style={{ width: '13%' }} className='pe-lg-2 align-text-top' />
                                    <b className="fs-7">{rightTxt ? rightTxt : 'Giriş Yap ya da Üye Ol'}</b>
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;