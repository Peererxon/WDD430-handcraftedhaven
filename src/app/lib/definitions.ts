export type User = {
	id: string;
	username: string;
	email: string;
	password: string;
	role: string;
};

export interface Product {
	title: string;
	description: string;
	price: string;
	images: string[];
	comments: Comment[];
}

export interface Comment {
	user: string;
	comment: string;
}
