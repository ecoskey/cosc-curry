import singleParamCurryFunc from "../curryFunctions/singleParamCurryFunc";
import multiParamCurryFunc from "../curryFunctions/multiParamCurryFunc";

export default function Curry(strictSingleParam: boolean = false) {
    if (strictSingleParam) {
        return singleParamCurryFunc;
    } else {
        return multiParamCurryFunc;
    }
}

const test = singleParamCurryFunc((param1: number) => {
    console.log(param1)
});