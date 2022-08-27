import {
	Container,
	Header
} from "semantic-ui-react";
import useSizeQuery from "@src/hooks/useSizeQuery";
import { useTranslation } from "next-i18next";

export default function HeroSession() {

	const { isDesktop } = useSizeQuery();
	const { t } = useTranslation("common");

	return (
		<div className="hero-session">
		  <Container>
		    <Header
		      as="h1"
		      className="big-title"
		    >
		      {t("site_title")}
		    </Header>
		    <p>
		      {t("site_desc")}
		    </p>
		    <p style={{ paddingBottom: "2rem" }}>
		      {t("site_desc2")}
		    </p>
		  </Container>
		</div>
	);
}