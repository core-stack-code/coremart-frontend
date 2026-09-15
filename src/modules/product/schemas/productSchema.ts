import { z } from "zod";

export const reviewSchema = z.object({
    rating:z.number().optional(),
    reviewTitle:z.string().min(1,"Enter Title"),
    productReview : z.string().min(1,"Enter Review")
})


export type ProductReviewPayLoad = z.infer<typeof reviewSchema>