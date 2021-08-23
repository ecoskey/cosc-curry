import { BetterFunction, SingleCurry } from '../util/functions';
import { Head } from '../util/tuples';

export default function singleCurry<TFunc extends BetterFunction>(fn: TFunc): SingleCurry<TFunc> {
    const curriedFn/* :SingleCurry<TFunc>*/ = fn.length > 1 ? (...args: Head<Parameters<TFunc>>) => {
        // eslint-disable-next-line prefer-spread
        return singleCurry(fn.apply(undefined, args));
    } : fn;

    return curriedFn as SingleCurry<TFunc>; // hate this
}



