import CointanerPage from "@/components/ContainerPage";
import TransitionPage from "@/components/TransitionPage";
import CounterServices from './components/CounterSwervices';
import TimeLine from "./components/Timeline";

const PageAboutMe = () => {
    return (
        <>
            <TransitionPage />
            <CointanerPage>
                <div className="pt-20 pb-16">
                    <div className="text-center mb-16">
                        <h1 className="text-minimal-3xl md:text-minimal-4xl font-light text-minimal-text tracking-wide mb-4">
                            About Me
                        </h1>
                        <div className="w-16 h-px bg-minimal-text mx-auto"></div>
                    </div>
                    <CounterServices />
                    <TimeLine />
                </div>
            </CointanerPage>
        </>
    );
}

export default PageAboutMe;