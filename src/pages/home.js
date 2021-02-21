// COMPONENTS
import JumbotronComponent from "../containers/jumbotron";
import FooterComponent from "../containers/footer";
import AccordionComponent from "../containers/faqs";
import HeaderComponent from "../containers/header";

import { OptForm, Feature } from "../components";

export default function Home() {
  return (
    <>
      <HeaderComponent>
        <Feature>
          <Feature.Title>
            Unlimited films, Tv programmes and more.
          </Feature.Title>
          <Feature.SubTitle>
            Watch anywhere. Cancel at any time.
          </Feature.SubTitle>
          <OptForm>
            <OptForm.Input placeholder="Email address" />
            <OptForm.Button>Try it now</OptForm.Button>
            <OptForm.Break />
            <OptForm.Text>
              Ready tpo watch? Enter your email to create or restart your
              membership
            </OptForm.Text>
          </OptForm>
        </Feature>
      </HeaderComponent>
      <JumbotronComponent />
      <AccordionComponent />
      <FooterComponent />
    </>
  );
}
