

import { fetchProductDetail } from '@/app/lib/data';
import Header from '@/app/ui/Header';

export default async function Page(props: { params: { id: string } }) {
    const { id } = await props.params;

    if (!id) {
        return <p>Loading...</p>;
    }

    try {
        const product = await fetchProductDetail(id);

        if (!product) {
            return <p>Product not found.</p>;
        }

        return (
            <div className="max-w-3xl mx-auto p-6">
                <Header />
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <img
                        src="/images/mock-artwork.png"
                        alt={product.name}
                        className="w-full h-64 object-cover"
                    />
                    <div className="p-6">
                        <h1 className="text-4xl font-bold text-gray-800">{product.name}</h1>
                        <h3 className="text-2xl font-bold text-red-400">${product.price}</h3>
                        <p className="mt-4 text-gray-600">{product.description}</p>

                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Error fetching product details:', error);
        return <p>Failed to load product details.</p>;
    }
}
