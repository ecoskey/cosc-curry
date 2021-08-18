
export default function singleParamCurryFunc<TFunc extends (...args: any[]) => any>(target: TFunc) {
    console.log(target.arguments);
}



