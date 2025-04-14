import React, { useState } from 'react';

const reviews = [
    {
        name: 'Carlos',
        rating: 4,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        avatar: 'https://i.pravatar.cc/40?img=3'
    },
    {
        name: 'Ethan',
        rating: 5,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        avatar: 'https://i.pravatar.cc/40?img=5'
    },
    {
        name: 'Lucía',
        rating: 3,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        avatar: 'https://i.pravatar.cc/40?img=6'
    }
];

const Switches = () => {
    const [index, setIndex] = useState(0);

    const next = () => setIndex((prev) => (prev + 1) % reviews.length);
    const prev = () => setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

    return (
        <div className="flex justify-center items-center bg-primary">
            <div className="bg-primary text-white rounded-2xl w-[95%] max-w-4xl ">
                {reviews.slice(index, index + 3).map((review, idx) => (
                    <div key={idx} className="flex items-start gap-4 mb-8">
                        <img
                            src={review.avatar}
                            alt={review.name}
                            className="w-12 h-12 rounded-full border-2 border-white"
                        />
                        <div className="w-full">
                            <div className="flex items-center gap-2 mb-2">
                                <p className="text-xl font-semibold text-white">{review.name}</p>
                                <div className="flex">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <svg
                                            key={star}
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill={review.rating >= star ? '#facc15' : '#555'}
                                            viewBox="0 0 22 20"
                                            className="w-5 h-5"
                                        >
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 
                                            1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 
                                            1.535 0 0 0 1.463 9.2l3.656 3.563-.863 
                                            5.031a1.532 1.532 0 0 0 2.226 
                                            1.616L11 17.033l4.518 2.375a1.534 
                                            1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 
                                            9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                            <p className="text-xl text-subsecondary leading-snug">
                                {review.text}
                            </p>
                        </div>
                    </div>
                ))}

                <div className="flex justify-center gap-6 mt-6">
                    <button onClick={prev}>
                        <svg className="w-7 h-7 text-subsecondary hover:scale-140 transition" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button onClick={next}>
                        <svg className="w-7 h-7 text-subsecondary hover:scale-140 transition" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Switches;