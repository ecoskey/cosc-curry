import { BetterFunction } from '../util/functions';
import { Difference, Subset } from '../util/tuples';

export default function applyFn<F extends BetterFunction, A extends Subset<Parameters<F>>>(fn: F, ...args: A): (...newArgs: Difference<Parameters<F>, A>) => ReturnType<F> {
    return (...newArgs: Difference<Parameters<F>, A>) => fn(...[...args, ...newArgs]);
}

