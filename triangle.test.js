import { describe, it, expect } from 'vitest';
import { classifyTriangle } from './triangle';

// Nível: unitário
// Visão: caixa preta

describe('classifyTriangle', () => {

    it('deve retornar equilateral', () => {
        expect(classifyTriangle(3, 3, 3))
        .toBe('equilateral');
    });

    it('deve retornar isosceles', () => {
        expect(classifyTriangle(3, 3, 4))
        .toBe('isosceles');
    });

    it('deve retornar scalene', () => {
        expect(classifyTriangle(3, 4, 5))
        .toBe('scalene');
    });

    it('deve retornar invalid', () => {
        expect(classifyTriangle(1, 2, 10))
        .toBe('invalid');
    });

});