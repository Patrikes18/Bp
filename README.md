# Klientská časť pre fuzzy frakcionálne farbenie

Táto zložka obsahuje zdrojové kódy pre klientskú časť.

# Návod na nasadenie

Pre preklad klientskej časti je potrebné mať nainštalovaný Node.js a npm (alebo iné podľa zváženia).
1. V adresári Bp/ spustite príkaz:
    ```bash
    npm install
    ```
2. V súbore .env nastavte premenne tak, aby VITE_API_URL smerovala na IP adresu API a VITE_BASE_URL odpovedalo ceste na servere, kde bude klientska čast umiestnená.
3. Preložte aplikáciu do nasaditeľnej podoby pomocou príkazu:
    ```bash
    npm run build
    ```
4. Všetky preložené súbory, ktoré sa nachádzajú v zložke dist presuňte na server typu nginx alebo Apache.

# Terajšie nasadenie klientskej časti

Klientská časť je momentálne nasadená na školskom serveri. Môžete sa na klientskú časť dostať pomocou tohto [odkazu](https://www.stud.fit.vutbr.cz/~xducky00/bp/).