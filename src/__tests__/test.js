import { healthTotal } from '../index'

test('healtСheck', () => {
    const healthCount = [
        {name: 'Маг', health: 90}
        ]
const result = healthTotal(healthCount);
    expect(result).toBe('healthy');
}) 

test('healtСheck2', () => {
    const healthCount = [
        {name: 'Магги', health: 10}
        ]
const result = healthTotal(healthCount);
    expect(result).toBe('critical');
}) 

test('healtСheck3', () => {
    const healthCount = [
        {name: 'Магги', health: 40}
        ]
const result = healthTotal(healthCount);
    expect(result).toBe('wounded');
}) 
