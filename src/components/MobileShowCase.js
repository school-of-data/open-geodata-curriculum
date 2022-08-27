import { useState } from "react";
import {
  Button,
  Container,
  Grid,
  Dropdown,
  Icon,
  Segment,
  Sidebar,
  Menu,
  Image,
} from "semantic-ui-react";
import { MDXRemote } from "next-mdx-remote";
import { useRouter } from "next/router";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { withBasePath } from "@src/lib/utils";

const MobileShowCase = ({
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
  const [visible, setVisible] = useState(false);

  const handleTag = (cat, val) => {
    let prevVals = filteredOptions?.[cat] ? filteredOptions?.[cat] : []
    tagSelectHandler(cat, [...prevVals, val.trim()])
  }

  return (
    <>
      <Sidebar.Pushable as={Segment}>
        <Sidebar
          as={Menu}
          animation="overlay"
          icon="labeled"
          onHide={() => setVisible(false)}
          vertical
          visible={visible}
          width="wide"
          style={{ border: "0px", maxWidth: "80vw", height: "100vh" }}
        >
          <Menu.Item>&nbsp;</Menu.Item>
          {Object.keys(filters).map((filterCat, i) => {
            return (
              <Menu.Item style={{ textAlign: "left" }} key={i}>
                <h4 style={{ padding: "0.25rem" }}>{t(filterCat)}</h4>
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
              </Menu.Item>
            );
          })}
        </Sidebar>
        <Sidebar.Pusher dimmed={visible}>
          <Segment basic>
            <div style={{ margin: "0rem", padding: "0.2rem" }}>
              <Button onClick={() => setVisible(!visible)}>
                {t("filters")}
              </Button>
              {showcaseData
                .filter((row, i) => filteredRows.includes(i))
                .map((row) => {
                  return (
                    <Grid
                      style={{
                        margin: "2rem 0.2rem",
                        padding: "0.25rem",
                        border: "solid #65ABEA 1px",
                        borderRadius: "0.25rem",
                      }}
                      id={row.title
                        .toLowerCase()
                        .replace(/ /g, "-")
                        .replace(/[^\wÄäÖöÜü-]+/g, "")}
                    >
                      <Grid.Row>
                        <Grid.Column width={16}>
                          <h3 className="blue-title">{row.title}</h3>
                          <Image src={withBasePath(row.header_image)} alt={row.title} width="100%"/>
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
                          <h4>{t("project_summary")}</h4>
                          <p>{row.project_summary}</p>
                          <h4>{t("tools")}</h4>
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
                        <Grid.Column width={12}>
                          <a href={row.readmore} target="_blank">
                            <Button primary>{t('read_full_report')}</Button>
                          </a>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  );
                })}
            </div>
            <Container
              textAlign="justified"
              style={{ padding: "1rem" }}
            ></Container>
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </>
  );
};

export default MobileShowCase;
