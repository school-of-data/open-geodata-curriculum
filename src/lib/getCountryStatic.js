import { getCountryLocaleFile } from "./mdx";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import localeConfig from '@src/config/localeConfig.json';
// import i18nConfig from '../../next-i18next.config'

// const getPaths = () => i18nConfig.i18n.locales.map((lng) =>
//   i18nConfig.i18n.countries.map((cty) => ({ params: { locale: lng, country: cty } }))
// ).flat()

// export const getStaticPaths = async () => ({
//   paths: await getPaths(),
//   fallback: false,
// })

// export const getStaticPaths = async () => ({
//   fallback: false,
//   paths: [
//     { params: { locale: "en", country: "bangladesh" } },
//     { params: { locale: "en", country: "ghana" } },
//     { params: { locale: "en", country: "nigeria" } },
//     { params: { locale: "es", country: "argentina" } },
//     { params: { locale: "es", country: "mexico" } },
//     { params: { locale: "de", country: "germany" } },
//   ],
// });

const getPaths = () => localeConfig.map((v) => ({ params: { locale: v.language, country: v.country } })).flat()

export const getStaticPaths = async () => ({
  paths: await getPaths(),
  fallback: false,
})

export function makeStaticProps(slug, ns = ["countrylevel"]) {
  return async function getStaticProps(ctx) {
    return {
      props: {
        ...(await getCountryLocaleFile(
          ctx?.params?.locale,
          ctx?.params?.country,
          slug
        )),
        ...(await serverSideTranslations(
          ctx?.params?.locale,
          ns /*i18nextConfig*/
        )),
      },
    };
  };
}
