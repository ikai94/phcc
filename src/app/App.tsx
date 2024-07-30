import { Header } from 'pages/header'
import {AboutProject} from "pages/aboutProject";
import {Project} from "pages/project";
import {Location} from "pages/location";
import {MainAdvantages} from "pages/mainAdvantages";
import {WhySection} from "pages/whySection";
import {Technology} from "pages/technology";
import {DownloadPresentation} from "pages/downloadPresentation";
import {Payment} from "pages/payment";
import {Contacts} from "pages/contacts";
import {Footer} from "pages/footer";

function App() {
  return (
    <div className={'app'}>
        <Header />
        <AboutProject />
        <Project />
        <Location/>
        <MainAdvantages />
        <WhySection />
        <Technology />
        <DownloadPresentation />
        <Payment />
        <Contacts />
        <Footer />
    </div>
  )
}

export default App
