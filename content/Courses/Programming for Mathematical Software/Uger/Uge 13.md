---
publish: true
title: "Programming for Mathematical Software uge 13: Objektorienteret programmering, repetition"
course: Programming for Mathematical Software
type: week
week: 13
tags:
  - c-programming
  - ugenote
---

# Uge 13: Objektorienteret programmering og repetition

> Kilde: `module13.pdf` på DTU Learn (opgaveark, 3. december 2026) og modultabellen. Der er ikke fundet nogen slides eller løsningsfil til dette modul på Learn (siden "Lecture slides" i modulet har ingen fil, topic-API'et giver 404), så noten bygger kun på opgavearket. Pensum: "Beginning C++", s. 52 til 53, s. 168 til 172, s. 180 til 182, s. 495 til 499; læs om STL-containerne `vector` og `list`.

## Emner

- Skabeloner (templates) til generiske funktioner
- STL `vector`: størrelse og kapacitet
- STL `list`: indsættelse og sletning
- Repetition inden eksamen (skriftlig eksamen 8. december 2026)

## Begreber

**Templates.** En skabelon er en funktion eller klasse, der er generisk over en type `T`. Compileren genererer en version for hver type, den bruges med. Kravet er, at de operationer, skabelonen bruger (her `<` og unær `-`), findes for typen.

```cpp
#include <iostream>

template <typename T>
T my_abs(const T& a) {
    return (a < -a) ? -a : a;
}

int main() {
    std::cout << my_abs(-3) << " " << my_abs(-2.5f) << " "
              << my_abs(4.0) << std::endl;
    return 0;
}
```

Funktionen returnerer en værdi og ikke en reference, fordi `-a` er en midlertidig værdi, der forsvinder, når funktionen returnerer. En reference til den ville pege på noget, der ikke længere findes.

**vector.** Elementerne ligger sammenhængende i hukommelsen, som i et C-array, men `vector` vokser selv. `size()` er antal elementer, `capacity()` er, hvor mange der er plads til uden ny allokering. Når kapaciteten er brugt op, allokeres en større blok og elementerne kopieres over. Derfor er `push_back` amortiseret $O(1)$ (enkelte kald er dyre).

```cpp
#include <iostream>
#include <vector>

int main() {
    std::vector<double> v;
    double x, sum = 0.0;
    while (std::cin >> x) {
        v.push_back(x);
        sum += x;
        std::cout << "size " << v.size() << " capacity " << v.capacity() << "\n";
    }
    if (!v.empty()) {
        std::cout << "sum " << sum << " mean " << sum / v.size() << std::endl;
    }
    return 0;
}
```

**list.** Dobbeltlænket liste. Indsættelse og sletning på en kendt position er $O(1)$, men der er ingen direkte adgang til element nr. $i$. Ved sletning under gennemløb skal man bruge returværdien fra `erase`:

```cpp
#include <iostream>
#include <list>
#include <string>

int main() {
    std::list<std::string> L = {"a", "abc", "abcdef"};
    std::size_t m = 3;
    for (auto it = L.begin(); it != L.end(); ) {
        if (it->length() > m) it = L.erase(it);
        else ++it;
    }
    for (const auto& s : L) std::cout << s << "\n";
    return 0;
}
```

(Kompilér med `-std=c++11`.)
### Arkitekturmodel: HPC Software stack for matematiske beregninger

I moderne videnskabelig databehandling bygger applikationer oven på veldefinerede lag af abstraktion:

```text
  ┌─────────────────────────────────────────────────────────────────┐
  │ Applikationslag: Brugerkode, simuleringer, Maple / Python / C   │
  ├─────────────────────────────────────────────────────────────────┤
  │ Numeriske algoritmer: LAPACK (Matrixinversion, Egenværdier, SVD) │
  ├─────────────────────────────────────────────────────────────────┤
  │ Grundlæggende matrix/vektor: BLAS (OpenBLAS, Intel MKL)         │
  ├─────────────────────────────────────────────────────────────────┤
  │ Parallelisering & Hardware: OpenMP, SIMD (AVX-512), Multicore   │
  └─────────────────────────────────────────────────────────────────┘
```

## Opgaver

Fra `module13.pdf`. Instruktioner: læs de angivne sider i Beginning C++ og om STL-containerne `vector` og `list`.

- 13.1 Betragt skabelonen `max` (`template <typename T> const T& max (const T& a, const T& b) { return (a<b)?b:a; }`, defineret i namespace `std`), som finder maksimum af to variable, hvor `a < b` er defineret. Skriv ud fra den en skabelon, der finder den absolutte værdi af en variabel `a` af type `T`, hvor uligheden `a < -a` er defineret. Skriv et kort testprogram med forskellige numeriske typer (fx `int`, `float`, `double`). Skabelonen må ikke returnere en reference til en variabel af type `T`. Forklar hvorfor.
- 13.2 `vector` fra STL er en generisk liste med array som underliggende repræsentation (elementerne ligger sammenhængende i hukommelsen). Læs en række kommatal fra en tekstfil og gem dem i en `vector`. Beregn og udskriv summen og middelværdien. Modificér programmet, så det udskriver vektorens størrelse (`size()`) og kapacitet (`capacity()`) efter hvert indlæst tal. Hvad er kompleksiteten af at tilføje et tal til vektoren? Hint: brug `push_back()`. Skabelon: `std::vector<double> v;` i en `main(int argc, const char *argv[])`.
- 13.3 Skriv et program, der beder brugeren om en række strenge og gemmer dem i et `list`-objekt. Når brugeren er færdig, skal programmet bede om et tal $m$ og fjerne alle strenge, der er længere end $m$ tegn, og udskrive de resterende. Hvad er kompleksiteten af at fjerne alle strenge af længde mindst $m$? Hint: `push_back()` i `list`, `length()` i `string`. (Skabelonen i opgavearket skriver `std::list<string> L;`; den skal efter min læsning være `std::list<std::string>`, med `#include <string>`.)

## Links

- [[Courses/Programming for Mathematical Software/Uger/Oversigt|Oversigt]]
- [[Courses/Programming for Mathematical Software/Programming for Mathematical Software|Kursusforside]]
