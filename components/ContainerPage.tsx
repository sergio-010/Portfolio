interface Props {
    children: React.ReactNode
}

const CointanerPage = ({ children }: Props) => {
    return (
        <div className="min-h-screen max-w-4xl mx-auto px-6">
            {children}
        </div>
    );
}

export default CointanerPage;