import localeConfig from "@src/config/localeConfig";

export const toCapitalize = (val) => {
    let capitalletter = val.charAt(0).toUpperCase();
    let therest = val.slice(1);
    return `${capitalletter}${therest}`;
}

export const getLanguageOptions = () => {
    let lngOpt = []
    localeConfig.map((loc) => lngOpt.push({ key: loc.language, value: loc.language, text: loc.d_language }))
    return [...new Map(lngOpt.map((lg) => [lg["key"], lg])).values()];
}

export const getAvailableCountries = () => {
    let avaCountries = []
    localeConfig.map((loc) => avaCountries.push({ key: `${loc.language}/${loc.country}`, value: `${loc.language}/${loc.country}`, text: `${loc.d_country} ( in ${loc.d_language} )` }))
    return [...new Map(avaCountries.map((lg) => [lg["key"], lg])).values()];
}

export const withBasePath = (val) => {
    return process.env.NEXT_PUBLIC_APP_ENV === 'production' ? `/okf-open-geodata-curriculum/${val}` : `${val}`;
};
