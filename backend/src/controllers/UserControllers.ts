import { Request, Response } from 'express';
import EmailService from '../services/EmailService';

const users = [
    { name: 'David', email: 'davidlucasfr70@gmail.com' },
];

export default {
    async index(req: Request, res: Response) {
        return res.json(users);
    },
    
    async create(req: Request, res: Response) {
        const emailService = new EmailService();

        emailService.sendMail({
            to: { 
                name: 'David Lucas',
                email: 'davidlucasfr70@gmail.com'
            },
            message: {
                subject: "Bem-vindo ao sistema",
                body: 'Seja vem-vindo' 
                }
    });

        return res.send();
    }
};