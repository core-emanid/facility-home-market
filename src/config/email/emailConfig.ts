import nodemailer from 'nodemailer'
import type { Transporter } from 'nodemailer';
import * as dotenv from 'dotenv';

dotenv.config();

const {EMAIL_HOST, EMAIL_USER, EMAIL_PASS, EMAIL_PORT} = process.env;

const transporter: Transporter = nodemailer.createTransport({
    host: EMAIL_HOST,
    port: Number(EMAIL_PORT),
    //secure: true,
    auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS
    },
    tls: {
        rejectUnauthorized: true
    }
});

export { transporter };