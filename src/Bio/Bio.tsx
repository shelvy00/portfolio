import { Page, PageHeader, PageContent, Anchor, Text } from "grommet";

const Bio = () => (
  <Page>
    <PageHeader title="Hey I'm Shelvy" style={{ textAlign: "center" }} />
    <PageContent align="center" pad={"small"}>
      <Text>
        I'm a developer currently working at{" "}
        <Anchor
          href="https://www.launchcode.org/"
          label="LaunchCode"
          gap="small"
        />{" "}
        as a teacher's assistant.
      </Text>
    </PageContent>
    <PageContent align="center" pad={"small"}>
      <Text>
        I've recently been interested in learning how software developers write code for sports teams and how they make the scoreboards dynamic.
      </Text>
    </PageContent>
    <PageContent align="center" pad={"small"}>
      <Text>
        When I'm not coding, I love to play basketball, videogames and travel.
      </Text>
    </PageContent>
  </Page>
);

export default Bio;
