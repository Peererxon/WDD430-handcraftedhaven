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
];

const productImagesData = [
	{
		ProductID: "9e9cea4b-1e6e-4ca3-a15e-a37d7b037349",
		ImageBase64:
	},
];

export { usersData, categoriesData, productsData, productImagesData };