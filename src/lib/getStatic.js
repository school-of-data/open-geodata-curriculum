import { getI18nPaths } from './getI18nPaths'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export const getStaticPaths = () => ({
  fallback: false,
  paths: getI18nPaths(),
})

export function makeStaticProps(slug, ns = ['common']) {
  return async function getStaticProps(ctx) {
    return {
      props: {
        ...await serverSideTranslations(ctx?.params?.locale, ns, /*i18nextConfig*/),
      }
    }
  };
}

export function makeCountryStaticProps(slug, ns = ['common']) {
  return async function getStaticProps(ctx) {
    return {
      props: {
        ...await getCountryLocaleFile(ctx?.params?.locale, ctx?.params?.country, slug),
        ...await serverSideTranslations(ctx?.params?.locale, ns, /*i18nextConfig*/),
      }
    }
  };
}
