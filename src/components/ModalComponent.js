import { useEffect } from "react";
import { Container, Modal } from "semantic-ui-react";
import Link from "next/link";
import localematcher from "@src/config/matchLocale";
import nameCodes from "@src/config/nameCodes";
import { toCapitalize } from "@src/lib/utils";

const ModalComponent = ({
  open,
  setOpen,
  setCountryOptions,
  currentLanguage,
  selectedLang,
  availableCountries,
}) => {
  useEffect(() => {
    setCountryOptions(
      localematcher[currentLanguage].map((cty) => ({
        key: cty,
        value: cty,
        text: toCapitalize(cty),
      }))
    );
  }, [currentLanguage]);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      dimmer={"inverted"}
    >
      <Modal.Header>
        Modules available in {nameCodes[selectedLang]}
      </Modal.Header>
      <Modal.Content>
        <Container
          style={{
            padding: "1.5rem",
            textAlign: "center",
          }}
        >
          {availableCountries.map((acty, i) => {
            return (
              <div
                style={{
                  border: "0.25px solid #D3D3D3",
                  padding: "0.5rem",
                  margin: "1rem 3rem",
                }}
                key={i}
              >
                <Link href={`/${selectedLang}/${acty}`} passHref>
                  <h5 style={{ cursor: "pointer" }}>{toCapitalize(acty)}</h5>
                </Link>
              </div>
            );
          })}
        </Container>
      </Modal.Content>
    </Modal>
  );
};

export default ModalComponent;
