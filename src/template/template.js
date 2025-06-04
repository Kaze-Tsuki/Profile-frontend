import { useState } from "react";
import Sidebar from "./sidebar";

// src/template.js
// side bar, header, footer

export default function Template({ head, child, foot }) {
    return (
        <div style={{ marginLeft: 40 , position: "absolute", width: "calc(100% - 40px)" }}>
        {head}
        <main>{child}</main>
        {foot}
        </div>
    );
}