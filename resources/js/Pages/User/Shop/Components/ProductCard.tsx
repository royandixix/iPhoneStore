import { Link } from "@inertiajs/react";

export default function ProductCard({ product }: any) {
    return (
        <Link
            href={`/shop/${product.id}`}
            className="block text-center"
        >
            {/* IMAGE */}
            <div className="aspect-[4/5] w-full flex items-center justify-center">
                <img
                    src={
                        product.image
                            ? `/storage/${product.image}`
                            : "/images/default.png"
                    }
                    alt={product.name}
                    className="h-full object-contain"
                />
            </div>

            {/* TEXT */}
            <div className="mt-5">
                <span className="text-[10px] text-gray-400 uppercase tracking-widest">
                    iPhone
                </span>

                <h3 className="mt-1 text-[14px] font-medium text-gray-900">
                    {product.name}
                </h3>

                <p className="mt-1 text-[15px] font-semibold text-gray-900">
                    Rp {Number(product.price).toLocaleString("id-ID")}
                </p>

                <span className="mt-2 inline-block text-[11px] text-gray-400">
                    Lihat
                </span>
            </div>
        </Link>
    );
}