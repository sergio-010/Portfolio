import CointanerPage from "@/components/ContainerPage";
import CoverParticles from "@/components/CoveParticles";
import TransitionPage from "@/components/TransitionPage";
import CounterServices from './components/CounterSwervices';
import TimeLine from "./components/Timeline";

const PageAboutMe = () => {
    return (
        <>
            <CoverParticles />
            <TransitionPage />
            <CointanerPage  >
                <h1 className="text-4xl font-bold leading-tight text-center md:text-left md:mt-10">
                    My
                    <span className="text-blue-600"> trayectory</span>
                </h1>
                <CounterServices />
                <TimeLine />
            </CointanerPage>
        </>
    );
}

export default PageAboutMe;