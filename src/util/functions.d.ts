import { _ } from './ignore';
import { Difference, Head, Subset, Tail } from './tuples';

export type BetterFunction = (...args: _) => _;

export type SingleCurry<F extends BetterFunction> = Parameters<F> extends [_, _, ..._] ? (...args: Head<Parameters<F>>) => SingleCurry<(...args: Tail<Parameters<F>>) => ReturnType<F>> : F;

export type MultiCurry<F extends BetterFunction> = <A extends Subset<Parameters<F>>>(...args: A) => (Difference<Parameters<F>, A> extends [_, ..._] ? MultiCurry<((...args: Difference<Parameters<F>, A>) => ReturnType<F>)> : ReturnType<F>);