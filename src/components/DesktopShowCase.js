import { useEffect } from 'react'
import { useRouter } from "next/router";
import { withBasePath } from "@src/lib/utils";
import { useTranslation } from "next-i18next";
import { Container, Grid, Dropdown, Image, Button } from "semantic-ui-react";

const DesktopShowCase = ({
  filters,
  showcaseData,
  filterSelectHandler,
  filteredRows,
  getOptions,
  getLangname,
  filteredOptions,
  setFilteredOptions,
  tagSelectHandler,
  resetFilters,
}) => {

  const { t } = useTranslation("common");
  const router = useRouter();

  const handleTag = (cat, val) => {
    let prevVals = filteredOptions?.[cat] ? filteredOptions?.[cat] : []
    tagSelectHandler(cat, [...prevVals, val.trim()])
  }

  console.log("query", router.asPath )
  useEffect(() =>{
    router.push(router.asPath)
  },[])
  return (
    <Grid>
      <Grid.Row style={{ height: "100%" }}>
        <Grid.Column className="sidebar" width={3}>
          {Object.keys(filters).map((filterCat, i) => {
            return (
              <Grid.Row style={{ margin: "0px", padding: "0px" }} key={i}>
                <Grid.Column
                  style={{
                    color: "black",
                    padding: "1rem 0rem 1rem 1.5rem",
                  }}
                >
                  <Container>
                    <h4 style={{ padding: "0.25rem", textTransform: "capitalize" }}>
                      {t(`${filterCat}`)}
                    </h4>
                    <Dropdown
                      placeholder={"Change " + filterCat}
                      fluid
                      multiple
                      selection
                      clearable
                      options={getOptions(filterCat)}
                      onChange={filterSelectHandler(filterCat)}
                      value={filteredOptions?.[filterCat] ? filteredOptions?.[filterCat] : []}
                      style={{ margin: "0.2rem" }}
                    />
                    <br />
                  </Container>
                </Grid.Column>
              </Grid.Row>
            );
          })}
          <Grid.Row style={{ padding: "2rem" }}>
            <Grid.Column align="center">
              <a href="#" onClick={() => resetFilters()}>{t("clear_all_filters")}</a>
            </Grid.Column>
          </Grid.Row>
        </Grid.Column>
        <Grid.Column width={13}>
          {showcaseData
            .filter((row, i) => filteredRows.includes(i))
            .map((row) => {
              return (
                <Grid
                  className="showcase-box"
                  id={row.title
                    .toLowerCase()
                    .replace(/ /g, "-")
                    .replace(/[^\wÄäÖöÜü-]+/g, "")}
                >
                  <Grid.Row>
                    <Grid.Column width={4}>
                      <Image src={withBasePath(row.header_image)} alt={row.title} width="100%" />
                      <h4>
                        {t("country")}
                      </h4>
                      <p>{row.country}</p>
                      <h4>
                        {t("language")}
                      </h4>
                      <p>{getLangname[row.language]}</p>
                      <h4>
                        {t("author")}
                      </h4>
                      <p>{row.authors}</p>
                    </Grid.Column>
                    <Grid.Column width={12}>
                      <h3 className="blue-title">{row.title}</h3>
                      <h4>{t("project_summary")}</h4>
                      <p>{row.project_summary}</p>
                      <h4>{t('tools')}</h4>
                      <div style={{ display: "flex", direction: "row" }}>
                        {row.tools.split(",").map((tool, i) => (
                          <span
                            className="tags"
                            onClick={() => handleTag("tools", tool)}
                            key={i}
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                      <h4>{t("themes_keywords")}</h4>
                      {row.themes_keywords.split(",").map((tk, i) => (
                        <span
                          className="tags"
                          onClick={() => handleTag("themes_keywords", tk)}
                          key={i}
                        >
                          {tk}
                        </span>
                      ))}
                      <h4>{t("algorithms")}</h4>
                      {row.algorithms.split(",").map((alg, i) => (
                        <span
                          className="tags"
                          onClick={() => handleTag("algorithms", alg)}
                          key={i}
                        >
                          {alg}
                        </span>
                      ))}
                      <h4>{t("datasets")}</h4>
                      <p>{row.datasets}</p>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column width={12}></Grid.Column>
                    <Grid.Column width={4} align="right">
                      <a href={row.readmore} target="_blank">
                        <Button primary>{t('read_full_report')}</Button>
                      </a>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              );
            })}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};
export default DesktopShowCase;
