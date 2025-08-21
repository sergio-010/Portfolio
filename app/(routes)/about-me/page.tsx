import CointanerPage from "@/components/ContainerPage";
import TransitionPage from "@/components/TransitionPage";
import CounterServices from './components/CounterSwervices';
import TimeLine from "./components/Timeline";
import ProfileSection from "./components/ProfileSection";

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
                    <ProfileSection />
                    <CounterServices />
                    <div className="mt-20">
                        <div className="text-center mb-12">
                            <h2 className="text-minimal-2xl md:text-minimal-3xl font-light text-minimal-text tracking-wide mb-4">
                                Experiencia y Educación
                            </h2>
                            <div className="w-16 h-px bg-minimal-text mx-auto"></div>
                        </div>
                        <TimeLine />
                    </div>
                </div>
            </CointanerPage>
        </>
    );
}

export default PageAboutMe;