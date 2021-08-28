import { Difference, Subset } from '../util/tuples';

export type PartialApply<F extends (...args: unknown[]) => unknown, A extends Subset<Parameters<F>>> = (...newArgs: Difference<Parameters<F>, A>) => ReturnType<F>;

export default function applyFn<F extends (...args: unknown[]) => unknown, A extends Subset<Parameters<F>>>(fn: F, ...args: A): PartialApply<F, A> {
    return (...newArgs: Difference<Parameters<F>, A>) => (fn(...[...args, ...newArgs] as ReturnType<F>));
}