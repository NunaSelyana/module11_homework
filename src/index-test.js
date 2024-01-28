import { getMonth } from './index.js';

describe('get the name of the month by number', () => {
    it('Число 6 равно июнь', () => {
        expect(getMonth(6)).toBe('июнь');
    }),
    it('Число 13 равно ошибка', () => {
        expect(getMonth(13)).toBe('Ошибка');
    }),
    it('Введено не число', () => {
        expect(getMonth('str')).toBe('Введите число'); 
    })
});