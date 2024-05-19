import { Injectable } from '@nestjs/common';
import { createHash } from 'crypto';

@Injectable()
export class CryptoService {
    generateSha256(input: string): string {
        const hash = createHash('sha256');
        hash.update(input);
        return hash.digest('hex'); // returns hash in hexadecimal format
    }
}