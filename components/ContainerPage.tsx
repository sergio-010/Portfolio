interface Props {
    children: React.ReactNode
}
const CointanerPage = ({ children }: Props) => {
    return (
        <div className="w-full h-[calc(100vh-150px)] max-w-6xl px-4 pb-40 mx-auto  md:pb-0 md:px-6 ">
            {children}
        </div>
    );
}

export default CointanerPage;