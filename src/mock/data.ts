const usersData = [
	{
		username: "john_doe2",
		email: "john.doe@example.com",
		password: "hashed_password1",
		role: "Seller",
		id: "410544b2-4001-4271-9855-fec4b6a6442a",
	},
	{
		username: "jane_smith2",
		email: "jane.suith@example.com",
		password: "hashed_password2",
		role: "Buyer",
		id: "d6e15727-9fe1-4961-8c5b-ea44a9bd81aa",
	},
	{
		username: "admin3",
		email: "admin@example.com",
		password: "hashed_password3",
		role: "Seller",
	},
];

const categoriesData = [
	{
		CategoryName: "Electronics",
	},
	{
		CategoryName: "Clothing",
	},
	{
		CategoryName: "Books",
	},
	{
		CategoryName: "Home & Kitchen",
	},
];

const productsData = [
	{
		Name: "Laptop",
		Description: "Powerful laptop for work and play",
		Price: 1299.99,
		SellerID: "ed2da1bb-0014-46c9-914e-4911776497d2", // Referencing the first user (john_doe)
		CategoryID: "2a2deb31-bdd9-46b9-b3c9-5edc78c53184", // Referencing the first category (Electronics)
	},
	{
		Name: "T-Shirt",
		Description: "Comfortable cotton t-shirt",
		Price: 19.99,
		SellerID: "ed2da1bb-0014-46c9-914e-4911776497d2", // Referencing the first user (john_doe)
		CategoryID: "8534f9df-298a-425d-94e2-fcd1d931aaf9", // Referencing the second category (Clothing)
	},
	{
		Name: "Novel",
		Description: "Bestselling fantasy novel",
		Price: 14.95,
		SellerID: "ed2da1bb-0014-46c9-914e-4911776497d2", // Referencing the third user (admin)
		CategoryID: "fbdf31d0-adf5-4168-b48f-2026e768f0f0", // Referencing the third category (Books)
	},
	{
		Name: "Abstract Acrylic Landscape",
		Description:
			"A vibrant exploration of the inner landscape, expressed in layers of acrylic on canvas.",
		Price: 500.0,
		SellerID: "ed2da1bb-0014-46c9-914e-4911776497d2", // Referencing the third user (admin)
		CategoryID: "5d5729cf-23c2-412d-ade1-8f9aa38a3fbd", // Referencing the third category (Visual Arts)
	},
	{
		Name: "Ceramic Sculpture",
		Description:
			"A stylized female figure, molded in clay and fired at high temperature.",
		Price: 350.0,
		SellerID: "ed2da1bb-0014-46c9-914e-4911776497d2",
		CategoryID: "5d5729cf-23c2-412d-ade1-8f9aa38a3fbd",
	},
	{
		Name: "Woodcut",
		Description:
			"A detailed print of an ancient forest, made using traditional woodcut techniques.",
		Price: 250.0,
		SellerID: "ed2da1bb-0014-46c9-914e-4911776497d2",
		CategoryID: "5d5729cf-23c2-412d-ade1-8f9aa38a3fbd",
	},
	{
		Name: "Mixed Media on Paper",
		Description:
			"An abstract composition combining acrylic, ink, and collage, creating a rich and dynamic texture.",
		Price: 200.0,
		SellerID: "ed2da1bb-0014-46c9-914e-4911776497d2",
		CategoryID: "5d5729cf-23c2-412d-ade1-8f9aa38a3fbd",
	},
	{
		Name: "Thread Installation",
		Description:
			"A delicate network of colored threads that creates an enveloping and dreamlike space.",
		Price: 800.0,
		SellerID: "ed2da1bb-0014-46c9-914e-4911776497d2",
		CategoryID: "5d5729cf-23c2-412d-ade1-8f9aa38a3fbd",
	},
	{
		Name: "Black and White Art Photography",
		Description:
			"An intimate black and white portrait, captured with an analog camera and developed in the darkroom.",
		Price: 300.0,
		SellerID: "ed2da1bb-0014-46c9-914e-4911776497d2",
		CategoryID: "5d5729cf-23c2-412d-ade1-8f9aa38a3fbd",
	},
];

const productImagesData = [
	{
		ProductID: "9e9cea4b-1e6e-4ca3-a15e-a37d7b037349",
		ImageBase64:
	},
];

export { usersData, categoriesData, productsData, productImagesData };