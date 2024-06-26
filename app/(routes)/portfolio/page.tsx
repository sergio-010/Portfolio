import CointanerPage from "@/components/ContainerPage";
import TransitionPage from "@/components/TransitionPage";
import PortfolioBox from "./Components/PortfolioBox";
import { dataPortfolio } from "@/data";

const PorfolioPage = () => {
    return (
        <CointanerPage >
            <TransitionPage />
            <div className="h-full flex flex-col justify-center  ">
                <h1 className="text-2xl font-bold leading-tight text-center md:text-4xl md:mb-5">My <span className="text-blue-600 font-bold">Projects</span></h1>
                <div className="max-w-5xl relative grid gap-6 mx-auto mt-4 md:grid-cols-4 z-10 ">
                    {dataPortfolio.map((data) => (
                        <PortfolioBox key={data.id} data={data} />
                    ))
                    }
                </div>
            </div>


        </CointanerPage>
    );
}

export default PorfolioPage;