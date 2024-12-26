import Banner from "../components/Banner";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Map from "../components/map";


export default function Home() {
    return (
        <div>
            <header>
                <Banner></Banner>
            </header>
            <main>
                <Map></Map>
            </main>
        </div>
    )
}
