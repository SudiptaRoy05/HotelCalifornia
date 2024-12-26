export default function Map() {
    const hotelLocation = { lat: 34.1030032, lng: -118.4104684 }; // Coordinates for Hotel California (Los Angeles, CA)
    const zoomLevel = 16; // Closer view of the location

    return (
        <div style={{ textAlign: "center", margin: "40px 0", fontFamily: "Arial, sans-serif" }}>
            <h2 style={{ fontSize: "2rem", marginBottom: "10px", color: "#2C3E50" }}>Our Location</h2>
            <p style={{ fontSize: "1rem", color: "#7F8C8D", marginBottom: "20px" }}>
                Welcome to Hotel California. Below is our location on the map:
            </p>
            <div
                style={{
                    width: "91.66%", // 11/12 width
                    maxWidth: "1200px",
                    margin: "0 auto",
                    height: "500px",
                    borderRadius: "15px", // Rounded corners
                    overflow: "hidden",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Subtle shadow
                    border: "1px solid #E0E0E0", // Light border for elegance
                }}
            >
                <iframe
                    style={{
                        width: "100%",
                        height: "100%",
                        border: "none",
                    }}
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                    src={`https://www.openstreetmap.org/export/embed.html?bbox=${hotelLocation.lng - 0.01
                        },${hotelLocation.lat - 0.01},${hotelLocation.lng + 0.01},${hotelLocation.lat + 0.01
                        }&layer=mapnik&marker=${hotelLocation.lat},${hotelLocation.lng}&zoom=${zoomLevel}`}
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
}
