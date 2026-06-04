import { classifyTriangle } from './triangle';

export function formatReport(a, b, c) {
    const type = classifyTriangle(a, b, c);

    return `Triangle type: ${type}`;
}