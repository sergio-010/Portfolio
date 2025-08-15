import { dataAboutPage } from "@/data";

const TimeLine = () => {
    return (
        <div className="max-w-2xl mx-auto">
            <div className="space-y-12">
                {dataAboutPage.map((data) => (
                    <div key={data.id} className="relative pl-8 border-l border-minimal-border">
                        <div className="absolute w-3 h-3 bg-minimal-text rounded-full -left-1.5 top-1"></div>

                        <div className="space-y-2">
                            <div className="text-minimal-sm text-minimal-gray tracking-wide uppercase">
                                {data.date}
                            </div>
                            <h3 className="text-minimal-lg font-light text-minimal-text">
                                {data.title}
                            </h3>
                            <div className="text-minimal-sm text-minimal-gray">
                                {data.subtitle}
                            </div>
                            <p className="text-minimal-sm text-minimal-gray leading-relaxed">
                                {data.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TimeLine;