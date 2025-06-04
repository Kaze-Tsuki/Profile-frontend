import "./header.css";
import {Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

function DefaultHeader({display}) {
    return (
        <div className="header default">
            <h1>{display}</h1>
        </div>
    );
}

function ProgramHeader(){
    return (
        <div className="header program">
            <h1>程式作品集</h1>
        </div>
    );
}

function FinanceHeader(){
    return (
        <div className="header finance">
            <h1>財務管理</h1>
        </div>
    );
}


function DefaultFooter(){
    return (
        <div className="footer">
            <div className="footer-catalog">
                <h2>目錄</h2>
                <ul>
                    <li><Link to="/">首頁</Link></li>
                    <li><Link to="/Program">程式作品集</Link></li>
                    <li><Link to="/Finance">財務管理</Link></li>
                    <li><Link to="/About">關於</Link></li>
                </ul>
            </div>
            <div className="footer-about">
                <a href="https://github.com/Kaze-Tsuki" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
            </div>
        </div>
    );
}

export { DefaultHeader, ProgramHeader, FinanceHeader, DefaultFooter };
