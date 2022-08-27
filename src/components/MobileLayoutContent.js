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
} from "semantic-ui-react";
import { MDXRemote } from "next-mdx-remote";
import { useRouter } from "next/router";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { withBasePath } from "@src/lib/utils";

const MobileLayoutContent = ({
  source,
  frontMatter,
  currentLanguage,
  countryOptions,
  handleCountryChange,
  languageOptions,
  handleLangChange,
}) => {
  const { mods, outlines, prev, next } = frontMatter;
  const { t } = useTranslation("countrylevel");
  const router = useRouter();
  const [visible, setVisible] = useState(false);

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
          style={{ border: "0px", maxWidth: "80vw" }}
        >
          <Menu.Item>&nbsp;</Menu.Item>
          <Menu.Item style={{ textAlign: "left" }}>
            <h4>{t("language")}</h4>
            <Dropdown
              placeholder="Change Locale"
              fluid
              selection
              defaultValue={currentLanguage}
              options={languageOptions}
              onChange={handleLangChange}
            />
            <br />
          </Menu.Item>
          <Menu.Item style={{ textAlign: "left" }}>
            <h4>{t("region")}</h4>
            <Dropdown
              placeholder="Change Locale"
              fluid
              selection
              defaultValue={router.query.country}
              options={countryOptions}
              onChange={handleCountryChange}
            />
            <br />
          </Menu.Item>
          <Menu.Item style={{ textAlign: "left" }}>
          <h4
              style={{ padding: "0.25rem", cursor: "pointer" }}
              onClick={() =>
                router.push(`/${router.query.locale}/`)
              }
            >
              <a>{t("back_to_home")}</a>
            </h4>

            <h4
              style={{ padding: "0.25rem", cursor: "pointer" }}
              onClick={() =>
                router.push(`/${router.query.locale}/${router.query.country}`)
              }
            >
              <a>{t("content_page")}</a>
            </h4>
            {mods &&
              mods.map((m, i) => {
                return (
                  <p key={i} style={{ padding: "0rem 0.12rem" }}>
                    <Link href={m.match(/\[(.*?)\]/)[1]} passHref key={i}>
                      <a style={{ cursor: "pointer" }}>
                        Module&nbsp;{i}:&nbsp;
                        {m.replace(/\s*(?:\[[^\]]*\]|\([^)]*\))\s*/g, "")}
                      </a>
                    </Link>
                  </p>
                );
              })}
          </Menu.Item>
        </Sidebar>
        <Sidebar.Pusher dimmed={visible}>
          <Segment basic>
            <div style={{ margin: "0rem", padding: "0.15rem" }}>
              <Button onClick={() => setVisible(!visible)}>
                {t("content_menu")}
              </Button>
              <MDXRemote {...source} />
              <Grid style={{ marginTop: "1rem" }}>
                <Grid.Row>
                  <Grid.Column width={2}>
                    {prev !== "" ? (
                      <>
                        <Link href={prev} passHref>
                          <Button
                            icon
                            labelPosition="left"
                            size="large"
                            style={{
                              color: "#fff",
                              background: "#22B7F8",
                            }}
                          >
                            {t("back")}
                            <Icon name="angle left" />
                          </Button>
                        </Link>
                      </>
                    ) : null}
                  </Grid.Column>
                  <Grid.Column width={7}>&nbsp;</Grid.Column>
                  <Grid.Column width={2} style={{ textAlign: "center" }}>
                    {next ? (
                      <>
                        <Link href={next} passHref>
                          <Button
                            icon
                            labelPosition="right"
                            size="large"
                            style={{
                              color: "#fff",
                              background: "#22B7F8",
                            }}
                          >
                            {t("next")}
                            <Icon name="angle right" />
                          </Button>
                        </Link>
                      </>
                    ) : null}
                  </Grid.Column>
                  <Grid.Column width={1}> &nbsp;</Grid.Column>
                </Grid.Row>
              </Grid>
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

export default MobileLayoutContent;
