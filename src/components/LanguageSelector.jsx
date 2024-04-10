import { useTranslation } from "react-i18next";

export const LanguageSelector = () => {
    const { t, i18n } = useTranslation('common');

    const handleLanguageChange = (e) => {
        i18n.changeLanguage(e.target.value);
    };

    return (
        <div>
            <select value={i18n.language} onChange={handleLanguageChange}>
                <option value="en">{t('language-selector.languages.en')}</option>
                <option value="fr">{t('language-selector.languages.fr')}</option>
                <option value="es">{t('language-selector.languages.es')}</option>
            </select>
        </div>
    );
};