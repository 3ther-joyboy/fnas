# fanf
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
## variables & constants
### canvas
`canvasX canvasY` - poměry stran
`canvas` - odkaz na element v html
`ctx` - canvas
`renderSpeed` - kolik milisekund bude mezi každým framem
`ubdateSpeed` - kolik milisekund bude mezi každým ubdatem
`moseposition` - array který uchovává x a y souřadnice kurzoru

### debug
`debug` - boolean
`pointerpos` - array který uchovává x a y souřadnice debug kurzoru
### menu
`buttonsMM` - velikost, barva, text a font tlačítek v menu
`settingB` - jméno, minimální, maximální hodnota, násobič a aktuální hodnota proměné v custom
`settingS` - vyhodnocování slideru v settings
`mM` - status menu, 
`mainMenuId` - id setIntervalu spravující rendering menu
### game
