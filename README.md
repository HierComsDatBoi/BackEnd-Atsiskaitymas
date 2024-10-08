1. Parsisiųsti ir išarchyvuoti .zip failą.
2. 'server' aplanke susikurti '.env' failą ir įklijuoti šią informaciją:

SERVER_PORT=5500
FRONT_PORT=3000
DB_USER=Testing
DB_PASSWORD=Testing333
DB_CLUSTER=cluster0
CLUSTER_ID=qpe8h
DB_NAME=Library
DB_COLLECTION=books

3. VS Code programoje pasileisti 2 terminalus.
4. Pirmame terminale:
  4.1. Nusinaviguoti į /server aplanką.
  4.2. Paleisti 'npm i' komandą - parsiųsti viesiems reikalingiems moduliams.
  4.3. Paleisti 'npm run dev' komandą - paleisti serveriui.
5. Antrame terminale:
 5.1. Nusinaviguoti į /client aplanką.
 5.2. Paleisti 'npm i' komandą - parsiųsti viesiems reikalingiems moduliams.
 5.3. Paleisti 'npm start' komandą - paleisti puslapio programą.