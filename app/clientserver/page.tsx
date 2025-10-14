import ClientSideButton from "@/components/client-side-button"
import Counter from "@/components/counter"
import Image from "next/image"

const ClientServerPage = () => {
    return (
        <>
            <>
                <h1>CSR & SSR</h1>
                <section className="flex flex-col gap-3 border-2 border-blue-900 rounded-md p-3">
                    <h2>Server side</h2>
                    <section className="flex gap-3">
                        <div className="w-50 bg-blue-900 rounded-md"></div>
                        <Image
                            src="/1644864892-new-js-framework.png"
                            alt="next.js meme"
                            height={200}
                            width={200}
                        />
                        <div className="flex flex-wrap max-w-52">
                            <p><strong>Next.js</strong> är ett ramverk byggt ovanpå React som gör det enkelt att skapa snabba och moderna webbappar med inbyggt stöd för server-side rendering, filbaserad routing och fullstack-funktioner som API-routes och server actions.</p>
                        </div>
                    </section>
                    <section className="flex flex-col gap-3 max-w-80">
                        <div className="flex flex-col align items-center border-2 border-rose-900 rounded-md p-3">
                            <h2>Client side</h2>
                            <ClientSideButton />
                        </div>
                        <div className="flex flex-col align items-center border-2 border-rose-900 rounded-md p-3">
                            <h2>Client side</h2>
                            <Counter />
                        </div>

                    </section>
                </section>
            </>
        </>
    )
}

export default ClientServerPage