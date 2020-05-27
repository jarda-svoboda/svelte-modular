# svelte-modular
It's basically destructured Sapper's starter-template to `master-app` and it's `modules`.

## Model A
Modules are connected using Express to the master Sapper app.

#### Master app
- [x] SSR
- [x] Custom pages with routing (not only imported modules)
- [ ] Shared layout (maybe somehow wrap the Express app response would work...)

#### Modules
- [x] Standalone
- [x] Server-side prefetch
- [x] Sapper inner routing

#### TODO
- Include module `css` and `js` in `rollup`

## Model B
Modules imported as common components to `[...slug].svelte` Sapper route where they are switched respectively.

#### Master app
- [x] SSR
- [x] Custom pages with routing (not only imported modules)
- [x] Shared layout

#### Modules
- [x] Standalone
- [ ] Server-side prefetch (bit hacky)
- [ ] Sapper inner routing (Possible with custom router)
