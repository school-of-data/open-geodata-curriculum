import LayoutComponent from "@src/components/LayoutComponent";
import { useRouter } from "next/router";
import { useState } from "react";
import { useTranslation } from "next-i18next";
import { getStaticPaths, makeStaticProps } from "@src/lib/getShowcaseStatic";
import showcaseData from "@src/data/showcasedata.json";
import { showcaseDataParse } from "@src/lib/showcaseHelper";
import useSizeQuery from "@src/hooks/useSizeQuery";
import getLangname from "@src/config/nameCodes";
import DesktopShowCase from "@src/components/DesktopShowCase";
import MobileShowCase from "@src/components/MobileShowCase";

const ShowCasePage = () => {
  const { isDesktop } = useSizeQuery();
  const filters = showcaseDataParse(showcaseData);
  const defaultIndices = [...Array(showcaseData.length).keys()];
  const [filteredRows, setFilteredRows] = useState(defaultIndices);
  const [filteredOptions, setFilteredOptions] = useState({});
  const router = useRouter();

  const [currentLanguage, setCurrentLanguage] = useState(
    router.query.locale ? router.query.locale : "en"
  );
  const getOptions = (filterCat) => {
    return Object.keys(filters[filterCat]).map((element) => {
      return {
        key: element,
        value: element,
        text: element,
      };
    });
  };

  const filterSelectHandler = (cat) => (e, data) => {
    const selectedOptions = data.value;
    let indicesToSet = [...defaultIndices];
    const newFilteredOptions = { ...filteredOptions, [cat]: selectedOptions };
    const newFilteredOptionsKeys = Object.keys(newFilteredOptions);

    // Loop through each filter category
    for (let k = 0; k < newFilteredOptionsKeys.length; k++) {
      const currentCat = newFilteredOptionsKeys[k];
      const currentFilterSelectedOptions =
        newFilteredOptions[newFilteredOptionsKeys[k]];
      let currentCatFilteredIndices = [];

      // Loop through each option selected for this filter's categories

      if (currentFilterSelectedOptions.length > 0) {
        for (let i = 0; i < currentFilterSelectedOptions.length; i++) {
          let currentFilterElementIndices =
            filters[currentCat][currentFilterSelectedOptions[i]];

          for (let j = 0; j < currentFilterElementIndices.length; j++) {
            if (
              !currentCatFilteredIndices.includes(
                currentFilterElementIndices[j]
              )
            )
              currentCatFilteredIndices.push(currentFilterElementIndices[j]);
          }
        }
      } else {
        currentCatFilteredIndices = [...defaultIndices];
      }

      indicesToSet = indicesToSet.filter(function (n) {
        return currentCatFilteredIndices.indexOf(n) !== -1;
      });
    }

    setFilteredOptions(newFilteredOptions);
    setFilteredRows(indicesToSet);
  };

  const tagSelectHandler = (cat, data) => {
    const selectedOptions = data;
    let indicesToSet = [...defaultIndices];
    const newFilteredOptions = { ...filteredOptions, [cat]: selectedOptions };
    const newFilteredOptionsKeys = Object.keys(newFilteredOptions);

    // Loop through each filter category
    for (let k = 0; k < newFilteredOptionsKeys.length; k++) {
      const currentCat = newFilteredOptionsKeys[k];
      const currentFilterSelectedOptions =
        newFilteredOptions[newFilteredOptionsKeys[k]];
      let currentCatFilteredIndices = [];

      // Loop through each option selected for this filter's categories

      if (currentFilterSelectedOptions.length > 0) {
        for (let i = 0; i < currentFilterSelectedOptions.length; i++) {
          let currentFilterElementIndices =
            filters[currentCat][currentFilterSelectedOptions[i]];

          for (let j = 0; j < currentFilterElementIndices.length; j++) {
            if (
              !currentCatFilteredIndices.includes(
                currentFilterElementIndices[j]
              )
            )
              currentCatFilteredIndices.push(currentFilterElementIndices[j]);
          }
        }
      } else {
        currentCatFilteredIndices = [...defaultIndices];
      }

      indicesToSet = indicesToSet.filter(function (n) {
        return currentCatFilteredIndices.indexOf(n) !== -1;
      });
    }

    setFilteredOptions(newFilteredOptions);
    setFilteredRows(indicesToSet);
  };

  const resetFilters = () => {
    setFilteredRows(defaultIndices);
    setFilteredOptions({});
  };

  return (
    <LayoutComponent>
      {isDesktop ? (
        <DesktopShowCase
          filters={filters}
          showcaseData={showcaseData}
          filteredRows={filteredRows}
          getOptions={getOptions}
          filterSelectHandler={filterSelectHandler}
          getLangname={getLangname}
          filteredOptions={filteredOptions}
          setFilteredOptions={setFilteredOptions}
          tagSelectHandler={tagSelectHandler}
          resetFilters={resetFilters}
        />
      ) : (
        <MobileShowCase
          filters={filters}
          showcaseData={showcaseData}
          filteredRows={filteredRows}
          getOptions={getOptions}
          filterSelectHandler={filterSelectHandler}
          getLangname={getLangname}
          filteredOptions={filteredOptions}
          setFilteredOptions={setFilteredOptions}
          tagSelectHandler={tagSelectHandler}
          resetFilters={resetFilters}
        />
      )}
    </LayoutComponent>
  );
};

const getStaticProps = makeStaticProps();
export { getStaticPaths, getStaticProps };

export default ShowCasePage;
