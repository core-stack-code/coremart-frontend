import { z } from "zod";



export const reviewSchema = z.object({
    reviewTitle:z.string().min(1,"Enter Title"),
    productReview : z.string().min(1,"Enter Review")
})


export type ProductReviewPayLoad = z.infer<typeof reviewSchema>