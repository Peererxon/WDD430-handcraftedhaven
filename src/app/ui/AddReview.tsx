import { useState } from "react";
import { useRouter } from "next/router";
import { Card, Input, Textarea, Button, Text } from "@nextui-org/react";

const AddReviewPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [reviewerName, setReviewerName] = useState("");
  const [rating, setRating] = useState(5);
  const [details, setDetails] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newReview = {
      reviewerName,
      rating,
      details,
      date: new Date(),
    };

    const response = await fetch(`/api/products/${id}/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newReview),
    });

    if (response.ok) {
      router.push(`/products/${id}`);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <Card>
        <Card.Header>
          <Text h2>Add a Review</Text>
        </Card.Header>
        <Card.Body>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <Input
                label="Name"
                placeholder="Your Name"
                fullWidth
                value={reviewerName}
                onChange={(e) => setReviewerName(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <Input
                label="Rating"
                type="number"
                placeholder="Rating (1-5)"
                min={1}
                max={5}
                fullWidth
                value={rating}
                onChange={(e) => setRating(Number(e.target.value))}
                required
              />
            </div>
            <div className="mb-4">
              <Textarea
                label="Review"
                placeholder="Write your review here"
                fullWidth
                rows={4}
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                required
              />
            </div>
            <Button type="submit" color="primary" fullWidth>
              Submit Review
            </Button>
          </form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AddReviewPage;
