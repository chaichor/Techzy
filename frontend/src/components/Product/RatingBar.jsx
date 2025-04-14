import { FaStar } from "react-icons/fa";

const ratings = [
  { stars: 5, percent: 100 },
  { stars: 4, percent: 70 },
  { stars: 3, percent: 40 },
  { stars: 2, percent: 20 },
  { stars: 1, percent: 5 },
];

export default function RatingBar() {
  return (
    <div className="bg-prymary text-subsecondary rounded-lg flex flex-col items-center w-full max-w-md mx-auto">
      <p className="text-3xl font-bold mb-1">4.5</p>
      <div className="flex items-center mb-6">
        {Array.from({ length: 5 }).map((_, i) => (
          <FaStar
            key={i}
            className={`text-2xl mx-0.5 ${
              i < 4 ? "text-yellow-400" : "text-gray-400"
            }`}
          />
        ))}
      </div>

      <div className="w-[1000px] space-y-3">
        {ratings.map((rating) => (
          <div key={rating.stars} className="flex items-center w-full">
            <div className="flex-1 bg-secondary h-2.5 rounded-full overflow-hidden">
              <div
                className="bg-subsecondary h-full rounded-full"
                style={{ width: `${rating.percent}%` }}
              />
            </div>
            <span className="ml-3 text-subprimary text-sm">{rating.stars}</span>
          </div>
        ))}
      </div>
    </div>
  );
}