export class Empresa {
    nome: string = '';
    tamanho: number = 0;
    avaliacoes: Avaliacao[] = [];
    salarios: Salario[] = [];
    nota: number = 0;
    vagas?: Vaga[] = [];
}

export class Salario {
    cargo: string = '';
    valor: number = 0;
}

export class Avaliacao {
    titulo?: string = '';
    nota: number = 0;
    pros: string = '';
    contras: string = '';
    cargo: string = '';
}

export class Vaga {
    cargo: string = '';
    cidade: string = '';
    salario?: number = 0;
}

export const AVALIACAO_SENIOR: Avaliacao = {
    titulo: 'Excelente local para fazer carreira',
    nota: 5,
    cargo: 'Desenvolvedor Sênior',
    pros: 'Os beneficios são bons. Insetinvos a estudo, ambiente agradável, trabalho 100% remoto',
    contras: 'As vezes temos reuniões que não são produtivas e ocupa tempo que nos é cobrado dentro dos clientes'
}

export const AVALIACAO_SENIOR_2: Avaliacao = {
    titulo: 'Fui delisgado por problema pessoal com meu People Lead',
    nota: 4,
    cargo: 'Desenvolvedor Sênior',
    pros: 'Bom ambiente de trabalho, com boas oportunidades e benefícios',
    contras: 'Tem que escolher bem seu People Lead, e de preferência dois níveis acima do seu'
}

export const AVALIACAO_JUNIOR: Avaliacao = {
    titulo: 'Accenture Nova Lima',
    nota: 1,
    cargo: 'Desenvolvedor Júnior',
    pros: 'Muitos benefícios Home office Estrutura do Escritório muito bom RH muito prestativo',
    contras: 'Salário muito abaixo da média Ambiente tóxico tanto por parte da liderança quanto dos colegas'
}

export const AVALIACAO_JUNIOR_2: Avaliacao = {
    titulo: 'Boa, mas cuidado com promessas e colegas',
    nota: 4,
    cargo: 'Desenvolvedor Júnior',
    pros: 'A empresa paga em dia',
    contras: 'Salário muito abaixo da média Ambiente tóxico tanto por parte da liderança quanto dos colegas'
}

export const AVALIACAO_PLENO: Avaliacao = {
    titulo: 'Externamente ótima empresa, internamente péssimo!',
    nota: 1,
    cargo: 'Desenvolvedor Pleno',
    pros: 'Cursos e treinamentos (apesar da maioria em horário de trabalho, o que atrapalha nas demandas), pagamentos em dia, alguns colegas realmente “humanos” nas atitudes e no dia a dia',
    contras: 'Se você quiser excesso de demandas, trabalhar fora do horário para conseguir entregar em tempo “recorde” que os gestores exigem, ter que escolher um People Lead que não serve pra nada'
}

export const AVALIACAO_PLENO_2: Avaliacao = {
    titulo: 'Uma má experiência / falta de reconhecimento',
    nota: 2,
    cargo: 'Desenvolvedor Pleno',
    pros: 'Vale Alimentação / Vale Refeição; Plano Odontológico; Plano de Saúde; Home Office; Oriente-Me (aplicativo com Nutricionistas e Psicólogos); Cursos ótimos pra quem se interessa por T.I.',
    contras: 'Salário muito abaixo da média do mercado; Falta de Reconhecimento (se você for produtivo e faz um bom trabalho terá, na verdade, nenhuma promoção ou reconhecimento, e sim o triplo de trabalho / tarefas)'
}

export const SALARIO_SENIOR: Salario = {
    cargo: 'Desenvolvedor Sênior',
    valor: 5000
}

export const SALARIO_SENIOR_2: Salario = {
    cargo: 'Desenvolvedor Sênior',
    valor: 8000
}

export const SALARIO_JUNIOR: Salario = {
    cargo: 'Desenvolvedor Júnior',
    valor: 2000
}

export const SALARIO_JUNIOR_2: Salario = {
    cargo: 'Desenvolvedor Júnior',
    valor: 3000
}

export const SALARIO_PLENO: Salario = {
    cargo: 'Desenvolvedor Pleno',
    valor: 6000
}

export const SALARIO_PLENO_2: Salario = {
    cargo: 'Desenvolvedor Pleno',
    valor: 4000
}

export const VAGA_PLENO: Vaga = {
    cargo: 'Desenvolvedor Pleno',
    salario: 5000,
    cidade: 'Belo Horizonte'
}

export const VAGA_PLENO_FRONT: Vaga = {
    cargo: 'Desenvolvedor Front-End Pleno',
    salario: 5000,
    cidade: 'Belo Horizonte'
}

export const VAGA_JAVA_JUNIOR: Vaga = {
    cargo: 'Desenvolvedor Java Júnior',
    salario: 3000,
    cidade: 'Belo Horizonte'
}

export const VAGA_JAVA_SENIOR: Vaga = {
    cargo: 'Desenvolvedor Java Sênior',
    salario: 9000,
    cidade: 'Belo Horizonte'
}

export const VAGA_SENIOR: Vaga = {
    cargo: 'Desenvolvedor Full Stack Senior',
    salario: 10000,
    cidade: 'Belo Horizonte'
}

export const LISTA_VAGAS: Vaga[] = [VAGA_JAVA_JUNIOR, VAGA_JAVA_SENIOR, VAGA_PLENO, VAGA_PLENO_FRONT, VAGA_SENIOR]

export const ACCENTURE: Empresa = {
    nome: 'Accenture',
    nota: 5,
    tamanho: 5,
    avaliacoes: [AVALIACAO_JUNIOR, AVALIACAO_PLENO, AVALIACAO_JUNIOR_2, AVALIACAO_SENIOR_2, AVALIACAO_SENIOR, AVALIACAO_PLENO_2],
    salarios: [SALARIO_JUNIOR, SALARIO_JUNIOR_2, SALARIO_PLENO, SALARIO_PLENO_2, SALARIO_SENIOR, SALARIO_SENIOR_2],
    vagas: LISTA_VAGAS
}

export const IBM: Empresa = {
    nome: 'IBM',
    nota: 5,
    tamanho: 5,
    avaliacoes: [AVALIACAO_JUNIOR, AVALIACAO_PLENO, AVALIACAO_JUNIOR_2, AVALIACAO_SENIOR_2, AVALIACAO_SENIOR, AVALIACAO_PLENO_2],
    salarios: [SALARIO_JUNIOR, SALARIO_JUNIOR_2, SALARIO_PLENO, SALARIO_PLENO_2, SALARIO_SENIOR, SALARIO_SENIOR_2],
    vagas: LISTA_VAGAS
}

export const GOOGLE: Empresa = {
    nome: 'Google',
    nota: 5,
    tamanho: 5,
    avaliacoes: [AVALIACAO_JUNIOR, AVALIACAO_PLENO, AVALIACAO_JUNIOR_2, AVALIACAO_SENIOR_2, AVALIACAO_SENIOR, AVALIACAO_PLENO_2],
    salarios: [SALARIO_JUNIOR, SALARIO_JUNIOR_2, SALARIO_PLENO, SALARIO_PLENO_2, SALARIO_SENIOR, SALARIO_SENIOR_2],
    vagas: LISTA_VAGAS
}

export const LISTA_EMPRESAS: Empresa[] = [ACCENTURE, IBM, GOOGLE]