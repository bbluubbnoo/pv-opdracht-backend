const express = require("express");
const app = express();
const PORT = 3000;
const cors = require("cors");

app.use(cors(
));

const games = [
    {
        id: 1,
        name: "Ratchet & Clank: Rift Apart",
        shortDescription: "Een episch avontuur door dimensies met verbluffende graphics.",
        fullDescription: `Knal je een weg door een avontuur dat dimensies overstijgt in Ratchet & Clank: Rift Apart! 
        Reis door dimensies als Ratchet en Clank het opnemen tegen een boosaardige keizer uit een andere realiteit. 
        De intergalactische avonturiers drukken hun stempel op de PS5™-console. 
        Beweeg je met waanzinnige snelheden tussen werelden vol actie en daar voorbij, 
        compleet met verbluffende beelden en waanzinnig wapentuig.
        
        Schandalige wapens:
        Een kwaadaardige robotkeizer maakt overuren om het organische leven uit te roeien, 
        met de volgende dimensie van Ratchet en Clank in zijn vizier. 
        Je moet de waanzinnige wapens van het dynamische paar afstoffen en een dimensionale ineenstorting in zijn sporen stoppen.
        
        Nieuwe gezichten:
        Verenig het dubbele team opperste met een cast van bekende bondgenoten en nieuwe gezichten, 
        waaronder een geheel nieuwe Lombax-verzetsstrijder die net zo vastbesloten is om de robotachtige plaag uit te schakelen.
        
        Verbluffende beelden:
        Geniet van een visueel oogverblindend interdimensionaal avontuur dat wordt gevoed door de verbluffende snelheid en 
        meeslepende functies van de PlayStation®5-console.
        
        Reizen in stijl:
        Ervaar de intergalactische shuffle van dimensionale kloven terwijl ze nieuwe werelden en gameplay combineren. 
        Loop over slagvelden om snel je gevechtsvoordeel te behalen en 
        te repareren planetaire kloven met dimensie-overspannende puzzels.`,
        price: 69.99,
        image: "https://media.s-bol.com/BnoOYz0Q7MPY/937x1200.jpg"
    },
    {
        id: 2,
        name: "Demon's Souls",
        shortDescription: "Een uitdagende remake van de klassieke actie-RPG met vernieuwde visuals.",
        fullDescription: `Van Bluepoint Games komt een remake van de PlayStation-klassieker, Demon’s Souls ™. 
        Deze remake is volledig opnieuw opgebouwd en meesterlijk verbeterd en introduceert de gruwelen van een mistig, 
        donker fantasieland voor een hele nieuwe generatie gamers. 
        Degenen die eerder zijn beproevingen en beproevingen hebben meegemaakt, 
        kunnen opnieuw de duisternis uitdagen in verbluffende visuele kwaliteit en ongelooflijke prestaties.
        
        In zijn zoektocht naar macht, de 12e koning van Boletaria, channelde koning Allant de oude Soul Arts, 
        waarbij hij een demon wakker maakte vanaf het begin van de tijd zelf, The Old One. 
        Toen The Old One werd opgeroepen, 
        trok een kleurloze mist over het land en liet nachtmerrieachtige wezens los die hongerden naar menselijke zielen. 
        Degenen van wie de ziel van hen werd ontdaan, verloren hun verstand - 
        alleen achtergelaten met het verlangen om het gezonde dat overbleef aan te vallen.
        
        Nu is Boletaria afgesneden van de buitenwereld, 
        en de ridders die de diepe mist durven te penetreren om het land uit zijn benarde toestand te bevrijden, 
        worden nooit meer gezien. Als een eenzame krijger die de verderfelijke mist heeft doorstaan, 
        moet je de moeilijkste uitdagingen aangaan om de titel "Slayer of Demons" te verdienen en 
        The Old One terug te sturen naar zijn slaap.
        
        Ontdek waar de reis begon:
        Ervaar de originele brute uitdaging, volledig opnieuw gemaakt vanaf de grond af. 
        Alles gepresenteerd in verbluffende visuele kwaliteit met verbeterde prestaties, 
        dit is de wereld van Boletaria zoals je die nog nooit eerder hebt gezien.
        
        Word de doder van demonen:
        Trek naar het noordelijke koninkrijk Boletaria - een ooit welvarend land van ridders, 
        nu geteisterd door onuitsprekelijke wezens en vraatzuchtige demonen. Ontmoet vreemde personages, 
        losgeslagen en verwrongen door de wereld om hen heen, en ontrafel het verontrustende verhaal van Demon’s Souls.
        
        Beheers de kunsten van tovenarij en oorlog:
        Perfectioneer en verbeter je vaardigheden in de strijd - weet wanneer je vooruit moet en wanneer je je tijd moet afwachten, 
        want bij elke gemiste slag en onzorgvuldige fout loop je het risico de zielen te verliezen waarvoor je 
        zo hard hebt gewerkt om te verzamelen. De beloningen voor het doden van de sterkste vijanden zijn echter enorm, 
        en de dood betekent niet het einde - het is gewoon een andere staat van zijn.
        
        Neem het op tegen 's werelds grootste krijgers in PVP-gevechten:
        Met online * invasies die het gevaar van je zoektocht vergroten. 
        Of speel coöperatief door bondgenoten op te roepen om te helpen in je strijd tegen de demonen.
        
        * Actief PS Plus-abonnement vereist voor online multiplayer.`,
        price: 59.99,
        image: "https://media.s-bol.com/NYM3411W7MlN/937x1200.jpg"
    },
    {
        id: 3,
        name: "Returnal",
        shortDescription: "Een sci-fi shooter met roguelike elementen en intense actie.",
        fullDescription: `Dit is Returnal voor de Playstation 5.
        Doorbreek de cyclus:
        Na een noodlanding op deze van vorm veranderende wereld, 
        moet Selene op zoek naar haar ontsnapping door het dorre landschap van een oude beschaving. 
        Ze is geïsoleerd en alleen en vecht met hand en tand om te overleven. Keer op keer wordt ze verslagen - 
        gedwongen om haar reis te hervatten elke keer dat ze sterft.
        Door meedogenloze roguelike gameplay, zul je ontdekken dat net zoals de planeet met elke cyclus verandert, 
        dat ook geldt voor de items die tot je beschikking staan. Elke lus biedt nieuwe combinaties, 
        waardoor je je grenzen moet verleggen en elke keer met een andere strategie moet vechten.
        
        De duistere schoonheid van de vervallen wereld om je heen, tot leven gebracht door verbluffende visuele effecten, 
        zit boordevol explosieve verrassingen. Van hoge inzetten, 
        door kogels aangedreven gevechten tot diepgewortelde wendingen door grimmige en contrastrijke omgevingen. Je zult verkennen, 
        ontdekken en je een weg banen door een meedogenloze reis, waar mysterie je op de voet achtervolgt.
        
        Ontworpen voor extreme herspeelbaarheid, 
        nodigt de procedurele wereld van Returnal je uit om jezelf af te stoffen bij een nederlaag en nieuwe, 
        evoluerende uitdagingen aan te gaan bij elke wedergeboorte.`,
        price: 49.99,
        image: "https://media.s-bol.com/BvGvZ3KJrlzN/Bj6OKo/550x685.jpg"
    },
    {
        id: 4,
        name: "Spider-Man: Miles Morales",
        shortDescription: "Beleef het avontuur van Miles Morales in een prachtig vormgegeven New York.",
        fullDescription: `Dit is Marvel's Spider-Man: Miles Morales voor de Playstation 5.
        In het nieuwste avontuur in het Marvel's Spider-Man-universum past tiener Miles Morales zich 
        aan zijn nieuwe thuis aan terwijl hij in de voetsporen treedt van zijn mentor, Peter Parker, 
        als een nieuwe Spider-Man. Maar wanneer een felle machtsstrijd zijn nieuwe thuis dreigt te vernietigen, 
        beseft de aspirant-held dat er met grote macht ook een grote verantwoordelijkheid moet komen. 
        Om heel Marvel's New York te redden, moet Miles de mantel van Spider-Man overnemen en het bezitten.
        
        De opkomst van Miles Morales:
        Miles Morales ontdekt explosieve krachten die hem onderscheiden van zijn mentor, Peter Parker. 
        Beheers zijn unieke, bio-elektrische gifaanvallen en geheime camouflagekracht naast spectaculaire web-slingerende acrobatiek, 
        gadgets en vaardigheden.
        
        Een oorlog om macht:
        Er is een oorlog uitgebroken om de controle over Marvel's New York tussen een sluw energiebedrijf en 
        een hightech crimineel leger. Met zijn nieuwe thuis in het hart van de strijd, 
        moet Miles leren wat het kost om een held te worden en beslissen wat hij moet opofferen voor het grotere goed.
        
        Een levendig nieuw huis:
        Doorkruis de besneeuwde straten van zijn nieuwe, 
        levendige en bruisende buurt terwijl Miles op zoek is naar een gevoel van verbondenheid. 
        Wanneer de scheidslijn tussen zijn persoonlijke leven en zijn misdaad bestrijdende leven vervaagt, 
        ontdekt hij wie hij kan vertrouwen en hoe het voelt om echt thuis te zijn.`,
        price: 39.99,
        image: "https://media.s-bol.com/qEp0pzqyvgmk/2ko8D0v/550x698.jpg"
    },
    {
        id: 5,
        name: "Gran Turismo 7",
        shortDescription: "De ultieme racesimulatie met realistische graphics en gameplay.",
        fullDescription: `Gran Turismo 7 borduurt voort op 25 jaar ervaring met de beste spelonderdelen uit de hele reeks. 
        Of je nu een competitieve racer bent, een verzamelaar, een tuner, een ontwerper van bestickering, 
        een fotograaf of een arcadefan, 
        als je een passie hebt voor auto's kom je aan je trekken met onderdelen die zijn geïnspireerd door het heden, 
        het verleden en de toekomst van Gran Turismo.
        
        Van klassieke bolides en circuits tot de terugkeer van het legendarische speltype GT-simulatie. 
        En als je gek bent van racen kun je oefenen en de strijd aangaan in de speltypen FIA Championships en Sport*.
        Maar Gran Turismo 7 draait om meer dan racen alleen. 
        Laat je van je creatiefste kant zien in het verbeterde tuning-en aanpassingsspeltype of 
        verbeter je vaardigheden en racestrategieën in Rijschool.`,
        price: 69.99,
        image: "https://media.s-bol.com/mVrxMokO0knR/PNMDrmW/550x683.jpg"
    },
    {
        id: 6,
        name: "Horizon Forbidden West",
        shortDescription: "Verken een post-apocalyptische wereld vol mechanische wezens en mysteries.",
        fullDescription: `Dit is Horizon: Forbidden West voor de Playstation 5 (PS5). 
        Een vervolg op Horizon: Zero Dawn. Sluit je aan bij Aloy terwijl ze het Verboden West trotseert - 
        een majestueuze maar gevaarlijke grens die mysterieuze nieuwe bedreigingen verbergt.
        
        Trotseer een uitgestrekte open wereld:
        Ontdek verre gebieden, nieuwe vijanden, rijke culturen en kleurrijke personages.
        
        Een majestueus land:
        Verken de prachtige bossen, gezonken steden en reusachtige bergen van het Amerika in de verre toekomst.
        
        Trotseer nieuwe gevaren:
        Neem het in strategische gevechten op tegen enorme machines en hun menselijke berijders door wapens, 
        uitrusting en vallen te maken van hun onderdelen.
        
        Ontrafel verbijsterende mysteries:
        Ontdek het geheim achter de dreigende ondergang van de aarde en onthul een verborgen hoofdstuk 
        uit het verre verleden dat Aloy voorgoed zal veranderen.`,
        price: 59.99,
        image: "https://media.s-bol.com/BEzPgW0LRE7Q/PMzvvl/550x704.jpg"
    },
    {
        id: 7,
        name: "Final Fantasy VII Remake Intergrade",
        shortDescription: "Een verbeterde versie van de remake van een klassieker, nu exclusief voor PS5.",
        fullDescription: `Final Fantasy VII Remake Intergrade voor de PlayStation 5 
        is een nieuwe versie van de iconische originele game die het RPG-genre opnieuw definieerde 
        en dieper dan ooit duikt in de wereld en personages ervan.
        
        De eerste game in dit project vindt plaats in de eclectische stad Midgar en levert een volledig 
        opzichzelfstaande ervaring die een ideaal vertrekpunt voor de serie vormt. 
        Vervolgens speel je de gloednieuwe episode met Yuffie als hoofdpersonage, 
        een spannend verhaallijn met vele gameplay-toevoegingen. 
        Naast onvergetelijke personages en een krachtig verhaal, 
        biedt Final Fantasy VII Remake Intergrade een hybride gevechtssysteem dat realtime actie mixt met strategische, 
        commando gebaseerde gevechten.
        
        Final Fantasy VII Remake is uitgeroepen tot Best score and music game van 2020.
        
        Over het spel Final Fantasy VII Remake:
        De wereld gaat gebukt onder de heerschappij van de Shinra Electric Power Company, een sinistere, 
        monopolistische corporatie die de levenskracht van de aarde als Mako-energie verhandelt. 
        In de uitgestrekte stad Midgar komt een anti-Shinra-organisatie die zichzelf Avalanche noemt in verzet. 
        Cloud Strife, een voormalig lid van Shinra’s elitaire SOLDIER-eenheid, verleent als huursoldaat zijn diensten aan de groep, 
        onbewust van de epische consequenties die dit voor hem zal hebben.
        
        Spelkenmerken:
        De nieuwe episode laat spelers met Yuffie een gloednieuw avontuur beleven in de wereld van Final Fantasy VII Remake Intergrade. 
        Speel als Wutai-ninja Yuffie Kisaragi, 
        infiltreer Midgar en werk samen met Avalanche HQ om de ultieme materialen van de Shinra Electric Power Company te stelen.
        
        Dompel jezelf als nooit eerder onder in de stad Midgar, met verbeterde textures, belichting en achtergronden.
        Spelers kunnen wisselen tussen twee game-modes: "Graphics Mode" geeft prioriteit aan graphics in 4K-resolutie. 
        "Performance Mode" geeft prioriteit aan vloeiende actie met 60 frames per seconde.
        Vang en deel je favoriete momenten in de game met de volledig aanpasbare "Photo Mode".
        Dankzij de haptische feedback van de draadloze DualSense-controller worden de gevechten meeslepender dan ooit.`,
        price: 69.99,
        image: "https://media.s-bol.com/q2LzQRAZY0G3/550x694.jpg"
    },
    {
        id: 8,
        name: "Resident Evil Village",
        shortDescription: "Een horror-actie avontuur vol spanning en onverwachte wendingen.",
        fullDescription: `Het genre-bepalende meesterwerk Resident Evil 2 keert terug, 
        volledig opnieuw opgebouwd voor een diepere ervaring. 
        Resident Evil 2 maakt gebruik van Capcom's eigen RE Engine en biedt een frisse kijk op de klassieke survival-horror serie, 
        met adembenemend realistische graphics, meeslepend audio design, 
        een nieuw camera standpunt en gemoderniseerde bedieningselementen bovenop de gameplay-modi van het origineel spel.
        
        In Resident Evil 2 keren alle elementen die de Resident Evil reeks hebben gedefinieerd - de klassieke actie, 
        spannende verkenning en het oplossen van puzzels - terug. 
        Spelers sluiten zich aan bij beginnend politie agent Leon Kennedy en studente Claire Redfield, 
        die gedwongen worden samen te werken door een rampzalige uitbraak in Raccoon City, 
        die de bevolking in dodelijke zombies heeft getransformeerd. 
        Zowel Leon als Claire hebben hun eigen afzonderlijke speelbare campagnes, 
        waardoor spelers het verhaal vanuit het perspectief van beide personages kunnen beleven. 
        Het lot van deze twee favoriete personages ligt in de handen van de speler, 
        terwijl ze samenwerken om te overleven en te achterhalen wat achter de angstaanjagende aanval op de stad zit.
        
        Zullen ze het overleven?`,
        price: 49.99,
        image: "https://media.s-bol.com/gx7wqA33oz5k/550x684.jpg"
    },
    {
        id: 9,
        name: "Call of Duty: Modern Warfare II",
        shortDescription: "Intense multiplayer-actie en meeslepende campagne op de moderne slagvelden.",
        fullDescription: `Call of Duty®: Modern Warfare® II is het vervolg op de kaskraker van 2019, Modern Warfare®. 
        Met de terugkeer van de iconische kapitein John Price, de onverschrokken John "Soap" MacTavish, 
        de veteraan sergeant Kyle "Gaz" Garrick en de eenzame wolf zelf, de fan-favoriete operator Simon "Ghost" Riley. 
        Spelers zullen ontdekken wat Task Force 141 tot de legendarische eenheid maakt die het nu is.
        
        Van kleinschalige infiltratietactieken tot zeer geheime missies, spelers zullen nieuwe wapens, 
        voertuigen en uitrusting moeten gebruiken om het op te nemen tegen hun vijanden. 
        Rust jezelf uit en ga de strijd aan op zee door vijanden onder water te belegeren, 
        een sterk versterkte vijandelijke basis binnen te dringen, 
        langs kanalen te infiltreren en belangrijke bondgenoten te bevrijden op een clandestiene plek die in de bergen verborgen ligt.
        
        Infinity Ward zal fans onderdompelen in adembenemende, state-of-the-art next-gen gameplay. 
        Vecht samen met je vrienden in een werkelijk meeslepende ervaring met verbluffend realistisch geluid, 
        belichting en graphics die dit de meest geavanceerde Call of Duty in de geschiedenis van de franchise maken. 
        Modern Warfare® II bevat een vernieuwd en geavanceerder AI-systeem, verbeterde rendering- en fotogrammetrie-technologie, 
        een nieuw wapenarsenaalsysteem dat meer aanpassingsmogelijkheden biedt dan ooit tevoren, 
        en tal van andere grafische en gameplay-innovaties die de franchise naar nieuwe hoogten tillen. 
        De toekomst van de franchise zit vol baanbrekende innovaties en zet de toon voor next-gen gameplay.
        
        Modern Warfare II zal vanaf dag één een indrukwekkende hoeveelheid content bevatten: 
        vorm je team en vecht aan de zijde van de TF141 in een singleplayer-campagne over de hele wereld, 
        speel alleen of als team in meeslepende multiplayer-gevechten met nieuwe locaties en manieren om te spelen, 
        en ontdek een geavanceerder, verhaalgedreven speltype Special Operations met coöperatief tactisch spel.
        
        Bovendien sluit Modern Warfare II aan op de nieuwe Warzone™-ervaring die dit jaar uitkomt, 
        en daarmee op de evolutie van de Battle Pass met een volledig nieuwe speelruimte en sandbox-modus. 
        Verwacht een schema vol gratis post-launch content die evoluerende gameplay laat zien met nieuwe maps, 
        nieuwe modes, seizoensevents, community vieringen en meer.
        
        Blijf koel.`,
        price: 59.99,
        image: "https://media.s-bol.com/ZnJ0LyNnvq7v/rkmzo2L/550x662.jpg"
    },
    {
        id: 10,
        name: "God of War Ragnarök",
        shortDescription: "De epische voortzetting van Kratos' verhaal, vol mythologie en spectaculaire gevechten.",
        fullDescription: `Er zijn enkele jaren verstreken sinds het begin van Fimbulwinter. 
        De kou krijgt steeds meer vat op de wereld Midgaard. 
        
        Kratos en Atreus doen hun best om verborgen te blijven nadat ze hebben geprobeerd hun lotsbestemmingen te wijzigen. 
        Ze trainen elke dag voor het onvermijdelijke en blijven zoeken naar manieren om de voorspelde toekomst 
        uit de profetie te doorbreken. 
        
        Atrus probeert de aanwijzingen die zijn moeder heeft achtergelaten verder te ontrafelen 
        en wil weten wat zijn rol zal zijn in de aankomende oorlog. 
        Kratos heeft moeite met de pogingen van Atreus om te achterhalen wie hij is. 
        Hij weet dat zijn zoon zich nog meer aangetrokken zal voelen tot de wraakzuchtige Asen. 
        Als dat gebeurt, is de kans steeds groter dat zijn eigen bloederige fouten uit het verleden worden herhaald.
        
        Terijl de Asgardiaanse krachten zich voorbereiden op een oorlog, verkennen Kratos en Atreus de negen werelden. 
        Op hun reis door prachtige mythische landschappen vinden ze bondgenoten en nemen ze het op tegen allerlei vijanden, 
        waaronder noordse goden en angstaanjagende monsters.
        
        Naarmate de dreiging van Ragnarök dichterbij komt, 
        beseffen Kratos en Atreus dat ze zullen moeten kiezen tussen hun eigen veiligheid en die van de werelden...
        
        Zij die het lot tarten:
        
        Atrus gaat op zoek naar informatie om de profetie van Loki te begrijpen en wil achterhalen wat zijn rol zal zijn in Ragnarök. 
        Kratos staat voor een moeilijke beslissing: laat hij zich leiden door zijn angst om fouten te herhalen? 
        Of weet hij los te breken uit de ketenen van zijn verleden zodat hij de vader kan zijn die Atreus nodig heeft?
        
        Oorlogswapens:
        
        De eviathandbijl, chaoszwaarden en het wachterschild liggen klaar voor de strijd, 
        maar zowel Kratos als Atreus beschikken ook over nieuwe vaardigheden. 
        De dodelijke skills die Kratos heeft geleerd als Spartaan zullen tot het uiterste worden getest 
        tijdens bloederige gevechten tegen goden en monsters.
        
        Verken de werelden:
        
        Ga met Kratos en Atreus op zoek naar antwoorden en bondgenoten. Reis door gevaarlijke, 
        adembenemende landschappen en neem het op tegen angstaanjagende vijanden, waaronder monsters en noordse goden.
        
        Reis door alle negen werelden en bereid je voor op de voorspelde strijd die het einde der tijden zou inluiden.
        Versla noordse goden en monsters in vloeiende, expressieve gevechten.`,
        price: 69.99,
        image: "https://media.s-bol.com/x5MmQEQqMVlz/9KvQ9x/550x704.jpg"
    }
];



app.get("/games", (req, res) => {
    res.json(games);
});

app.get("/games/:id", (req, res) => {
    const game = games.find(item => item.id == req.params.id);
    if(game)
    {
        res.json(game);
    }
    else
    {
        res.status(404).json({error : "Videogame niet gevonden"});
    }
});

app.listen(PORT, () => {
    console.log("Server luistert op poort: " + PORT);
});