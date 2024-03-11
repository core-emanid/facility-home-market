import type { UiLangs } from "../interface/Language";
import { enLang } from "./en";
import { brLang } from "./ptbr";

export const languages = {
    en: 'English',
    br: 'Brazilian Portuguese',
};
  
export const defaultLang = 'en';
  
export const showDefaultLang = false;

export const ui: UiLangs = {
    en: enLang,
    br: brLang,
} as const;