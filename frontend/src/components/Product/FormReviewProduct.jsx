import { useState } from 'react';
import { Star } from 'lucide-react';

export default function ReviewForm() {
    const [rating, setRating] = useState(0);
    const [hovered, setHovered] = useState(null);
    const [comment, setComment] = useState('');

    return (
        <div className="flex flex-col items-center bg-primary rounded-xl w-full max-w-xl mx-auto text-white">
            <h2 className="text-subsecondary text-3xl font-semibold mb-1">Agregar una reseña</h2>
            <p className="text-lg text-subsecondary mb-3">1 al 5</p>
            <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                    <button
                        key={star}
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHovered(star)}
                        onMouseLeave={() => setHovered(null)}
                        className="text-yellow-400"
                    >
                        <Star
                            fill={
                                (hovered || rating) >= star ? 'currentColor' : 'transparent'
                            }
                            strokeWidth={1.5}
                            className="w-8 h-8"
                        />
                    </button>
                ))}
            </div>
            <textarea
                placeholder="Agrega un comentario"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                rows={4}
                className="w-[1000px] h-[300px] p-3 rounded-lg bg-[#1c154d] placeholder:text-cyan-200 text-white border border-transparent transition-all duration-350 focus:border-cyan-400 focus:outline-none resize-none"
            ></textarea>
            <button type="submit" className="max-w-none w-[250px] mt-6 px-3 py-2 bg-primary text-subsecondary font-semibold border-0 border-b-3 border-subsecondary rounded-lg
                        shadow-xl hover:bg-subsecondary hover:text-primary transition-all duration-300 
                        hover:shadow-[0px_4px_20px_#41D7FC]">Enviar</button>
        </div>
    );
}