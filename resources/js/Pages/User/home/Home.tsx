import UserLayout from "@/layouts/UserLayout"
import { Head } from "@inertiajs/react"
import Hero from "./Hero"
import Showcase from "./Showcase"
import Location from "../location"
import Conten2 from "./Conten2"
import Conten3 from "./Conten3"
import Conten4 from "./Conten4"
import Conten5 from "./Conten5"
import Conten6 from "./Conten6"
import Conten7 from "./Conten7"
function Home() {
    return (
        <>
            <Head title="Maujual iPhone Mamuju - Gadget Premium Sulawesi Barat" />

            <div className=" min-h-screen text-white pb-20">
                <Hero />
                <Showcase />
                <Conten2 />
                <Conten3 />
                <Conten4 />
                    <Conten7 />
                <Conten5 />
                <Conten6 />
                <Location />
            
            </div>
        </>
    )
}

Home.layout = (page: React.ReactNode) => <UserLayout>{page}</UserLayout>

export default Home