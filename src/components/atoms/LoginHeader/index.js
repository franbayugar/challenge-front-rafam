import React from 'react'
import './styles.scss';
import { isMobile } from '../../../helpers/Mobile';

const LoginHeader = () => {

return <div className="login-header-container">
    <div className="text-header-container">
        <p>
            Desarrollado por RAFAM 2021
        </p>
        <p>
            v4.12.3
        </p>
    </div>

   {!isMobile &&
   <div className="login-header-title">
       <h1 className="login-header-title-text">Datos</h1>
        <div className="login-header-title-line"></div>
   </div>
    }
    {!isMobile && 
    <div className="login-header-contact-info">

    </div>
    }
</div>
}

export default LoginHeader;