import React from 'react';
import moment from 'moment';

export default function ReviewCard({ review }: any) {
  return (
    <div key={review.id.label} className="bg-[#f8f8f8] rounded-md p-4">
      <p>{review['im:rating'].label}</p>
      <div className="text-gray-500 text-xs flex flex-row ">
        <p>{review.author.name.label}</p>,
        <p className="ml-1">{moment(review.updated.label).format('l')}</p>
      </div>
      <p className="font-bold">{review.title.label}</p>
      <p className="mt-2">{review.content.label}</p>
    </div>
  );
}
