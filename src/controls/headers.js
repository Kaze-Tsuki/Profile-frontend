import "./header.css";

function DefaultHeader(){
    return (
        <div className="header">
            <h1>Header</h1>
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
            <h1>Footer</h1>
        </div>
    );
}

export { DefaultHeader, ProgramHeader, FinanceHeader, DefaultFooter };
