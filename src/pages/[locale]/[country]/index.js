import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { getStaticPaths, makeStaticProps } from "@src/lib/getCountryStatic";
import getSlug from "@src/lib/getSlug";
import LayoutComponent from "@src/components/LayoutComponent";
import MobileLayoutContent from "@src/components/MobileLayoutContent";
import DesktopLayoutContent from "@src/components/DesktopLayoutContent";
import useSizeQuery from "@src/hooks/useSizeQuery";
import ModalComponent from "@src/components/ModalComponent";
import localematcher from "@src/config/matchLocale";
import ctytolocale from "@src/config/ctytoLocale";
import { toCapitalize, getLanguageOptions } from "@src/lib/utils";

export default function Homepage({ source, frontMatter }) {
  const { isDesktop } = useSizeQuery();

  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(
    router.query.locale ? router.query.locale : "en"
  );
  const [selectedLang, setSelectedlang] = useState("en");
  const [availableCountries, setAvailableCountries] = useState([]);
  const [countryOptions, setCountryOptions] = useState([]);
  const languageOptions = getLanguageOptions()
  useEffect(() => {
    setCountryOptions(
      localematcher[currentLanguage].map((cty) => ({
        key: cty,
        value: cty,
        text: toCapitalize(cty),
      }))
    );
  }, [currentLanguage]);

  const handleLangChange = (event, data) => {
    if (ctytolocale[router.query.country].includes(data.value)) {
      let orgPath = router.asPath;
      let currentPath = orgPath.replace(
        `/${router.query.locale}`,
        `/${data.value}`
      );
      setCurrentLanguage(data.value);
      router.push(currentPath);
    }
    if (!ctytolocale[router.query.country].includes(data.value)) {
      setSelectedlang(data.value);
      setAvailableCountries(localematcher[data.value]);
      setOpen(true);
    }
  };
  const handleCountryChange = (event, data) => {
    let orgPath = router.asPath;
    let currentPath = orgPath.replace(
      `/${router.query.country}`,
      `/${data.value}`
    );
    router.push(currentPath);
  };
  
  return (
    <LayoutComponent>
      <ModalComponent
        open={open}
        setOpen={setOpen}
        setCountryOptions={setCountryOptions}
        currentLanguage={currentLanguage}
        selectedLang={selectedLang}
        availableCountries={availableCountries}
      />
      {isDesktop ? (
        <DesktopLayoutContent
          source={source}
          frontMatter={frontMatter}
          open={open}
          setOpen={setOpen}
          currentLanguage={currentLanguage}
          selectedLang={selectedLang}
          availableCountries={availableCountries}
          countryOptions={countryOptions}
          handleCountryChange={handleCountryChange}
          languageOptions={languageOptions}
          handleLangChange={handleLangChange}
        />
      ) : (
        <MobileLayoutContent
          source={source}
          frontMatter={frontMatter}
          currentLanguage={currentLanguage}
          countryOptions={countryOptions}
          handleCountryChange={handleCountryChange}
          languageOptions={languageOptions}
          handleLangChange={handleLangChange}
        />
      )}
    </LayoutComponent>
  );
}

const getStaticProps = makeStaticProps(getSlug(import.meta.url));
export { getStaticPaths, getStaticProps };
