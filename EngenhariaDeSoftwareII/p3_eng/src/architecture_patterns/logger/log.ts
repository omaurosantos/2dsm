import * as fs from 'fs';
import * as path from 'path';

class Logger {
    private static instance: Logger;
    private logFilePath: string;

    private constructor(logFilePath: string = path.join(__dirname, 'server.log')) {
        this.logFilePath = logFilePath;
        if (!fs.existsSync(logFilePath)) {
            fs.writeFileSync(logFilePath, '');
        }
    }

    public static getInstance(): Logger {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }

    private writeLog(level: string, message: string) {
        const logMessage = `[${new Date().toISOString()}] [${level}] ${message}\n`;
        fs.appendFile(this.logFilePath, logMessage, (err) => {
            if (err) {
                console.error('Erro ao escrever no arquivo de log:', err);
            }
        });
    }

    public info(message: string) {
        this.writeLog('MENSAGEM', message);
    }

    public error(message: string) {
        this.writeLog('ERRO', message);
    }

    public logHttpRequest(method: string, url: string, status: number) {
        this.writeLog('PORTA', `${method} ${url} - ${status}`);
    }

    public logDatabaseAction(action: string, table: string) {
        this.writeLog('BANCO', `${action} on ${table}`);
    }
}

const logger = Logger.getInstance();
export { logger };