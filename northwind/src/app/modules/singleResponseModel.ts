import { ResponseModul } from "./responseModul";

export interface SingleResponseModel<T> extends ResponseModul{
    data:T;
}