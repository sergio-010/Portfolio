const FormContact = () => {
    return (
        <form
            action="https://formsubmit.co/adb4e749bcbf0b1783ee75ed6dffb0dd"
            method="POST"
            className="max-w-3xl flex flex-col gap-6 mx-auto align-center mt-20 "
        >
            <div className="flex justify-between gap-9">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-transparent border rounded-lg hover:shadow-lg hover:shadow-blue-600/50 border-blue-600"
                    required
                    autoComplete="name"
                />
            </div>
            <div className="flex justify-between gap-10">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-transparent border rounded-lg hover:shadow-lg hover:shadow-blue-600/50hover:shadow-lg hover:shadow-blue-600/50 border-blue-600"
                    required
                    autoComplete="email"
                />
            </div>
            <div className="flex gap-4 justify-between">
                <label htmlFor="comments">Message</label>
                <textarea
                    id="comments"
                    name="comments"
                    className="w-full bg-transparent border rounded-lg hover:shadow-lg hover:shadow-blue-600/50 border-blue-600"
                    required
                />
            </div>
            <input
                type="submit"
                value="Send"
                className="w-[200px] mx-auto mt-4 py-2 rounded-lg shadow border border-blue-600 cursor-pointer hover:shadow-lg hover:shadow-blue-600/50 text-white mb-40 md:mb-0"
            />
            <input type="hidden" name="_next" value="https://sergio-picon.vercel.app/" />
            <input type="hidden" name="_captcha" value="false" />
        </form>
    );
}

export default FormContact;
