# svelte-modular
It's basically destructured Sapper's starter-template to `master-app` and it's `modules`.

## Model A
Modules are connected using Express to the master Sapper app.

#### Master app
- [x] SSR
- [x] Custom pages (not only imported modules) with Sapper routing
- [ ] Shared layout

#### Modules
- [x] Standalone
- [x] Server-side prefetch
- [x] Built-in Sapper inner routing
- [ ] Svelte (w/o Sapper) modules support

#### TODO
- Include module `css` and `js` in `rollup`

## Model B
Modules imported as common components to `[...slug].svelte` Sapper route where they are switched respectively.

#### Master app
- [x] SSR
- [x] Custom pages (not only imported modules) with Sapper routing
- [x] Shared layout

#### Modules
- [x] Standalone
- [x] Server-side prefetch (bit hacky)
- [ ] Built-in Sapper inner routing (routing can be done with custom router)
- [x] Svelte (w/o Sapper) modules support
