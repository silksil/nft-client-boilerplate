import MainLayout from "src/layouts/main";
import { Page } from "src/components/Page";
import { LandingHero, LandingSocial, LandingCollection, LandingTeam } from "src/containers/landing";
import { collectionInfo } from "src/config/collectionInfo";
import { MintingModal } from "src/containers/MintingModal";

export default function LandingPage() {
  return (
    <Page title={collectionInfo.name} id="move_top" sx={{ height: "100%" }}>
      <MainLayout>
        <MintingModal />
        <LandingHero />
        <LandingCollection />
        <LandingSocial />
        <LandingTeam />
      </MainLayout>
    </Page>
  );
}
