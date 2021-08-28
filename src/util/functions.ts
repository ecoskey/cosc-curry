import { _ } from './ignore';
import { Difference, Head, Subset, Tail } from './tuples';

export type UnknownFunction = (...args: any[]) => any;

export type SingleCurry<F extends VoidFunction> = Parameters<F> extends [_, _, ..._[]] ? (...args: Head<Parameters<F>>) => SingleCurry<(...args: Tail<Parameters<F>>) => ReturnType<F>> : F;

export type MultiCurry<F extends UnknownFUnction> = F extends (...args: infer P) => infer R ? <A extends Subset<P>>(...args: A) => (FullyApplies<F, A> extends true ? R : MultiCurry<((...args: Difference<P, A>) => R)>) : never;

export type FullyApplies<F extends VoidFunction, A extends Subset<Parameters<F>>> = A extends Parameters<F> ? true : false;

export type InferFunctionType<F extends UnknownFunction> = F extends infer TFn ? TFn: F;

type among = InferFunctionType<(...args: [among: 'us']) => true>

export function isFn<F extends UnknownFunction>(fn: F): fn is InferFunctionType<F> {
    return true;
}

export function fullyApplies<F extends VoidFunction, A extends Subset<Parameters<F>>>(fn: F, args: A): FullyApplies<F, A> {
    return (fn.length === args.length) as FullyApplies<F, A>;
}