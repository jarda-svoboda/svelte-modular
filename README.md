# svelte-modular
Svelte/Sapper experiments with modular project structure

## Model A
Modules are connected using Express to the master Sapper app.

#### Master app
- [x] SSR
- [x] Custom pages with routing (not only imported modules)
- [ ] Shared layout

#### Modules
- [x] SSR
- [x] Sapper inner routing


## Model B
Modules imported as a regular components to `[...slug].svelte` Sapper route where they are switched respectively.

#### Master app
- [x] SSR
- [x] Custom pages with routing (not only imported modules)
- [x] Shared layout

#### Modules
- [ ] SSR (hacky)
- [ ] Sapper inner routing (Possible with custom router /csr only/)
