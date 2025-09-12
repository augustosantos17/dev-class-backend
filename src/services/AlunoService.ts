import {AlunoRepository} from '../repositories/AlunoRepository';
import {AlunoAttributes} from '../models/Aluno';

export class AlunoService {
    private alunoRepository: AlunoRepository;
            
    constructor() {
        this.alunoRepository = new AlunoRepository();  
    }

    async create(aluno: Omit<AlunoAttributes, 'id'>) {
        const alunoExistente = await this.alunoRepository.findByRA(aluno.ra);

        if (alunoExistente) {
            throw new Error("RA já existente");
        }

        await this.alunoRepository.create(aluno);
    }
    async getAll() {
        return await this.alunoRepository.findAll();
    }
}