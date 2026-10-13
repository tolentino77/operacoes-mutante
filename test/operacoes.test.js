const {
  soma, subtracao, multiplicacao, divisao, potencia, raizQuadrada, restoDivisao,
  fatorial, mediaArray, somaArray, maximoArray, minimoArray, valorAbsoluto,
  arredondar, isPar, isImpar, calcularPorcentagem, aumentarPorcentagem,
  diminuirPorcentagem, inverterSinal, seno, cosseno, tangente, logaritmoNatural,
  logaritmoBase10, arredondarParaBaixo, arredondarParaCima, hipotenusa,
  grausParaRadianos, radianosParaGraus, mdc, mmc, isPrimo, fibonacci,
  produtoArray, clamp, isDivisivel, celsiusParaFahrenheit, fahrenheitParaCelsius,
  inverso, areaCirculo, areaRetangulo, perimetroRetangulo, isMaiorQue,
  isMenorQue, isEqual, medianaArray, dobro, triplo, metade
} = require('../src/operacoes');

describe('Suíte de Testes Fraca para 50 Operações Aritméticas', () => {
  // === Testes para o Bloco 1 (1-10) ===
  test('1. deve somar dois números positivos', () => { expect(soma(2, 3)).toBe(5); });
  test('2. deve subtrair dois números positivos', () => { expect(subtracao(5, 2)).toBe(3); });
  test('3. deve multiplicar dois números positivos', () => { expect(multiplicacao(3, 4)).toBe(12); });
  test('4. deve dividir e lançar erro para divisão por zero', () => {
    expect(divisao(10, 2)).toBe(5);
    expect(() => divisao(5, 0)).toThrow();
  });
  test('5. deve calcular a potência com expoente positivo', () => { expect(potencia(2, 3)).toBe(8); });
  test('6. deve calcular a raiz quadrada de um quadrado perfeito', () => { expect(raizQuadrada(16)).toBe(4); });
  test('7. deve retornar o resto da divisão', () => { expect(restoDivisao(10, 3)).toBe(1); });
  test('8. deve calcular o fatorial de um número maior que 1', () => { expect(fatorial(4)).toBe(24); });
  test('9. deve calcular a média de um array com múltiplos elementos', () => { expect(mediaArray([10, 20, 30])).toBe(20); });
  test('10. deve somar um array com múltiplos elementos', () => { expect(somaArray([1, 2, 3])).toBe(6); });

  // === Testes para o Bloco 2 (11-20) ===
  test('11. deve encontrar o valor máximo em um array', () => { expect(maximoArray([1, 50, 10])).toBe(50); });
  test('12. deve encontrar o valor mínimo em um array', () => { expect(minimoArray([10, 2, 100])).toBe(2); });
  test('13. deve retornar o valor absoluto de um número negativo', () => { expect(valorAbsoluto(-5)).toBe(5); });
  test('14. deve arredondar um número para cima', () => { expect(arredondar(9.8)).toBe(10); });
  test('15. deve retornar true para um número par', () => { expect(isPar(100)).toBe(true); });
  test('16. deve retornar true para um número ímpar', () => { expect(isImpar(7)).toBe(true); });
  test('17. deve calcular uma porcentagem simples', () => { expect(calcularPorcentagem(50, 200)).toBe(100); });
  test('18. deve aumentar um valor em uma porcentagem', () => { expect(aumentarPorcentagem(100, 10)).toBeCloseTo(110); });
  test('19. deve diminuir um valor em uma porcentagem', () => { expect(diminuirPorcentagem(100, 10)).toBeCloseTo(90); });
  test('20. deve inverter o sinal de um número positivo', () => { expect(inverterSinal(42)).toBe(-42); });
  
  // === Testes para o Bloco 3 (21-30) ===
  test('21. deve calcular o seno de 0', () => { expect(seno(0)).toBe(0); });
  test('22. deve calcular o cosseno de 0', () => { expect(cosseno(0)).toBe(1); });
  test('23. deve calcular a tangente de 0', () => { expect(tangente(0)).toBe(0); });
  test('24. deve calcular o logaritmo natural de Euler', () => { expect(logaritmoNatural(Math.E)).toBe(1); });
  test('25. deve calcular o logaritmo na base 10', () => { expect(logaritmoBase10(100)).toBe(2); });
  test('26. deve arredondar para baixo', () => { expect(arredondarParaBaixo(5.9)).toBe(5); });
  test('27. deve arredondar para cima', () => { expect(arredondarParaCima(5.1)).toBe(6); });
  test('28. deve calcular a hipotenusa de um triângulo retângulo', () => { expect(hipotenusa(3, 4)).toBe(5); });
  test('29. deve converter graus para radianos', () => { expect(grausParaRadianos(180)).toBeCloseTo(Math.PI); });
  test('30. deve converter radianos para graus', () => { expect(radianosParaGraus(Math.PI)).toBeCloseTo(180); });

  // === Testes para o Bloco 4 (31-40) ===
  test('31. deve calcular o MDC de dois números', () => { expect(mdc(10, 5)).toBe(5); });
  test('32. deve calcular o MMC de dois números', () => { expect(mmc(10, 5)).toBe(10); });
  test('33. deve verificar que um número é primo', () => { expect(isPrimo(7)).toBe(true); });
  test('34. deve calcular o 10º termo de Fibonacci', () => { expect(fibonacci(10)).toBe(55); });
  test('35. deve calcular o produto de um array', () => { expect(produtoArray([2, 3, 4])).toBe(24); });
  test('36. deve manter um valor dentro de um intervalo (clamp)', () => { expect(clamp(5, 0, 10)).toBe(5); });
  test('37. deve verificar se um número é divisível por outro', () => { expect(isDivisivel(10, 2)).toBe(true); });
  test('38. deve converter Celsius para Fahrenheit', () => { expect(celsiusParaFahrenheit(0)).toBe(32); });
  test('39. deve converter Fahrenheit para Celsius', () => { expect(fahrenheitParaCelsius(32)).toBe(0); });
  test('40. deve calcular o inverso de um número', () => { expect(inverso(4)).toBe(0.25); });

  // === Testes para o Bloco 5 (41-50) ===
  test('41. deve calcular a área de um círculo', () => { expect(areaCirculo(10)).toBeCloseTo(314.159); });
  test('42. deve calcular a área de um retângulo', () => { expect(areaRetangulo(5, 4)).toBe(20); });
  test('43. deve calcular o perímetro de um retângulo', () => { expect(perimetroRetangulo(5, 4)).toBe(18); });
  test('44. deve verificar se um número é maior que outro', () => { expect(isMaiorQue(10, 5)).toBe(true); });
  test('45. deve verificar se um número é menor que outro', () => { expect(isMenorQue(5, 10)).toBe(true); });
  test('46. deve verificar se dois números são iguais', () => { expect(isEqual(7, 7)).toBe(true); });
  test('47. deve calcular a mediana de um array ímpar e ordenado', () => { expect(medianaArray([1, 2, 3, 4, 5])).toBe(3); });
  test('48. deve calcular o dobro de um número', () => { expect(dobro(10)).toBe(20); });
  test('49. deve calcular o triplo de um número', () => { expect(triplo(10)).toBe(30); });
  test('50. deve calcular a metade de um número', () => { expect(metade(20)).toBe(10); });
});

// =====================================================================
// Suíte reforçada: testes escritos para "matar" os mutantes sobreviventes
// identificados pelo StrykerJS na primeira execução.
// =====================================================================
describe('Suíte Reforçada (foco em matar mutantes)', () => {
  // --- Mensagens de erro e valores de fronteira (StringLiteral / ConditionalExpression / EqualityOperator) ---
  describe('divisao', () => {
    test('retorna resultado fracionário e lança erro com a mensagem exata', () => {
      expect(divisao(7, 2)).toBe(3.5);
      expect(() => divisao(5, 0)).toThrow('Divisão por zero não é permitida.');
    });
  });

  describe('raizQuadrada', () => {
    test('lança erro com mensagem para negativo e aceita zero (fronteira)', () => {
      expect(() => raizQuadrada(-1)).toThrow('Não é possível calcular a raiz quadrada de um número negativo.');
      expect(raizQuadrada(0)).toBe(0);
    });
  });

  describe('fatorial', () => {
    test('lança erro para negativo com mensagem exata', () => {
      expect(() => fatorial(-1)).toThrow('Fatorial não é definido para números negativos.');
    });
    test('trata casos de fronteira 0 e 1 e valores maiores', () => {
      expect(fatorial(0)).toBe(1);
      expect(fatorial(1)).toBe(1);
      expect(fatorial(2)).toBe(2);
      expect(fatorial(5)).toBe(120);
    });
  });

  describe('mediaArray', () => {
    test('retorna 0 para array vazio (e não NaN)', () => {
      expect(mediaArray([])).toBe(0);
    });
  });

  describe('maximoArray / minimoArray', () => {
    test('lançam erro para array vazio', () => {
      expect(() => maximoArray([])).toThrow(/Array vazio/);
      expect(() => maximoArray([])).toThrow(/valor máximo/);
      expect(() => minimoArray([])).toThrow(/Array vazio/);
      expect(() => minimoArray([])).toThrow(/valor mínimo/);
    });
    test('funcionam com negativos e elemento único', () => {
      expect(maximoArray([-5, -2, -9])).toBe(-2);
      expect(minimoArray([-5, -2, -9])).toBe(-9);
      expect(maximoArray([7])).toBe(7);
    });
  });

  // --- Predicados: precisam do caso "false" e dos limites ---
  describe('isPar / isImpar', () => {
    test('isPar retorna false para ímpar e true para zero', () => {
      expect(isPar(7)).toBe(false);
      expect(isPar(0)).toBe(true);
    });
    test('isImpar retorna false para par e zero; true para negativo ímpar', () => {
      expect(isImpar(8)).toBe(false);
      expect(isImpar(0)).toBe(false);
      expect(isImpar(-3)).toBe(true);
    });
  });

  describe('isPrimo', () => {
    test('rejeita 0, 1 e negativos', () => {
      expect(isPrimo(0)).toBe(false);
      expect(isPrimo(1)).toBe(false);
      expect(isPrimo(-7)).toBe(false);
    });
    test('aceita 2 e 3; rejeita compostos', () => {
      expect(isPrimo(2)).toBe(true);
      expect(isPrimo(3)).toBe(true);
      expect(isPrimo(4)).toBe(false);
      expect(isPrimo(9)).toBe(false);
      expect(isPrimo(15)).toBe(false);
    });
  });

  describe('clamp', () => {
    test('limita abaixo do mínimo e acima do máximo', () => {
      expect(clamp(-5, 0, 10)).toBe(0);
      expect(clamp(15, 0, 10)).toBe(10);
    });
    test('valores exatamente nos limites são preservados', () => {
      expect(clamp(0, 0, 10)).toBe(0);
      expect(clamp(10, 0, 10)).toBe(10);
    });
  });

  describe('isDivisivel', () => {
    test('retorna false quando não é divisível', () => {
      expect(isDivisivel(10, 3)).toBe(false);
      expect(isDivisivel(7, 2)).toBe(false);
    });
  });

  // --- Conversões de temperatura: precisam de valores além do "ponto fixo" 0 / 32 ---
  describe('conversões de temperatura', () => {
    test('Celsius -> Fahrenheit com valores não triviais', () => {
      expect(celsiusParaFahrenheit(100)).toBe(212);
      expect(celsiusParaFahrenheit(-40)).toBe(-40);
      expect(celsiusParaFahrenheit(37)).toBeCloseTo(98.6);
    });
    test('Fahrenheit -> Celsius com valores não triviais', () => {
      expect(fahrenheitParaCelsius(212)).toBe(100);
      expect(fahrenheitParaCelsius(-40)).toBe(-40);
      expect(fahrenheitParaCelsius(50)).toBeCloseTo(10);
    });
  });

  describe('inverso', () => {
    test('lança erro para zero com mensagem exata', () => {
      expect(() => inverso(0)).toThrow('Não é possível inverter o número zero.');
    });
    test('inverte número negativo', () => {
      expect(inverso(-2)).toBe(-0.5);
    });
  });

  // --- Comparações: o caso a === b e o caso "false" ---
  describe('isMaiorQue / isMenorQue / isEqual', () => {
    test('isMaiorQue: false para menor e para igual', () => {
      expect(isMaiorQue(3, 10)).toBe(false);
      expect(isMaiorQue(5, 5)).toBe(false);
    });
    test('isMenorQue: false para maior e para igual', () => {
      expect(isMenorQue(10, 3)).toBe(false);
      expect(isMenorQue(5, 5)).toBe(false);
    });
    test('isEqual: false para diferentes e sem coerção de tipo', () => {
      expect(isEqual(7, 8)).toBe(false);
      expect(isEqual(7, '7')).toBe(false);
    });
  });

  // --- Mediana: ordenação numérica, comprimento par e erro ---
  describe('medianaArray', () => {
    test('lança erro para array vazio', () => {
      expect(() => medianaArray([])).toThrow(/Array vazio/);
      expect(() => medianaArray([])).toThrow(/mediana/);
    });
    test('ordena arrays desordenados (ímpar)', () => {
      expect(medianaArray([5, 1, 3])).toBe(3);
      expect(medianaArray([9, 1, 5, 7, 3])).toBe(5);
    });
    test('usa ordenação numérica e não lexicográfica', () => {
      expect(medianaArray([10, 9, 1])).toBe(9);
    });
    test('calcula a média dos dois centrais em arrays de tamanho par', () => {
      expect(medianaArray([1, 2, 3, 4])).toBe(2.5);
      expect(medianaArray([9, 2, 7, 4])).toBe(5.5);
    });
    test('não altera o array original', () => {
      const entrada = [3, 1, 2];
      medianaArray(entrada);
      expect(entrada).toEqual([3, 1, 2]);
    });
  });
});
