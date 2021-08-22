import { BetterFunction, SingleCurry } from '../util/functions';
import { Head } from '../util/tuples';

export default function singleCurry<TFunc extends BetterFunction>(fn: TFunc): SingleCurry<TFunc> {
    const curriedFn/* :SingleCurry<TFunc>*/ = fn.length > 1 ? (...args: Head<Parameters<TFunc>>) => {
        // eslint-disable-next-line prefer-spread
        return singleCurry(fn.apply(undefined, args));
    } : fn;

    return curriedFn as SingleCurry<TFunc>; // hate this
}

const thing = singleCurry((a: 1, b: 2, c: 3, d: 4): true => {
    console.log(a, b, c, d);
    return true;
});

thing(1)(2)(3)(4);



