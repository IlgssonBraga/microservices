import * as fs from 'fs';
import dbConfig from '../../config/database/postgres/config.module';

try {
  fs.unlinkSync('ormconfig.json');
} catch {}
fs.writeFileSync('ormconfig.json', JSON.stringify(dbConfig(), null, 4));
