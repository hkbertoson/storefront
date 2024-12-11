import { z } from "zod";
import { type Product } from "storefront:client";

export const stripeProductMetadataSchema = z
	.object({
		productVariantId: z.string(),
		productName: z.string(),
		productId: z.string(),
		variantName: z.string(),
		variantId: z.string(),
	})
	.strict();

export function getProductStock(product: Product) {
	return product.variants.reduce((total, variant) => total + variant.stock, 0);
}
