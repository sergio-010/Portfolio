import ContainerPage from "@/components/ContainerPage";

import { dataContact } from "@/data";
import FormContact from "./components/FormContact";



const ContactMePage = () => {
    return (
        <ContainerPage>
            <h1 className="text-4xl font-bold leading-tight text-center md:mt-10">
                Contact <span className="text-blue-600">Me</span>
            </h1>
            <div className="grid grid-cols-1 items-center md:grid-cols-3 md:gap-7 mt-8">
                {dataContact.map((data) => (
                    <div key={data.id} className="flex flex-col items-center gap-3">
                        <h3 className="text-2xl font-bold text-blue-600">{data.title}</h3>
                        <a className="flex items-center flex-col gap-3" target="_blank" href={data.link}>
                            <p>{data.subtitle}</p>
                            <p >{data.icon}</p>
                        </a>

                    </div>
                ))}
            </div>
            <FormContact />

        </ContainerPage >
    );
}

export default ContactMePage;