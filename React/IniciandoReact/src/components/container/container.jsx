import React from "react";
import './container.css'

export default function Container({ children }) {
    return (
        <div className="conatiner">
            {children}
        </div>
    );
}
