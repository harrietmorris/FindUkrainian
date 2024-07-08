import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwap: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <select onChange={(e) => changeLanguage(e.target.value)} value={i18n.language}>
      <option value="en">English</option>
      <option value="uk">Ukrainian</option>
      <option value="de">German</option>
    </select>
  );
};

export default LanguageSwap;