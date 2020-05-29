import pkg from './package.json';
import { getRollupConfig } from "../utils/rollup.utils";

export const moduleId = 'module-advanced';


export default getRollupConfig(moduleId, ['src/routes/index.svelte', 'src/routes/[slug].svelte'], pkg);