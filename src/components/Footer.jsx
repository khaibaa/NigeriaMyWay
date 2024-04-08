//THE SITE FOOTER COMPONENT
//contains links to various informative pages of the site

import { Link } from "react-router-dom";
import {useTranslation} from "react-i18next";

function Footer() {
    const {t} = useTranslation("common");


    return (
        <div className="">
            <div className=" w-full h-[2px] bg-white"></div>
            <div className="flex md:flex md:justify-between pt-5 pl-5">
                <div className="text-center leading-8 h-40 w-72 ">
                    <h1 className=" text-2xl font-extrabold">{t("footer.support")}</h1>
                    <ul>
                        <Link to="/contactus"><li>{t("footer.contact")}</li></Link>

                        <li>{t("footer.services")}</li>
                    </ul>
                </div>
                <div className="text-center leading-8 h-40 w-72 ">
                    <h1 className=" text-2xl font-extrabold">{t("footer.company")}</h1>
                    <ul>
                        <li>{t("footer.about")}</li>
                        <li>{t("footer.founder")}</li>
                    </ul>
                </div>
                <div className=" text-center leading-8 h-40 w-72 ">
                    <h1 className=" text-2xl font-extrabold">{t("footer.legal")}</h1>
                    <ul>
                        <Link to="/t&c"><li>T & C</li></Link>
                        <li>{t("footer.privacy")}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer