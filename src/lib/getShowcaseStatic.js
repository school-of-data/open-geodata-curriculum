import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import localeConfig from '@src/config/localeConfig.json';

export const getPaths = () => localeConfig.map((v) => ({ params: { locale: v.language } })).flat()

export const getStaticPaths = async () => ({
    paths: await getPaths(),
    fallback: false,
})

export function makeStaticProps() {
    return async function getStaticProps(ctx) {
        return {
            props: {
                ...(await serverSideTranslations(ctx?.params?.locale, ['common',])),
            },
        };
    };
}
