export default function BlogCard({ blog }) {
    const { title, image, description } = blog || {};
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105">
            <img src={image} alt={title} className="w-full mx-auto h-52 object-cover" />
            <div className="p-5">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3 truncate">{title}</h2>
                <p className="text-gray-700 text-sm mb-4">{description?.slice(0, 120)}...</p>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-all">
                    Read More
                </button>
            </div>
        </div>
    );
}