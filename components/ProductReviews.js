export default function ProductReviews({ reviews }) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Customer Reviews</h2>
      {reviews.length === 0 ? (
        <p>No reviews yet.</p>
      ) : (
        <div className="space-y-3">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="border border-gray-200 p-4 rounded-lg shadow-sm"
            >
              <p className="font-medium">{review.name}</p>
              <p className="text-gray-700">{review.comment}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
