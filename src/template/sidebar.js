import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import './sidebar.css';
import programCate from "../program/programCate.json";

// src/sidebar.js

const menuItems = [
    { name: "首頁", path: "" ,subcontent: []},
    { name: "作品集", path: "/Program" ,
        subcontent: []},
    { name: "資產管理", path: "/Finance" ,
        subcontent: [{name: "總覽", path: "/Finance"}, {name: "分析", path: "/Finance"}]},
    { name: "關於我", path: "/About" ,subcontent: []},
];
programCate.forEach((category) => {
    menuItems[1].subcontent.push({
        name: category.title,
        path: `/Program/${category.title}`,
    });
});
console.log("menuItems:", menuItems);

function ListWSubmenu({ content, collapsed }) {
    if (!content.subcontent|| content.subcontent.length === 0 || collapsed === true) {
        return (
            <li className="menu-item">
                <Link to={content.path} className="menu-link">
                    {content.name}
                </Link>
            </li>
        );
    }
    const [isOpen, setIsOpen] = useState(false);
    const toggleSubmenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
        <li className="menu-item" onMouseEnter={toggleSubmenu} onMouseLeave={toggleSubmenu}>
            <Link to={content.path} className="menu-link">
                {content.name}
            </Link>
            {   isOpen &&
                <ul className="sub-menu">
                    {content.subcontent.map((item, index) => (
                        <li key={index} className="sub-menu-item">
                            <Link to={item.path} className="sub-menu-link">
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            }
        </li>
        
        </>
    );
}

export default function Sidebar() {
    const [collapsed, setCollapsed] = useState(true);

    return (
        <>
        <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
        <button className="toggle-btn" onClick={() => setCollapsed(!collapsed)}>
            {collapsed ? '☰' : '✕'}
        </button>
        <ul className="menu">
            {menuItems.map((item) => (
                <ListWSubmenu key={item.name} content={item} collapsed={collapsed} />
            ))}
        </ul>
        </div>
        <Outlet />
        </>
    );
}