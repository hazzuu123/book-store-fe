import { setupWorker } from "msw/browser";
import { addReview, reviewsById } from "./review";

const handlers = [reviewsById, addReview];

export const worker = setupWorker(...handlers);
