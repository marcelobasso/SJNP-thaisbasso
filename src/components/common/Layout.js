import React from 'react';
import Footer from '../Footer';
import '../../fontawesome-free-6.2.1-web/css/all.min.css';
import '../../styles/style.css';

export default function Layout(props) {
    return (
        <>
            <div className={`filler  ${props.page || ''}`} style={{display: 'block', height: '100px'}}></div>
            <div className={`page-content ${props.page || ''}`}>
                {props.children}
            </div>
            <Footer />
        </>
    );
}
