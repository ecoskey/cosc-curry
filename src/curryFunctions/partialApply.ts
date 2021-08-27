import { UnknownFunction } from '../util/functions';
import { Difference, Subset } from '../util/tuples';

export type PartialApply<F extends UnknownFunction, A extends Subset<Parameters<F>>> = F extends (...args: infer P) => infer R ? (...newArgs: Difference<P, A>) => R : never;

export default function applyFn<F extends UnknownFunction, A extends Subset<Parameters<F>>>(fn: F, ...args: A): PartialApply<F, A> {
    return (...newArgs: Difference<Parameters<F>, A>) => fn(...[...args, ...newArgs]);
}