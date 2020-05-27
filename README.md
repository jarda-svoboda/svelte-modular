# svelte-modular
Svelte/Sapper experiments with modular project structure

## Model A
Modules are connected using Express to the master Sapper app.

#### Master app
- [x] SSR
- [x] Custom pages with routing (not only imported modules)
- [ ] Shared layout (maybe somehow wrap the Express app response would work...)

#### Modules
- [x] Standalone
- [x] SSR prefetch
- [x] Sapper inner routing

### TODO
- Include module `css` and `js` in `rollup`

## Model B
Modules imported as a regular components to `[...slug].svelte` Sapper route where they are switched respectively.

#### Master app
- [x] SSR
- [x] Custom pages with routing (not only imported modules)
- [x] Shared layout

#### Modules
- [x] Standalone
- [ ] SSR prefetch (bit hacky)
- [ ] Sapper inner routing (Possible with custom router /csr only/?)
