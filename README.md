Tema de casă - Proiect Web 2026 - C113C Marina Traian-Ștefan
„Micul Paris”

Necesități pornire și verificare a site-ului:
XAMPP - MqSQL pornit
npm instalat împreună cu ReactJS, Bootstrap, react-icons
Composer

După ce XAMPP este pornit, se rulează comenzile `npm run dev` și `php artisan serve`,
dacă din varii motive conexiunea la baza de date nu funcționează e recomandată rularea comenzii `php artisan migrate`.

Site-ul a fost creat utilizând framework-ul de PHP numit Laravel (pentru backend) și ReactJS (pentru frontend).

Categoria site-ului este cea de site de prezentare, scopul propus fiind de a oferi imagini, materiale și scurte descrieri sau relatări despre Bucureștiul interbelic.

________________________(email)______(parola)
[Credențiale admin: admin@admin.ro, admin1234]

---
BAREM RAPID:

- Module de autentificare și creare / editare a unui cont - DA
- Pagina de start - DA
- Pagina principală (coincide cu pagina de start) - DA
- Pagina de administrare - Parțial
- Pagină de contact - Parțial (lipsește formular trimitere email, restul detaliilor sunt prezente)
- Galerie de imagini - DA

- Responsiveness - în proporție mare
---

== Funcționalități și ce se poate găsi pe site ==

---
- Atracția principală (și unde am depus cel mai mare efort):
    Pagina de start (oferă cel mai mult conținut)
    ~contribuție personală mai mare
    - Video de fundal
    - Buton cameră pentru oprirea sau pornirea la loc a videoului din fundal
    - Buton meniu (cu toate link-urile către celelalte pagini sau înregistrare/autentificare) și posibilitatea de a schimba limba de afișare (limba română sau limba engleză)
    - Text introductiv despre Bucureștiul interbelic
    - Carusel de imagini cu schimbare la interval de 3 secunde a imaginilor + posibilitatea de a deschide imaginea completă într-o fereastră mică
    - O selecție de reviste și ziare, preluate de pe archive.org, care pot fi citite direct din site, fără a părăsi pagina
    - Un album foto cu imagini cu Bucureștiul interbelic dar și alte zone din țară
    - Buton special pentru galerie
    - Butoane pentru: Forum, Magazin și o zonă cu conținut suplimentar
    - Suport integral pentru limba română și limba engleză

    ~contribuție AI mai mare
    - Zonă de contact și social media + embed Google Maps
---

---
Pagina de Galerie (a doua cea mai completă parte a site-ului - cu contribuție mai mare din partea mea)
    - Câte 9 imagini în alb-negru și colore alese de mine + titluri/localizarea unora în spațiu (exemplu: pentru fotografia coloră cu Hotel Lafayette pe internet nu găsisem și denumirea clădirii, am stat și am căutat-o separat) și traduceri
---

Pagina de administrare a contului (utilizatori simpli) și pagina de administrare specială (doar administratori) -- contribuție mai mare AI
    - Posibilitate schimbare date cont (toți utilizatorii)
    - Modificare și ștergere conturi (doar administratorii)

== Părți parțial funcționale ==

Tot la pagina de administrare, dar pe partea de adăugare produse pentru magazin
    - Parțial funcțional, produsele se pot adăuga și se poate modifica denumirea, descrierea, prețul și disponibilitatea (1 - disponibil, produs în stoc și afișat, 2 - indisponibil, nu mai este în stoc, 3 - draft/doar adminul vede)

== Componente nefuncționale / lipsă ==

- Pagina de forum (goală)
- Pagina cu conținut suplimentar (goală)
- Pagina cu reviste în plus/link către archive.org (lipsă)

! Pentru pagina cu conținut suplimentar deja găsisem și instalasem mai multe hărți și un ghid, dar nu am mai apucat să implementez.


== Contribuție personală ==

Tema site-ului am ales-o eu, fiind pasionat încă din liceu de „Micul Paris”. Totodată, design-ul per total al site-ului a fost ideea mea, cu aspectul de pagină îngălbenită, iar fonturile le-am căutat mai mult timp până le-am găsit pe Google fonts și mi s-au părut că se potrivesc cel mai bine (Lora - în general și Petemoss - pentru scrisul stil cursiv/de mână la secțiunea de reviste).
Design-ul paginii principale (landing page-ului) este aportul cel mai mare adus de mine la proiect: videoul din fundal, butoanele `cameră` și `meniu`, așezarea în pagină, ideea de a sparge în două coloane principale (una cu imagini și una cu reviste și ziare), dar și cea mai mare parte a restului paginii (cu excepția footer-ului).
Videoul l-am tăiat dintr-un material publicat de TVR pe YouTube, iconițele pentru butoane le-am creat în paint.net folosind imagini preluate de pe net sau capturi de ecran din revista „Realitatea Ilustrată”. De asemenea, toate imaginile și revistele/ziarele care pot fi accesate prin pagina de start le-am căutat personal (revistele fiind preluate de pe site-ul archive.org). Butoanele stil imagine (cele cu imagine drept fundal - exemplu: mergi către forum, mergi către galerie, mergi către magazin ș.a) sunt de asemenea create de către mine.
O contribuție mare am avut-o și la aspectul meniului și a paginii `Gallery`. În același timp, paginile propuse au fost gândite de mine.

Pe scurt, modul în care a fost gândit site-ul (conținut, pagini, legăturile dintre pagini) și conținutul care se regăsește pe site.
- Eu am scris cele trei paragrafe de pe pagina de start (am cerut ca AI-ul doar să-mi evidențieze greșelile gramaticale sau stângăciile din exprimare);
- Cum am zis și mai sus: imaginile, videoul din fundal, fonturile utilizate, dar și ideea cu fade-ul/încețoșarea care acoperă tranziția dintre video și corpul paginii
- Pagina de start (cu excepția footer-ului) este în proporție majoritară realizată de mine și este partea din site la care am stat cel mai mult și am depus cel mai mare efort.
- Ideea de a include localizare atât pentru limba română, cât și pentru limba engleză
- Traducerile și textul sunt în proporție de +90% realizate personal
- Ideea de a utiliza o imagine cu o foaie ruptă, editată, pentru fundalul textului care descrie imaginile din carusel
- Ideea de tooltip/hint personalizat pentru butoane (acel text cu fundal care apare dedesubtul butoanelor la hover) 
- Ideea de a integra reviste și ziare vechi în pagină + posibilitatea de a le citi direct în pagină

== Contribuție AI/internet == 

Am utilizat Gemini pentru ajutor cu anumite aspecte pe care nu reușeam în timp util să le rezolv singur (anumite încadrări în pagină) sau lucruri pe care nu știam cum să le abordez (cum să dau embed la conținut de pe archive.org direct în pagină și acele modale pentru imagini și reviste). În plus, am mai folosit AI-ul pentru anumite părți din site, unde nu am mai reușit să mă încadrez ca timp (exemplu: Footer-ul din pagina de start este realizat 80% de AI, 20% de mine).
În privința sistemului de logare/editare a profilului și a panoului de administrare/sistemului de admin am utilizat mai mult AI-ul, nu am mai apucat să abordez problema singur.

Ca rezumat, AI-ul m-a ajutat sau a contributi mai mult la anumite probleme de încadrare în pagină sau responsive design (probleme cu flexbox-uri, margini, padding, alinieri ale conținutului/textului ș.a), dar și la părți pe care nu am știut exact cum să le abordez (embedding - archive.org și modal pentru imagini și reviste) + unde am încercat să recuperez timp pierdut (zona de admin / magazin). 
Menționez și faptul că AI-ul m-a ajutat să calibrez anumite culori pentru text sau fundaluri la început până să prind ideea lor (exemplu: interwar-ink și ideea de a folosi opacity 0.8).
- Contribuție mai mare la partea de sistem admin și editare/ștergere conturi. (Pe lângă sistemul out of the box cu care vine Laravel) + editarea tabelelor pentru migrări SQL.

