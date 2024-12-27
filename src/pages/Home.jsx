import Banner from "../components/Banner";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Map from "../components/map";
import FeaturedRooms from "./FeaturedRooms";


export default function Home() {
    return (
        <div>
            <header>
                <Banner></Banner>
            </header>
            <main>
                <section>
                    <Map></Map>
                </section>
                <section>
                    <FeaturedRooms></FeaturedRooms>
                </section>
            </main>
        </div>
    )
}
