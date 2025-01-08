# Karel - HTML/JS Aplikace

Tato aplikace simuluje robota Karla, který se pohybuje po 2D herním poli na základě jednoduchých textových příkazů. Uživatel zadává příkazy do textového pole, a Karel na ně reaguje – pohybuje se, otáčí, pokládá symboly nebo provádí další akce.

## Jak aplikaci používat

1. Do textového pole napište příkazy (každý příkaz na nový řádek).
2. Klikněte na tlačítko **"Proveď"**, aby se příkazy vykonaly.
3. Sledujte pohyb Karla na mřížce.

### Příklady použití:

```
KROK 2
VLEVOBOK 3
POLOZ K
KROK 1
POLOZ A
KROK 1
POLOZ R
KROK 1
POLOZ E
KROK 1
POLOZ L
KROK 1
VLEBOBOK 3
KROK 1
```

![Images](/images/zakladni-zobrazeni.png?reset=2 "Základní zobrazení")

## Seznam příkazů

- **RESET**  
  Resetuje pole a vrátí Karla do levého horního rohu.

- **KROK [číslo]**  
  Posune Karla o daný počet kroků ve směru jeho natočení. Pokud není uvedeno číslo, Karel provede 1 krok.

- **VLEVOBOK [číslo]**  
  Otočí Karla doleva o daný počet otoček. Pokud není uvedeno číslo, otočí se o 1 otočku.

- **OTOC**  
  Otočí karla na směr ze kterého přišel (o 180 stupnu).

- **POLOZ [písmeno/barva (např. #fff, white, #ffffff, rgba(0,0,0,0.5))]** 
  Položí zadaný symbol nebo barvu na aktuální pozici Karla.

- **VYMAZ**  
  Vymaže obsah aktuálního políčka.

## Požadavky

- Moderní webový prohlížeč s podporou JavaScriptu.
- Není potřeba server ani backend – aplikace funguje čistě na straně klienta.
