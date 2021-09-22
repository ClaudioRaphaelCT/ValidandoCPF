class ValidaCPF {
    constructor(cpfEnviado){
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        })
    }
    geraNovoCpf(){
        const cpfSemDigitos = this.cpfLimpo.slice(0,-2);
        const digito1 = this.geraDigito(cpfSemDigitos);

    }

    geraDigito(cpfSemDigitos){
        let total = 0;
        let reverso = cpfSemDigitos.length +1

        for(let stringNumerica of cpfSemDigitos){
            //console.log(stringNumerica, reverso);
            total += reverso * Number(stringNumerica);
            reverso--;
        }

        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : '0';

    }

    valida(){
        if(!this.cpfLimpo) return false;
        if(typeof cpfLimpo !== 'string') return false;
        if(this.cpfLimpo.length !== 11) return false;
        this.geraNovoCpf()


        return 'cheguei aqui';
    }
}

const validaCpf = new ValidaCPF('070.987.720-03')
console.log(validaCpf.valida())