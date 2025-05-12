import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { CheckCircle, XCircle, Trash2 } from "lucide-react";

const initialReviews = [
  {
    id: 1,
    user: "Carlos",
    rating: 2,
    text: "Feo",
    productId: "8438204290",
  },
  {
    id: 2,
    user: "Ethan",
    rating: 5,
    text: "El mejor teclado que eh probado en mi vida",
    productId: "8438204290",
  },
  {
    id: 3,
    user: "Victor",
    rating: 5,
    text: "VOY A HACKEAR TODA LA PAGINA TENGO LOS SCRIPTS PREPÁRENSE...",
    productId: "8438204290",
  },
];

export default function ReviewApproval() {
  const [reviews, setReviews] = useState(initialReviews);
  const [approved, setApproved] = useState([]);

  const approveReview = (id) => {
    const review = reviews.find((r) => r.id === id);
    if (review) {
      setApproved([...approved, review]);
      setReviews(reviews.filter((r) => r.id !== id));
    }
  };

  const deleteReview = (id) => {
    setReviews(reviews.filter((r) => r.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#0b032d] text-white p-6 flex flex-col items-center">
      <h1 className="text-2xl font-bold flex items-center gap-2 mb-6">
        Reseñas <div className="w-5 h-5 bg-white rounded" />
      </h1>

      {/* Reemplazo de <Card> */}
      <div className="bg-[#1c1240] text-white w-full max-w-2xl rounded-2xl p-4 border border-[#3f2d7a] shadow">
        <h2 className="text-lg font-semibold mb-4">Lista de reseñas por aprobar</h2>
        <div className="space-y-4">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="border border-[#3f2d7a] p-3 rounded-lg flex flex-col gap-2"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-[#ffb703]">{review.user}</span>
                  <span className="text-yellow-400">{"⭐".repeat(review.rating)}</span>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => approveReview(review.id)}
                    className="bg-green-500 hover:bg-green-600 p-1 rounded"
                  >
                    <CheckCircle className="w-5 h-5 text-white" />
                  </button>
                  <button
                    onClick={() => deleteReview(review.id)}
                    className="bg-red-500 hover:bg-red-600 p-1 rounded"
                  >
                    <Trash2 className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
              <p className="text-sm text-[#8ecae6]">
                {review.text.length > 60 ? review.text.slice(0, 60) + "..." : review.text}
              </p>
              <p className="text-xs text-[#adb5bd]">
                id producto: <span className="font-mono">{review.productId}</span>
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-4 gap-4">
          <button className="text-cyan-400">◀</button>
          <button className="text-cyan-400">▶</button>
        </div>
      </div>

      <div className="flex gap-8 mt-10">
        <div className="flex flex-col items-center gap-2">
          <div className="bg-cyan-500 p-4 rounded-full">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
          <span className="text-cyan-300">Reseña aprobada</span>
          <ul className="text-sm text-cyan-100 mt-2">
            {approved.map((r) => (
              <li key={r.id} className="text-center">{r.user}: {r.text.slice(0, 30)}...</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="bg-cyan-500 p-4 rounded-full">
            <XCircle className="w-8 h-8 text-white" />
          </div>
          <span className="text-cyan-300">Reseña eliminada</span>
        </div>
      </div>
    </div>
  );
};
