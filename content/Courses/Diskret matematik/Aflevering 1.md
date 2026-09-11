# Aflevering 1 - kladde / noter

hurtige udregninger til opgaverne for diskret mat aflevering 1

## Opgave A: who's lying?

### Peter and Signe
Peter siger: "At least one of us is a liar"
dvs ~p v ~s
hvis peter taler sandt (p = T):
så er udsagnet sandt, så mindst en lyver. da p=T må s=F så signe lyver.
hvis peter lyver (p = F):
så er hans udsagn falsk. modsat af (~p v ~s) er p ^ s. så ville begge tale sandt. men vi antog lige peter løj! det er en direkte selvmodsigelse.

tjek via sandhedstabel:
p | s | ~p v ~s
T | T | F  (peter taler sandt men siger noget falsk, umuligt)
T | F | T  (passer! peter sandhedssiger, signe løgner)
F | T | T  (peter lyver men siger noget sandt, umuligt)
F | F | T  (peter lyver men siger noget sandt, umuligt)

Konklusion: Peter taler sandt, Signe lyver.

### Anne and Bob
Anne siger: "If Bob is a liar, then I am also a liar"
dvs ~b -> ~a, som jo bare er a -> b (kontraposition).

tilfælde 1: Anne taler sandt (a = T)
så er hendes implikation a -> b sand. da a=T tvinger det b=T. så Bob taler også sandt.
tilfælde 2: Anne lyver (a = F)
hvis a=F så er en implikation med falsk forudsætning (a -> b) per definition altid sand! men hvis implikationen er sand, så talte hun jo sandt, hvilket modsiger at hun lyver.

så Anne taler sandt og Bob taler sandt. begge taler sandt.

---

## Opgave B: claims in predicate logic

Lad S(x) være "x er studerende", C(x) være "x har en computer", F(x, y) være "x og y er venner".
univers = alle mennesker på campus.

a) enhver studerende har en computer:
for alle x: hvis x er studerende så har x en computer
forall x (S(x) -> C(x))

b) der findes en studerende der ikke har en computer:
exists x (S(x) ^ ~C(x))
husk at der findes bruger ^ og ikke ->

c) enhver studerende har mindst én ven:
forall x (S(x) -> exists y (x != y ^ F(x, y)))

d) ingen studerende er venner med alle:
forall x (S(x) -> ~forall y (F(x, y)))
eller: forall x (S(x) -> exists y (~F(x, y)))
