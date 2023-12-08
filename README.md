# Five Nights at Sorce
**Klauzurní práce *2023/24*** <br>
**2. ročník 1. pololetí** <br>
**Studijní předmět:** *Programovací jazyk JavaScriptk* <br>
## Programy
Programy, které byly využity pro tyto klauzury, na naprogramování téhle hry jsou:
-	[VS Code](https://code.visualstudio.com/) – psaní kódu 
-	[Gimp](https://www.gimp.org/) – editace obrázků
-	[SFM](https://www.sourcefilmmaker.com/) – 3d modely
-	[Word](https://www.microsoft.com/cs-cz/microsoft-365/word) – psaní dokumentace
-	[PowerPoint](https://www.microsoft.com/cs-cz/microsoft-365/powerpoint) – prezentace
-	[Microsoft Edge](https://www.microsoft.com/cs-cz/edge/), [Firefox](https://www.mozilla.org/), [Duckduckgo](https://duckduckgo.com/), [Chromium](https://www.chromium.org/) – testování funkčnosti
# Princip hry
Hra je kopií známé hry **Five Nights at Freddy's** kde máte cílem přežít  noční směnu od 20:00 do 8:00 aniž by vás zabili protagonisti ze hry **Team Fortress 2**. Na tento úkol jste vybaveni tabletem s kamerovým systémem, třemi dveřmi a světly. Všechny tyhle užitečné možnosti vám ovšem berou kus vaší drahocenné elektřiny které máte jen omezené množství.
## Tablet & Kamery 
Když najedete/kliknete na spodní část ok otevře se vám tablet na kterém se vám zobrazuje aktuální kamera, procenta baterie, čas a (defaultně) vpravo dole mini-mapa komplexu.
Nacházíte se v šedě vyznačené místnosti a kameru na kterou se nyní díváte vidíte světle zeleně, pro změnění stačí jen najet myší na jinou místnost.
## Dveře & Světlašení
Najetím/kliknutím na vrchní část obrazovky rozsvítíte světla která vám umožní se podívat hlouběji do tmavých chodeb komplexu, když v některých z těchto chodeb uvidíte nepřítele, máte jediné možnosti: zavřít dveře tlačítkem vedle, nebo doufat že odejdou. 
## Elektřina & Konec hry
Elektřina vám ubývá různě rychle podle toho co děláte, každá aktivita má svůj koeficient který se odčítá postupně od celkové hodnoty. 
V momentě kdy dosáhnete 0% hra ještě nekončí, avšak už je jen na náhodě. Všechny zavřené dveře se otevřou, světla se vypnou a tablet bude též nefunkční.
Hra končí pouze ve dvou momentech, čas doběhne na 8:00, nebo se necháte chytit jedním z nepřátel. 
Poté se vám zobrazí skóre, kolik energie vám zůstalo a v případě prohry jak daleko jste se dostaly.
## Custom & Settings
V setitn je slide bar kterým se upravuje velikost kamer, a kliknutím mimo se upravuje pozice kamer na tabletu.
V custom  můžeme najít nastavení ohledně hry samotné jako je agrese charakterů, kolik elektřiny
# Kód
## variables / constants / objects
### canvas
`canvasX canvasY` - poměry stran <br> 
`canvas` - odkaz na element v html <br>
`ctx` - canvas <br>
`renderSpeed` - kolik milisekund bude mezi každým framem <br>
`ubdateSpeed` - kolik milisekund bude mezi každým ubdatem <br>
`moseposition` - array který uchovává x a y souřadnice kurzoru <br>
### debug
`debug` - boolean debug <br>
`pointerpos` - array který uchovává x a y souřadnice debug kurzoru <br>
### menu
`buttonsMM` - velikost, barva, text a font tlačítek v menu <br>
`settingB` - jméno, minimální, maximální hodnota, násobič a aktuální hodnota proměné v custom <br>
`settingS` - vyhodnocování slideru v settings <br>
`mM` - status menu (jestli je vybraný tutorial, settings, custom nebo samotné menu) <br>
`mainMenuId` - id setIntervalu spravující rendering menu <br>
### game
`time` - array s aktuálním časem a časem finálním <br>
`godmode` - boolean nesmrtelnost <br>
`power` - energie <br>
`blackoutVar` - boolean když je `power` na 0  <br>
`tabletPullupLoss`, `doorLoss`, `lightLoss`, `powerloss` - stráty energie <br>doorlock
`doorlock` - array se stavy dveří <br>
#### tablet
`cameraOffset` - off set kamer a resize background kamer <br>
`cameraSelect` - aktuálně vybraná kamera <br>
`tabletUpTrigger` - do spodní kolikatiny se zpustí tablet <br>
`cameras` - boolean zapnutých kamer <br>
`tabletCorners` - kolik `ctx` unit má tablet vynecháno od okraje obrazovky <br>
`tabletEdges` - kolik `ctx` unit má obrazovka tabletu vynecháno od okraje tabletu <br>
`camSize` - velikost kamer <br>
`room0camAngle` - "úhel" v hlavní místnosti u koukání do leva/prava <br>
`roomPosition` - opzice kamer na minimapě v `ctx` unitách <br>
`chodbyThicc` - šířka chodeb na kamerách v `ctx` unitách <br>
#### assets
`nill` - sorce cesta k transparentímu 1x1 px obrázku <br>
`EnemakDB` - 2 dimenzionalni array s sorce cestamy k určitým obrázků nepřátel <br>
`guiTablet` - jednoduchý gui pro ukázku ovládání <br>
`guiJitter` - šum u měnění kamer <br>
`testImg` - testovací obrázek <br>
`fredyRoom0`, `bonnyRoom0`, `chickaRoom0`, `foxyRoom0` - render nepřátel v hlavní místnosti<br>
`room0Img`, `cameraImg` - render příšlusících místností <br>
`fredyCamera`, `bonnyCamera`, `chickaCamera`, `foxyCamera` - render nepřátel na kamerách <br>
#### enemies
`enemak` - class nepřátel
  - `fredy`
  - `bonny`
  - `chicka`
  - `foxy` <br>
  
`this.info.id` - id (například na první index `EnemakDB`)<br>
`this.info.position` - pozice <br>
`this.info.anger` - pravděpodobnost na akci <br>
`this.ubdate.now` - aktuální průběh ubdatu <br>
`this.ubdate.max` - podmínka zpuštění ubdatu <br>
`this.camerastun` - ohromení z kamer (pouze u `foxy`) <br>
## Funkce
`dies()` <br>
`win()` <br>
### game
`ubdate()` <br>
`render()` <br>
### menu
`mainMenu()` - velký switch s různýma stranama hlavního menu (kdybych tou dobou měl oběkty bylo by to přez oběkty) <br>
  0 - první stránka co uvidíte při načtení indexu 
  1 - [Play] clearne interval s `mainMenu()` funkcí a zpustí `ubdate()` s `render()` funkcí do příslušících intervalů
  2 - [Tutorial] listuje arrayem png
  3 - [Settings] zpouští `tablet(true)` a pomocí slideru měmní `camSize` a `cameraOffset`
  4 - [Custom] forloopy co měří `settingB` velikost a zakreslují podle toho do canvasu
### class enemak
`attack()` - jesli jsou dveře na dané pozici otevřené vygeneruje číslo 0 - 100 které jestli bude menčí než 30 zpustí `dies()` <br>
