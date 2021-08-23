import { BetterFunction, MultiCurry } from '../util/functions';
import { _ } from '../util/ignore';
import { Difference, Subset } from '../util/tuples';
import applyFn from './partialApply';

export default function multiParamCurryFunc<F extends BetterFunction>(fn: F): MultiCurry<F> {
    return <A extends Subset<Parameters<F>>>(...args: A): (Difference<Parameters<F>, A> extends [_, ..._] ? MultiCurry<((...args: Difference<Parameters<F>, A>) => ReturnType<F>)> : ReturnType<F>) => {
        if (args.length === fn.length) {
            return fn(args) as ReturnType<F>;
        } else {
            return multiParamCurryFunc(applyFn(fn, ...args));
        }
    };
}

const thingamadoob = multiParamCurryFunc((a: string, b: number, c: 'cheems') => true);

const thingyyyy = thingamadoob('cheese', 1, 'cheems');

console.log(thingyyyy);