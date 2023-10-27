import React from "react";
import { NavLink } from "react-router-dom";

import './PageNotFound.css'

const PageNotFound = () => {
    return(
        <section className="pageNotFound">
            <h1 className="pageNotFound__title">Страница не найдена!</h1>
            <NavLink to="/main" className='pageNotFound__link'>Вернуться назад</NavLink>
        </section>
    )
}

export default PageNotFound