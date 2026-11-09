---
publish: true
title: "Programming for Mathematical Software uge 12: C++ og objektorienteret programmering"
course: Programming for Mathematical Software
type: week
week: 12
tags:
  - c-programming
  - ugenote
---

# Uge 12: C++ og objektorienteret programmering

> Kilde: `module12.pdf` på DTU Learn (opgaveark, 26. november 2026) og modultabellen. Siden "Lecture slides" i modulet har ingen fil på Learn (topic-API'et giver 404), og der er ikke fundet nogen løsningsfil, så noten bygger kun på opgavearket. Pensum: "Beginning C++", s. 1 til 9, s. 20 til 22, s. 315 til 333 (udgave ikke angivet på kursussiden).

## Emner

- Fra C til C++: `iostream`, `std::string`
- Klasser: private/public, konstruktør, getter og setter
- Kompilering med `g++`

## Begreber

**Hello World i C++.** Output sker med strømmen `std::cout` og operatoren `<<`; input med `std::cin` og `>>`.

```cpp
#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}
```

Kompiler: `g++ -Wall -std=c++11 hello.cpp -o hello`. C++-filer har typisk endelsen `.cpp`.

**Strenge og input.** `std::string` håndterer længden selv. `std::getline(std::cin, navn)` læser en hel linje, så navne med mellemrum virker.

```cpp
#include <iostream>
#include <string>

int main() {
    std::string name;
    int age;
    std::cout << "Navn: ";
    std::getline(std::cin, name);
    std::cout << "Alder: ";
    std::cin >> age;
    std::cout << "Velkommen, " << name << " (" << age << " aar)\n";
    return 0;
}
```

**Klasser.** En klasse samler data (medlemsvariable) og funktioner (metoder). `private` skjuler data for omverdenen, `public` er grænsefladen. Konstruktøren kaldes, når objektet oprettes. En `const`-metode lover ikke at ændre objektet.

```cpp
#include <iostream>

class Integer {
private:
    int i;
public:
    Integer() : i(0) {}
    void set(int newi) { i = newi; }
    int get() const { return i; }
    void print() const { std::cout << i << std::endl; }
};

int main() {
    Integer k;
    k.set(5);
    k.print();
    return 0;
}
```
### Objektmodel: Vtable (Virtual Method Table) i C++

Polymorfi i C++ implementeres ved hjælp af en usynlig peger (`vptr`) i hvert objekt til klassens funktionstabel (`vtable`):

```text
  Objekt på heapen:                 Vtable i read-only hukommelse:
  ┌──────────────────┐             ┌───────────────────────────────┐
  │ vptr ────────────┼────────────>│ &Cirkel::beregnAreal()        │
  ├──────────────────┤             ├───────────────────────────────┤
  │ radius = 5.0     │             │ &Cirkel::tegn()               │
  └──────────────────┘             └───────────────────────────────┘
```
Når en virtuel metode kaldes via en basisklasse-pointer `Form* f`, slår CPU'en op i `vtable` under kørsel (dynamisk dispatch), hvilket koster et enkelt ekstra pointer-opslag.

## Opgaver

Fra `module12.pdf`. Instruktioner: læs s. 1 til 9, s. 20 til 22 og s. 315 til 333 i Beginning C++.

- 12.1 Skriv et "Hello World!"-program i C++ (skriv en streng til standard output). Kompilér og kør det. Der gives en makefile-skabelon med `CXX=g++`, `CXXFLAGS=-Wall -std=c++11` og en `clean`-target. C++-kildefiler har typisk endelsen `.cpp`, headerfiler `.h`.
- 12.2 Skriv et program, der beder brugeren om navn og alder og skriver en passende velkomstbesked. Brug en streng til navnet og et heltal til alderen.
- 12.3 Lav exercise 11-1 i Beginning C++. Der gives en skabelon med klassen `Integer` (privat `int i`; konstruktør, `set`, `get`, `print`) og en `main(int argc, const char *argv[])`.
- 12.4 Lav exercise 11-2 i Beginning C++.
- 12.5 Lav exercise 11-3 i Beginning C++.
- Valgfri 12.6: C og dets objektorienterede afledte sprog. (a) Se Bjarne Stroustrup forklare, hvorfor han lavede C++. (b) Læs om C# og Objective-C. (c) Se Stroustrup forklare, hvorfor han mener, C er forældet; kig derefter på sprogindekset over programmeringssprogs popularitet og vurdér, om C eller de objektorienterede afledte sprog forsvinder snart.

## Links

- [[Courses/Programming for Mathematical Software/Uger/Oversigt|Oversigt]]
- [[Courses/Programming for Mathematical Software/Programming for Mathematical Software|Kursusforside]]
