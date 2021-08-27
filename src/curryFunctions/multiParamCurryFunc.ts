import { UnknownFunction, FullyApplies, fullyApplies, MultiCurry } from '../util/functions';
import { _ } from '../util/ignore';
import { Difference, Subset } from '../util/tuples';
import applyFn from './partialApply';

export default function multiParamCurryFunc<F extends UnknownFunction>(fn: F): MultiCurry<F> {
    const curriedFn = <A extends Subset<Parameters<F>>>(...args: A): (FullyApplies<F, A> extends true ? ReturnType<F> : MultiCurry<((...args: Difference<Parameters<F>, A>) => ReturnType<F>)>) => {
        if (fullyApplies<F, A>(fn, args)) {
            return fn(args);
        }
        
        return multiParamCurryFunc(applyFn(fn, ...args) as (...args: Difference<Parameters<F>, A>) => ReturnType<F>);
    };

    return curriedFn;
}