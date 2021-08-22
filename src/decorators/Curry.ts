import singleParamCurryFunc from '../curryFunctions/singleParamCurryFunc';
import multiParamCurryFunc from '../curryFunctions/multiParamCurryFunc';

export default function Curry(strictSingleParam = false) {
    if (strictSingleParam) {
        return singleParamCurryFunc;
    } else {
        return multiParamCurryFunc;
    }
}
