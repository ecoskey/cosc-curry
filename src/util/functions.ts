import { _ } from './ignore';
import { Difference, Head, Subset, Tail } from './tuples';

export type UnknownFunction = (...args: unknown[]) => unknown;

export type SingleCurry<F extends UnknownFunction> = Parameters<F> extends [_, _, ..._] ? (...args: Head<Parameters<F>>) => SingleCurry<(...args: Tail<Parameters<F>>) => ReturnType<F>> : F;

export type MultiCurry<F extends VoidFunction> = F extends (...args: infer P) => infer R ? <A extends Subset<P>>(...args: A) => (FullyApplies<F, A> extends true ? R : MultiCurry<((...args: Difference<P, A>) => R)>) : never;

export type FullyApplies<F extends UnknownFunction, A extends Subset<Parameters<F>>> = A extends Parameters<F> ? true : false;

export function fullyApplies<F extends UnknownFunction, A extends Subset<Parameters<F>>>(fn: F, args: A): FullyApplies<F, A> {
    return (fn.length === args.length) as FullyApplies<F, A>;
}
