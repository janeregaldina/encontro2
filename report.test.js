import { describe, it, expect } from 'vitest';
import { formatReport } from './report';

// Nível : Integração
// Não é unitário porque testa report.js
// juntamente com classifyTriangle()

describe('formatReport', () => {

    it('deve retornar relatório de triângulo equilátero', () => {
        expect(formatReport(3, 3, 3))
        .toBe( 'Triangle type: equilateral');

    });

    it('deve retornar relatório de triângulo inválido',() => {
        expect(formatReport(1, 2, 10))
        .toBe('Triangle type: invalid');

    });

    });
