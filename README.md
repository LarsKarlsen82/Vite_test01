# React + Vite

KRAV: 

# At man har kendskab til MySQL
# At man har smule kenskab til Postman
# At man har installeret MySQL og Postman på sin maskine
# Kenskab brug og opsætning af Vite-React

OPSTART PÅ PROJEKTET:

Beskrivelse: wallywood_api er en database som Vite-react skal hente fra, denne vejledning burde sætte dig på rette spor. Se eventuelt src mappen for at se hvordan det hele hænger sammen. 

// Install API:
1. Start VS code
2. Klik på "Clone Git Repository..."
3. Kopier stien og indsæt: https://github.com/Webudvikler-TechCollege/wallywood_api.git
4. Vælg mappe
5. Åbn klonede repository
6. Lav .env  fil i din projektmappe med følgende kode: 
# Port Number
PORT = 3000

# Database Credentials
DBHOST = [localhost]
DBNAME = [database_name]
DBUSER = [database_user]
DBPASSWD = [database_password]

# Token keys ############

# Token Access Key
TOKEN_ACCESS_KEY = myprivatekey # SECRET STRING 
TOKEN_ACCESS_EXPIRATION_SECS = 3600 # NUMBER OF EXPIRATION SECONDS: 1 HOUR

# Token Refresh Key
TOKEN_REFRESH_KEY = myprivaterefreshkey # SECRET STRING 
TOKEN_REFRESH_EXPIRATION_SECS = 86400 # NUMBER OF EXPIRATION SECONDS: 1 DAY

7. Husk at bruge dine admin brugernavn og password og database (MySQL) i .env
8. Åbn terminalen
9. Kør nodemon for at starte serveren

// MySQL
1. Opret en database der hedder "wallywood" i MysQL
2. CREATE DATABASE wallywood;
3. USE wallywood;
4. CREATE USER 'admin_user'@'%' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON wallywood.* TO 'admin_user'@'%';
FLUSH PRIVILEGES;


// Postman
1. Åbn Postman
2. https://documenter.getpostman.com/view/6540576/2s935iu6X9
3. Klik på "Run in Postman"
4. Klik på Install i "System"
5. Klik på install models


// Tilføj din Vite react mappe til projektet
1. Åbn wallywood_api
2. Klik på "File"
3. Klik på "Add folder to workspace"
4. tilføj din Vite-react mappe
5. Højreklik din Vite-react mappe
6. Klik på "Open in Integrated Terminal"
7. Start Vite-react i powershell på terminalen ved at taste "npm run dev"


Start projekt:
1.  Åben terminalen bash
2.  tast "cd /c/Users/Lars\ Karlsen/Documents/2.Test/wallywood_api" (din sti til din wallywood_api!)
3.  tast "nodemon"

4. Så skal du starte din vite react
5. Skift til powershell på terminalen
6. tast npm run dev

Generel beskrivelse:

Det er en Vite-react side som er linket til wallywood_api. Opgaven er lavet efter de krav læreren stillede og meste af sider og komponenter er lavet efter lærerens vejledning.

Krav: Følgende dele SKAL indgå i opgaven:

- components & props
- routing
- useState & useEffect hooks
- styled components

Følgende dele KAN indgå i opgaven:

- Login med useContext
- Form hooks
- Slideshow med billeder på forsiden
- Modal visning af plakat billeder i stor størrelse (react modal)
- Tailwind CSS Framework
- Søger til plakater
- Tilføj til og visning af kurv

Min Vite-test01 skal linkes med wallywood_api, før man kan se hvad jeg har lavet. Der er "pages" hvor siderne vises og "Routes" som router siderne. Der er 2 komponenter "Basket" indkøbskurv som virker også når siden er opdateret! og Footer. 