import { getRollupConfig } from "../utils/rollup.utils";

export const moduleId = 'module-simple';

export default getRollupConfig(moduleId, ['src/routes/index.svelte', 'src/routes/[slug].svelte']);