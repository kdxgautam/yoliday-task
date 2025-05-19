

interface CourseCardProps {
  image: string;
  title: string;
  description: string;
  language: string;
  author: string;
  onAddToCart?: () => void;
  isInCart?: boolean;
  isLoading?: boolean;
}

function CourseCard({
  image,
  title,
  description,
  language,
  author,
  onAddToCart,
  isInCart = false,
  isLoading = false,
}: CourseCardProps) {
  return (
    <div className="w-full max-h-[25] max-w-full mx-auto bg-white rounded-xl shadow-md shadow-gray-200 overflow-hidden flex flex-row mb-6">
      {/* Left Image */}
      <img src={image} alt={title} className="w-1/3 h-auto object-cover" />

      {/* Right Content */}
      <div className="flex flex-col justify-between p-4 flex-1">
        <div>
          <h2 className="text-base font-semibold text-gray-900">{title}</h2>
          <p className="hidden sm:block text-sm text-gray-500 mt-1 line-clamp-2">
            {description}
          </p>
        </div>

        <div className="flex flex-row justify-between">
          <div className="mt-4">
            <span className="text-xs font-semibold text-gray-700 block">
              {language.toUpperCase()}
            </span>
            <span className="text-sm text-gray-400">Oleh {author}</span>
          </div>

          {/* end */}
          <div className="self-end">
            <div className="block md:hidden mb-2">
              {isInCart ? (
                <span className="bg-green-500 text-white font-medium py-2 px-6 rounded-lg">
                  ✓
                </span>
              ) : (
                <button
                  onClick={onAddToCart}
                  disabled={isLoading}
                  className="bg-gradient-to-br to-amber-400 from-orange-400 hover:from-amber-500 hover:to-orange-500 text-white font-medium py-2 px-6 rounded-lg transition-all duration-500"
                >
                  {isLoading ? "..." : "A"}
                </button>
              )}
            </div>
            <div className="hidden md:block">
              {isInCart ? (
                <button className="bg-green-500 text-white font-medium py-3 px-6 rounded-lg">
                  Added to Cart
                </button>
              ) : (
                <button
                  onClick={onAddToCart}
                  disabled={isLoading}
                  className="bg-gradient-to-br to-amber-400 from-orange-400 hover:from-amber-500 hover:to-orange-500 text-white font-medium py-3 px-6 rounded-lg transition-all duration-500"
                >
                  {isLoading ? "Adding..." : "Add to Cart"}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;