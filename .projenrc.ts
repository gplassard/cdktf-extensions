// .projenrc.ts
import { TypescriptLibraryProject } from '@gplassard/projen-extensions';

// opinionated wrapper around projen TypeScriptProject for libraries
const project = new TypescriptLibraryProject({
    name: 'cdktf-extensions', 
    packageName: '@gplassard/cdktf-extensions',
});
project.synth();