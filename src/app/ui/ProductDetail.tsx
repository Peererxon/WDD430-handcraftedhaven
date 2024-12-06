import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Card, Button, Image, Grid, Text } from "@nextui-org/react";

export default function ProductDetailPage() {
  const [product, setProduct] = useState(null);
  const [enlargedImage, setEnlargedImage] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      const response = await fetch(`/api/products/${id}`);
      const data = await response.json();
      setProduct(data);
      setEnlargedImage(data.images[0]);
    };

    fetchProduct();
  }, [id]);

  const handleThumbnailClick = (imageUrl) => {
    setEnlargedImage(imageUrl);
  };

  const handleAddReviewClick = () => {
    if (!isLoggedIn) {
      router.push("/login");
    } else {
      router.push(`/products/${id}/add-review`);
    }
  };

  if (!product) {
    return <Text>Loading...</Text>;
  }

  return (
    <div className="container mx-auto p-6">
      <Card>
        <Card.Header>
          <Text h2>{product.name}</Text>
        </Card.Header>
        <Card.Body>
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex flex-col items-center">
              <Image
                src={enlargedImage}
                alt={product.name}
                className="rounded-md"
                width={500}
                height={500}
                showSkeleton
              />
              <Grid.Container gap={1} className="mt-4">
                {product.images.map((image, index) => (
                  <Grid key={index}>
                    <Image
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className={`rounded-md cursor-pointer ${
                        image === enlargedImage
                          ? "border-2 border-blue-500"
                          : "border border-gray-300"
                      }`}
                      width={100}
                      height={100}
                      onClick={() => handleThumbnailClick(image)}
                    />
                  </Grid>
                ))}
              </Grid.Container>
            </div>
            <div>
              <Text h3>Description:</Text>
              <Text>{product.description}</Text>
              <Text h3 className="mt-4">
                Price: ${product.price.toFixed(2)}
              </Text>
              <Text h3 className="mt-4">Rating: {product.rating.toFixed(1)} / 5</Text>
              <Text h3 className="mt-4">Reviews:</Text>
              {product.reviews.length > 0 ? (
                <ul className="list-disc ml-6">
                  {product.reviews.map((review, index) => (
                    <li key={index}>
                      <Text>
                        <strong>{review.reviewerName}</strong> (
                        {new Date(review.date).toLocaleDateString()}):
                      </Text>
                      <Text>{review.details}</Text>
                      <Text>Rating: {review.rating} / 5</Text>
                    </li>
                  ))}
                </ul>
              ) : (
                <Text>No reviews yet. Be the first to review!</Text>
              )}
              <Button
                className="mt-6"
                color="primary"
                onClick={handleAddReviewClick}
              >
                Add a Review
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};


