/* content.js — Geschiedenis, 4.4 "Een onrustige opstand" (havo 2).
   Vak-app op de canonieke oefen-engine (window.VAK + LEERSTOF + BEGRIPPEN). begripVak.

   Onderwerpen: 1 Filips botst · 2 Smeekschrift · 3 Beeldenstorm · 4 Alva ·
                5 De Opstand begint · 6 Naar een eigen staat · 7 Oorzaken en gevolgen.

   Didactische keuzes (zie 02-verwerkt/leerplan.md):
   - De rode draad is DE BOEMERANG: elke keer dat Filips of Alva hárder ingrijpt, wordt het
     verzet GROTER. Vervolgen -> meer protestanten. Alva -> de Opstand. De moord op Willem ->
     een symbool. Dat patroon is het enige ophangpunt waarmee dit hoofdstuk één verhaal wordt,
     en het is meteen de kern van "bedoeld vs. onbedoeld gevolg".
   - Onderwerp 7 is volledig gewijd aan de VAARDIGHEID oorzaken/gevolgen. Dat is waar het SO
     de punten weggeeft (opdracht 3, 4, 7b, 12b en 13 in het werkboek) en waar leerlingen
     vastlopen: direct vs. indirect, bedoeld vs. onbedoeld, en het soort (econ/rel/pol/soc).
   - De gedocumenteerde misvattingen (M1-M12 in het leerplan) zitten als MC-afleiders ingebouwd,
     elk met een `fout`-uitleg die precies die denkfout onderuit haalt.
   - Toon: verhalend waar het kan. Bij terechtstellingen en het beleg van Leiden feitelijk
     blijven, geen drama. */

window.VAK = {
  id: "geschiedenis_h44",
  store: "storm_geschiedenis_h44_v1",
  titel: "Geschiedenis met Storm — Een onrustige opstand",
  brand: "Geschiedenis met Storm",
  badge: "4.4",
  mascotEmoji: "🛡️",
  doelLabel: "begrip",
  spiekTitel: "4.4 — begrippen, jaartallen en de oorzaak-gevolgkaart",
  wiskunde: false,
  begripVak: true,
  spraak: { vraagLang: "nl-NL", antwoordLang: "nl-NL" },
  matching: { stripInfinitief: false, accentTolerant: true, lidwoordTolerant: false },
  masteryHits: 2,
  stapelGrootte: 6,
  tegels: ["leerstof", "begrippen", "proeftoets", "spiekblad"],
  proefTitel: "SO-oefentoets",
  tegelProef: { em: "📝", h: "SO-oefentoets", p: "Alle stof door elkaar, net als het echte SO" }
};

window.LEERSTOF = [

  /* ==================== 1 · IN BOTSING MET EEN NIEUWE VORST ==================== */
  {
    id: "filips-botst",
    emoji: "👑",
    titel: "1 · In botsing met een nieuwe vorst",
    paragraaf: "§4.4.1",
    kort: "Filips II volgt Karel V op en maakt zich meteen onbemind: strenger tegen protestanten, hogere belastingen en één centraal bestuur. Drie redenen, drie soorten ruzie.",
    niveaus: [
      {
        n: 1, naam: "Brons",
        uitleg: [
          "In 1555 volgt <b>Filips II</b> zijn vader <b>Karel V</b> op. Hij wordt koning van Spanje én heer van de Nederlanden. Let op: de Nederlanden zijn géén deel van Spanje — het is toevallig <i>dezelfde baas</i>.",
          "Filips wordt hier niet met gejuich ontvangen. Daar zijn <b>drie redenen</b> voor, en je kunt ze onthouden als <b>geloof, geld en macht</b>:",
          "<b>1. Geloof</b> — Filips ziet zichzelf als de leider van de strijd tegen het protestantisme. Hij treedt nóg strenger op dan zijn vader.<br><b>2. Geld</b> — hij voert dure oorlogen, dus hij heft <b>hoge belastingen</b>.<br><b>3. Macht</b> — hij wil de <b>centralisatie</b> van zijn vader voortzetten: één bestuur met overal dezelfde wetten. Gewesten en edelen zijn bang hun <b>privileges</b> kwijt te raken.",
          "Filips zelf woont in Spanje. Hij stuurt <b>Spaanse edelen</b> hierheen om te besturen en maakt zijn halfzus <b>Margaretha van Parma</b> <b>landvoogdes</b>: zijn plaatsvervangster in de Nederlanden."
        ],
        regel: "Drie redenen waarom Filips II meteen botst: geloof (strenger), geld (hoge belastingen) en macht (centralisatie).",
        vragen: [
          {
            t: "vb",
            opgave: "Waarom waren de Nederlandse edelen bang voor de centralisatie van Filips II?",
            waarom: {
              q: "Wat raakten de edelen en gewesten kwijt bij centralisatie?",
              o: ["hun privileges", "hun geloof", "hun land"],
              a: "hun privileges"
            },
            fout: {
              "hun geloof": "Dat was een ander probleem (en speelde vooral bij de protestanten). Bij centralisatie gaat het over <b>bestuur</b>: overal dezelfde wetten, dus geen eigen rechten meer. Die eigen rechten heten privileges.",
              "hun land": "Hun grond raakten ze niet kwijt. Wat ze kwijtraakten waren hun <b>privileges</b>: de bijzondere rechten die hun gewest of stad had, zoals zelf over belasting beslissen."
            },
            stappen: [
              { toon: "Centralisatie = één centraal bestuur, overal dezelfde wetten en regels.", uitleg: "Begin altijd met wat het begrip betekent. Dat vraagt het werkboek ook letterlijk bij opdracht 1c." },
              { toon: "Maar de gewesten hadden juist eigen wetten, eigen munten en eigen rechten.", uitleg: "Die bijzondere rechten heten privileges." },
              { toon: "→ Eén bestuur voor iedereen betekent: die eigen rechten verdwijnen.", uitleg: "Daarom waren gewesten én edelen tegen. Ze verloren macht en voordelen." }
            ],
            w: "Centralisatie botst met privileges: overal dezelfde regels betekent geen eigen rechten meer.",
            meer: "Tip voor het SO: begin je antwoord met de betekenis van het begrip, en geef dán pas het voorbeeld."
          },
          {
            t: "mc",
            q: "Wat is de beste reden waarom Filips II hoge belastingen ging heffen?",
            o: [
              "hij voerde dure oorlogen",
              "hij wilde een nieuw paleis bouwen",
              "de Nederlanden waren arm geworden",
              "de kerk eiste meer geld van hem"
            ],
            a: "hij voerde dure oorlogen",
            w: "Oorlog kost geld, en Filips voerde er veel. Dat geld moest ergens vandaan komen.",
            meer: "Dit is de <b>economische</b> reden waarom de Nederlanders ontevreden waren. De andere twee zijn religieus (strenger geloof) en politiek (centralisatie).",
            fout: {
              "hij wilde een nieuw paleis bouwen": "Dat staat niet in de stof. Het ging om zijn <b>oorlogen</b> — die waren erg duur.",
              "de Nederlanden waren arm geworden": "Juist niet: de Nederlanden waren rijk, en dat maakte ze aantrekkelijk om te belasten.",
              "de kerk eiste meer geld van hem": "Nee. Filips had het geld nodig voor zijn eigen oorlogen, niet voor de kerk."
            }
          },
          {
            t: "mc",
            q: "Hoorden de Nederlanden bij Spanje?",
            o: [
              "nee, maar ze hadden wel dezelfde heer",
              "ja, het was een Spaanse provincie",
              "ja, Spanje had de Nederlanden veroverd",
              "nee, ze hadden niets met Spanje te maken"
            ],
            a: "nee, maar ze hadden wel dezelfde heer",
            w: "Filips II was koning van Spanje én heer van de Nederlanden. Twee aparte gebieden, één baas.",
            meer: "Precies daarom vonden de Nederlanders het zo raar dat er <b>Spaanse</b> edelen in hún bestuur kwamen zitten: dat hoorde er volgens hen helemaal niet bij.",
            fout: {
              "ja, het was een Spaanse provincie": "Dit is de bekendste denkfout van dit hoofdstuk. De Nederlanden waren een eigen gebied met eigen gewesten, eigen wetten en eigen munten. Filips was toevallig van allebei de baas.",
              "ja, Spanje had de Nederlanden veroverd": "Er is geen verovering geweest. Filips kreeg de Nederlanden gewoon geërfd van zijn vader Karel V.",
              "nee, ze hadden niets met Spanje te maken": "Zó los stond het ook weer niet: ze deelden dezelfde vorst, en die stuurde Spaanse edelen hierheen om te besturen."
            }
          },
          {
            t: "gap",
            q: "Filips II stelde zijn halfzus ___ aan als landvoogdes van de Nederlanden.",
            a: "Margaretha van Parma|Margaretha|Margaretha van Parma.",
            w: "Margaretha van Parma bestuurde de Nederlanden namens Filips, die zelf in Spanje zat.",
            meer: "Een <b>landvoogd(es)</b> is de plaatsvervanger van de vorst in alle Nederlandse gewesten. Later wordt Alva landvoogd in haar plaats."
          },
          {
            t: "sleep",
            opgave: "Welke reden om ontevreden te zijn over Filips II hoort bij welk soort?",
            chips: [
              { t: "Hij trad strenger op tegen protestanten", bak: "religieus" },
              { t: "Hij hief hoge belastingen", bak: "economisch" },
              { t: "Hij wilde één centraal bestuur", bak: "politiek" },
              { t: "Hij vervolgde calvinisten met bloedplakkaten", bak: "religieus" },
              { t: "Hij zette Spaanse edelen in het bestuur", bak: "politiek" },
              { t: "Zijn oorlogen kostten veel geld", bak: "economisch" }
            ],
            bakjes: [
              { id: "religieus", label: "religieus (geloof)", som: "" },
              { id: "economisch", label: "economisch (geld)", som: "" },
              { id: "politiek", label: "politiek (bestuur)", som: "" }
            ],
            w: "Geloof → religieus. Geld → economisch. Bestuur en macht → politiek. Dit sorteren komt op het SO terug."
          }
        ]
      },
      {
        n: 2, naam: "Zilver",
        uitleg: [
          "Het werkboek vraagt bij opdracht 1a naar <b>continuïteit</b> en <b>verandering</b>. Die twee woorden betekenen:",
          "<b>Continuïteit</b> = iets <i>blijft hetzelfde</i> als Filips II zijn vader opvolgt.<br><b>Verandering</b> = iets wordt <i>anders</i> dan onder Karel V.",
          "<b>Wat bleef hetzelfde:</b> de centralisatiepolitiek, het vervolgen van protestanten met plakkaten en de inquisitie, en het besturen via een landvoogd(es).",
          "<b>Wat veranderde:</b> Filips trad véél strenger op tegen protestanten, hij hief hogere belastingen, hij zette <b>Spaanse</b> edelen in het bestuur, en hij woonde zelf in Spanje — terwijl Karel V hier was opgegroeid en Nederlands sprak."
        ],
        regel: "Continuïteit = blijft hetzelfde (centralisatie, vervolging). Verandering = wordt anders (strenger, duurder, Spaanser, en een koning op afstand).",
        vragen: [
          {
            t: "mc",
            q: "Welk voorbeeld is <b>continuïteit</b> tussen Karel V en Filips II?",
            o: [
              "allebei wilden ze centralisatie doorvoeren",
              "Filips hief hogere belastingen dan zijn vader",
              "Filips woonde in Spanje en Karel V hier",
              "Filips zette Spaanse edelen in het bestuur"
            ],
            a: "allebei wilden ze centralisatie doorvoeren",
            w: "Centralisatie was al het plan van Karel V; Filips zette het gewoon voort. Dat blijft dus hetzelfde.",
            meer: "Handige check: staat er in het antwoord een woord als <i>hogere</i>, <i>strenger</i> of <i>anders dan</i>? Dan is het verandering, geen continuïteit.",
            fout: {
              "Filips hief hogere belastingen dan zijn vader": "Het woordje <i>hogere</i> verraadt het al: dit is juist een <b>verandering</b>.",
              "Filips woonde in Spanje en Karel V hier": "Dat is een duidelijk verschil tussen die twee, dus <b>verandering</b>.",
              "Filips zette Spaanse edelen in het bestuur": "Nieuw onder Filips, dus <b>verandering</b>. Karel V was hier opgegroeid en gebruikte Nederlandse edelen."
            }
          },
          {
            t: "mc",
            q: "Waarom viel het de Nederlanders extra op dat Filips II in Spanje woonde?",
            o: [
              "hij kende de Nederlanden niet en stuurde Spanjaarden om te besturen",
              "hij kwam nooit belasting ophalen",
              "hij sprak geen enkele taal die hier gesproken werd",
              "hij had de Nederlanden nooit geërfd"
            ],
            a: "hij kende de Nederlanden niet en stuurde Spanjaarden om te besturen",
            w: "Een vorst op afstand, met vreemde bestuurders: dat voelde als buitenstaanders die het hier voor het zeggen kregen.",
            meer: "Het Smeekschrift klaagt daar later letterlijk over: over de vele <i>vreemdelingen in het landsbestuur</i> die alleen op eigen voordeel uit zouden zijn.",
            fout: {
              "hij kwam nooit belasting ophalen": "Integendeel — de belastingen gingen juist omhoog.",
              "hij sprak geen enkele taal die hier gesproken werd": "Het ging niet om de taal, maar om het <b>bestuur</b>: Spaanse edelen op Nederlandse posten.",
              "hij had de Nederlanden nooit geërfd": "Hij had ze wél geërfd, van Karel V. Dat was juist waarom hij hier de baas was."
            }
          },
          {
            t: "mc",
            q: "Karel V vervolgde ook al protestanten. Wat was er dan anders onder Filips II?",
            o: [
              "Filips deed het veel strenger en zag het als zijn persoonlijke opdracht",
              "Filips begon er pas mee; Karel V liet protestanten met rust",
              "Filips stopte juist met vervolgen om rust te krijgen",
              "Filips liet het helemaal aan Margaretha over"
            ],
            a: "Filips deed het veel strenger en zag het als zijn persoonlijke opdracht",
            w: "De vervolging zelf is continuïteit; de <b>hardheid</b> ervan is de verandering.",
            meer: "Karel V had de bloedplakkaten al in 1550 ingevoerd. Filips scherpte de uitvoering aan en zag zichzelf als leider van de strijd tegen het protestantisme.",
            fout: {
              "Filips begon er pas mee; Karel V liet protestanten met rust": "Nee — Karel V vaardigde de bloedplakkaten al uit. Daarom is vervolging juist een voorbeeld van continuïteit.",
              "Filips stopte juist met vervolgen om rust te krijgen": "Dat deed <b>Margaretha van Parma</b> even, op eigen gezag, na het Smeekschrift. Filips was daar woedend over.",
              "Filips liet het helemaal aan Margaretha over": "Zij voerde het uit, maar het strengere beleid kwam van Filips zelf."
            }
          },
          {
            t: "gap",
            q: "Bijzondere rechten van een gewest of stad, die bij centralisatie op het spel stonden, heten ___.",
            a: "privileges|privilege|voorrechten",
            w: "Privileges: bijzondere rechten die de heer aan een stad of gewest gaf, bijvoorbeeld zelf over belasting beslissen.",
            meer: "Het streven om die zelfstandigheid te behouden heeft ook een naam: <b>particularisme</b>."
          },
          {
            t: "sleep",
            opgave: "Continuïteit of verandering ten opzichte van Karel V?",
            chips: [
              { t: "Protestanten vervolgen met plakkaten", bak: "continu" },
              { t: "Besturen via een landvoogd(es)", bak: "continu" },
              { t: "Streven naar centralisatie", bak: "continu" },
              { t: "Spaanse edelen in het bestuur zetten", bak: "verandering" },
              { t: "Nog hogere belastingen heffen", bak: "verandering" },
              { t: "Een vorst die zelf in Spanje woont", bak: "verandering" }
            ],
            bakjes: [
              { id: "continu", label: "continuïteit (blijft hetzelfde)", som: "" },
              { id: "verandering", label: "verandering (wordt anders)", som: "" }
            ],
            w: "Vraag je steeds af: deed Karel V dit óók al? Ja → continuïteit. Nee, of veel heviger → verandering."
          }
        ]
      },
      {
        n: 3, naam: "Goud",
        uitleg: [
          "Nu de lastigste vraag van deze paragraaf (opdracht 1b in het werkboek): <b>waarom lukte het Filips II niet om het aantal protestanten te verminderen?</b>",
          "Het antwoord is een <b>boemerang</b>. Filips pakte de protestanten hard aan met <b>bloedplakkaten</b> (gedrukte wetten tegen ketters) en de <b>inquisitie</b> (de kerkelijke rechtbank die ketterij opspoorde). Mensen werden opgepakt en soms terechtgesteld.",
          "Maar juist dóór die harde vervolging keerden steeds méér mensen zich af van de katholieke kerk. Wie zag hoe hard er werd opgetreden, kreeg sympathie voor de slachtoffers en een hekel aan de kerk die het deed.",
          "Onthoud dit patroon: <b>harder ingrijpen → groter verzet</b>. Je komt het in deze paragraaf nog drie keer tegen (bij Margaretha, bij Alva, en bij de moord op Willem van Oranje)."
        ],
        regel: "Hoe harder Filips vervolgde, hoe meer mensen zich van de katholieke kerk afkeerden. Het middel werkte averechts.",
        vragen: [
          {
            t: "open",
            q: "Noem de reden waarom het Filips II niet lukte om het aantal protestanten in de Nederlanden te verminderen.",
            punten: 2,
            modelantwoord: "Filips II vervolgde de protestanten heel hard, met bloedplakkaten en de inquisitie. Maar juist door die harde vervolgingen keerden steeds meer mensen zich af van de katholieke kerk. Het aantal protestanten nam daardoor niet af, maar juist toe.",
            sleutelwoorden: [
              { moet: ["hard", "streng", "vervolg", "wreed"], syn: ["fel", "geweld"] },
              { moet: ["afkeren", "afkeerden", "meer", "toe", "juist", "averechts"], syn: ["tegenovergestelde", "groeide"] }
            ],
            rubric: [
              "Je noemt dat Filips de protestanten hard vervolgde (plakkaten/inquisitie)",
              "Je legt uit dat mensen zich juist dáárdoor van de katholieke kerk afkeerden"
            ],
            w: "De vervolging werkte averechts: hoe harder het optreden, hoe meer mensen afhaakten bij de katholieke kerk.",
            meer: "Let op de formulering bij dit soort vragen: noem eerst wat Filips <i>deed</i>, en daarna het <i>effect</i> dat hij niet wilde."
          },
          {
            t: "mc",
            q: "Wat is een <b>bloedplakkaat</b>?",
            o: [
              "een gedrukte wet, vooral gericht tegen ketters",
              "een doodvonnis dat de koning persoonlijk ondertekende",
              "een lijst met namen van protestanten",
              "een belasting op de handel in de Nederlanden"
            ],
            a: "een gedrukte wet, vooral gericht tegen ketters",
            w: "Een plakkaat is een wet op een vel papier, opgehangen op openbare plekken zodat iedereen hem kon lezen.",
            meer: "De strenge bloedplakkaten werden voor het eerst in 1550 door Karel V uitgevaardigd. De naam komt van de harde straffen die erin stonden.",
            fout: {
              "een doodvonnis dat de koning persoonlijk ondertekende": "Nee, het was een <b>wet</b>, geen vonnis over één persoon. Vonnissen sprak de inquisitie (en later de Raad van Beroerten) uit.",
              "een lijst met namen van protestanten": "Er stonden geen namen op. Er stonden <b>regels</b> op: wat verboden was en welke straf erop stond.",
              "een belasting op de handel in de Nederlanden": "Dat is de <b>Tiende Penning</b>, en die kwam pas later, van Alva."
            }
          },
          {
            t: "mc",
            q: "Wat was de <b>inquisitie</b>?",
            o: [
              "een rechtbank van de katholieke kerk tegen ketterij",
              "het leger dat Filips II naar de Nederlanden stuurde",
              "de vergadering van de Nederlandse gewesten",
              "de belastingdienst van de Spaanse koning"
            ],
            a: "een rechtbank van de katholieke kerk tegen ketterij",
            w: "Inquisitie komt van het Latijnse <i>inquisitio</i> = onderzoek. De kerk onderzocht en berechtte mensen die van het geloof afweken.",
            meer: "Het Smeekschrift noemt de inquisitie een <i>vreemde rechtbank</i>: de Nederlanders vonden dat ze het recht hadden om níet voor zo'n rechtbank gedaagd te worden.",
            fout: {
              "het leger dat Filips II naar de Nederlanden stuurde": "Dat leger kwam later, met de hertog van Alva. De inquisitie was een rechtbank, geen leger.",
              "de vergadering van de Nederlandse gewesten": "Dat is de Staten-Generaal.",
              "de belastingdienst van de Spaanse koning": "Nee. Bij de inquisitie ging het om <b>geloof</b>, niet om geld."
            }
          },
          {
            t: "mc",
            q: "Welke groep protestanten kreeg in de Nederlanden de grootste aanhang?",
            o: ["de calvinisten", "de lutheranen", "de katholieken", "de inquisiteurs"],
            a: "de calvinisten",
            w: "Calvinisten zijn volgelingen van Johannes Calvijn. Zij groeiden hier het snelst.",
            meer: "Lutheranen (volgelingen van Maarten Luther) waren vooral sterk in het Heilige Roomse Rijk en Scandinavië. In de Nederlanden won het calvinisme.",
            fout: {
              "de lutheranen": "Luther was wel de eerste (de monniken uit bron 1 volgden hém), maar in de Nederlanden werd het <b>calvinisme</b> de grootste protestantse stroming.",
              "de katholieken": "Katholieken zijn geen protestanten — dat was juist het geloof waar de protestanten zich van afsplitsten.",
              "de inquisiteurs": "Dat waren de mensen die de ketters juist opspoorden, namens de katholieke kerk."
            }
          },
          {
            t: "gap",
            q: "Vul het patroon aan: hoe harder Filips de protestanten vervolgde, hoe ___ mensen zich van de katholieke kerk afkeerden.",
            a: "meer|meer mensen",
            w: "Harder ingrijpen gaf juist een groter verzet. Dat is de boemerang van dit hoofdstuk.",
            meer: "Ditzelfde patroon komt terug bij Alva (zijn harde hand leidde tot de Opstand) en bij de moord op Willem van Oranje (die maakte hem tot symbool)."
          }
        ]
      }
    ]
  },

  /* ==================== 2 · HET SMEEKSCHRIFT DER EDELEN ==================== */
  {
    id: "smeekschrift",
    emoji: "📜",
    titel: "2 · Het Smeekschrift der edelen",
    paragraaf: "§4.4.1",
    kort: "In 1566 vragen zo'n 200 lage edelen beleefd om mildheid. Margaretha luistert — en juist dáárdoor krijgt het calvinisme de ruimte.",
    niveaus: [
      {
        n: 1, naam: "Brons",
        uitleg: [
          "In <b>1566</b> stappen ongeveer <b>200 lage edelen</b> naar landvoogdes Margaretha van Parma met een verzoek: het <b>Smeekschrift der edelen</b>.",
          "Ze vragen of Filips II de <b>plakkaten</b> tegen het protestantisme wil <b>verzachten</b>. Let op het woord <i>smeken</i>: het is een beleefd verzoek, geen dreigement en geen opstand. Tegenwoordig zou je het een <b>petitie</b> noemen.",
          "Margaretha is bang dat de edelen anders in opstand komen. Ze luistert, en voert <b>op eigen gezag</b> versoepelingen door — zonder dat Filips dat heeft goedgekeurd. De vervolging van ketters stopt.",
          "En dan gebeurt het onverwachte: juist door die rust <b>leeft het calvinisme op</b>. Protestanten durven naar buiten te komen. Filips II is daar allesbehalve blij mee."
        ],
        regel: "Smeekschrift (1566) = ~200 lage edelen vragen beleefd om mildere plakkaten. Margaretha versoepelt op eigen gezag → het calvinisme leeft op.",
        vragen: [
          {
            t: "mc",
            q: "Wat vroegen de edelen in het Smeekschrift?",
            o: [
              "verzachting van de plakkaten tegen het protestantisme",
              "dat Filips II geen koning meer zou zijn",
              "meer geld voor de Nederlandse edelen",
              "dat de Beeldenstorm gestraft zou worden"
            ],
            a: "verzachting van de plakkaten tegen het protestantisme",
            w: "Ze vroegen om mildheid: de wetten tegen protestanten moesten minder streng worden.",
            meer: "Het Smeekschrift kwam op tegen de <i>vreemdelingen</i> in het bestuur, tegen de inquisitie als vreemde rechtbank, en tegen de plakkaten en geloofsvervolgingen.",
            fout: {
              "dat Filips II geen koning meer zou zijn": "Dat is het <b>Plakkaat van Verlatinghe</b>, en dat kwam pas in 1581 — vijftien jaar later. In 1566 wilden de edelen Filips juist behouden, maar milder.",
              "meer geld voor de Nederlandse edelen": "Het ging niet over geld maar over <b>geloof</b>: de vervolging moest zachter.",
              "dat de Beeldenstorm gestraft zou worden": "De Beeldenstorm kwam ná het Smeekschrift, later in datzelfde jaar 1566."
            }
          },
          {
            t: "mc",
            q: "Aan wie boden de edelen het Smeekschrift aan?",
            o: ["Margaretha van Parma", "Filips II zelf", "de hertog van Alva", "Willem van Oranje"],
            a: "Margaretha van Parma",
            w: "Zij was landvoogdes, dus zij was hier de vertegenwoordiger van de koning.",
            meer: "De edelen hoopten dat zij invloed had op haar halfbroer Filips II. Ze besprak het met hem, maar hij deed er niets mee.",
            fout: {
              "Filips II zelf": "Die zat in Spanje. Daarom gingen ze naar zijn plaatsvervangster hier: de landvoogdes.",
              "de hertog van Alva": "Alva kwam pas in 1567, ná de Beeldenstorm. In 1566 was hij hier nog niet.",
              "Willem van Oranje": "Hij was zelf een Nederlandse edelman, geen vertegenwoordiger van de koning."
            }
          },
          {
            t: "gap",
            q: "Het Smeekschrift der edelen werd aangeboden in het jaar ___.",
            a: "1566",
            w: "1566 is hét jaar van deze paragraaf: eerst het Smeekschrift, daarna de Beeldenstorm.",
            meer: "Onthoud 1566 als 'het jaar dat het knapte'. Twee gebeurtenissen, in die volgorde."
          },
          {
            t: "mc",
            q: "Hoeveel edelen boden het Smeekschrift ongeveer aan, en wat voor edelen waren dat?",
            o: [
              "ongeveer 200 lage edelen",
              "ongeveer 200 hoge edelen",
              "ongeveer 20 lage edelen",
              "alle edelen van de Nederlanden"
            ],
            a: "ongeveer 200 lage edelen",
            w: "Ongeveer 200, en het waren <b>lage</b> edelen — niet de hoogste adel.",
            meer: "Dat de láge adel het deed, is precies waarom Margaretha's adviseur ze minachtend <i>gueux</i> (bedelaars) noemde. Van dat scheldwoord komt het woord <b>geuzen</b>.",
            fout: {
              "ongeveer 200 hoge edelen": "Het aantal klopt, maar het waren <b>lage</b> edelen. Hoge edelen zoals Willem van Oranje hielden zich er juist afzijdig van.",
              "ongeveer 20 lage edelen": "Het waren er veel meer: ongeveer 200. Dat aantal maakte juist indruk.",
              "alle edelen van de Nederlanden": "Zeker niet. Het was een grote groep lage edelen, maar lang niet iedereen."
            }
          },
          {
            t: "mc",
            q: "Waarom luisterde Margaretha van Parma naar het Smeekschrift?",
            o: [
              "ze was bang voor een opstand van de edelen",
              "Filips II had haar opdracht gegeven te versoepelen",
              "ze was zelf protestants geworden",
              "de inquisitie had erom gevraagd"
            ],
            a: "ze was bang voor een opstand van de edelen",
            w: "Angst voor onrust. Daarom versoepelde ze — en wel op eigen gezag.",
            meer: "Dat 'op eigen gezag' is belangrijk: Filips had het niet goedgekeurd en was er achteraf woedend over.",
            fout: {
              "Filips II had haar opdracht gegeven te versoepelen": "Juist niet. Ze deed het <b>zelf</b>, zonder zijn toestemming. Filips was er allesbehalve blij mee.",
              "ze was zelf protestants geworden": "Nee, Margaretha bleef katholiek. Het was een politieke keuze uit angst voor onrust.",
              "de inquisitie had erom gevraagd": "De inquisitie wilde juist streng blijven vervolgen."
            }
          }
        ]
      },
      {
        n: 2, naam: "Zilver",
        uitleg: [
          "Het woord <b>geuzen</b> komt hier vandaan. Toen de lage edelen het Smeekschrift kwamen aanbieden, noemde een adviseur van Margaretha hen minachtend <i>gueux</i> — Frans voor <b>bedelaars</b> of schooiers.",
          "De edelen namen dat scheldwoord over als <b>erenaam</b>. Vanaf dat moment noemde iedereen die zich tegen Filips en Alva verzette zich een <b>geus</b>. Later krijg je daarvan de <b>watergeuzen</b>, die vanaf zee vechten.",
          "Zo'n scheldwoord dat je trots overneemt heet daarom nog steeds een <b>geuzennaam</b>.",
          "Kijk ook naar bron 2, de tekst van het Smeekschrift zelf. Daarin staan drie klachten: over de <b>vreemdelingen</b> in het bestuur, over de <b>inquisitie</b> als vreemde rechtbank, en over de <b>plakkaten en geloofsvervolgingen</b>."
        ],
        regel: "Geus komt van het Franse gueux = bedelaar. Bedoeld als scheldwoord, overgenomen als erenaam.",
        vragen: [
          {
            t: "mc",
            q: "Waar komt het woord <b>geuzen</b> vandaan?",
            o: [
              "van het Franse gueux, bedelaars — een scheldwoord dat ze overnamen",
              "van de stad Den Briel, waar ze vandaan kwamen",
              "van het Spaanse woord voor opstandeling",
              "van de naam van hun aanvoerder"
            ],
            a: "van het Franse gueux, bedelaars — een scheldwoord dat ze overnamen",
            w: "Een adviseur van Margaretha noemde de lage edelen zo bij het aanbieden van het Smeekschrift.",
            meer: "Daarom heet zoiets tegenwoordig een <b>geuzennaam</b>: een scheldwoord dat je trots overneemt.",
            fout: {
              "van de stad Den Briel, waar ze vandaan kwamen": "Den Briel is de stad die de watergeuzen in 1572 innamen — dat is iets heel anders dan waar de naam vandaan komt.",
              "van het Spaanse woord voor opstandeling": "Het is <b>Frans</b>, niet Spaans: <i>gueux</i> = bedelaars.",
              "van de naam van hun aanvoerder": "Hun bekendste leider was Willem van Oranje; daar komt de naam niet vandaan."
            }
          },
          {
            t: "mc",
            q: "Welke klacht staat <b>niet</b> in het Smeekschrift (bron 2)?",
            o: [
              "dat de belastingen te hoog zijn",
              "dat er te veel vreemdelingen in het landsbestuur zitten",
              "dat de inquisitie een vreemde rechtbank is",
              "dat de plakkaten en geloofsvervolgingen in strijd zijn met het recht"
            ],
            a: "dat de belastingen te hoog zijn",
            w: "Het Smeekschrift gaat over <b>geloof en bestuur</b>, niet over belasting.",
            meer: "Hoge belastingen waren wél een reden voor ontevredenheid over Filips, maar ze staan niet in deze bron. Let bij bronvragen dus goed op wat er écht staat.",
            fout: {
              "dat er te veel vreemdelingen in het landsbestuur zitten": "Dit staat er juist wél: over vreemdelingen die alleen op eigen voordeel uit zouden zijn.",
              "dat de inquisitie een vreemde rechtbank is": "Dit staat er wél: Nederlanders hadden vanouds het recht niet voor een vreemde rechtbank gedaagd te worden.",
              "dat de plakkaten en geloofsvervolgingen in strijd zijn met het recht": "Dit staat er wél, en zelfs in bewogen woorden."
            }
          },
          {
            t: "mc",
            q: "Wat deed Filips II toen hij van het Smeekschrift hoorde?",
            o: [
              "hij ging er niet op in",
              "hij ging meteen akkoord met de verzachting",
              "hij ontsloeg Margaretha onmiddellijk",
              "hij stuurde direct de hertog van Alva"
            ],
            a: "hij ging er niet op in",
            w: "Margaretha besprak het met hem, maar hij deed er niets mee.",
            meer: "Ze had de versoepelingen dus <b>zelf</b> doorgevoerd. Toen kort daarna de Beeldenstorm uitbrak, stuurde Filips wél iemand: Alva.",
            fout: {
              "hij ging meteen akkoord met de verzachting": "Nee. De versoepeling kwam van Margaretha, op eigen gezag — niet van Filips.",
              "hij ontsloeg Margaretha onmiddellijk": "Ze legde haar functie pas neer toen Alva in 1567 kwam.",
              "hij stuurde direct de hertog van Alva": "Alva kwam pas ná de Beeldenstorm, niet meteen na het Smeekschrift."
            }
          },
          {
            t: "gap",
            q: "Een scheldwoord dat een groep trots overneemt als erenaam heet een ___.",
            a: "geuzennaam|geuzen naam",
            w: "Zoals de geuzen deden met het Franse gueux (bedelaars).",
            meer: "Je gebruikt dit woord nog steeds in het Nederlands, juist dankzij deze geschiedenis."
          },
          {
            t: "sleep",
            opgave: "Stond deze klacht wél of niet in het Smeekschrift (bron 2)?",
            chips: [
              { t: "Vreemdelingen in het landsbestuur", bak: "wel" },
              { t: "De inquisitie als vreemde rechtbank", bak: "wel" },
              { t: "De plakkaten en geloofsvervolgingen", bak: "wel" },
              { t: "De hoogte van de belastingen", bak: "niet" },
              { t: "De vernielingen in de kerken", bak: "niet" },
              { t: "De Tiende Penning van Alva", bak: "niet" }
            ],
            bakjes: [
              { id: "wel", label: "staat in het Smeekschrift", som: "" },
              { id: "niet", label: "staat er niet in", som: "" }
            ],
            w: "Het Smeekschrift (1566) gaat over geloof en bestuur. Alles van Alva komt pas ná 1567 en kan er dus niet in staan."
          }
        ]
      },
      {
        n: 3, naam: "Goud",
        uitleg: [
          "Nu de <b>keten</b>. Dit is precies het soort redenering waar het SO punten voor geeft, en waar opdracht 3 van het werkboek over gaat.",
          "<b>Smeekschrift</b> (edelen vragen om mildheid) <b>→</b> Margaretha <b>versoepelt</b> <b>→</b> de vervolging stopt <b>→</b> het <b>calvinisme leeft op</b> <b>→</b> protestanten komen naar buiten, o.a. met <b>hagenpreken</b> <b>→</b> uiteindelijk de <b>Beeldenstorm</b>.",
          "Let op hoe raar dat eigenlijk is: de edelen wilden <b>rust</b>, en het resultaat was <b>meer onrust</b>. Dat is een <b>onbedoeld gevolg</b>.",
          "Gebruik bij dit soort antwoorden de signaalwoorden: <i>waardoor</i>, <i>daardoor</i>, <i>dit leidde ertoe dat</i>. Daarmee laat je zien dat je de verbinding snapt, en niet alleen de losse feiten."
        ],
        regel: "Smeekschrift → versoepeling → opleving van het calvinisme → hagenpreken → Beeldenstorm. De edelen wilden rust en kregen onrust: een onbedoeld gevolg.",
        vragen: [
          {
            t: "open",
            q: "Leg uit hoe het Smeekschrift der edelen uiteindelijk leidde tot méér onrust in de Nederlanden. Gebruik de woorden 'waardoor' of 'daardoor'.",
            punten: 3,
            modelantwoord: "De edelen vroegen in het Smeekschrift om een mildere behandeling van protestanten. Margaretha van Parma was bang voor een opstand en versoepelde de plakkaten, waardoor de vervolging van ketters stopte. Daardoor durfden de calvinisten weer naar buiten te komen en leefde het calvinisme op. Dat leidde uiteindelijk tot de hagenpreken en de Beeldenstorm.",
            sleutelwoorden: [
              { moet: ["versoepel", "milder", "verzacht", "stopte"], syn: ["soepeler", "minder streng"] },
              { moet: ["calvinis", "protestant"], syn: ["ketters"] },
              { moet: ["opleving", "opleefde", "groeide", "meer", "durfden", "beeldenstorm", "hagenpreek"], syn: ["toenam", "sterker"] }
            ],
            rubric: [
              "Je noemt dat er om verzachting werd gevraagd en dat Margaretha versoepelde",
              "Je legt uit dat het calvinisme daardoor opleefde",
              "Je verbindt dat aan de onrust die volgde (hagenpreken / Beeldenstorm)"
            ],
            w: "De keten is: vragen om mildheid → versoepeling → opleving calvinisme → hagenpreken → Beeldenstorm.",
            meer: "Signaalwoorden zoals <i>waardoor</i> en <i>daardoor</i> laten de nakijker zien dat je de oorzaak-gevolgketen begrijpt. Zonder die woorden lijkt het een opsomming van losse feiten."
          },
          {
            t: "mc",
            q: "Het Smeekschrift was bedoeld om rust te brengen, maar het leidde tot meer onrust. Hoe noem je zo'n gevolg?",
            o: ["een onbedoeld gevolg", "een bedoeld gevolg", "een directe oorzaak", "een indirecte oorzaak"],
            a: "een onbedoeld gevolg",
            w: "Niemand van de edelen wilde dit resultaat, en toch gebeurde het. Dat is per definitie onbedoeld.",
            meer: "Vuistregel: <b>gevolg</b> = het komt ná de gebeurtenis. <b>Onbedoeld</b> = niemand wilde dit. Samen: onbedoeld gevolg.",
            fout: {
              "een bedoeld gevolg": "Bedoeld zou betekenen dat de edelen méér onrust wílden. Ze wilden juist het tegenovergestelde: rust en mildheid.",
              "een directe oorzaak": "Een oorzaak komt vóór de gebeurtenis. Hier gaat het over wat er ná het Smeekschrift gebeurde, dus over een gevolg.",
              "een indirecte oorzaak": "Ook een oorzaak, dus ook fout om de tijdsvolgorde. Let op: oorzaak = ervoor, gevolg = erna."
            }
          },
          {
            t: "mc",
            q: "Wat is de <b>directe oorzaak</b> (de laatste druppel) voor het schrijven van het Smeekschrift?",
            o: [
              "de harde vervolging van protestanten met de plakkaten en de inquisitie",
              "de Beeldenstorm van 1566",
              "de komst van de hertog van Alva",
              "de invoering van de Tiende Penning"
            ],
            a: "de harde vervolging van protestanten met de plakkaten en de inquisitie",
            w: "De edelen schreven het Smeekschrift juist omdat de vervolging zo hard was geworden.",
            meer: "Check altijd de volgorde in de tijd: een oorzaak moet <b>vóór</b> de gebeurtenis liggen. Alles van Alva ligt erná en kan dus geen oorzaak zijn.",
            fout: {
              "de Beeldenstorm van 1566": "Die kwam ná het Smeekschrift, later in hetzelfde jaar. Een gebeurtenis die erna komt kan geen oorzaak zijn.",
              "de komst van de hertog van Alva": "Alva kwam in 1567, dus een jaar later. Onmogelijk als oorzaak.",
              "de invoering van de Tiende Penning": "Die stelde Alva pas in 1569 voor. Ruim ná het Smeekschrift."
            }
          },
          {
            t: "mc",
            q: "Wat is het belangrijkste verschil tussen het Smeekschrift (1566) en het Plakkaat van Verlatinghe (1581)?",
            o: [
              "het Smeekschrift vraagt de koning om mildheid, het Plakkaat zet hem af",
              "het Smeekschrift is van Filips, het Plakkaat van de edelen",
              "ze zijn hetzelfde, maar met een andere naam",
              "het Smeekschrift gaat over belasting, het Plakkaat over geloof"
            ],
            a: "het Smeekschrift vraagt de koning om mildheid, het Plakkaat zet hem af",
            w: "Vijftien jaar verschil, en een wereld van verschil: eerst beleefd vragen, later de koning afzweren.",
            meer: "Ezelsbruggetje: <b>S</b>meekschrift = <b>S</b>meken om mildheid. <b>V</b>erlatinghe = de koning <b>V</b>erlaten.",
            fout: {
              "het Smeekschrift is van Filips, het Plakkaat van de edelen": "Allebei kwamen ze van de Nederlandse kant, niet van Filips. Het Smeekschrift van de lage edelen, het Plakkaat van de Staten-Generaal.",
              "ze zijn hetzelfde, maar met een andere naam": "Dit is een veelgemaakte fout. Ze verschillen totaal: vragen om mildheid tegenover een koning afzetten.",
              "het Smeekschrift gaat over belasting, het Plakkaat over geloof": "Het Smeekschrift ging juist over geloof en bestuur, en van belasting is in geen van beide de kern."
            }
          },
          {
            t: "gap",
            q: "Godsdienstige bijeenkomsten in het open veld, geleid door een calvinistische predikant, heten ___.",
            a: "hagenpreken|hagenpreek|hagepreken|hagepreek",
            w: "Hagenpreken: kerkdiensten buiten, omdat protestanten niet meer in een kerk terechtkonden.",
            meer: "Ze kwamen vooral op ná de versoepeling van 1566. Bron 4 laat er een zien."
          }
        ]
      }
    ]
  },

  /* ==================== 3 · HAGENPREKEN EN DE BEELDENSTORM ==================== */
  {
    id: "beeldenstorm",
    emoji: "🔥",
    titel: "3 · Hagenpreken en de Beeldenstorm",
    paragraaf: "§4.4.2",
    kort: "Protestanten kerken in het open veld en schelden op de rijke katholieke kerk. In 1566 slaat dat om in vernieling: de Beeldenstorm.",
    niveaus: [
      {
        n: 1, naam: "Brons",
        uitleg: [
          "Protestanten mochten hun diensten niet meer in een kerk houden. Daarom hielden ze die in de open lucht: <b>hagenpreken</b>, geleid door een calvinistische predikant.",
          "Op die hagenpreken werden Filips II en de katholieken scherp veroordeeld. Twee verwijten kwamen steeds terug: katholieken <b>leefden niet volgens de Bijbel</b>, en ze <b>aanbaden heiligenbeelden</b> in veel te rijk versierde kerken.",
          "In <b>1566</b> sloeg dat om in daden. Groepjes calvinisten vielen doelbewust kerken en kloosters aan en sloegen de versieringen kapot. Omdat vooral <b>heiligenbeelden</b> het moesten ontgelden, heet dit de <b>Beeldenstorm</b>.",
          "Belangrijk: het ging om <b>spullen</b>, niet om mensen. Het was geen veldslag. Binnen een paar maanden trok de Beeldenstorm door het <b>westelijk deel</b> van de Nederlanden."
        ],
        regel: "Hagenpreek = kerkdienst in het open veld. Beeldenstorm (1566) = calvinisten slaan kerkversieringen en heiligenbeelden kapot.",
        vragen: [
          {
            t: "mc",
            q: "Wat gebeurde er tijdens de Beeldenstorm?",
            o: [
              "kerken en kloosters werden van hun katholieke versieringen ontdaan",
              "protestanten en katholieken vochten een veldslag uit",
              "de Spaanse soldaten vernielden protestantse kerken",
              "de koning liet alle beelden uit de kerken halen"
            ],
            a: "kerken en kloosters werden van hun katholieke versieringen ontdaan",
            w: "Beelden, altaren, pilaren en raamschilderingen gingen kapot. Het ging om voorwerpen.",
            meer: "Bron 5 beschrijft het precies zo: tussen augustus en oktober 1566 raken kerkinterieurs vaak onherstelbaar beschadigd.",
            fout: {
              "protestanten en katholieken vochten een veldslag uit": "Dit is een veelgemaakte fout. De Beeldenstorm was <b>vernieling van spullen</b>, geen gevecht tussen legers. De doden vielen pas daarna, door de Raad van Beroerten van Alva.",
              "de Spaanse soldaten vernielden protestantse kerken": "Precies andersom: het waren <b>calvinisten</b> die <b>katholieke</b> kerken vernielden.",
              "de koning liet alle beelden uit de kerken halen": "Filips II was juist woedend over de Beeldenstorm. Hij was zelf overtuigd katholiek."
            }
          },
          {
            t: "mc",
            q: "Wat is een <b>hagenpreek</b>?",
            o: [
              "een godsdienstige bijeenkomst in het open veld",
              "een preek waarin de koning wordt geprezen",
              "een rechtszaak tegen ketters",
              "een vergadering van de Nederlandse edelen"
            ],
            a: "een godsdienstige bijeenkomst in het open veld",
            w: "Buiten kerken, want protestanten konden nergens anders terecht. Geleid door een calvinistische predikant.",
            meer: "Waar het woord vandaan komt is niet zeker — misschien van de hagen of heggen waartussen zo'n dienst werd gehouden.",
            fout: {
              "een preek waarin de koning wordt geprezen": "Integendeel: op hagenpreken werden Filips II en de katholieken juist scherp veroordeeld.",
              "een rechtszaak tegen ketters": "Dat is de inquisitie (en later de Raad van Beroerten).",
              "een vergadering van de Nederlandse edelen": "Nee, dit was een <b>kerkdienst</b>, voor gewone gelovigen."
            }
          },
          {
            t: "gap",
            q: "De Beeldenstorm vond plaats in het jaar ___.",
            a: "1566",
            w: "1566 — hetzelfde jaar als het Smeekschrift, maar wel eráchter.",
            meer: "Volgorde binnen 1566: eerst het Smeekschrift, dan de versoepeling, dan de hagenpreken, dan de Beeldenstorm."
          },
          {
            t: "mc",
            q: "Welk verwijt maakten de calvinisten aan de katholieken?",
            o: [
              "dat ze niet volgens de Bijbel leefden en heiligenbeelden aanbaden",
              "dat ze te weinig belasting betaalden",
              "dat ze in het open veld kerkten",
              "dat ze de koning niet gehoorzaamden"
            ],
            a: "dat ze niet volgens de Bijbel leefden en heiligenbeelden aanbaden",
            w: "Twee verwijten: niet Bijbels leven, en beelden aanbidden in overdadig versierde kerken.",
            meer: "Dat tweede verwijt verklaart meteen waaróm juist de <b>beelden</b> het doelwit werden bij de Beeldenstorm.",
            fout: {
              "dat ze te weinig belasting betaalden": "Het ging om <b>geloof</b>, niet om geld. Wel waren de calvinisten boos over de rijkdom van de kerk.",
              "dat ze in het open veld kerkten": "Dat deden de calvinisten zelf — noodgedwongen, want ze mochten de kerken niet in.",
              "dat ze de koning niet gehoorzaamden": "De katholieken waren juist trouw aan de koning. Dat was het probleem niet."
            }
          },
          {
            t: "sleep",
            opgave: "Hoort dit bij de calvinisten of bij de katholieken?",
            chips: [
              { t: "Hagenpreken in het open veld", bak: "calv" },
              { t: "Volgelingen van Johannes Calvijn", bak: "calv" },
              { t: "Vernielden kerkversieringen in 1566", bak: "calv" },
              { t: "Heiligenbeelden in de kerk", bak: "kath" },
              { t: "Rijk versierde kerkgebouwen", bak: "kath" },
              { t: "Het geloof van Filips II", bak: "kath" }
            ],
            bakjes: [
              { id: "calv", label: "calvinisten (protestant)", som: "" },
              { id: "kath", label: "katholieken", som: "" }
            ],
            w: "Calvinisten: sober, buiten, tegen beelden. Katholieken: rijke kerken, heiligenbeelden, het geloof van de koning."
          }
        ]
      },
      {
        n: 2, naam: "Zilver",
        uitleg: [
          "De Beeldenstorm kwam niet uit de lucht vallen. Er waren <b>meerdere oorzaken</b> tegelijk — dat heet <b>multicausaal</b>, en historici vinden dat juist het interessante eraan.",
          "<b>Religieuze oorzaken:</b> de calvinisten vonden dat katholieken niet volgens de Bijbel leefden en dat het aanbidden van heiligenbeelden niet hoorde. Op de hagenpreken werd die boosheid steeds verder opgestookt.",
          "<b>Economische oorzaak:</b> de calvinisten waren ook boos op de <b>rijkdom</b> van de katholieke kerk — al dat goud en zilver, terwijl gewone mensen het zwaar hadden.",
          "<b>Politieke aanloop:</b> door de versoepeling na het Smeekschrift werd er niet meer vervolgd. Daardoor durfden de calvinisten zich openlijk te laten zien — en uiteindelijk toe te slaan."
        ],
        regel: "De Beeldenstorm had meerdere oorzaken tegelijk: religieuze (Bijbel, beelden), economische (rijkdom van de kerk) en de ruimte die de versoepeling gaf.",
        vragen: [
          {
            t: "sleep",
            opgave: "Sorteer: is dit een oorzaak of een gevolg van de Beeldenstorm?",
            chips: [
              { t: "Hagenpreken stoken de boosheid op", bak: "oorzaak" },
              { t: "Calvinisten zijn boos op de rijkdom van de kerk", bak: "oorzaak" },
              { t: "De versoepeling van de plakkaten geeft ruimte", bak: "oorzaak" },
              { t: "Filips II stuurt de hertog van Alva", bak: "gevolg" },
              { t: "De Raad van Beroerten wordt opgericht", bak: "gevolg" },
              { t: "Margaretha van Parma legt haar functie neer", bak: "gevolg" }
            ],
            bakjes: [
              { id: "oorzaak", label: "oorzaak (kwam ervóór)", som: "" },
              { id: "gevolg", label: "gevolg (kwam erná)", som: "" }
            ],
            w: "Zet alles op de tijdlijn. Wat vóór 1566 speelt is oorzaak; alles wat met Alva te maken heeft komt erna en is dus gevolg."
          },
          {
            t: "mc",
            q: "Wat was een <b>economische</b> oorzaak van de Beeldenstorm?",
            o: [
              "de calvinisten waren boos op de rijkdom van de katholieke kerk",
              "de Tiende Penning maakte alles duurder",
              "de gewesten wilden hun privileges houden",
              "de hagenpreken werden in het open veld gehouden"
            ],
            a: "de calvinisten waren boos op de rijkdom van de katholieke kerk",
            w: "Rijkdom en geld → economisch. De pracht en praal van de kerken stak.",
            meer: "Let op: dezelfde gebeurtenis kan oorzaken van meerdere soorten hebben. De Beeldenstorm had religieuze én economische oorzaken.",
            fout: {
              "de Tiende Penning maakte alles duurder": "Wel economisch, maar de Tiende Penning kwam pas in 1569 — ná de Beeldenstorm. Een gebeurtenis die later komt kan geen oorzaak zijn.",
              "de gewesten wilden hun privileges houden": "Dat is een <b>politieke</b> kwestie, en het gaat over het conflict met Filips in het algemeen, niet over de Beeldenstorm.",
              "de hagenpreken werden in het open veld gehouden": "Dat is een <b>religieuze</b> oorzaak, geen economische."
            }
          },
          {
            t: "mc",
            q: "Wat was een direct <b>politiek gevolg</b> van de Beeldenstorm?",
            o: [
              "Margaretha van Parma legde haar functie als landvoogdes neer",
              "de calvinisten kregen meer aanhang",
              "de kerken werden opnieuw ingericht",
              "de hagenpreken begonnen"
            ],
            a: "Margaretha van Parma legde haar functie als landvoogdes neer",
            w: "Toen Alva kwam, trad zij af. Dat is een verandering in het <b>bestuur</b>, dus politiek.",
            meer: "Voor haar was dit een <b>onbedoeld gevolg</b>: zij had de versoepeling juist doorgevoerd om onrust te voorkomen, en verloor er uiteindelijk haar functie door.",
            fout: {
              "de calvinisten kregen meer aanhang": "Dat gebeurde vooral vóór en tijdens 1566, en het is bovendien een <b>religieus</b> gevolg, geen politiek.",
              "de kerken werden opnieuw ingericht": "Dat staat niet in de stof, en het is geen gevolg dat over bestuur gaat.",
              "de hagenpreken begonnen": "Die waren er al vóór de Beeldenstorm — het was juist een van de oorzaken."
            }
          },
          {
            t: "gap",
            q: "In een paar maanden trok de Beeldenstorm door het ___ deel van de Nederlanden.",
            a: "westelijk|westelijke|westen|west",
            w: "Het westelijk deel. De storm begon in het zuiden en trok razendsnel verder.",
            meer: "De allereerste vernielingen waren op 10 augustus 1566 bij Steenvoorde, in de zuidelijke Nederlanden, na een hagenpreek."
          },
          {
            t: "mc",
            q: "Waarom gaf juist de <b>versoepeling</b> van Margaretha ruimte aan de Beeldenstorm?",
            o: [
              "omdat de vervolging stopte, durfden calvinisten openlijk naar buiten te komen",
              "omdat zij opdracht gaf de beelden te verwijderen",
              "omdat de calvinisten daardoor katholiek werden",
              "omdat er geen soldaten meer in de Nederlanden waren"
            ],
            a: "omdat de vervolging stopte, durfden calvinisten openlijk naar buiten te komen",
            w: "Geen vervolging meer = minder angst = zichtbaarder, groter en brutaler.",
            meer: "Dit is het tweede voorbeeld van de boemerang in dit hoofdstuk: een maatregel die bedoeld was om rust te brengen, bracht juist onrust.",
            fout: {
              "omdat zij opdracht gaf de beelden te verwijderen": "Beslist niet. Margaretha was katholiek; de vernielingen kwamen van calvinistische groepen, niet van het bestuur.",
              "omdat de calvinisten daardoor katholiek werden": "Het omgekeerde gebeurde: het calvinisme leefde juist op.",
              "omdat er geen soldaten meer in de Nederlanden waren": "Dat staat niet in de stof. Het ging om het stoppen van de <b>vervolging</b>, niet om het weghalen van een leger."
            }
          }
        ]
      },
      {
        n: 3, naam: "Goud",
        uitleg: [
          "Bij de bronnen 4 en 5 vraagt het werkboek steeds: <b>welk begrip past het beste bij deze bron?</b> Dat is een vaste vraagvorm, en je scoort er alleen op als je het <b>uitlegt</b>.",
          "De aanpak in drie stappen: <b>1)</b> noem het begrip, <b>2)</b> geef de betekenis, <b>3)</b> wijs aan wát je op de bron ziet waardoor het klopt.",
          "Bron 4 (kerkdienst in de open lucht) → <b>hagenpreek</b>: je ziet mensen buiten in het veld luisteren naar een predikant, en dat is precies wat een hagenpreek is.",
          "Bron 5 (vernieling van een katholieke kerk) → <b>Beeldenstorm</b>: je ziet hoe het interieur van een kerk wordt kapotgeslagen — altaren, beelden en ramen."
        ],
        regel: "Bronvraag? Noem het begrip, geef de betekenis, en wijs aan wat je op de bron ziet. Alle drie, anders mis je punten.",
        vragen: [
          {
            t: "open",
            q: "Bron 5 laat zien hoe het interieur van een katholieke kerk wordt vernield. Leg uit welk begrip het beste bij deze bron past.",
            punten: 2,
            modelantwoord: "Het begrip dat het beste past is de Beeldenstorm. Dat is de uitbarsting van geweld onder het calvinistische volk in 1566, waarbij kerken en kloosters werden ontdaan van hun katholieke versieringen. Op de bron zie je precies dat gebeuren: het kerkinterieur wordt kapotgeslagen, met altaren, heiligenbeelden en raamschilderingen.",
            sleutelwoorden: [
              { moet: ["beeldenstorm"], syn: [] },
              { moet: ["1566", "versiering", "beelden", "kerk", "vernield", "kapot"], syn: ["kloosters", "interieur"] }
            ],
            rubric: [
              "Je noemt het begrip Beeldenstorm",
              "Je geeft de betekenis én wijst aan wat je op de bron ziet"
            ],
            w: "Beeldenstorm: 1566, calvinisten ontdoen kerken en kloosters van katholieke versieringen — precies wat de bron toont.",
            meer: "Bij 'welk begrip past bij deze bron' is de betekenis geven én het bewijs uit de bron aanwijzen samen goed voor de punten. Alleen het woord noemen levert bijna niets op."
          },
          {
            t: "mc",
            q: "Welk <b>onbedoeld gevolg</b> had de Beeldenstorm voor de protestanten zelf?",
            o: [
              "Filips stuurde Alva, die hen juist harder ging vervolgen",
              "ze mochten voortaan in de kerken terecht",
              "de plakkaten werden verder versoepeld",
              "Margaretha van Parma werd protestant"
            ],
            a: "Filips stuurde Alva, die hen juist harder ging vervolgen",
            w: "De protestanten wilden hun onvrede tonen; het resultaat was een landvoogd die genadeloos optrad.",
            meer: "Bedoeld gevolg voor de protestanten: de katholieke pracht verdween uit die kerken. Onbedoeld gevolg: de Raad van Beroerten en jarenlange vervolging.",
            fout: {
              "ze mochten voortaan in de kerken terecht": "Het tegenovergestelde gebeurde. Alva kreeg juist de opdracht het katholieke geloof op te leggen, desnoods met geweld.",
              "de plakkaten werden verder versoepeld": "De versoepeling was juist voorbij. Na de Beeldenstorm volgde de hardste periode van allemaal.",
              "Margaretha van Parma werd protestant": "Dat gebeurde niet. Ze legde haar functie neer toen Alva kwam."
            }
          },
          {
            t: "mc",
            q: "Waarom kun je zeggen dat de Beeldenstorm de <b>aanleiding</b> was voor de komst van Alva?",
            o: [
              "het was de laatste druppel waardoor Filips II direct ingreep",
              "het was een oorzaak die al jaren speelde",
              "Alva was al onderweg voordat het gebeurde",
              "Alva kwam om de kerken te herstellen"
            ],
            a: "het was de laatste druppel waardoor Filips II direct ingreep",
            w: "Aanleiding = directe oorzaak = de laatste druppel. Filips hoorde het en stuurde meteen zijn beste generaal.",
            meer: "De <b>indirecte</b> oorzaken speelden al veel langer: de groei van het calvinisme, de belastingen en het conflict over centralisatie.",
            fout: {
              "het was een oorzaak die al jaren speelde": "Dat is de omschrijving van een <b>indirecte</b> oorzaak. De Beeldenstorm was juist één concrete gebeurtenis waar Filips meteen op reageerde.",
              "Alva was al onderweg voordat het gebeurde": "Nee. Filips stuurde hem juist als reactie op de Beeldenstorm.",
              "Alva kwam om de kerken te herstellen": "Hij kwam met drie andere opdrachten: straffen, het katholieke geloof opleggen en centraal bestuur instellen."
            }
          },
          {
            t: "mc",
            q: "Een leerling zegt: 'Bij de Beeldenstorm zijn duizend mensen vermoord.' Wat klopt daar niet aan?",
            o: [
              "de Beeldenstorm ging om vernielde spullen; de 1100 doodvonnissen kwamen van de Raad van Beroerten",
              "er zijn helemaal geen mensen gestorven in deze tijd",
              "het waren er veel meer dan duizend",
              "de Raad van Beroerten heeft juist niemand veroordeeld"
            ],
            a: "de Beeldenstorm ging om vernielde spullen; de 1100 doodvonnissen kwamen van de Raad van Beroerten",
            w: "Twee dingen worden hier door elkaar gehaald: de vernieling (1566) en de bestraffing daarna (vanaf 1567).",
            meer: "De Raad van Beroerten veroordeelde in negen jaar ongeveer 1100 mensen ter dood. Vandaar de bijnaam 'bloedraad'.",
            fout: {
              "er zijn helemaal geen mensen gestorven in deze tijd": "Die waren er zeker wel — maar door de <b>vervolging</b>, niet door de Beeldenstorm zelf.",
              "het waren er veel meer dan duizend": "Het getal 1100 hoort bij de Raad van Beroerten, niet bij de Beeldenstorm. Het aantal is niet de fout, de gebeurtenis is het.",
              "de Raad van Beroerten heeft juist niemand veroordeeld": "Juist wel: ongeveer 1100 doodvonnissen in negen jaar."
            }
          },
          {
            t: "gap",
            q: "Vul in: de Beeldenstorm was de ___ (= directe oorzaak, de laatste druppel) voor de komst van Alva.",
            a: "aanleiding|directe oorzaak",
            w: "Aanleiding is een ander woord voor directe oorzaak: de druppel die de emmer doet overlopen.",
            meer: "Op het SO kun je beide woorden gebruiken, maar wees consequent en leg uit waarom het de laatste druppel was."
          }
        ]
      }
    ]
  },

  /* ==================== 4 · ALVA'S HARDE HAND ==================== */
  {
    id: "alva",
    emoji: "⚔️",
    titel: "4 · Alva's harde hand",
    paragraaf: "§4.4.2",
    kort: "Filips stuurt zijn beste generaal met drie opdrachten. Alva straft, dwingt en belast — en maakt het verzet daarmee juist groter.",
    niveaus: [
      {
        n: 1, naam: "Brons",
        uitleg: [
          "Filips II was woest over de Beeldenstorm en stuurde in <b>1567</b> zijn beste generaal: de <b>hertog van Alva</b>. Margaretha van Parma legde haar functie neer; Alva werd <b>landvoogd</b> in haar plaats.",
          "Alva mocht zelf weten hoe hij het aanpakte, als hij maar <b>drie opdrachten</b> uitvoerde. Onthoud ze als <b>straffen, geloof, bestuur</b>:",
          "<b>1. De beeldenstormers straffen.</b> Daarvoor richtte hij de <b>Raad van Beroerten</b> op. Door de harde vonnissen kreeg die de bijnaam <b>bloedraad</b>: in negen jaar ongeveer 1100 doodvonnissen. Ook hoge edelen die de Beeldenstorm niet hadden tegengehouden werden veroordeeld.<br><b>2. Het katholieke geloof opleggen</b>, desnoods met geweld.<br><b>3. Een echt centraal bestuur instellen</b>, zodat de macht van de gewesten gebroken werd.",
          "Om de Nederlanden ook <b>economisch</b> te straffen voerde Alva de <b>Tiende Penning</b> in: 10 procent belasting op de verkoop van goederen en op winst. Daarmee betaalde hij zijn leger."
        ],
        regel: "Alva's drie opdrachten: straffen (Raad van Beroerten), het katholieke geloof opleggen, en centraal bestuur instellen. Plus geld ophalen met de Tiende Penning.",
        vragen: [
          {
            t: "mc",
            q: "Waarvoor richtte Alva de <b>Raad van Beroerten</b> op?",
            o: [
              "om de beeldenstormers en de verantwoordelijken te straffen",
              "om de belasting te innen",
              "om de gewesten te laten meebesturen",
              "om de katholieke kerken te herstellen"
            ],
            a: "om de beeldenstormers en de verantwoordelijken te straffen",
            w: "Het was een <b>rechtbank</b>, opgericht om te straffen. 'Beroerten' betekent onlusten of onrust.",
            meer: "Ook hoge edelen die de Beeldenstorm niet hadden tegengehouden werden veroordeeld. Veel edelen vluchtten daarom naar het buitenland.",
            fout: {
              "om de belasting te innen": "Dat was de <b>Tiende Penning</b>, een belasting — geen rechtbank. Twee verschillende maatregelen van Alva.",
              "om de gewesten te laten meebesturen": "Precies het tegenovergestelde: Alva moest de macht van de gewesten juist <b>breken</b>.",
              "om de katholieke kerken te herstellen": "Zijn opdracht was het katholieke geloof <b>opleggen</b>, niet gebouwen repareren."
            }
          },
          {
            t: "mc",
            q: "Wat was de <b>Tiende Penning</b>?",
            o: [
              "een belasting van 10% op verkoop en winst",
              "een boete van tien gulden voor beeldenstormers",
              "het tiende deel van het leger van Alva",
              "een muntstuk dat Alva liet slaan"
            ],
            a: "een belasting van 10% op verkoop en winst",
            w: "Tiende Penning = tien procent. Van de opbrengst betaalde Alva zijn leger.",
            meer: "Het was bedoeld als straf én als inkomstenbron, maar het stuitte op enorm verzet: het raakte iedereen die handel dreef.",
            fout: {
              "een boete van tien gulden voor beeldenstormers": "Nee, het was een <b>vaste belasting</b> voor iedereen, niet een straf voor een paar daders.",
              "het tiende deel van het leger van Alva": "De naam gaat over geld, niet over soldaten. Wel betaalde hij zijn leger ervan.",
              "een muntstuk dat Alva liet slaan": "Penning klinkt als munt, maar hier betekent het een <b>deel</b>: een tiende, oftewel 10 procent."
            }
          },
          {
            t: "gap",
            q: "De Raad van Beroerten kreeg vanwege de harde vonnissen de bijnaam ___.",
            a: "bloedraad|de bloedraad|'bloedraad'",
            w: "Bloedraad: ongeveer 1100 doodvonnissen in negen jaar tijd.",
            meer: "Let op het verschil met de <b>bloedplakkaten</b>: dat waren de wetten (al van Karel V), de bloedraad was de rechtbank van Alva."
          },
          {
            t: "mc",
            q: "Wat gebeurde er met Margaretha van Parma toen Alva kwam?",
            o: [
              "zij legde haar functie als landvoogdes neer",
              "zij werd door Alva gevangengenomen",
              "zij bleef samen met Alva besturen",
              "zij vluchtte naar het buitenland"
            ],
            a: "zij legde haar functie als landvoogdes neer",
            w: "Ze trad af; Alva werd landvoogd in haar plaats.",
            meer: "Voor haar was dit een <b>onbedoeld gevolg</b> van haar eigen versoepeling: die was bedoeld om rust te brengen, en kostte haar uiteindelijk haar functie.",
            fout: {
              "zij werd door Alva gevangengenomen": "Dat staat niet in de stof. Ze trad zelf af.",
              "zij bleef samen met Alva besturen": "Nee — Alva nam haar functie over. Er was één landvoogd tegelijk.",
              "zij vluchtte naar het buitenland": "Dat deden veel Nederlandse <b>edelen</b>, uit angst voor de Raad van Beroerten. Margaretha trad gewoon af."
            }
          },
          {
            t: "sleep",
            opgave: "Bij welke opdracht van Alva hoort deze maatregel?",
            chips: [
              { t: "De Raad van Beroerten oprichten", bak: "straffen" },
              { t: "Beeldenstormers laten veroordelen", bak: "straffen" },
              { t: "Het katholieke geloof met geweld opleggen", bak: "geloof" },
              { t: "Protestanten blijven vervolgen", bak: "geloof" },
              { t: "De macht van de gewesten breken", bak: "bestuur" },
              { t: "Eén centraal bestuur instellen", bak: "bestuur" }
            ],
            bakjes: [
              { id: "straffen", label: "1 · straffen", som: "" },
              { id: "geloof", label: "2 · katholiek geloof opleggen", som: "" },
              { id: "bestuur", label: "3 · centraal bestuur", som: "" }
            ],
            w: "Alva's drie opdrachten: straffen, geloof, bestuur. De Tiende Penning hoort er los bij — dat was geld ophalen."
          }
        ]
      },
      {
        n: 2, naam: "Zilver",
        uitleg: [
          "Twee maatregelen van Alva worden vaak door elkaar gehaald. Zet ze scherp naast elkaar:",
          "<b>Raad van Beroerten</b> = een <b>rechtbank</b>. Doel: straffen. Slachtoffers: beeldenstormers en edelen. Bijnaam: bloedraad. Soort: <b>politiek/religieus</b>.",
          "<b>Tiende Penning</b> = een <b>belasting</b> van 10%. Doel: geld voor het leger, en de Nederlanden economisch straffen. Slachtoffers: iedereen die handel dreef. Soort: <b>economisch</b>.",
          "Alva kreeg van Filips een <b>onbeperkte volmacht</b>: hij mocht zelf bepalen hoe hij de protestanten aanpakte, zonder eerst toestemming te vragen. Hij gebruikte die door mensen zonder pardon te laten veroordelen — ook zonder eerlijk proces."
        ],
        regel: "Raad van Beroerten = rechtbank (straffen). Tiende Penning = belasting (geld). Verwar ze niet: de één kost je je leven, de ander je winst.",
        vragen: [
          {
            t: "mc",
            q: "Wat hield Alva's <b>onbeperkte volmacht</b> in?",
            o: [
              "hij mocht zelf bepalen hoe hij optrad, zonder toestemming vooraf",
              "hij mocht onbeperkt belasting heffen maar niet straffen",
              "hij mocht alleen handelen als Filips het goedkeurde",
              "hij mocht de gewesten hun privileges teruggeven"
            ],
            a: "hij mocht zelf bepalen hoe hij optrad, zonder toestemming vooraf",
            w: "Volmacht = de macht om zelf te beslissen. Onbeperkt = zonder grenzen vooraf.",
            meer: "Hij gebruikte die volmacht door iedereen die van ketterij of verraad verdacht werd zonder pardon te laten veroordelen door de Raad van Beroerten.",
            fout: {
              "hij mocht onbeperkt belasting heffen maar niet straffen": "Andersom zou nog kloppen: straffen was juist zijn eerste opdracht. De volmacht ging over álles.",
              "hij mocht alleen handelen als Filips het goedkeurde": "Dat is het tegenovergestelde van onbeperkt. Juist dát hoefde hij niet.",
              "hij mocht de gewesten hun privileges teruggeven": "Zijn opdracht was juist de macht van de gewesten te <b>breken</b>."
            }
          },
          {
            t: "mc",
            q: "Wat was een <b>economische oorzaak</b> voor de invoering van de Tiende Penning?",
            o: [
              "Alva had geld nodig om zijn leger te betalen",
              "de gewesten wilden hun privileges houden",
              "de calvinisten hielden hagenpreken",
              "Margaretha van Parma was afgetreden"
            ],
            a: "Alva had geld nodig om zijn leger te betalen",
            w: "Een leger onderhouden kost veel geld. Daar kwam de belasting vandaan.",
            meer: "Het <b>economische gevolg</b> was dat iedereen die handel dreef 10% moest afdragen — en dat leidde tot enorm verzet.",
            fout: {
              "de gewesten wilden hun privileges houden": "Dat is een <b>politieke</b> kwestie, geen economische reden voor een belasting.",
              "de calvinisten hielden hagenpreken": "Dat is <b>religieus</b>, en het heeft niets met de belasting te maken.",
              "Margaretha van Parma was afgetreden": "Dat is een politiek gevolg van Alva's komst, geen reden om belasting in te voeren."
            }
          },
          {
            t: "mc",
            q: "Waarom vluchtten veel Nederlandse edelen naar het buitenland?",
            o: [
              "uit angst voor de Raad van Beroerten",
              "omdat ze de Tiende Penning niet konden betalen",
              "omdat hun kerken vernield waren",
              "omdat Filips II hun land had afgepakt"
            ],
            a: "uit angst voor de Raad van Beroerten",
            w: "Ook hoge edelen werden veroordeeld, vooral omdat ze de Beeldenstorm niet hadden tegengehouden.",
            meer: "Wie bleef, werd zonder pardon van verraad beschuldigd. Willem van Oranje week uit naar Duitsland en organiseerde vandaaruit het verzet.",
            fout: {
              "omdat ze de Tiende Penning niet konden betalen": "De Tiende Penning raakte vooral handelaars, en kwam later (1569). De vlucht van de edelen kwam door de <b>vervolging</b>.",
              "omdat hun kerken vernield waren": "De vernielde kerken waren katholiek en van de kerk, niet van de edelen persoonlijk.",
              "omdat Filips II hun land had afgepakt": "Dat staat niet in de stof. Het ging om het gevaar van <b>veroordeling</b>."
            }
          },
          {
            t: "gap",
            q: "De rechtbank die Alva oprichtte om de beeldenstormers te straffen heet de ___.",
            a: "Raad van Beroerten|raad van beroerten",
            w: "Raad van Beroerten. 'Beroerten' betekent onlusten of onrust.",
            meer: "Bijnaam: bloedraad. Ongeveer 1100 doodvonnissen in negen jaar."
          },
          {
            t: "sleep",
            opgave: "Hoort dit bij de Raad van Beroerten of bij de Tiende Penning?",
            chips: [
              { t: "Een rechtbank", bak: "raad" },
              { t: "Bijnaam: bloedraad", bak: "raad" },
              { t: "Ongeveer 1100 doodvonnissen", bak: "raad" },
              { t: "10 procent belasting", bak: "penning" },
              { t: "Betaalde het leger van Alva", bak: "penning" },
              { t: "Raakte iedereen die handel dreef", bak: "penning" }
            ],
            bakjes: [
              { id: "raad", label: "Raad van Beroerten", som: "" },
              { id: "penning", label: "Tiende Penning", som: "" }
            ],
            w: "Raad van Beroerten = straffen (rechtbank). Tiende Penning = geld (belasting)."
          }
        ]
      },
      {
        n: 3, naam: "Goud",
        uitleg: [
          "Alva kwam om de <b>orde te herstellen</b>. Dat was het <b>bedoelde</b> gevolg. Maar wat er echt gebeurde, was het tegenovergestelde: het verzet werd juist groter en er brak een oorlog uit die tachtig jaar zou duren.",
          "Waarom werkte het averechts? Drie dingen tegelijk:",
          "<b>1)</b> De Raad van Beroerten raakte niet alleen beeldenstormers maar ook <b>edelen</b> — daardoor kregen de opstandelingen machtige bondgenoten.<br><b>2)</b> De Tiende Penning raakte <b>iedereen die handel dreef</b> — daardoor kregen ook niet-protestanten een reden om boos te zijn.<br><b>3)</b> Het harde optreden maakte van een <b>geloofsconflict</b> een conflict over <b>vrijheid en bestuur</b>, waar veel meer mensen zich in herkenden.",
          "Dit is de kern van het kenmerkend aspect: een conflict dat groeide en groeide, tot er uiteindelijk een nieuwe staat uit ontstond."
        ],
        regel: "Alva's harde hand had een bedoeld gevolg (orde herstellen) dat mislukte, en een onbedoeld gevolg (een veel bredere opstand) dat lukte.",
        vragen: [
          {
            t: "open",
            q: "Leg uit waarom het harde optreden van Alva juist leidde tot méér verzet in de Nederlanden. Noem minstens twee redenen.",
            punten: 3,
            modelantwoord: "De Raad van Beroerten veroordeelde niet alleen beeldenstormers maar ook hoge edelen, waardoor ook machtige mensen zich tegen Alva keerden en veel edelen vluchtten. Daarnaast raakte de Tiende Penning iedereen die handel dreef, waardoor ook katholieken en niet-protestanten een reden kregen om boos te zijn. Zo werd het conflict veel breder dan alleen een conflict over geloof.",
            sleutelwoorden: [
              { moet: ["edelen", "raad van beroerten", "bloedraad"], syn: ["adel"] },
              { moet: ["tiende penning", "belasting", "handel", "geld"], syn: ["economisch"] },
              { moet: ["breder", "meer mensen", "iedereen", "ook", "groter"], syn: ["niet alleen", "bredere groep"] }
            ],
            rubric: [
              "Je noemt dat de Raad van Beroerten ook edelen trof",
              "Je noemt dat de Tiende Penning iedereen met handel trof",
              "Je legt uit dat het verzet daardoor breder werd dan alleen geloof"
            ],
            w: "Twee groepen erbij: edelen (door de bloedraad) en handelaars (door de Tiende Penning). Daardoor werd het verzet veel breder.",
            meer: "Op het SO is 'noem minstens twee redenen' een instructie om echt twee dingen uit te werken. Eén reden goed uitleggen levert nooit alle punten op."
          },
          {
            t: "mc",
            q: "Alva werd gestuurd om orde te herstellen, maar het verzet werd juist groter. Hoe noem je dat?",
            o: ["een onbedoeld gevolg", "een bedoeld gevolg", "een aanleiding", "continuïteit"],
            a: "een onbedoeld gevolg",
            w: "Filips wilde rust, en kreeg oorlog. Precies het tegenovergestelde van de bedoeling.",
            meer: "Het <b>bedoelde</b> gevolg van Alva's komst was: beeldenstormers straffen en de orde herstellen. Dat eerste lukte; dat tweede juist helemaal niet.",
            fout: {
              "een bedoeld gevolg": "Dan had Filips een grotere opstand gewild. Dat wilde hij absoluut niet — hij stuurde Alva juist om rust te krijgen.",
              "een aanleiding": "Een aanleiding is een <b>directe oorzaak</b>, dus iets dat ervóór komt. Hier gaat het om wat er ná Alva's optreden gebeurde.",
              "continuïteit": "Dat betekent dat iets hetzelfde blijft. Hier verandert er juist heel veel."
            }
          },
          {
            t: "mc",
            q: "Waarom was de Tiende Penning zo slim én zo dom tegelijk van Alva?",
            o: [
              "slim omdat het geld opleverde, dom omdat het ook katholieken tegen hem opzette",
              "slim omdat het protestanten trof, dom omdat het te weinig opleverde",
              "slim omdat de edelen het betaalden, dom omdat boeren vrijgesteld waren",
              "slim omdat Filips het wilde, dom omdat het pas in 1588 inging"
            ],
            a: "slim omdat het geld opleverde, dom omdat het ook katholieken tegen hem opzette",
            w: "Een belasting op handel raakt iedereen — ook mensen die met het geloofsconflict niets te maken hadden.",
            meer: "Zo veranderde een conflict over geloof in een conflict waar veel meer mensen een belang bij hadden. Dat is precies hoe een opstand groot wordt.",
            fout: {
              "slim omdat het protestanten trof, dom omdat het te weinig opleverde": "De belasting trof juist <b>iedereen</b>, niet alleen protestanten. Dat was nou net het probleem.",
              "slim omdat de edelen het betaalden, dom omdat boeren vrijgesteld waren": "Het ging om verkoop en winst uit ondernemingen — dus vooral handelaars, en niemand was uitgezonderd.",
              "slim omdat Filips het wilde, dom omdat het pas in 1588 inging": "Alva stelde het in 1569 voor, niet in 1588. 1588 is het jaar van de Republiek."
            }
          },
          {
            t: "mc",
            q: "Wat is het verschil tussen de <b>bloedplakkaten</b> en de <b>bloedraad</b>?",
            o: [
              "plakkaten zijn wetten (al van Karel V); de bloedraad is Alva's rechtbank",
              "plakkaten zijn van Alva; de bloedraad is van Karel V",
              "het zijn twee namen voor hetzelfde",
              "plakkaten gingen over belasting, de bloedraad over geloof"
            ],
            a: "plakkaten zijn wetten (al van Karel V); de bloedraad is Alva's rechtbank",
            w: "Wet tegenover rechtbank, en Karel V tegenover Alva. Twee verschillende dingen met een vergelijkbare bijnaam.",
            meer: "De bloedplakkaten werden in 1550 door Karel V uitgevaardigd. De Raad van Beroerten richtte Alva op in 1567.",
            fout: {
              "plakkaten zijn van Alva; de bloedraad is van Karel V": "Precies omgedraaid. Karel V maakte de plakkaten; Alva richtte de bloedraad op.",
              "het zijn twee namen voor hetzelfde": "Nee: een plakkaat is een <b>wet op papier</b>, de bloedraad was een <b>rechtbank met rechters</b>.",
              "plakkaten gingen over belasting, de bloedraad over geloof": "De plakkaten gingen juist over <b>geloof</b> (ketters). Belasting is de Tiende Penning."
            }
          },
          {
            t: "gap",
            q: "Alva kreeg van Filips II een ___ volmacht: hij mocht zelf bepalen hoe hij optrad.",
            a: "onbeperkte|onbeperkt",
            w: "Onbeperkte volmacht: geen toestemming vooraf nodig, geen grenzen aan zijn optreden.",
            meer: "Bij opdracht 5b van het werkboek moet je twee dingen doen: uitleggen wát die volmacht inhoudt, én hoe Alva hem gebruikte."
          }
        ]
      }
    ]
  },

  /* ==================== 5 · DE OPSTAND BEGINT ==================== */
  {
    id: "opstand-begint",
    emoji: "🛡️",
    titel: "5 · De Opstand begint",
    paragraaf: "§4.4.3",
    kort: "Geuzen vanuit Duitsland en vanaf zee, Willem van Oranje aan het hoofd, en op 1 april 1572 een toevalstreffer die alles omdraait.",
    niveaus: [
      {
        n: 1, naam: "Brons",
        uitleg: [
          "Alva's maatregelen leidden tot veel onvrede. Een grote groep vluchtelingen, de <b>geuzen</b>, ging vanuit <b>Duitsland</b> en vanaf <b>zee</b> gewapend de strijd aan.",
          "<b>Willem van Oranje</b>, een van de hoogste edelen van de Nederlanden, nam de leiding. Vanuit Duitsland organiseerde hij het verzet tegen de Spaanse legers.",
          "In <b>1568</b> viel hij met zijn leger de Nederlanden binnen. Dat is het begin van de <b>Nederlandse Opstand</b>, ook wel de <b>Tachtigjarige Oorlog</b> (1568–1648). In datzelfde jaar won hij de <b>slag bij Heiligerlee</b> — de eerste overwinning.",
          "Daarna bleken Alva's legers sterker. Tot <b>1 april 1572</b>: de <b>watergeuzen</b> werden door de wind afgedreven, kwamen bij <b>Den Briel</b> aan land, zagen dat er maar een handjevol Spanjaarden lag en namen de stad in. Puur toeval — met enorme gevolgen."
        ],
        regel: "1568 = begin van de Opstand (slag bij Heiligerlee). 1 april 1572 = watergeuzen nemen Den Briel in.",
        vragen: [
          {
            t: "mc",
            q: "In welk jaar begon de Nederlandse Opstand?",
            o: ["1568", "1566", "1572", "1581"],
            a: "1568",
            w: "1568: Willem van Oranje valt binnen en wint de slag bij Heiligerlee.",
            meer: "De Opstand duurde van 1568 tot 1648 — vandaar de naam Tachtigjarige Oorlog.",
            fout: {
              "1566": "Dat is het jaar van het Smeekschrift en de Beeldenstorm. Belangrijk, maar nog geen oorlog.",
              "1572": "Dat is de inname van Den Briel — het kantelpunt, maar de Opstand liep toen al vier jaar.",
              "1581": "Dat is het Plakkaat van Verlatinghe, waarin Filips II werd afgezworen."
            }
          },
          {
            t: "mc",
            q: "Wie nam de leiding over de geuzen?",
            o: ["Willem van Oranje", "de hertog van Alva", "Margaretha van Parma", "Balthasar Gerards"],
            a: "Willem van Oranje",
            w: "Een van de hoogste edelen van de Nederlanden, die het verzet vanuit Duitsland organiseerde.",
            meer: "Hij werd later bekend als 'Vader des Vaderlands'. In 1584 werd hij vermoord.",
            fout: {
              "de hertog van Alva": "Dat was juist hun tegenstander: de Spaanse landvoogd die ze bevochten.",
              "Margaretha van Parma": "Zij was landvoogdes namens Filips en trad af toen Alva kwam.",
              "Balthasar Gerards": "Dat is de man die Willem van Oranje in 1584 vermoordde."
            }
          },
          {
            t: "gap",
            q: "Op 1 april 1572 namen de watergeuzen de stad ___ in.",
            a: "Den Briel|Brielle|den briel",
            w: "Den Briel, in Holland. Bij toeval, doordat de wind hen die kant op blies.",
            meer: "Ezelsbruggetje uit die tijd: 'Op 1 april verloor Alva zijn bril' — Den Briel klinkt als 'bril'."
          },
          {
            t: "mc",
            q: "Hoe kwamen de watergeuzen bij Den Briel terecht?",
            o: [
              "bij toeval: ze waren door de wind afgedreven",
              "het was een lang voorbereide aanval",
              "Willem van Oranje gaf het bevel de stad in te nemen",
              "de inwoners hadden hen om hulp gevraagd"
            ],
            a: "bij toeval: ze waren door de wind afgedreven",
            w: "Geen plan, maar toeval. Ze zagen dat er nauwelijks Spanjaarden waren en sloegen toe.",
            meer: "Juist omdat het toeval was, is het zo'n mooi voorbeeld van hoe één kleine gebeurtenis een oorlog kan laten kantelen.",
            fout: {
              "het was een lang voorbereide aanval": "Nee. De bron zegt duidelijk dat ze door de wind bij toeval aan land kwamen.",
              "Willem van Oranje gaf het bevel de stad in te nemen": "Hij leidde het verzet in het algemeen, maar deze inname was niet gepland.",
              "de inwoners hadden hen om hulp gevraagd": "De stad werd ingenomen omdat er maar een handvol Spanjaarden lag, niet op verzoek."
            }
          },
          {
            t: "mc",
            q: "Wat is een <b>watergeus</b>?",
            o: [
              "een opstandeling die vanaf het water vecht",
              "een Spaanse soldaat op een oorlogsschip",
              "een visser uit Den Briel",
              "een bestuurder van een waterschap"
            ],
            a: "een opstandeling die vanaf het water vecht",
            w: "Geus = opstandeling. Watergeus = geus die vanaf zee opereert.",
            meer: "De naam geus komt van het Franse <i>gueux</i> (bedelaars), het scheldwoord van bij het Smeekschrift.",
            fout: {
              "een Spaanse soldaat op een oorlogsschip": "Precies andersom: watergeuzen vochten juist tégen de Spanjaarden.",
              "een visser uit Den Briel": "Den Briel is de stad die ze innamen, niet waar ze vandaan kwamen.",
              "een bestuurder van een waterschap": "Dat heeft niets met deze tijd te maken."
            }
          }
        ]
      },
      {
        n: 2, naam: "Zilver",
        uitleg: [
          "Den Briel heet een <b>kantelpunt</b>: een moment waarna de situatie duidelijk anders is. Bij zo'n vraag moet je altijd twee dingen beschrijven: <b>hoe het was vóór</b> en <b>hoe het werd ná</b>.",
          "<b>Vóór 1572:</b> na Heiligerlee bleken Alva's legers sterker. De opstandelingen verloren vrijwel overal en steden durfden geen partij te kiezen.",
          "<b>Ná 1572:</b> de opstandelingen hadden succes geboekt. Daardoor durfden <b>meer steden</b> de kant van de opstand te kiezen. Van een verloren zaak werd het een echte oorlog.",
          "Alva reageerde door steden <b>één voor één te belegeren</b> tot ze zich overgaven. Bij het <b>beleg van Leiden</b> leidde dat tot grote sterfte onder de bevolking. En toen het Spaanse leger ook nog ging <b>muiten</b> (in opstand komen tegen de eigen leiding) en plunderen, zagen de gewesten in dat ze moesten gaan <b>samenwerken</b>."
        ],
        regel: "Kantelpunt = beschrijf de situatie vóór én ná. Vóór Den Briel won Alva bijna overal; erna durfden steeds meer steden partij te kiezen.",
        vragen: [
          {
            t: "open",
            q: "Leg uit waarom je de verovering van Den Briel kunt zien als een kantelpunt in de Nederlandse Opstand. Begin met de situatie vóór en sluit af met wat erna veranderde.",
            punten: 3,
            modelantwoord: "Vóór de verovering van Den Briel waren de legers van Alva sterker: na de slag bij Heiligerlee verloren de opstandelingen bijna overal en durfden steden geen partij te kiezen. Na de inname van Den Briel in 1572 hadden de opstandelingen eindelijk weer succes. Daardoor durfden meer steden de kant van de opstand te kiezen, waardoor de opstand veel groter werd.",
            sleutelwoorden: [
              { moet: ["voor", "vóór", "eerst", "daarvoor"], syn: ["hiervoor"] },
              { moet: ["alva", "sterker", "verloren", "spanjaarden"], syn: ["spaanse legers"] },
              { moet: ["meer steden", "steden", "kant kozen", "sloten zich aan"], syn: ["aansloten", "partij"] }
            ],
            rubric: [
              "Je beschrijft de situatie vóór: Alva's legers waren sterker, de opstand verloor",
              "Je beschrijft de situatie ná: meer steden kozen de kant van de opstand",
              "Je verbindt die twee met het succes bij Den Briel"
            ],
            w: "Vóór: de opstand verloor. Ná: steden durfden mee te doen. Dát maakt het een kantelpunt.",
            meer: "Bij een kantelpuntvraag krijg je alleen alle punten als je écht twee situaties beschrijft. Alleen zeggen 'het was belangrijk' is niet genoeg."
          },
          {
            t: "mc",
            q: "Wat betekent <b>muiterij</b>?",
            o: [
              "een opstand binnen een leger of scheepsbemanning tegen de eigen leiding",
              "een opstand van burgers tegen de koning",
              "het plunderen van een stad door de vijand",
              "het weigeren van belasting te betalen"
            ],
            a: "een opstand binnen een leger of scheepsbemanning tegen de eigen leiding",
            w: "Muiten doe je tégen je eigen bazen, van binnenuit.",
            meer: "De Spaanse soldaten muitten omdat ze niet betaald werden. Daarna gingen ze plunderen — en juist dát overtuigde de gewesten om samen te werken.",
            fout: {
              "een opstand van burgers tegen de koning": "Dat is precies de <b>Nederlandse Opstand</b> zelf. Muiterij zit in een leger of op een schip.",
              "het plunderen van een stad door de vijand": "Plunderen was wat er gebeurde ná de muiterij, maar het is niet de betekenis van het woord.",
              "het weigeren van belasting te betalen": "Dat gebeurde bij de Tiende Penning, maar dat heet geen muiterij."
            }
          },
          {
            t: "mc",
            q: "Wat was Alva's tactiek nadat meer steden de kant van de opstand kozen?",
            o: [
              "steden één voor één belegeren tot ze zich overgaven",
              "alle steden tegelijk aanvallen",
              "onderhandelen over godsdienstvrijheid",
              "zich terugtrekken naar Spanje"
            ],
            a: "steden één voor één belegeren tot ze zich overgaven",
            w: "Beleg na beleg. Bij Leiden leidde dat tot grote sterfte onder de bevolking.",
            meer: "Het werkte niet zoals hij hoopte: de belegeringen en de plunderende, muitende soldaten dreven de gewesten juist naar elkaar toe.",
            fout: {
              "alle steden tegelijk aanvallen": "Daar had hij het leger niet voor. Hij pakte ze stuk voor stuk aan.",
              "onderhandelen over godsdienstvrijheid": "Dat was juist het tegenovergestelde van zijn opdracht: hij moest het katholieke geloof opleggen.",
              "zich terugtrekken naar Spanje": "Alva bleef; hij werd later opgevolgd door Alexander Farnese."
            }
          },
          {
            t: "gap",
            q: "Bij het beleg van ___ leidde Alva's tactiek tot grote sterfte onder de bevolking.",
            a: "Leiden|leiden",
            w: "Het beleg van Leiden. De stad werd uitgehongerd.",
            meer: "Leidens Ontzet (de bevrijding van de stad) wordt in Leiden nog elk jaar op 3 oktober gevierd."
          },
          {
            t: "sleep",
            opgave: "Gebeurde dit vóór of ná de inname van Den Briel (1572)?",
            chips: [
              { t: "De slag bij Heiligerlee", bak: "voor" },
              { t: "De Beeldenstorm", bak: "voor" },
              { t: "De komst van Alva", bak: "voor" },
              { t: "Steeds meer steden kiezen de kant van de opstand", bak: "na" },
              { t: "Het beleg van Leiden", bak: "na" },
              { t: "De gewesten sluiten een verdrag (1576)", bak: "na" }
            ],
            bakjes: [
              { id: "voor", label: "vóór 1572", som: "" },
              { id: "na", label: "ná 1572", som: "" }
            ],
            w: "Den Briel (1572) is het scharnier van deze paragraaf. Alles van 1566–1568 komt ervoor, alles vanaf 1576 erna."
          }
        ]
      },
      {
        n: 3, naam: "Goud",
        uitleg: [
          "Nu de rol van <b>Willem van Oranje</b> zelf. Dat is leerdoel 4 van het werkboek, en er wordt vaak naar gevraagd.",
          "Wat hij deed: hij was een <b>hoge edelman</b> in de Nederlanden, week uit naar <b>Duitsland</b>, <b>organiseerde daar het verzet</b>, nam de <b>leiding over de geuzen</b>, viel in <b>1568</b> binnen (slag bij Heiligerlee) en werd het gezicht van de samenwerking tussen de gewesten.",
          "Belangrijk en vaak fout begrepen: Willem wilde in het begin <b>geen eigen land</b>. In het <b>Wilhelmus</b> zegt hij letterlijk dat hij <i>den koning van Hispanje heb ik altijd geëerd</i>. Hij vocht tegen de <b>tirannie</b> (het wrede bestuur van Alva), niet tegen de koning zelf. Pas in 1581 werd Filips echt afgezworen.",
          "In het <b>zesde couplet</b> zie je hoe gelovig hij was: God is zijn <i>schild ende betrouwen</i>, op God wil hij <i>bouwen</i>, en hij noemt zich Gods <i>dienaar</i>."
        ],
        regel: "Willem van Oranje: hoge edelman → vlucht naar Duitsland → leider van de geuzen → inval 1568. Hij vocht tegen de tirannie, niet (in het begin) tegen de koning.",
        vragen: [
          {
            t: "mc",
            q: "Wat blijkt uit de regel 'den koning van Hispanje heb ik altijd geëerd' in het Wilhelmus?",
            o: [
              "Willem zag zichzelf niet als vijand van Filips II",
              "Willem was eigenlijk een Spanjaard",
              "Willem wilde zelf koning van Spanje worden",
              "Willem had spijt van de opstand"
            ],
            a: "Willem zag zichzelf niet als vijand van Filips II",
            w: "Hij zegt de koning altijd geëerd te hebben. Hij vocht tegen de tirannie, niet tegen de persoon van de koning.",
            meer: "Filips zag dat heel anders: voor hém was Willem juist de grote vijand, met een prijs op zijn hoofd. Dat verschil in perspectief is precies wat opdracht 11a vraagt.",
            fout: {
              "Willem was eigenlijk een Spanjaard": "Nee — in het eerste couplet staat juist 'van Duitsen bloed'. Hij was een Nederlandse edelman met Duitse wortels.",
              "Willem wilde zelf koning van Spanje worden": "Dat staat er nergens. Hij streed tegen het wrede bestuur hier, niet om de Spaanse troon.",
              "Willem had spijt van de opstand": "Daar zegt het lied niets over. Hij verdedigt juist zijn keuze."
            }
          },
          {
            t: "mc",
            q: "Een leerling zegt: 'Willem van Oranje wilde vanaf het begin een onafhankelijk Nederland.' Wat klopt daar niet aan?",
            o: [
              "in het begin vocht hij tegen de tirannie; Filips werd pas in 1581 afgezworen",
              "hij wilde juist dat de Nederlanden Spaans bleven",
              "hij heeft nooit tegen de Spanjaarden gevochten",
              "hij was pas na 1584 bij de opstand betrokken"
            ],
            a: "in het begin vocht hij tegen de tirannie; Filips werd pas in 1581 afgezworen",
            w: "Het doel veranderde gaandeweg. Onafhankelijkheid was het eindpunt, niet het beginpunt.",
            meer: "Dat is trouwens hoe veel opstanden gaan: ze beginnen met 'het moet anders' en eindigen pas veel later met 'we gaan alleen verder'.",
            fout: {
              "hij wilde juist dat de Nederlanden Spaans bleven": "De Nederlanden wáren niet Spaans — ze hadden alleen dezelfde heer. En Willem vocht juist tegen het bestuur van Alva.",
              "hij heeft nooit tegen de Spanjaarden gevochten": "Hij viel in 1568 binnen en won de slag bij Heiligerlee.",
              "hij was pas na 1584 bij de opstand betrokken": "In 1584 werd hij vermoord. Hij was er juist vanaf het begin bij."
            }
          },
          {
            t: "mc",
            q: "Waaruit blijkt in het zesde couplet dat Willem van Oranje een gelovig man was?",
            o: [
              "hij noemt God zijn schild, wil op God bouwen en noemt zich Gods dienaar",
              "hij zegt dat hij van Duitsen bloed is",
              "hij zegt de koning van Spanje geëerd te hebben",
              "hij noemt zichzelf een prinse van Oranje"
            ],
            a: "hij noemt God zijn schild, wil op God bouwen en noemt zich Gods dienaar",
            w: "Drie bewijzen in één couplet. Bij opdracht 11b moet je er precies drie noemen.",
            meer: "Let op: 'mijn schild ende betrouwen zijt Gij, o God mijn Heer', 'op U zo wil ik bouwen', en 'Uw dienaar t' aller stond'.",
            fout: {
              "hij zegt dat hij van Duitsen bloed is": "Dat staat in het <b>eerste</b> couplet en gaat over zijn afkomst, niet over zijn geloof.",
              "hij zegt de koning van Spanje geëerd te hebben": "Ook eerste couplet, en dat gaat over zijn houding tegenover Filips.",
              "hij noemt zichzelf een prinse van Oranje": "Eerste couplet, en dat gaat over zijn titel."
            }
          },
          {
            t: "open",
            q: "Beschrijf in het kort de rol van Willem van Oranje in de Nederlandse Opstand. Noem minstens drie dingen die hij deed.",
            punten: 3,
            modelantwoord: "Willem van Oranje was een van de hoogste edelen in de Nederlanden. Hij week uit naar Duitsland en organiseerde daar het verzet tegen de Spaanse legers van Alva. Hij nam de leiding over de geuzen en viel in 1568 met een leger de Nederlanden binnen, waarmee de Nederlandse Opstand begon. Hij won dat jaar de slag bij Heiligerlee en werd later de leider onder wie de gewesten gingen samenwerken.",
            sleutelwoorden: [
              { moet: ["edel", "edelman", "adel"], syn: ["hoge edelman"] },
              { moet: ["duitsland", "verzet", "organiseer", "leiding", "geuzen"], syn: ["leidde"] },
              { moet: ["1568", "binnenviel", "inval", "heiligerlee", "opstand"], syn: ["begon"] }
            ],
            rubric: [
              "Je noemt dat hij een hoge edelman was",
              "Je noemt dat hij vanuit Duitsland het verzet organiseerde en de geuzen leidde",
              "Je noemt de inval van 1568 en/of de slag bij Heiligerlee"
            ],
            w: "Edelman → uitgeweken naar Duitsland → verzet organiseren → leiding geuzen → inval 1568 → Heiligerlee.",
            meer: "Tip uit het werkboek (opdracht 8c): noem bij elk voorbeeld steeds de naam van Willem van Oranje, anders is niet duidelijk over wie je het hebt."
          },
          {
            t: "gap",
            q: "In 1568 won Willem van Oranje de slag bij ___, de eerste overwinning van de opstand.",
            a: "Heiligerlee|heiligerlee",
            w: "De slag bij Heiligerlee, 1568. De eerste overwinning op het slagveld.",
            meer: "Daarna bleken Alva's legers sterker, tot de inname van Den Briel in 1572."
          }
        ]
      }
    ]
  },

  /* ==================== 6 · NAAR EEN EIGEN STAAT ==================== */
  {
    id: "republiek",
    emoji: "🇳🇱",
    titel: "6 · Naar een eigen staat",
    paragraaf: "§4.4.3",
    kort: "Samenwerken (1576), uit elkaar (1579), de koning afzweren (1581) en verdergaan zonder vorst (1588). Vier jaartallen, één nieuwe staat.",
    niveaus: [
      {
        n: 1, naam: "Brons",
        uitleg: [
          "Het laatste stuk van deze paragraaf is een rijtje van <b>vier jaartallen</b>. Leer ze als een verhaal, niet als losse getallen:",
          "<b>1576 — samen.</b> Na de belegeringen en de muitende, plunderende Spaanse soldaten beseffen de gewesten dat ze moeten samenwerken. Ze sluiten een verdrag: elk gewest mag <b>zijn eigen godsdienst</b> bepalen en de Spaanse troepen moeten het land uit.",
          "<b>1579 — uit elkaar.</b> De samenwerking houdt niet lang stand, want er komt tóch ruzie over godsdienst. <b>Alexander Farnese</b> volgt Alva op en krijgt de <b>zuidelijke</b>, vooral katholieke gewesten aan zijn kant. De <b>noordelijke</b> gewesten gaan alleen verder.",
          "<b>1581 — de koning eraf.</b> De noordelijke gewesten erkennen Filips II niet langer als heer: het <b>Plakkaat van Verlatinghe</b>.<br><b>1588 — zonder vorst verder.</b> Ze wijzen geen nieuwe vorst aan en gaan verder als <b>Republiek der Zeven Verenigde Nederlanden</b>."
        ],
        regel: "1576 samen · 1579 uit elkaar (noord/zuid) · 1581 Filips afgezworen · 1588 Republiek.",
        vragen: [
          {
            t: "mc",
            q: "Wat spraken de gewesten af in het verdrag van 1576?",
            o: [
              "elk gewest mag zijn eigen godsdienst bepalen en de Spaanse troepen moeten weg",
              "alle gewesten worden katholiek",
              "Filips II wordt afgezet als koning",
              "de Tiende Penning wordt verhoogd"
            ],
            a: "elk gewest mag zijn eigen godsdienst bepalen en de Spaanse troepen moeten weg",
            w: "Twee afspraken: eigen godsdienst per gewest, en Spanjaarden eruit.",
            meer: "De aanleiding was dat de Spaanse soldaten gingen muiten en plunderen. Dat trof iedereen, katholiek of protestant.",
            fout: {
              "alle gewesten worden katholiek": "Juist niet: elk gewest mocht het <b>zelf</b> bepalen. Dat was de hele afspraak.",
              "Filips II wordt afgezet als koning": "Dat gebeurde pas in 1581, met het Plakkaat van Verlatinghe.",
              "de Tiende Penning wordt verhoogd": "De Tiende Penning was een maatregel van Alva, geen afspraak tussen de gewesten."
            }
          },
          {
            t: "mc",
            q: "Waarom viel de samenwerking van 1576 weer uit elkaar?",
            o: [
              "de gewesten kregen tóch ruzie over godsdienst",
              "Filips II bood hun geld aan",
              "Willem van Oranje werd vermoord",
              "de Spaanse troepen waren al vertrokken"
            ],
            a: "de gewesten kregen tóch ruzie over godsdienst",
            w: "De religieuze oorzaak. Elk gewest zijn eigen godsdienst klonk mooi, maar in de praktijk botste het.",
            meer: "Farnese maakte daar handig gebruik van: hij kreeg de overwegend katholieke zuidelijke gewesten aan zijn kant.",
            fout: {
              "Filips II bood hun geld aan": "Dat staat niet in de stof. Het ging om een conflict over <b>geloof</b>.",
              "Willem van Oranje werd vermoord": "Dat was in 1584, dus ná de splitsing van 1579.",
              "de Spaanse troepen waren al vertrokken": "Dat was juist een van de afspraken die níet blijvend lukte — de oorlog ging gewoon door."
            }
          },
          {
            t: "gap",
            q: "In ___ erkenden de noordelijke gewesten Filips II niet langer als heer, in het Plakkaat van Verlatinghe.",
            a: "1581",
            w: "1581: het Plakkaat van Verlatinghe. De koning wordt 'verlaten' — afgezworen.",
            meer: "Ezelsbruggetje: <b>V</b>erlatinghe = de koning <b>V</b>erlaten."
          },
          {
            t: "mc",
            q: "Wat is een <b>republiek</b>?",
            o: [
              "een land zonder vorst",
              "een land waarin het volk stemt over alles",
              "een land dat door de kerk wordt bestuurd",
              "een land met zeven koningen"
            ],
            a: "een land zonder vorst",
            w: "Republiek = geen koning, keizer of hertog aan het hoofd.",
            meer: "Let op: republiek betekent niet automatisch democratie. Het bestuur lag bij regenten, niet bij het gewone volk.",
            fout: {
              "een land waarin het volk stemt over alles": "Dit is de bekendste denkfout. Een republiek is een land <b>zonder vorst</b> — dat zegt nog niets over stemrecht. De Republiek werd bestuurd door regenten.",
              "een land dat door de kerk wordt bestuurd": "Dat zou een theocratie zijn. De Republiek was dat niet.",
              "een land met zeven koningen": "De 'zeven' in de naam slaat op de zeven <b>gewesten</b>, en juist niet op koningen: er was er geen enkele."
            }
          },
          {
            t: "sleep",
            opgave: "Zet bij het juiste jaartal.",
            chips: [
              { t: "De gewesten sluiten een verdrag: eigen godsdienst, Spanjaarden eruit", bak: "1576" },
              { t: "Noord en zuid gaan uit elkaar", bak: "1579" },
              { t: "Plakkaat van Verlatinghe", bak: "1581" },
              { t: "Filips II wordt afgezworen", bak: "1581" },
              { t: "Republiek der Zeven Verenigde Nederlanden", bak: "1588" },
              { t: "Verder zonder een nieuwe vorst", bak: "1588" }
            ],
            bakjes: [
              { id: "1576", label: "1576", som: "" },
              { id: "1579", label: "1579", som: "" },
              { id: "1581", label: "1581", som: "" },
              { id: "1588", label: "1588", som: "" }
            ],
            w: "1576 samen · 1579 uit elkaar · 1581 koning eraf · 1588 Republiek."
          }
        ]
      },
      {
        n: 2, naam: "Zilver",
        uitleg: [
          "Het <b>Plakkaat van Verlatinghe</b> (1581) is de belangrijkste bron van dit stuk. In bron 7 staat: <i>'…dat wij, door de uiterste nood gedwongen, … de koning van Spanje vervallen verklaren van zijn heerschappij, jurisdictie en erfelijke aanspraken op deze landen.'</i>",
          "Ontleed die zin, want er staan drie dingen in die je kunt gebruiken:<br>• <b>'door de uiterste nood gedwongen'</b> — ze doen het niet zomaar, ze zeggen dat het echt niet anders kan.<br>• <b>'vervallen verklaren van zijn heerschappij'</b> — hij is de baas niet meer.<br>• <b>'erfelijke aanspraken'</b> — ook zijn kinderen krijgen het niet.",
          "Dit is enorm: in die tijd was een vorst er 'van God gegeven'. Zomaar je koning afzetten was ongehoord.",
          "Voor <b>Willem van Oranje</b> had dit een direct gevolg: Filips verklaarde hem <b>vogelvrij</b> en loofde <b>25.000 gouden munten</b> uit voor wie hem zou doden. In <b>1584</b> werd hij in Delft doodgeschoten door <b>Balthasar Gerards</b>."
        ],
        regel: "Plakkaat van Verlatinghe (1581): de Staten-Generaal verklaart Filips II vervallen van zijn heerschappij. Gevolg voor Willem: een prijs op zijn hoofd.",
        vragen: [
          {
            t: "mc",
            q: "Wat betekent 'de koning van Spanje vervallen verklaren van zijn heerschappij'?",
            o: [
              "hij is niet langer de heer van deze gewesten",
              "hij moet zijn schulden terugbetalen",
              "hij mag niet meer naar Spanje terug",
              "hij wordt gevangengenomen"
            ],
            a: "hij is niet langer de heer van deze gewesten",
            w: "Vervallen verklaren van zijn heerschappij = hij is hier de baas niet meer.",
            meer: "In diezelfde zin staat ook 'erfelijke aanspraken': ook zijn nakomelingen kunnen er geen aanspraak meer op maken.",
            fout: {
              "hij moet zijn schulden terugbetalen": "Het gaat niet over geld maar over <b>macht</b>: over wie hier de heer is.",
              "hij mag niet meer naar Spanje terug": "Spanje bleef gewoon van hem. Het gaat alleen over de Nederlandse gewesten.",
              "hij wordt gevangengenomen": "Daar was geen sprake van — hij zat in Spanje. Ze erkenden hem alleen niet meer."
            }
          },
          {
            t: "mc",
            q: "Wat was een gevolg voor Willem van Oranje ná het Plakkaat van Verlatinghe?",
            o: [
              "Filips II loofde een beloning uit voor wie hem zou doden",
              "hij werd tot koning gekroond",
              "hij vluchtte terug naar Duitsland",
              "hij sloot vrede met Filips II"
            ],
            a: "Filips II loofde een beloning uit voor wie hem zou doden",
            w: "25.000 gouden munten voor zijn dood. In 1584 werd hij vermoord door Balthasar Gerards.",
            meer: "Filips zag Willem als de grote vijand: wie de leider uitschakelt, dacht hij, breekt de opstand.",
            fout: {
              "hij werd tot koning gekroond": "Juist niet. De gewesten besloten in 1588 helemaal geen vorst meer aan te wijzen.",
              "hij vluchtte terug naar Duitsland": "Hij was al eerder uitgeweken, maar in 1584 was hij in Delft — daar werd hij vermoord.",
              "hij sloot vrede met Filips II": "Het tegenovergestelde: Filips zette een prijs op zijn hoofd."
            }
          },
          {
            t: "gap",
            q: "Willem van Oranje werd in 1584 in Delft vermoord door ___.",
            a: "Balthasar Gerards|Balthasar Gerardts|Gerards",
            w: "Balthasar Gerards, uit op de beloning die Filips II had uitgeloofd.",
            meer: "Het gebeurde op 10 juli 1584 op de trap van het Prinsenhof in Delft. Dat gebouw is nu een museum."
          },
          {
            t: "mc",
            q: "Wie volgde de hertog van Alva op als Spaanse landvoogd?",
            o: ["Alexander Farnese", "Margaretha van Parma", "Balthasar Gerards", "Willem van Oranje"],
            a: "Alexander Farnese",
            w: "Farnese kreeg de zuidelijke, vooral katholieke gewesten aan zijn kant.",
            meer: "Hij was slimmer dan Alva: in plaats van alleen geweld gebruikte hij ook de verdeeldheid over godsdienst.",
            fout: {
              "Margaretha van Parma": "Zij ging juist vóór Alva. Toen hij kwam, trad zij af.",
              "Balthasar Gerards": "Dat is de moordenaar van Willem van Oranje, geen landvoogd.",
              "Willem van Oranje": "Hij was de leider van de opstand, dus juist de tegenstander van de landvoogd."
            }
          },
          {
            t: "mc",
            q: "Waarom was het afzweren van Filips II in 1581 zo bijzonder?",
            o: [
              "in die tijd gold een vorst als door God gegeven; hem afzetten was ongehoord",
              "het was de eerste keer dat er een oorlog begon",
              "Filips II was nog maar net koning geworden",
              "er was nog nooit een verdrag gesloten tussen gewesten"
            ],
            a: "in die tijd gold een vorst als door God gegeven; hem afzetten was ongehoord",
            w: "Je koning afzetten was niet zomaar politiek — het raakte aan het geloof zelf.",
            meer: "Daarom staat er ook 'door de uiterste nood gedwongen' in het Plakkaat: ze verantwoorden zich, alsof ze willen zeggen dat ze echt geen keus hadden.",
            fout: {
              "het was de eerste keer dat er een oorlog begon": "De oorlog liep toen al dertien jaar, sinds 1568.",
              "Filips II was nog maar net koning geworden": "Hij was het al sinds 1555, dus ruim 25 jaar.",
              "er was nog nooit een verdrag gesloten tussen gewesten": "Dat was er wel: het verdrag van 1576, en de Staten-Generaal bestond al veel langer."
            }
          }
        ]
      },
      {
        n: 3, naam: "Goud",
        uitleg: [
          "Het <b>kenmerkend aspect</b> van deze paragraaf is: <i>het conflict in de Nederlanden dat resulteerde in de stichting van een Nederlandse staat</i>.",
          "Bij zo'n vraag moet je laten zien dat je de <b>hele lijn</b> ziet: het begon als een conflict (over geloof, geld en bestuur) en het eindigde met iets wat er daarvoor niet was — een <b>eigen staat</b>.",
          "Bron 7 (Plakkaat van Verlatinghe) past erbij omdat het het moment is waarop de gewesten hun vorst <b>afzweren</b>: de oude band wordt verbroken. Bron 9 (de Republiek) past erbij omdat het laat zien wat er <b>in de plaats kwam</b>: een nieuwe staat, zónder vorst.",
          "Samen zijn die twee bronnen dus 'het einde van het oude' en 'het begin van het nieuwe'. Precies wat 'resulteerde in de stichting van een Nederlandse staat' betekent."
        ],
        regel: "Kenmerkend aspect = van conflict naar eigen staat. Bron 7 = de breuk met de koning, bron 9 = de nieuwe staat die ervoor in de plaats kwam.",
        vragen: [
          {
            t: "open",
            q: "Leg uit waarom het Plakkaat van Verlatinghe (bron 7) goed past bij het kenmerkend aspect 'het conflict in de Nederlanden dat resulteerde in de stichting van een Nederlandse staat'.",
            punten: 2,
            modelantwoord: "In het Plakkaat van Verlatinghe verklaren de gewesten in 1581 dat Filips II niet langer hun heer is. Daarmee verbreken ze de band met hun vorst, en dat is een noodzakelijke stap op weg naar een eigen staat. Het conflict dat begonnen was over geloof, belasting en bestuur loopt hier dus uit op het afzweren van de koning, waarna de gewesten zelf verder moesten.",
            sleutelwoorden: [
              { moet: ["1581", "verlatinghe", "afzweren", "afgezworen", "niet langer"], syn: ["vervallen"] },
              { moet: ["eigen staat", "zelf", "zonder", "republiek", "nieuwe staat"], syn: ["onafhankelijk"] }
            ],
            rubric: [
              "Je noemt dat de gewesten Filips II afzweren als heer",
              "Je verbindt dat aan het ontstaan van een eigen Nederlandse staat"
            ],
            w: "Het Plakkaat is de breuk met de oude vorst — en zonder die breuk geen eigen staat.",
            meer: "Bij een kenmerkend-aspectvraag moet je altijd de brug slaan tussen de bron en de <b>hele ontwikkeling</b>. Alleen navertellen wat er in de bron staat is niet genoeg."
          },
          {
            t: "mc",
            q: "Waarom past bron 9 (de Republiek der Zeven Verenigde Nederlanden) bij het kenmerkend aspect?",
            o: [
              "het laat de nieuwe staat zien die uit het conflict ontstond",
              "het laat zien hoe de Beeldenstorm verliep",
              "het toont de macht van Filips II",
              "het bewijst dat de Nederlanden bij Spanje hoorden"
            ],
            a: "het laat de nieuwe staat zien die uit het conflict ontstond",
            w: "Het kenmerkend aspect eindigt met 'de stichting van een Nederlandse staat'. Bron 9 ís die staat.",
            meer: "Handig om samen te onthouden: bron 7 = het oude eindigt (koning eraf), bron 9 = het nieuwe begint (Republiek).",
            fout: {
              "het laat zien hoe de Beeldenstorm verliep": "Dat is bron 5. Bron 9 gaat over de Republiek van 1588.",
              "het toont de macht van Filips II": "Het tegenovergestelde: het toont een land dat besloot zonder hem verder te gaan.",
              "het bewijst dat de Nederlanden bij Spanje hoorden": "Dat is bovendien feitelijk onjuist: de Nederlanden waren een eigen gebied met dezelfde heer."
            }
          },
          {
            t: "mc",
            q: "Zet op volgorde: welke gebeurtenis kwam als <b>laatste</b>?",
            o: [
              "de Republiek der Zeven Verenigde Nederlanden",
              "het Plakkaat van Verlatinghe",
              "de splitsing tussen noord en zuid",
              "het verdrag waarin elk gewest zijn eigen godsdienst mocht bepalen"
            ],
            a: "de Republiek der Zeven Verenigde Nederlanden",
            w: "1576 → 1579 → 1581 → 1588. De Republiek is het eindpunt.",
            meer: "Dit is precies de volgorde die je nodig hebt bij opdracht 9a: bron 8 (1572) → 6 (1576) → 10 (1579) → 7 (1581) → 9 (1588).",
            fout: {
              "het Plakkaat van Verlatinghe": "1581 — bijna het laatste, maar de Republiek kwam nog zeven jaar later.",
              "de splitsing tussen noord en zuid": "1579 — daarvóór.",
              "het verdrag waarin elk gewest zijn eigen godsdienst mocht bepalen": "1576 — dat is juist het eerste van de vier."
            }
          },
          {
            t: "mc",
            q: "Een leerling zegt: 'De Tachtigjarige Oorlog was tachtig jaar lang onafgebroken vechten.' Wat klopt daar niet aan?",
            o: [
              "er waren onderbrekingen, zoals een wapenstilstand tussen 1609 en 1621",
              "de oorlog duurde precies tachtig jaar zonder pauze",
              "de oorlog duurde maar veertig jaar",
              "er is helemaal nooit gevochten"
            ],
            a: "er waren onderbrekingen, zoals een wapenstilstand tussen 1609 en 1621",
            w: "1568–1648 is wel tachtig jaar, maar er werd niet al die tijd gevochten.",
            meer: "Daarom gebruiken historici tegenwoordig liever de naam <b>Nederlandse Opstand</b>: die wekt minder de indruk van tachtig jaar aaneengesloten oorlog.",
            fout: {
              "de oorlog duurde precies tachtig jaar zonder pauze": "Dat is juist de misvatting. Tussen 1609 en 1621 was er een wapenstilstand.",
              "de oorlog duurde maar veertig jaar": "Nee: van 1568 tot 1648 is tachtig jaar. Alleen niet onafgebroken.",
              "er is helemaal nooit gevochten": "Er is wel degelijk veel gevochten — denk aan Heiligerlee, Den Briel en het beleg van Leiden."
            }
          },
          {
            t: "gap",
            q: "Vanaf 1588 gingen de noordelijke gewesten verder als de Republiek der ___ Verenigde Nederlanden.",
            a: "Zeven|zeven|7",
            w: "Zeven gewesten, geen vorst. Dat is de officiële naam van Nederland tussen 1588 en 1795.",
            meer: "De zeven slaat op de gewesten die samen doorvochten na de splitsing van 1579."
          }
        ]
      }
    ]
  },

  /* ==================== 7 · OORZAKEN EN GEVOLGEN (VAARDIGHEID) ==================== */
  {
    id: "oorzaak-gevolg",
    emoji: "🧭",
    titel: "7 · Oorzaken en gevolgen",
    paragraaf: "vaardigheid",
    kort: "De denkvaardigheid van dit hoofdstuk. Oorzaak of gevolg? Direct of indirect? Bedoeld of onbedoeld? En welk soort: economisch, religieus, politiek of sociaal?",
    niveaus: [
      {
        n: 1, naam: "Brons",
        uitleg: [
          "Niets in de geschiedenis komt zomaar uit de lucht vallen. Alles is het <b>gevolg</b> van eerdere gebeurtenissen én de <b>oorzaak</b> van latere.",
          "Eerst de makkelijkste vraag: <b>komt het ervóór of erná?</b><br>• Ervóór → <b>oorzaak</b> (de reden waarom iets gebeurde)<br>• Erná → <b>gevolg</b> (wat eruit voortkwam)",
          "Daarna het <b>soort</b>. Er zijn er vier, en die gaan over verschillende dingen:<br>• <b>Economisch</b> — alles met <b>arbeid en geld</b> (belasting, handel, winst, rijkdom)<br>• <b>Religieus</b> — alles met <b>geloof</b> (kerk, plakkaten, hagenpreken, beelden)<br>• <b>Politiek</b> — alles met <b>organisatie en bestuur</b> (centralisatie, rechtbanken, wie er de baas is)<br>• <b>Sociaal</b> — hoe <b>mensen met elkaar omgaan</b> (angst, vluchten, samenwerken)",
          "Vuistregel voor het soort: zoek het kernwoord. Zie je <b>geld</b>? Economisch. Zie je <b>geloof</b>? Religieus. Zie je <b>bestuur of macht</b>? Politiek. Zie je <b>mensen onderling</b>? Sociaal."
        ],
        regel: "Ervóór = oorzaak, erná = gevolg. Soort: geld → economisch, geloof → religieus, bestuur → politiek, mensen onderling → sociaal.",
        vragen: [
          {
            t: "vb",
            opgave: "Van welk soort is dit gevolg: 'Veel Nederlandse edelen vluchtten naar het buitenland uit angst voor de Raad van Beroerten.'",
            waarom: {
              q: "Welk soort gevolg is dit vooral?",
              o: ["sociaal", "economisch", "religieus"],
              a: "sociaal"
            },
            fout: {
              "economisch": "Er komt geen geld aan te pas. Economisch gaat over arbeid, handel, belasting en winst — denk aan de Tiende Penning.",
              "religieus": "Het geloof speelt op de achtergrond mee, maar het gevolg zelf gaat over wat mensen <b>doen</b>: wegvluchten uit angst. Dat is hoe mensen in een samenleving met elkaar omgaan, dus sociaal."
            },
            stappen: [
              { toon: "Stap 1: komt dit vóór of ná de Raad van Beroerten?", uitleg: "Erná. Dus het is een gevolg, geen oorzaak." },
              { toon: "Stap 2: wat is het kernwoord?", uitleg: "'Vluchtten' en 'angst'. Geen geld, geen wet, geen kerk — het gaat over wat mensen doen en voelen." },
              { toon: "→ Sociaal gevolg.", uitleg: "Sociaal = hoe mensen in een samenleving met elkaar omgaan. Angst, vluchten en samenwerken horen daarbij." }
            ],
            w: "Vluchten uit angst gaat over mensen onderling, dus sociaal.",
            meer: "Let op: één gebeurtenis kan gevolgen van meerdere soorten hebben. De Raad van Beroerten had ook politieke gevolgen (edelen verloren hun positie)."
          },
          {
            t: "sleep",
            opgave: "Welk soort is dit? Let op het kernwoord.",
            chips: [
              { t: "De Tiende Penning van 10% op de handel", bak: "economisch" },
              { t: "Filips' oorlogen kostten veel geld", bak: "economisch" },
              { t: "De bloedplakkaten tegen ketters", bak: "religieus" },
              { t: "De hagenpreken in het open veld", bak: "religieus" },
              { t: "Centralisatie van het bestuur", bak: "politiek" },
              { t: "De Raad van Beroerten als rechtbank", bak: "politiek" }
            ],
            bakjes: [
              { id: "economisch", label: "economisch (geld)", som: "" },
              { id: "religieus", label: "religieus (geloof)", som: "" },
              { id: "politiek", label: "politiek (bestuur)", som: "" }
            ],
            w: "Geld → economisch. Geloof → religieus. Bestuur en rechtspraak → politiek."
          },
          {
            t: "mc",
            q: "Is dit een oorzaak of een gevolg van de Beeldenstorm: 'Filips II stuurde de hertog van Alva naar de Nederlanden'?",
            o: ["een gevolg", "een oorzaak", "allebei tegelijk", "geen van beide"],
            a: "een gevolg",
            w: "Alva kwam ná de Beeldenstorm, als reactie erop. Dus: gevolg.",
            meer: "Check altijd eerst de tijdsvolgorde. Beeldenstorm = 1566, komst van Alva = 1567.",
            fout: {
              "een oorzaak": "Een oorzaak moet <b>vóór</b> de gebeurtenis komen. Alva kwam pas in 1567, dus ná de Beeldenstorm van 1566.",
              "allebei tegelijk": "Dat kan wel bij een keten (een gevolg kan weer de oorzaak van iets anders zijn), maar níet van dezelfde gebeurtenis. Ten opzichte van de Beeldenstorm is dit alleen een gevolg.",
              "geen van beide": "Er is duidelijk verband: Filips stuurde Alva juist <b>omdat</b> de Beeldenstorm had plaatsgevonden."
            }
          },
          {
            t: "mc",
            q: "Welk soort oorzaak is dit: 'De calvinisten waren boos op de rijkdom van de katholieke kerk'?",
            o: ["economisch", "politiek", "sociaal", "geen oorzaak maar een gevolg"],
            a: "economisch",
            w: "Rijkdom = geld en bezit, dus economisch.",
            meer: "Dit is een lastige, want er zit ook geloof in. Maar het <b>kernwoord</b> is rijkdom, en rijkdom hoort bij economisch.",
            fout: {
              "politiek": "Politiek gaat over bestuur en macht: wie er de baas is. Hier gaat het over bezit.",
              "sociaal": "Sociaal gaat over hoe mensen met elkaar omgaan. Hier gaat het over het <b>geld</b> van de kerk.",
              "geen oorzaak maar een gevolg": "Het is wel degelijk een oorzaak: deze boosheid speelde vóór de Beeldenstorm en dreef die mede aan."
            }
          },
          {
            t: "gap",
            q: "Alles wat met arbeid en geld te maken heeft, noem je een ___ oorzaak of gevolg.",
            a: "economische|economisch",
            w: "Economisch: arbeid, geld, handel, belasting, winst, rijkdom.",
            meer: "De vier soorten: economisch (geld), religieus (geloof), politiek (bestuur), sociaal (mensen onderling)."
          }
        ]
      },
      {
        n: 2, naam: "Zilver",
        uitleg: [
          "Nu de twee onderscheidingen waar het echt op aankomt. Ze worden vaak door elkaar gehaald, dus zet ze scherp.",
          "<b>Bij oorzaken: direct of indirect?</b><br>• <b>Direct</b> (ook wel <b>aanleiding</b>) = de laatste druppel. Eén concrete gebeurtenis, vlak ervoor.<br>• <b>Indirect</b> = speelt al veel langer, op de achtergrond. Vaak zie je het pas achteraf.<br><i>Voorbeeld:</i> de Beeldenstorm is de <b>directe</b> oorzaak van Alva's komst. Het groeiende calvinisme en de ruzie over centralisatie zijn <b>indirecte</b> oorzaken.",
          "<b>Bij gevolgen: bedoeld of onbedoeld?</b><br>• <b>Bedoeld</b> = dit wílde degene die het deed.<br>• <b>Onbedoeld</b> = het gebeurde óók, maar niemand wilde het.<br><i>Voorbeeld:</i> Alva's bedoelde gevolg was de orde herstellen. Zijn onbedoelde gevolg was een veel grotere opstand.",
          "Let op de valkuil: <b>onbedoeld betekent niet onbelangrijk</b>. Vaak zijn juist de onbedoelde gevolgen het interessantst — in dit hoofdstuk zijn ze zelfs de rode draad."
        ],
        regel: "Direct = de laatste druppel, vlak ervoor. Indirect = speelt al langer. Bedoeld = dit wilde je. Onbedoeld = het gebeurde toch.",
        vragen: [
          {
            t: "mc",
            q: "Welke oorzaak van de Nederlandse Opstand is <b>indirect</b>?",
            o: [
              "de groei van het calvinisme sinds de jaren 1550",
              "de Beeldenstorm van 1566",
              "de komst van Alva in 1567",
              "de inname van Den Briel in 1572"
            ],
            a: "de groei van het calvinisme sinds de jaren 1550",
            w: "Iets dat al jaren speelde en langzaam de spanning opbouwde: dat is indirect.",
            meer: "Directe oorzaken zijn losse gebeurtenissen vlak ervoor. Indirecte oorzaken zijn ontwikkelingen die al langer aan de gang waren.",
            fout: {
              "de Beeldenstorm van 1566": "Dat is juist een <b>directe</b> oorzaak: één concrete gebeurtenis waar Filips meteen op reageerde.",
              "de komst van Alva in 1567": "Ook een concrete gebeurtenis, en bovendien zelf een gevolg van de Beeldenstorm.",
              "de inname van Den Briel in 1572": "Dat gebeurde ná het begin van de Opstand (1568), dus het kan er geen oorzaak van zijn."
            }
          },
          {
            t: "mc",
            q: "Filips II liet Willem van Oranje vermoorden om de opstand te breken. De opstand ging gewoon door en Willem werd een symbool. Hoe noem je dat laatste?",
            o: ["een onbedoeld gevolg", "een bedoeld gevolg", "een indirecte oorzaak", "continuïteit"],
            a: "een onbedoeld gevolg",
            w: "Filips wilde de opstand breken, niet een held creëren. Dus: onbedoeld.",
            meer: "Het <b>bedoelde</b> gevolg was: leider weg, opstand voorbij. Dat eerste lukte, dat tweede niet.",
            fout: {
              "een bedoeld gevolg": "Dan had Filips gewild dat Willem een symbool werd. Dat is wel het laatste wat hij wilde.",
              "een indirecte oorzaak": "Dit komt ná de moord, dus het is een gevolg. Oorzaken liggen ervóór.",
              "continuïteit": "Dat betekent dat iets hetzelfde blijft. Hier verandert juist iets: Willem wordt na zijn dood een symbool."
            }
          },
          {
            t: "sleep",
            opgave: "Bedoeld of onbedoeld gevolg?",
            chips: [
              { t: "Alva straft de beeldenstormers met de Raad van Beroerten", bak: "bedoeld" },
              { t: "De Tiende Penning levert Alva geld op voor zijn leger", bak: "bedoeld" },
              { t: "Filips laat Willem van Oranje vermoorden en schakelt de leider uit", bak: "bedoeld" },
              { t: "Door Alva's harde optreden wordt het verzet juist groter", bak: "onbedoeld" },
              { t: "Door de versoepeling van Margaretha leeft het calvinisme op", bak: "onbedoeld" },
              { t: "Margaretha van Parma verliest haar functie als landvoogdes", bak: "onbedoeld" }
            ],
            bakjes: [
              { id: "bedoeld", label: "bedoeld (dit wilden ze)", som: "" },
              { id: "onbedoeld", label: "onbedoeld (dit wilde niemand)", som: "" }
            ],
            w: "Vraag je af: wilde degene die het deed dít resultaat? Ja → bedoeld. Nee, maar het gebeurde toch → onbedoeld."
          },
          {
            t: "mc",
            q: "Wat is een ander woord voor <b>directe oorzaak</b>?",
            o: ["aanleiding", "gevolg", "kantelpunt", "kenmerkend aspect"],
            a: "aanleiding",
            w: "Aanleiding = directe oorzaak = de laatste druppel.",
            meer: "Op het SO mag je beide woorden gebruiken. Leg wel uit <i>waarom</i> het de laatste druppel was.",
            fout: {
              "gevolg": "Een gevolg komt juist erná. Een oorzaak ligt ervóór.",
              "kantelpunt": "Een kantelpunt is een moment waarna de situatie anders is. Dat gaat over de <b>omslag</b>, niet over de reden waarom iets begon.",
              "kenmerkend aspect": "Dat is iets heel anders: een belangrijk kenmerk van een tijdvak, zoals 'het conflict dat leidde tot een Nederlandse staat'."
            }
          },
          {
            t: "gap",
            q: "Een oorzaak die al lang op de achtergrond speelt, heet een ___ oorzaak.",
            a: "indirecte|indirect|structurele",
            w: "Indirect (ook wel structureel): speelt al langer, vaak zie je het pas achteraf.",
            meer: "Tegenover de directe oorzaak, de aanleiding: één concrete gebeurtenis vlak vóór het moment."
          }
        ]
      },
      {
        n: 3, naam: "Goud",
        uitleg: [
          "Op het SO moet je oorzaken en gevolgen niet alleen <b>herkennen</b>, maar ook in een <b>zin</b> zetten. Dat is waar de meeste punten zitten — en waar de meeste antwoorden misgaan.",
          "Gebruik <b>signaalwoorden</b>. Die laten zien dat je het verband snapt: <i>omdat</i>, <i>waardoor</i>, <i>daardoor</i>, <i>dit leidde ertoe dat</i>, <i>met als gevolg dat</i>.",
          "Het werkboek geeft bij opdracht 13b zelfs de zinsbouw kado: <b>'De … (gebeurtenis 1) leidt zo … (uitleg) tot de … (gebeurtenis 2).'</b> Gebruik die vorm.",
          "<b>Slechte zin:</b> <i>'De Beeldenstorm. Alva kwam.'</i> — twee losse feiten, nul verband.<br><b>Goede zin:</b> <i>'De Beeldenstorm maakte Filips II woedend, waardoor hij zijn beste generaal Alva naar de Nederlanden stuurde om orde op zaken te stellen.'</i> — hier staat het verband er echt in."
        ],
        regel: "Schrijf het verband op met een signaalwoord: omdat, waardoor, daardoor, dit leidde ertoe dat. Twee losse feiten naast elkaar is geen uitleg.",
        vragen: [
          {
            t: "open",
            q: "Schrijf één zin waarin je uitlegt hoe de Beeldenstorm leidde tot de komst van de hertog van Alva. Gebruik een signaalwoord zoals 'waardoor' of 'daardoor'.",
            punten: 2,
            modelantwoord: "De Beeldenstorm van 1566 maakte Filips II woedend, waardoor hij zijn beste generaal, de hertog van Alva, met een leger naar de Nederlanden stuurde om de beeldenstormers te straffen en de orde te herstellen.",
            sleutelwoorden: [
              { moet: ["waardoor", "daardoor", "omdat", "leidde", "zodat", "met als gevolg"], syn: ["hierdoor"] },
              { moet: ["alva"], syn: [] }
            ],
            rubric: [
              "Je gebruikt een signaalwoord dat het verband aangeeft",
              "Je noemt zowel de Beeldenstorm als de komst van Alva in één lopende zin"
            ],
            w: "Een goede oorzaak-gevolgzin bevat allebei de gebeurtenissen én een signaalwoord dat ze verbindt.",
            meer: "Twee losse zinnen achter elkaar ('Er was een Beeldenstorm. Alva kwam.') leveren geen punten op, ook al klopt alles. De nakijker wil het <b>verband</b> zien."
          },
          {
            t: "mc",
            q: "Welke zin legt het verband het <b>beste</b> uit?",
            o: [
              "Alva voerde de Tiende Penning in, waardoor ook katholieke handelaars zich tegen hem keerden.",
              "Alva voerde de Tiende Penning in. Katholieke handelaars waren boos.",
              "De Tiende Penning was 10% belasting op handel en winst.",
              "Alva had geld nodig en de handelaars hadden geld."
            ],
            a: "Alva voerde de Tiende Penning in, waardoor ook katholieke handelaars zich tegen hem keerden.",
            w: "Hier staat een signaalwoord ('waardoor') dat oorzaak en gevolg echt aan elkaar knoopt.",
            meer: "Let op het woordje 'ook' in die zin: dat maakt duidelijk waaróm het belangrijk is — het verzet werd breder dan alleen protestants.",
            fout: {
              "Alva voerde de Tiende Penning in. Katholieke handelaars waren boos.": "Allebei waar, maar het zijn twee losse zinnen. Er staat nergens dát het één door het ander kwam.",
              "De Tiende Penning was 10% belasting op handel en winst.": "Dit is alleen een <b>definitie</b>. Er is helemaal geen gevolg genoemd.",
              "Alva had geld nodig en de handelaars hadden geld.": "Dit noemt alleen een situatie. 'En' is geen signaalwoord voor oorzaak en gevolg."
            }
          },
          {
            t: "sleep",
            opgave: "Zet de ketting op volgorde: welke stap komt wanneer?",
            chips: [
              { t: "1. Filips vervolgt protestanten hard", bak: "begin" },
              { t: "2. Edelen schrijven het Smeekschrift", bak: "midden" },
              { t: "3. Margaretha versoepelt de plakkaten", bak: "midden" },
              { t: "4. Het calvinisme leeft op, hagenpreken ontstaan", bak: "midden" },
              { t: "5. De Beeldenstorm breekt uit", bak: "eind" },
              { t: "6. Filips stuurt de hertog van Alva", bak: "eind" }
            ],
            bakjes: [
              { id: "begin", label: "het begon met…", som: "" },
              { id: "midden", label: "daardoor…", som: "" },
              { id: "eind", label: "en uiteindelijk…", som: "" }
            ],
            w: "Elke stap is het gevolg van de vorige én de oorzaak van de volgende. Zo werkt een oorzaak-gevolgketen."
          },
          {
            t: "mc",
            q: "Een gevolg kan zelf weer een oorzaak worden. Welk voorbeeld laat dat het beste zien?",
            o: [
              "de Beeldenstorm is een gevolg van de versoepeling én de oorzaak van Alva's komst",
              "de Beeldenstorm is een gevolg van Alva's komst",
              "de Tiende Penning is een oorzaak van de Beeldenstorm",
              "het Plakkaat van Verlatinghe is een oorzaak van het Smeekschrift"
            ],
            a: "de Beeldenstorm is een gevolg van de versoepeling én de oorzaak van Alva's komst",
            w: "Dezelfde gebeurtenis, twee rollen: gevolg van wat ervoor kwam, oorzaak van wat erna kwam.",
            meer: "Zo hangt de hele geschiedenis aan elkaar: er is bijna nooit een begin of een eind, alleen een keten.",
            fout: {
              "de Beeldenstorm is een gevolg van Alva's komst": "De volgorde klopt niet: Alva kwam in 1567, ná de Beeldenstorm van 1566.",
              "de Tiende Penning is een oorzaak van de Beeldenstorm": "Ook hier klopt de volgorde niet: de Tiende Penning kwam pas in 1569.",
              "het Plakkaat van Verlatinghe is een oorzaak van het Smeekschrift": "Vijftien jaar in de verkeerde richting: het Smeekschrift was 1566, het Plakkaat 1581."
            }
          },
          {
            t: "open",
            q: "Noem zowel een economische oorzaak als een economisch gevolg van de invoering van de Tiende Penning door Alva.",
            punten: 2,
            modelantwoord: "Een economische oorzaak is dat Alva geld nodig had om zijn leger in de Nederlanden te betalen. Een economisch gevolg is dat iedereen die handel dreef 10 procent belasting moest afdragen over verkoop en winst, waardoor handelaars minder overhielden en zich tegen Alva keerden.",
            sleutelwoorden: [
              { moet: ["leger", "geld nodig", "betalen", "kosten"], syn: ["soldaten"] },
              { moet: ["10", "tien", "belasting", "handel", "winst"], syn: ["procent"] }
            ],
            rubric: [
              "Je noemt als oorzaak dat Alva geld nodig had (voor zijn leger)",
              "Je noemt als gevolg dat handel en winst zwaarder belast werden"
            ],
            w: "Oorzaak: Alva had geld nodig voor zijn leger. Gevolg: 10% belasting op verkoop en winst, en dus verzet van handelaars.",
            meer: "Let erop dat de vraag om <b>allebei</b> vraagt en om <b>economische</b>. Een religieus of politiek antwoord telt hier niet mee, hoe waar het ook is."
          }
        ]
      }
    ]
  }

];

/* ============================ BEGRIPPEN ============================
   Vorm: [omschrijving, begrip]. De engine toont de omschrijving en vraagt het begrip.
   Definities volgen de officiële begrippenlijst van Tijd voor Geschiedenis hoofdstuk 4. */

window.BEGRIPPEN = {

  "bestuur-macht": {
    emoji: "👑",
    titel: "Bestuur & macht",
    paragraaf: "§4.4.1",
    items: [
      ["Het streven van vorsten naar één centraal bestuur met overal dezelfde wetten en regels", "centralisatie"],
      ["Bijzondere rechten die een stad of gewest van de heer heeft gekregen", "privileges"],
      ["Plaatsvervang(st)er van de vorst in alle Nederlandse gewesten", "landvoogd"],
      ["Bestuurlijke eenheid van een land, zoals een provincie; er waren er zeventien", "gewest"],
      ["Het streven van Nederlandse steden en gewesten naar behoud van zelfstandigheid", "particularisme"],
      ["De gezamenlijke vergadering van alle Statenvergaderingen van de gewesten", "Staten-Generaal"],
      ["Plaatsvervanger van de heer binnen één gewest", "stadhouder"]
    ]
  },

  "geloof-vervolging": {
    emoji: "⛪",
    titel: "Geloof & vervolging",
    paragraaf: "§4.4.1",
    items: [
      ["Volgelingen van Johannes Calvijn; in de Nederlanden de grootste protestantse groep", "calvinisten"],
      ["Volgelingen van Maarten Luther", "lutheranen"],
      ["Een op papier gedrukte wet, vooral gericht tegen ketters", "bloedplakkaat"],
      ["Rechtbank van de rooms-katholieke kerk voor het opsporen en bestrijden van ketterij", "inquisitie"],
      ["Iemand die volgens de kerk van het ware geloof afwijkt", "ketter"],
      ["Godsdienstige bijeenkomst in het open veld, geleid door een calvinistische predikant", "hagenpreek"]
    ]
  },

  "jaar-1566": {
    emoji: "🔥",
    titel: "1566 — het jaar dat het knapte",
    paragraaf: "§4.4.1 en §4.4.2",
    items: [
      ["Verzoekschrift van ongeveer 200 lage edelen in 1566 om milder op te treden tegen protestanten", "Smeekschrift der edelen"],
      ["Uitbarsting van geweld onder het calvinistische volk in 1566, waarbij kerken en kloosters werden ontdaan van katholieke versieringen", "Beeldenstorm"],
      ["Het Franse woord voor bedelaars, waar de naam van de opstandelingen vandaan komt", "gueux"],
      ["Een scheldwoord dat een groep trots overneemt als erenaam", "geuzennaam"],
      ["Beelden van heiligen in katholieke kerken, het belangrijkste doelwit in 1566", "heiligenbeelden"]
    ]
  },

  "alva": {
    emoji: "⚔️",
    titel: "Alva's harde hand",
    paragraaf: "§4.4.2",
    items: [
      ["Rechtbank die Alva instelde om de beeldenstormers en de verantwoordelijken te straffen", "Raad van Beroerten"],
      ["De bijnaam van de Raad van Beroerten, vanwege de ongeveer 1100 doodvonnissen", "bloedraad"],
      ["Vaste belasting van 10% op de verkoop van goederen en op winst uit ondernemingen", "Tiende Penning"],
      ["De volmacht waarmee Alva zelf mocht bepalen hoe hij optrad, zonder toestemming vooraf", "onbeperkte volmacht"],
      ["Het belegeren van een stad tot die zich overgeeft; bij Leiden leidde dat tot grote sterfte", "beleg"]
    ]
  },

  "de-opstand": {
    emoji: "🛡️",
    titel: "De Opstand",
    paragraaf: "§4.4.3",
    items: [
      ["Opstandeling in de tijd van de Nederlandse Opstand", "geus"],
      ["Opstandeling die vanaf het water vecht; nam in 1572 Den Briel in", "watergeus"],
      ["Opstand binnen een leger of scheepsbemanning tegen de eigen leiding", "muiterij"],
      ["Opstand van de Nederlandse gewesten tegen het Spaanse gezag tussen 1568 en 1648", "Nederlandse Opstand"],
      ["Andere naam voor de Nederlandse Opstand, die de indruk wekt van tachtig jaar aaneengesloten oorlog", "Tachtigjarige Oorlog"],
      ["Besluit van de Staten-Generaal uit 1581 om Filips II niet langer als vorst te erkennen", "Plakkaat van Verlatinghe"],
      ["Officiële naam van Nederland tussen 1588 en 1795: een land zonder vorst", "Republiek der Zeven Verenigde Nederlanden"],
      ["De stad die de watergeuzen op 1 april 1572 bij toeval innamen", "Den Briel"],
      ["De slag in 1568 die de eerste overwinning van de opstand opleverde", "Heiligerlee"]
    ]
  },

  "wie-is-wie": {
    emoji: "🧑‍🤝‍🧑",
    titel: "Wie is wie",
    paragraaf: "§4.4",
    items: [
      ["Koning van Spanje en heer van de Nederlanden; volgde in 1555 zijn vader op", "Filips II"],
      ["De vader en voorganger van Filips II, die hier was opgegroeid", "Karel V"],
      ["Halfzus van Filips II en landvoogdes die na het Smeekschrift versoepelde", "Margaretha van Parma"],
      ["De generaal die Filips II in 1567 stuurde en die de Raad van Beroerten oprichtte", "hertog van Alva"],
      ["Hoge edelman die de leiding nam over de geuzen en in 1568 binnenviel", "Willem van Oranje"],
      ["De Spaanse landvoogd na Alva, die de zuidelijke gewesten aan zijn kant kreeg", "Alexander Farnese"],
      ["De man die Willem van Oranje in 1584 in Delft doodschoot", "Balthasar Gerards"]
    ]
  },

  "jaartallen": {
    emoji: "📅",
    titel: "Jaartallen",
    paragraaf: "§4.4",
    items: [
      ["Filips II volgt Karel V op", "1555"],
      ["Het Smeekschrift der edelen en de Beeldenstorm", "1566"],
      ["De hertog van Alva komt naar de Nederlanden", "1567"],
      ["De slag bij Heiligerlee: het begin van de Nederlandse Opstand", "1568"],
      ["De watergeuzen nemen Den Briel in, op 1 april", "1572"],
      ["De gewesten sluiten een verdrag: eigen godsdienst, Spanjaarden eruit", "1576"],
      ["Noord en zuid gaan uit elkaar in twee unies", "1579"],
      ["Het Plakkaat van Verlatinghe: Filips II wordt afgezworen", "1581"],
      ["Willem van Oranje wordt vermoord in Delft", "1584"],
      ["De Republiek der Zeven Verenigde Nederlanden ontstaat", "1588"],
      ["Het einde van de Tachtigjarige Oorlog", "1648"]
    ]
  },

  "vaardigheid": {
    emoji: "🧭",
    titel: "Oorzaken & gevolgen",
    paragraaf: "vaardigheid",
    items: [
      ["Waardoor iets gebeurt; wat ten grondslag ligt aan een gebeurtenis", "oorzaak"],
      ["Wat er volgt uit een gebeurtenis", "gevolg"],
      ["De laatste druppel: één concrete gebeurtenis vlak vóór het moment", "directe oorzaak"],
      ["Een oorzaak die al veel langer op de achtergrond speelt", "indirecte oorzaak"],
      ["Een gevolg dat degene die het deed ook echt wilde", "bedoeld gevolg"],
      ["Een gevolg dat gebeurde terwijl niemand het wilde", "onbedoeld gevolg"],
      ["Een moment waarna de situatie duidelijk anders is", "kantelpunt"],
      ["Dat iets hetzelfde blijft ten opzichte van vroeger", "continuïteit"],
      ["Een belangrijk kenmerk van een tijdvak, zoals het conflict dat leidde tot een Nederlandse staat", "kenmerkend aspect"]
    ]
  }

};

/* ============================ OVERZICHT ============================
   De oorzaak-gevolgkaart: één beslisboom die Storm elke keer terugziet.
   Dit is het contrastieve hulpmiddel uit references/grammatica-overzicht.md,
   hier toegepast op een geschiedenisvaardigheid in plaats van grammatica. */

window.OVERZICHT = {
  titel: "De oorzaak-gevolgkaart",
  tegelTekst: "Oorzaak of gevolg? Bedoeld of niet? Zie in één overzicht welke vraag je stelt.",
  intro: "Bij bijna elke vraag van dit hoofdstuk kun je dezelfde drie vragen stellen. Loop ze in deze volgorde af, dan kom je altijd uit bij het goede antwoord.",
  kaart: [
    {
      id: "oorzaak", label: "VOOR de gebeurtenis", sub: "→ oorzaak", kop: true, kleur: "plum",
      kinderen: [
        { id: "direct", label: "direct", regel: "de laatste druppel" },
        { id: "indirect", label: "indirect", regel: "speelt al langer" },
        {
          id: "soort-o", label: "welk soort?", kop: true,
          kinderen: [
            { id: "eco-o", label: "economisch", regel: "geld" },
            { id: "rel-o", label: "religieus", regel: "geloof" },
            { id: "pol-o", label: "politiek", regel: "bestuur" },
            { id: "soc-o", label: "sociaal", regel: "mensen onderling" }
          ]
        }
      ]
    },
    {
      id: "gevolg", label: "NA de gebeurtenis", sub: "→ gevolg", kop: true, kleur: "brand",
      kinderen: [
        { id: "bedoeld", label: "bedoeld", regel: "dit wilden ze" },
        { id: "onbedoeld", label: "onbedoeld", regel: "dit wilde niemand" },
        { id: "directg", label: "direct", regel: "meteen zichtbaar" },
        { id: "indirectg", label: "indirect", regel: "pas na jaren" }
      ]
    }
  ],
  stappen: [
    {
      kop: "Stap 1 — voor of na?",
      pad: ["oorzaak", "gevolg"],
      uitleg: [
        "Begin altijd hier. Zet de twee dingen op een tijdlijn en kijk welke eerst komt.",
        "Komt het <b>vóór</b> de gebeurtenis? Dan is het een <b>oorzaak</b>. Komt het <b>erná</b>? Dan is het een <b>gevolg</b>."
      ],
      vb: [
        { en: "Alva komt in 1567, de Beeldenstorm was in 1566.", let: "Alva komt erná, dus Alva's komst is een gevolg van de Beeldenstorm — nooit een oorzaak." }
      ],
      check: {
        q: "De Tiende Penning (1569) ten opzichte van de Beeldenstorm (1566): oorzaak of gevolg?",
        o: ["gevolg", "oorzaak"],
        a: "gevolg",
        goed: "✅ Precies — 1569 komt ná 1566, dus het kan alleen een gevolg zijn.",
        fout: { "oorzaak": "Kijk naar de jaartallen: 1569 is later dan 1566. Iets dat later gebeurt kan geen oorzaak zijn van iets dat eerder gebeurde." }
      }
    },
    {
      kop: "Stap 2a — bij een oorzaak: direct of indirect?",
      pad: ["oorzaak", "direct", "indirect"],
      uitleg: [
        "<b>Direct</b> (ook wel <b>aanleiding</b>): één concrete gebeurtenis, vlak ervoor. De laatste druppel die de emmer doet overlopen.",
        "<b>Indirect</b>: speelt al veel langer op de achtergrond. Vaak zie je pas achteraf dat het meespeelde."
      ],
      vb: [
        { en: "De Beeldenstorm → directe oorzaak van Alva's komst.", let: "Eén gebeurtenis, en Filips reageerde meteen." },
        { en: "De groei van het calvinisme → indirecte oorzaak.", let: "Dat speelde al tientallen jaren en bouwde de spanning langzaam op." }
      ],
      check: {
        q: "De ruzie over centralisatie, die al sinds Karel V speelde: direct of indirect?",
        o: ["indirect", "direct"],
        a: "indirect",
        goed: "✅ Klopt — het speelde al generaties lang op de achtergrond.",
        fout: { "direct": "Direct betekent: de laatste druppel, vlak ervoor. Dit sleepte al sinds Karel V, dus het is juist een langlopende, indirecte oorzaak." }
      }
    },
    {
      kop: "Stap 2b — bij een gevolg: bedoeld of onbedoeld?",
      pad: ["gevolg", "bedoeld", "onbedoeld"],
      uitleg: [
        "Vraag je af: <b>wilde degene die het deed dit resultaat?</b>",
        "<b>Bedoeld</b> = ja, dit was het plan. <b>Onbedoeld</b> = het gebeurde óók, maar niemand wilde het.",
        "In dit hoofdstuk zijn de onbedoelde gevolgen juist de rode draad: bijna elke harde maatregel maakte het verzet groter."
      ],
      vb: [
        { en: "Alva straft de beeldenstormers → bedoeld.", let: "Dat was letterlijk zijn opdracht van Filips II." },
        { en: "Door Alva groeit het verzet → onbedoeld.", let: "Filips stuurde hem juist om rust te krijgen. Hij kreeg oorlog." }
      ],
      check: {
        q: "Margaretha versoepelt de plakkaten en het calvinisme leeft op. Bedoeld of onbedoeld?",
        o: ["onbedoeld", "bedoeld"],
        a: "onbedoeld",
        goed: "✅ Precies — ze wilde rust brengen, niet het calvinisme laten groeien.",
        fout: { "bedoeld": "Dan zou Margaretha het calvinisme hebben willen laten groeien. Ze was katholiek en versoepelde juist uit angst voor een opstand van de edelen." }
      }
    },
    {
      kop: "Stap 3 — welk soort?",
      pad: ["soort-o", "eco-o", "rel-o", "pol-o", "soc-o"],
      uitleg: [
        "Zoek het <b>kernwoord</b> en kies daarmee het soort:",
        "<b>Economisch</b> = arbeid en geld (belasting, handel, winst, rijkdom).<br><b>Religieus</b> = geloof (kerk, plakkaten, hagenpreken, beelden).<br><b>Politiek</b> = organisatie en bestuur (centralisatie, rechtbanken, wie de baas is).<br><b>Sociaal</b> = hoe mensen met elkaar omgaan (angst, vluchten, samenwerken).",
        "Let op: één gebeurtenis kan oorzaken en gevolgen van <b>meerdere</b> soorten hebben. Dat is geen fout, dat is juist hoe geschiedenis werkt."
      ],
      vb: [
        { en: "De Tiende Penning → economisch.", let: "Belasting, dus geld." },
        { en: "Edelen vluchten uit angst → sociaal.", let: "Het gaat over wat mensen doen en voelen, niet over geld of wetten." }
      ],
      check: {
        q: "De Raad van Beroerten als rechtbank: welk soort?",
        o: ["politiek", "economisch", "sociaal"],
        a: "politiek",
        goed: "✅ Ja — een rechtbank gaat over bestuur en rechtspraak, en dat is politiek.",
        fout: {
          "economisch": "Er komt geen geld aan te pas. De belasting van Alva (Tiende Penning) is economisch; zijn rechtbank niet.",
          "sociaal": "Sociaal gaat over hoe mensen onderling omgaan. Een rechtbank instellen is een bestuurlijke maatregel, dus politiek."
        }
      }
    },
    {
      kop: "Samenvatting",
      pad: [],
      samenvatting: [
        "1. Voor of na? → oorzaak of gevolg",
        "2a. Oorzaak: laatste druppel of speelt al langer? → direct of indirect",
        "2b. Gevolg: wilde iemand dit? → bedoeld of onbedoeld",
        "3. Kernwoord: geld / geloof / bestuur / mensen → economisch, religieus, politiek of sociaal",
        "En altijd: schrijf het verband op met 'waardoor' of 'daardoor'."
      ],
      uitleg: [
        "Deze vier vragen dekken bijna elke oorzaak-gevolgvraag van het SO af. Loop ze in deze volgorde af en je hoeft nooit te gokken.",
        "Ga nu oefenen — onderwerp 7 (Oorzaken en gevolgen) gebruikt precies deze kaart."
      ]
    }
  ]
};

/* ============================ MIXVRAGEN ============================
   Discriminatievragen voor de SO-oefentoets: juist de dingen die door elkaar
   gehaald worden (M7, M8, M9 uit het leerplan). */

window.MIXVRAGEN = [
  {
    t: "mc",
    q: "Wat is het verschil tussen het Smeekschrift (1566) en het Plakkaat van Verlatinghe (1581)?",
    o: [
      "het Smeekschrift vraagt om mildheid, het Plakkaat zet de koning af",
      "het Smeekschrift zet de koning af, het Plakkaat vraagt om mildheid",
      "ze zijn allebei geschreven door Filips II",
      "het zijn twee namen voor hetzelfde document"
    ],
    a: "het Smeekschrift vraagt om mildheid, het Plakkaat zet de koning af",
    w: "Smeken om mildheid tegenover de koning verlaten. Vijftien jaar ertussen.",
    meer: "Ezelsbruggetje: <b>S</b>meekschrift = <b>S</b>meken. <b>V</b>erlatinghe = <b>V</b>erlaten.",
    fout: {
      "het Smeekschrift zet de koning af, het Plakkaat vraagt om mildheid": "Precies omgedraaid. In 1566 wilden de edelen Filips juist behouden, maar milder.",
      "ze zijn allebei geschreven door Filips II": "Allebei kwamen ze van de Nederlandse kant: het Smeekschrift van lage edelen, het Plakkaat van de Staten-Generaal.",
      "het zijn twee namen voor hetzelfde document": "Twee totaal verschillende documenten, met vijftien jaar ertussen."
    }
  },
  {
    t: "mc",
    q: "Wat is het verschil tussen de Raad van Beroerten en de Tiende Penning?",
    o: [
      "de Raad is een rechtbank, de Tiende Penning een belasting",
      "de Raad is een belasting, de Tiende Penning een rechtbank",
      "allebei rechtbanken van Alva",
      "allebei belastingen van Filips II"
    ],
    a: "de Raad is een rechtbank, de Tiende Penning een belasting",
    w: "Straffen tegenover geld ophalen. Allebei van Alva, maar totaal verschillend.",
    meer: "Raad van Beroerten: ~1100 doodvonnissen, bijnaam bloedraad. Tiende Penning: 10% op verkoop en winst.",
    fout: {
      "de Raad is een belasting, de Tiende Penning een rechtbank": "Omgedraaid. 'Penning' verwijst naar geld, 'Raad' naar een rechtbank.",
      "allebei rechtbanken van Alva": "Alleen de Raad van Beroerten was een rechtbank. De Tiende Penning was een belasting.",
      "allebei belastingen van Filips II": "Allebei waren ze van Alva, en alleen de Tiende Penning was een belasting."
    }
  },
  {
    t: "mc",
    q: "Welke gebeurtenis was de <b>aanleiding</b> (directe oorzaak) voor de komst van Alva?",
    o: ["de Beeldenstorm", "de groei van het calvinisme", "de inname van Den Briel", "het Plakkaat van Verlatinghe"],
    a: "de Beeldenstorm",
    w: "De laatste druppel: Filips hoorde ervan en stuurde meteen zijn beste generaal.",
    meer: "De groei van het calvinisme is een <b>indirecte</b> oorzaak: die speelde al jaren.",
    fout: {
      "de groei van het calvinisme": "Dat is een <b>indirecte</b> oorzaak — het speelde al tientallen jaren, en was niet de directe aanleiding.",
      "de inname van Den Briel": "Dat was in 1572, vijf jaar ná Alva's komst.",
      "het Plakkaat van Verlatinghe": "Dat was in 1581, veertien jaar later."
    }
  },
  {
    t: "mc",
    q: "Bij de Beeldenstorm werden vooral…",
    o: ["beelden en kerkversieringen vernield", "mensen gedood", "steden belegerd", "schepen veroverd"],
    a: "beelden en kerkversieringen vernield",
    w: "Het ging om spullen: altaren, beelden, pilaren en raamschilderingen.",
    meer: "De doodvonnissen kwamen pas daarna, van de Raad van Beroerten van Alva.",
    fout: {
      "mensen gedood": "Dit is de bekendste denkfout. De Beeldenstorm was vernieling van voorwerpen, geen bloedbad.",
      "steden belegerd": "Belegeren was juist de tactiek van Alva, later, bijvoorbeeld bij Leiden.",
      "schepen veroverd": "Dat deden de watergeuzen, en dat was jaren later."
    }
  },
  {
    t: "mc",
    q: "Wat betekent het dat de Nederlanden in 1588 een <b>republiek</b> werden?",
    o: [
      "ze gingen verder zonder vorst",
      "iedereen mocht voortaan stemmen",
      "ze werden een deel van Spanje",
      "ze kregen een nieuwe koning"
    ],
    a: "ze gingen verder zonder vorst",
    w: "Republiek = land zonder vorst. Dat is de kern.",
    meer: "Het bestuur lag bij regenten. Een republiek is dus niet automatisch een democratie.",
    fout: {
      "iedereen mocht voortaan stemmen": "Een veelgemaakte fout. Republiek zegt alleen iets over het ontbreken van een vorst, niet over stemrecht.",
      "ze werden een deel van Spanje": "Het tegenovergestelde: ze hadden Filips II juist in 1581 afgezworen.",
      "ze kregen een nieuwe koning": "Ze besloten juist géén nieuwe vorst aan te wijzen. Dat is wat een republiek is."
    }
  },
  {
    t: "mc",
    q: "Alva werd gestuurd om de orde te herstellen, maar het verzet werd juist groter. Wat voor gevolg is dat?",
    o: ["onbedoeld", "bedoeld", "een directe oorzaak", "continuïteit"],
    a: "onbedoeld",
    w: "Niemand aan Spaanse kant wilde dit resultaat, en toch gebeurde het.",
    meer: "Deze boemerang is de rode draad van 4.4: harder ingrijpen gaf steeds groter verzet.",
    fout: {
      "bedoeld": "Dan zou Filips een grotere opstand hebben gewild. Hij stuurde Alva juist om rust te krijgen.",
      "een directe oorzaak": "Een oorzaak komt vóór de gebeurtenis; dit kwam juist erná.",
      "continuïteit": "Continuïteit betekent dat iets hetzelfde blijft. Hier verandert er juist heel veel."
    }
  },
  {
    t: "mc",
    q: "Welk jaartal hoort bij de inname van Den Briel?",
    o: ["1572", "1566", "1568", "1581"],
    a: "1572",
    w: "1 april 1572 — het kantelpunt van de Opstand.",
    meer: "Ezelsbruggetje uit die tijd: 'Op 1 april verloor Alva zijn bril.'",
    fout: {
      "1566": "Dat is het jaar van het Smeekschrift en de Beeldenstorm.",
      "1568": "Dat is het begin van de Opstand: de slag bij Heiligerlee.",
      "1581": "Dat is het Plakkaat van Verlatinghe."
    }
  },
  {
    t: "mc",
    q: "Hoorden de Nederlanden bij Spanje?",
    o: [
      "nee, het was een apart gebied met dezelfde heer",
      "ja, het was een Spaanse provincie",
      "ja, sinds Filips II koning werd",
      "nee, er was helemaal geen verband"
    ],
    a: "nee, het was een apart gebied met dezelfde heer",
    w: "Filips II was koning van Spanje én heer van de Nederlanden. Twee gebieden, één baas.",
    meer: "Juist daarom viel het zo op dat hij Spaanse edelen in het Nederlandse bestuur zette.",
    fout: {
      "ja, het was een Spaanse provincie": "De bekendste misvatting van dit hoofdstuk. De gewesten hadden eigen wetten, munten en privileges.",
      "ja, sinds Filips II koning werd": "Hij erfde ze van Karel V, maar ze werden daardoor geen deel van Spanje.",
      "nee, er was helemaal geen verband": "Er was wel degelijk een band: dezelfde vorst, en Spaanse edelen in het bestuur."
    }
  },
  {
    t: "mc",
    q: "Wie was landvoogdes vóór de hertog van Alva?",
    o: ["Margaretha van Parma", "Maria van Bourgondië", "Alexander Farnese", "Willem van Oranje"],
    a: "Margaretha van Parma",
    w: "De halfzus van Filips II, die aftrad toen Alva kwam.",
    meer: "Volgorde van landvoogden in deze paragraaf: Margaretha van Parma → hertog van Alva → Alexander Farnese.",
    fout: {
      "Maria van Bourgondië": "Die hoort bij een veel eerdere periode, de Bourgondische tijd.",
      "Alexander Farnese": "Die kwam juist ná Alva.",
      "Willem van Oranje": "Hij was de leider van de opstand, niet een vertegenwoordiger van de koning."
    }
  },
  {
    t: "mc",
    q: "Waarom lukte het Filips II niet om het aantal protestanten te verminderen?",
    o: [
      "door de harde vervolging keerden juist meer mensen zich van de kerk af",
      "hij had te weinig soldaten in de Nederlanden",
      "hij liet de protestanten met rust",
      "de protestanten vluchtten allemaal naar Duitsland"
    ],
    a: "door de harde vervolging keerden juist meer mensen zich van de kerk af",
    w: "Het middel werkte averechts: hoe harder de vervolging, hoe meer mensen afhaakten.",
    meer: "Dit is opdracht 1b uit het werkboek, en meteen het patroon van de hele paragraaf.",
    fout: {
      "hij had te weinig soldaten in de Nederlanden": "Daar ging het niet om; het probleem was dat de vervolging het tegenovergestelde effect had.",
      "hij liet de protestanten met rust": "Integendeel: hij trad juist veel strenger op dan zijn vader.",
      "de protestanten vluchtten allemaal naar Duitsland": "Sommige edelen vluchtten later, maar het aantal protestanten hier nam juist toe."
    }
  },
  {
    t: "mc",
    q: "Welk soort oorzaak is de Tiende Penning voor het verzet tegen Alva?",
    o: ["economisch", "religieus", "sociaal", "het is geen oorzaak"],
    a: "economisch",
    w: "Belasting op handel en winst: geld, dus economisch.",
    meer: "Juist omdat het over geld ging, raakte het ook katholieken — en werd het verzet breder dan alleen protestants.",
    fout: {
      "religieus": "Religieus gaat over geloof. De Tiende Penning raakte iedereen die handel dreef, ongeacht geloof.",
      "sociaal": "Sociaal gaat over hoe mensen met elkaar omgaan. Hier draait het om belasting.",
      "het is geen oorzaak": "Het is wel degelijk een oorzaak van het verzet: de belasting maakte veel mensen boos op Alva."
    }
  },
  {
    t: "mc",
    q: "Wat blijkt uit het Wilhelmus over hoe Willem van Oranje tegen Filips II aankeek?",
    o: [
      "hij zei de koning altijd geëerd te hebben",
      "hij noemde de koning zijn grootste vijand",
      "hij wilde zelf koning van Spanje worden",
      "hij zei niets over de koning"
    ],
    a: "hij zei de koning altijd geëerd te hebben",
    w: "'Den koning van Hispanje heb ik altijd geëerd' — eerste couplet.",
    meer: "Hij vocht tegen de <b>tirannie</b>, niet tegen de koning zelf. Filips zag dat heel anders en zette een prijs op zijn hoofd.",
    fout: {
      "hij noemde de koning zijn grootste vijand": "Dat was juist andersom: Filips zag Willem als de grote vijand.",
      "hij wilde zelf koning van Spanje worden": "Daar zegt het lied niets over, en dat was ook niet zijn doel.",
      "hij zei niets over de koning": "Het eerste couplet eindigt er juist mee."
    }
  }
];

window.AANMOEDIGING = {
  goed: ["Goed zo! 🌟", "Yes, precies!", "Top, Storm!", "Helemaal goed! ⭐", "Lekker bezig!", "Sterk gered! 🧤"],
  bijna: ["Bijna! Kijk even mee.", "Net niet — geen probleem!", "Oei, bijna goed.", "Dat is een lastige, hè?"],
  levelup: ["Wow, niveau omhoog! 🏅", "Je snapt het — moeilijker mag nu!", "Knap! Op naar het volgende niveau! 🚀"],
  leveldown: ["Geeft niks — we oefenen dit rustig nog een keer. 💛", "Even een stapje terug, dan zit het straks vast.", "Geen stress, we pakken het samen opnieuw."],
  stapelklaar: ["Stapel gehaald! 🎉 Op naar de volgende.", "Alle begrippen gekend — top!", "Yes, stapeltje af! ⭐"]
};

/* ============================ PODCASTS ============================
   NotebookLM-afleveringen (bron + prompts: ../../02-verwerkt/podcast/), hier mono 56 kbps AAC.
   De 🎧-tegel verschijnt automatisch zolang deze lijst niet leeg is. */
window.PODCASTS = [
  { id:"ep1", emoji:"👑", titel:"1 · Een nieuwe koning botst",        sub:"Filips II, centralisatie en de vervolging die averechts werkt · 10 min", file:"podcast-1-een-nieuwe-koning-botst.m4a", tegelSub:"het hele hoofdstuk in afleveringen van ~8 minuten" },
  { id:"ep2", emoji:"🔥", titel:"2 · 1566: Smeekschrift en Beeldenstorm", sub:"Het jaar dat het knapte, in de goede volgorde · 7 min",            file:"podcast-2-1566-smeekschrift-en-beeldenstorm.m4a" },
  { id:"ep3", emoji:"⚔️", titel:"3 · Alva's harde hand",              sub:"Drie opdrachten, de bloedraad en de Tiende Penning · 7 min",        file:"podcast-3-alvas-harde-hand.m4a" },
  { id:"ep4", emoji:"🛡️", titel:"4 · De Opstand begint",              sub:"Geuzen, Heiligerlee en het kantelpunt Den Briel · 10 min",         file:"podcast-4-de-opstand-begint.m4a" },
  { id:"ep5", emoji:"🇳🇱", titel:"5 · Naar een eigen staat",           sub:"1576, 1579, 1581, 1588 — en het Wilhelmus · 13 min",               file:"podcast-5-naar-een-eigen-staat.m4a" },
  { id:"ep6", emoji:"🧭", titel:"6 · Oorzaken en gevolgen",           sub:"De vier vragen waar de SO-punten zitten · 7 min",                   file:"podcast-6-oorzaken-en-gevolgen.m4a" },
  { id:"ep7", emoji:"⭐", titel:"7 · De instinkers-check",            sub:"Zes denkfouten — luister vlak vóór het SO · 24 min",               file:"podcast-7-de-instinkers-check.m4a" }
];
