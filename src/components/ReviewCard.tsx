import React from 'react';
import moment from 'moment';
import ReactStars from 'react-rating-star-with-type';
import StarRating from './StarRating';

export default function ReviewCard({ review }: any) {
  return (
    <div key={review.id.label} className="bg-[#f8f8f8] rounded-md p-4 text-xs">
      <ReactStars
        value={Number(review['im:rating'].label)}
        isEdit={false}
        size={'25px'}
        classNames="mb-2"
        filledIcon={<StarRating color="#ffac33" />}
        emptyIcon={<StarRating color="#BFBFBF" />}
      />
      <div className="text-gray-500 text-xs flex flex-row mb-4">
        <p>{review.author.name.label}</p>,
        <p className="ml-1">{moment(review.updated.label).format('l')}</p>
      </div>
      <p className="font-bold">{review.title.label}</p>
      <p className="mt-2">{review.content.label}</p>
    </div>
  );
}
