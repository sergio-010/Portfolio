import CointanerPage from "@/components/ContainerPage";
import TransitionPage from "@/components/TransitionPage";
import PortfolioBox from "./Components/PortfolioBox";
import { dataPortfolio } from "@/data";

const PorfolioPage = () => {
    return (
        <CointanerPage>
            <TransitionPage />
            <div className="pt-20 pb-16">
                <div className="text-center mb-16">
                    <h1 className="text-minimal-3xl md:text-minimal-4xl font-light text-minimal-text tracking-wide mb-4">
                        Selected Work
                    </h1>
                    <div className="w-16 h-px bg-minimal-text mx-auto"></div>
                </div>

                <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {dataPortfolio.slice(0, 6).map((data) => (
                        <PortfolioBox key={data.id} data={data} />
                    ))}
                </div>
            </div>
        </CointanerPage>
    );
}

export default PorfolioPage;