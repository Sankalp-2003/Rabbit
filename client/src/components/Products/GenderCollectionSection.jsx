import { Link, useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";

const GenderCollectionSection = () => {
  const navigate = useNavigate();
  return (
    <section className="py-16 px-4 lg:px-0">
      <div className="lg:px-16 mx-auto flex flex-col md:flex-row gap-8">
        <div
          onClick={() => navigate("/collections/all?gender=Women")}
          className="relative flex-1"
        >
          <img
            src={assets.womensCollection}
            alt="women's collection"
            className="w-full h-[700px] object-cover"
          />
          <div className="absolute bottom-8 left-8 bg-white/90 p-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-3 ">
              Women's Collection
            </h2>
            <Link
              to="/collections/all?gender=Women"
              className="text-gray-900 underline"
            >
              Shop Now
            </Link>
          </div>
        </div>

        <div
          onClick={() => navigate("/collections/all?gender=Men")}
          className="relative flex-1"
        >
          <img
            src={assets.mensCollection}
            alt="men's collection"
            className="w-full h-[700px] object-cover"
          />
          <div className="absolute bottom-8 left-8 bg-white/90 p-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-3 ">
              Men's Collection
            </h2>
            <Link
              to="/collections/all?men=Men"
              className="text-gray-900 underline"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenderCollectionSection;
