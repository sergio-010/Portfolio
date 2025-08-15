import ContainerPage from "@/components/ContainerPage";
import { dataContact } from "@/data";
import FormContact from "./components/FormContact";

const ContactMePage = () => {
    return (
        <ContainerPage>
            <div className="pt-20 pb-16">
                <div className="text-center mb-16">
                    <h1 className="text-minimal-3xl md:text-minimal-4xl font-light text-minimal-text tracking-wide mb-4">
                        Let&apos;s Work Together
                    </h1>
                    <div className="w-16 h-px bg-minimal-text mx-auto"></div>
                </div>

                <div className="max-w-2xl mx-auto space-y-12">
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        {dataContact.map((data) => (
                            <a
                                key={data.id}
                                href={data.link}
                                target="_blank"
                                className="group space-y-3 p-6 hover:bg-minimal-light transition-colors duration-200"
                            >
                                <div className="text-minimal-gray group-hover:text-minimal-text transition-colors">
                                    {data.icon}
                                </div>
                                <div>
                                    <h3 className="text-minimal-sm text-minimal-gray uppercase tracking-wide mb-1">
                                        {data.title}
                                    </h3>
                                    <p className="text-minimal-sm text-minimal-text">
                                        {data.subtitle}
                                    </p>
                                </div>
                            </a>
                        ))}
                    </div>

                    <FormContact />
                </div>
            </div>
        </ContainerPage>
    );
}

export default ContactMePage;