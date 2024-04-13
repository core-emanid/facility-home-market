import * as dotenv from 'dotenv';
dotenv.config();

const {EMAIL_TO, EMAIL_FROM} = process.env;

export class Form {
    
    nome: string;
    cidade: string;
    bairro: string;
    email: string;
    telefone: number;
    categoria: string;

    constructor(
        nome?: string, cidade?:string, bairro?:string, 
        email?: string, telefone?:string, categoria?: string
    ) {
        this.nome = nome;
        this.cidade = cidade;
        this.bairro = bairro;
        this.email = email;
        this.telefone = Number(telefone);
        this.categoria = categoria;
    }

}

type EmailOptions = {
    from: string;
    to: string;
    subject: string;
    html: string;
}

const getMessageTemplate = (form: Form): string => {

    let keys = Object.keys(form);
    let template = '<h2 style="font-size: 20px; margin-bottom: 10px; text-align: center;">Novo Lead Recebido!</h2>'
    
    for(let key of keys){
        if(form[key]){
            template += `<p style="margin-bottom: 5px;"><span style="font-weight: bold;">${key}: </span>${form[key]}</p>`
        }
    }
    
    return template;
}

export const getHtmlTemplate = (form: Form): string => {

    const message = getMessageTemplate(form);

    return (`
        <div style="padding: 20px; max-width: 600px; margin: 0 auto; border: 1px solid #ddd;">
            ${message.replace(
                /[\r\n]/g,
                '<br>'
            )}
        </div>
    `)
}

export const getEmailDetail = (html: string) :EmailOptions => {
    const options: EmailOptions = {
        from: EMAIL_FROM,
        to: EMAIL_TO,
        subject: '[LEAD] Quero falar com a Facility!',
        html
    }
    return options;
}