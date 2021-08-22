/*import curry from './decorators/Curry';

export default curry; */

function thingiii(a: 1, b: 17, c: string) {
    console.log(a, b, c);
}

thingiii.bind(undefined, 1, 17)('bees');
