const FormContact = () => {
    return (
        <form
            action="https://formsubmit.co/adb4e749bcbf0b1783ee75ed6dffb0dd"
            method="POST"
            className="space-y-6 mt-12"
        >
            <div className="space-y-2">
                <label htmlFor="name" className="block text-minimal-sm text-minimal-gray uppercase tracking-wide">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-minimal-border 
                             text-minimal-text placeholder-minimal-gray focus:border-minimal-text 
                             focus:outline-none transition-colors"
                    required
                    autoComplete="name"
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="email" className="block text-minimal-sm text-minimal-gray uppercase tracking-wide">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-minimal-border 
                             text-minimal-text placeholder-minimal-gray focus:border-minimal-text 
                             focus:outline-none transition-colors"
                    required
                    autoComplete="email"
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="comments" className="block text-minimal-sm text-minimal-gray uppercase tracking-wide">
                    Message
                </label>
                <textarea
                    id="comments"
                    name="comments"
                    rows={4}
                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-minimal-border 
                             text-minimal-text placeholder-minimal-gray focus:border-minimal-text 
                             focus:outline-none transition-colors resize-none"
                    required
                />
            </div>

            <div className="pt-6">
                <button
                    type="submit"
                    className="text-minimal-sm text-minimal-text hover:text-minimal-accent 
                             border-b border-transparent hover:border-minimal-accent 
                             transition-all duration-300 tracking-wide uppercase"
                >
                    Send Message
                </button>
            </div>

            <input type="hidden" name="_next" value="https://sergio-picon.vercel.app/" />
            <input type="hidden" name="_captcha" value="false" />
        </form>
    );
}

export default FormContact;
