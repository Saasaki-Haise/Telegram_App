import React from "react";

export default function Footer() {
    return (
        <div className="footer">
            <ul className="flex">
                <li className="li_menu_friend">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="Home"><path d="M20,8h0L14,2.74a3,3,0,0,0-4,0L4,8a3,3,0,0,0-1,2.26V19a3,3,0,0,0,3,3H18a3,3,0,0,0,3-3V10.25A3,3,0,0,0,20,8ZM14,20H10V15a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1Zm5-1a1,1,0,0,1-1,1H16V15a3,3,0,0,0-3-3H11a3,3,0,0,0-3,3v5H6a1,1,0,0,1-1-1V10.25a1,1,0,0,1,.34-.75l6-5.25a1,1,0,0,1,1.32,0l6,5.25a1,1,0,0,1,.34.75Z" fill="#ffffff" className="color000000 svgShape"></path></svg>
                    <p>Home</p>
                </li>
                <li className="li_menu_friend">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="Leaderboard"><path d="M22,7H16.333V4a1,1,0,0,0-1-1H8.667a1,1,0,0,0-1,1v7H2a1,1,0,0,0-1,1v8a1,1,0,0,0,1,1H22a1,1,0,0,0,1-1V8A1,1,0,0,0,22,7ZM7.667,19H3V13H7.667Zm6.666,0H9.667V5h4.666ZM21,19H16.333V9H21Z" fill="#ffffff" className="color000000 svgShape"></path></svg>
                    <p>Leaderbord</p>
                </li>
                <li className="li_menu_friend">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="friend"><path d="M26.22,18.79a5,5,0,1,0-6.44,0,7,7,0,0,0-.65.38,9,9,0,0,0-4.32-4.31,7,7,0,1,0-7.63,0A9,9,0,0,0,2,23v6a1,1,0,0,0,1,1H29a1,1,0,0,0,1-1V25A7,7,0,0,0,26.22,18.79ZM20,15a3,3,0,1,1,3,3A3,3,0,0,1,20,15ZM6,9a5,5,0,1,1,5,5A5,5,0,0,1,6,9ZM17,28H4V23a7,7,0,0,1,14,0v5Zm11,0H20V23a9,9,0,0,0-.18-1.82A4.89,4.89,0,0,1,23,20a5,5,0,0,1,5,5Z" fill="#ffffff" className="color000000 svgShape"></path></svg>
                    <p>Friends</p>
                </li>
            </ul>
        </div>
    )
}