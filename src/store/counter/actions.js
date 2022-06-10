import { COUNTER_INCREMENT, COUNTER_DECREMENT } from "./action.type";

//counter app
export const counterInc = () => ({ type: COUNTER_INCREMENT });
export const counterDec = () => ({ type: COUNTER_DECREMENT });
