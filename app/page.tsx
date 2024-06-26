
import Introduction from "@/components/Intruduction";
import TransitionPage from "@/components/TransitionPage";


export default function Home() {
  return (
    <main>
      <TransitionPage />
      <div className="min-h-screen h-full flex">
        <Introduction />
      </div>
    </main>
  );
}
