import { _ } from './ignore';

export type Head<T extends [..._]> = T extends [...infer THead, _] ? (THead extends [_, _, ..._] ? Head<THead> : THead) : T;

export type Tail<T extends [..._]> = T extends [_, ...infer TTail] ? TTail : [];

export type Subset<T extends [..._]> = T extends [...infer TSubset, _] ? Subset<TSubset> | T : [];

export type Superset<T extends [..._]> = [...T, ..._];

export type Difference<T extends [..._], U extends Subset<T>> = U extends T ? [] : (U[0] extends T[0] ? Difference<Tail<T>, Tail<U>> : T);

export function isNonEmptyTuple(tuple: [..._]): tuple is [_, ..._] {
    return tuple.length >= 1;
}

export function difference<T extends [..._], U extends Subset<T>>(original: T, target: U): Difference<T, U> {
    return original.slice(target.length) as Difference<T, U>;
    
}