// Interface Strategy para operações matemáticas
interface Strategy {
    execute(a: number, b: number): number;
  }
  
  // Classes concretas para Soma, Subtração e Multiplicação implementando a Strategy
  class Soma implements Strategy {
    execute(a: number, b: number): number {
      return a + b;
    }
  }
  
  class Subtracao implements Strategy {
    execute(a: number, b: number): number {
      return a - b;
    }
  }
  
  class Multiplicacao implements Strategy {
    execute(a: number, b: number): number {
      return a * b;
    }
  }
  
  // Contexto da calculadora
  class Calculadora {
    private strategy: Strategy | null = null;
  
    setStrategy(strategy: Strategy): void {
      this.strategy = strategy;
    }
  
    executarOperacao(a: number, b: number): number {
      if (!this.strategy) {
        throw new Error('Erro na operação.');
      }
      return this.strategy.execute(a, b);
    }
  }
  
  // Programa principal
  const calculadora = new Calculadora();
  
  // Input do usuário: números e operação
  import readline from "readline"
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question('Digite o primeiro valor: ', (num1) => {
    rl.question('Digite o segundo valor: ', (num2) => {
      rl.question('Informe a operação (+ para soma, - para subtração, * para multiplicação): ', (operacao) => {
        let strategy: Strategy;
  
        if (operacao === '+') {
          strategy = new Soma();
        } else if (operacao === '-') {
          strategy = new Subtracao();
        } else if (operacao === '*') {
          strategy = new Multiplicacao();
        } else {
          console.log('Opção inválida.');
          rl.close();
          return;
        }
  
        calculadora.setStrategy(strategy);
        const resultado = calculadora.executarOperacao(parseInt(num1), parseInt(num2));
        console.log(`O resultado é: ${resultado}`);
  
        rl.close();
      });
    });
  });