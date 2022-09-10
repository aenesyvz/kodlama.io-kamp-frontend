import { ResponseModul } from "./responseModul";

export interface ListResponseModel<T> extends ResponseModul{
    data:T[];
}