import React from "react";
import { Link } from "react-router-dom";

import LoginHeader from "components/atoms/LoginHeader";
import { isMobile } from 'helpers/Mobile';

import "./styles.scss";
const Sidebar = () => {
    return <div className="sidebar-container" >
            {!isMobile && 
            <LoginHeader></LoginHeader>
            }
            <React.Fragment>

            <div className="login-header-logo">

        <Link to="/home">
            <svg className="logo-img" width="42" height="49" viewBox="0 0 42 49" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M40.0389 24.6885L24.8864 35.1474C22.7864 31.4832 20.3781 27.2783 20.1287 26.8586C19.6824 26.1044 20.109 25.4498 20.5946 25.1083L24.2761 23.4079C24.637 23.166 24.8733 22.7391 24.8733 22.2481C24.8733 21.7145 24.5845 21.245 24.1711 21.0244L12.6344 14.8558H12.6279C12.4638 14.7704 12.2801 14.7206 12.0898 14.7206C11.4204 14.7206 10.8692 15.2969 10.8429 16.0155L10.2785 30.4943C10.2785 30.5298 10.272 30.5654 10.272 30.601C10.272 31.3481 10.8298 31.9599 11.5254 31.9599C11.7485 31.9599 11.9585 31.8959 12.1423 31.782L12.1488 31.7749C12.1816 31.7536 12.2145 31.7323 12.2407 31.7109L15.1282 28.8792C15.7319 28.4665 16.5259 28.5306 16.9459 29.1994C17.1231 29.4768 19.9121 33.4327 22.3599 36.8905L5.82269 48.3027C5.73738 48.3668 5.64551 48.4308 5.55363 48.4877L5.53395 48.502C5.01552 48.8221 4.41834 49 3.78179 49C1.81964 49 0.224976 47.2711 0.224976 45.1437C0.224976 45.0441 0.231541 44.9445 0.238103 44.8449L1.83933 3.67838C1.92464 1.6293 3.48648 0 5.39614 0C5.94738 0 6.4658 0.135181 6.93173 0.377086H6.9383L6.95142 0.384208L39.7502 17.9223C40.938 18.5484 41.7583 19.8647 41.7583 21.3944C41.7386 22.7889 41.0627 24.0126 40.0389 24.6885Z" fill="white"/>
    </svg>

            <svg className="logo-letters" width="118" height="20" viewBox="0 0 118 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M89.4197 0.645487L84.7258 7.29386L81.407 0.645487H74.8883L73.2091 16.8317L68.1449 0.511719H61.9436L52.0864 19.5673H58.7637L59.9867 17.0256H66.5318L67.259 19.5673H72.9116H74.0421H79.027L79.9988 10.19L83.6019 16.9186H83.7077L88.7057 10.19L87.7339 19.5673H93.9616L95.9185 0.645487H89.4197ZM62.0362 12.5377L64.2245 7.94265L65.4608 12.5377H62.0362ZM54.6185 8.45767H45.8785L46.1297 6.0498H55.5374L56.0994 0.645487H40.4441L38.7649 16.8584L33.6941 0.511719H27.4928L18.3429 18.1961L15.4406 13.1329C17.8273 12.0226 19.4404 10.103 19.7247 7.34737L19.7313 7.29386C19.9296 5.34751 19.4933 3.94293 18.4884 2.80588C17.3182 1.48156 15.2952 0.645487 11.9764 0.645487H2.83972L0.882812 19.5673H7.13698L7.69894 14.163H9.0344L12.0028 19.5673H17.6421H19.1363H24.3194L25.5425 17.0256H32.0876L32.8148 19.5673H38.4806H39.6045H44.7348L45.376 13.3737H54.116L54.6185 8.45767ZM13.4573 7.74869L13.4507 7.80888C13.3317 8.97268 12.3532 9.64822 10.8525 9.64822H8.15511L8.53856 5.94279H11.2624C12.7102 5.94279 13.5829 6.53807 13.4573 7.74869ZM27.5788 12.5377L29.7671 7.94265L31.0033 12.5377H27.5788ZM115.183 0.658867C116.407 0.658867 117.365 1.71565 117.259 2.94633L116.645 10.0495C116.539 11.2936 115.507 12.25 114.271 12.25H110.371H106.159L105.948 14.678H116.043L115.62 19.5539H98.8274L99.634 10.2167C99.7398 9.00613 100.745 8.07642 101.941 8.07642H106.311H110.126L110.324 5.7622H100.209L100.652 0.658867H115.183V0.658867Z" fill="white"/>
    </svg>


        </Link>
   </div>
                    <div className="menu-items">
                        <Link className="item" activeclassname="active-item" to="/" >
                            {!isMobile && <div className="item-title"> Inicio</div>}
                        </Link>
                        <Link className="item" activeclassname="active-item" to="/presupuesto">
                        
                            {!isMobile && <div className="item-title"><svg width="10" height="13" viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.22504 6.76923L0.906287 12.6316L0.906287 0.906905L9.22504 6.76923Z" fill="white"/>
</svg>  Presupuesto</div>}
                        </Link>
                        <Link className="item" activeclassname="active-item" to="/users">
                         
                            {!isMobile && <div className="item-title"><svg width="10" height="13" viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.22504 6.76923L0.906287 12.6316L0.906287 0.906905L9.22504 6.76923Z" fill="white"/>
</svg>  CAS</div>}
                        </Link>
                    </div>
                    {isMobile && <div className="menu-line">
                    </div>}
            </React.Fragment>
            </div>
}

export default Sidebar;
