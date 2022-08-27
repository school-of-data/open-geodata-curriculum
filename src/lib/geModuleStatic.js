// import { getCountryLocaleModuleFile } from "./mdx";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import i18nConfig from "../../next-i18next.config";
import localeConfig from "@src/config/localeConfig.json";

export const getPaths = () =>
  i18nConfig.i18n.locales
    .map((lng) =>
      i18nConfig.i18n.countries.map((cty) => ({
        params: { locale: lng, country: cty },
      }))
    )
    .flat();

export const getInnerPaths = () =>
  localeConfig
    .map((v) =>
      v.modules.map((mod) => ({
        params: { locale: v.language, country: v.country, slug: mod },
      }))
    )
    .flat();

export const getStaticPaths = async () => ({
  paths: await getInnerPaths(),
  fallback: false,
});


export function makeStaticProps(ns = ["countrylevel"]) {
  return async function getStaticProps(ctx) {
    return {
      props: {
        ...(await getCountryLocaleModuleFile(
          ctx?.params?.locale,
          ctx?.params?.country,
          ctx?.params?.slug
        )),
        ...(await serverSideTranslations(
          ctx?.params?.locale,
          ns /*i18nextConfig*/
        )),
      },
    };
  };
}


