import { UnknownFunction } from '../util/functions';
import { Difference, Subset } from '../util/tuples';

export type PartialApply<F extends UnknownFunction, A extends Subset<Parameters<F>>> = F extends (...args: infer P) => infer R ? (...newArgs: Difference<P, A>) => R : never;

export default function applyFn<P extends unknown[], U extends unknown[], R extends unknown>( fn: (...args: [...P, ...U]) => R, ...args: P): (...newArgs: U) => R {
    return (...newArgs: U) => fn(...args, ...newArgs);
}