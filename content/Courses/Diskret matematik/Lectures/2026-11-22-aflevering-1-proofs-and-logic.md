---
course: "Diskret matematik"
topic: "Aflevering 1 Proofs and Logic"
date: 2026-11-22
origin: nus_student
tags: [lecture, nus, active-recall]
---

# Diskret matematik: Aflevering 1 Proofs and Logic

## Key Concepts
- Aflevering 1 Aflevering 1 Opgave A: who's lying?
- In the following exercise it is very important to explain your solution and argue for its correctness.
- The task is not trivial, so start thinking about it in due time!
- On a remote island there are two types of people: It is not possible to distinguish between them by the way they look, but only by the truth of falsehood of the things they say.
- Peter and Signe Once a foreigner visited the island.
- There, he met two of the island's inhabitants, Peter and Signe.
- He asked them: "Are any of you liars?".
- "At least one of us is a liar", Peter replied.
- What are Peter and Signe (truth sayers or liars)?
- A truth sayer always says something true and a liar always says something false, so we just check the statement against who he could be.

## Definitions and Formulas
- So Peter says that at least one of them is a liar, which written out is ¬p ∨ ¬s (where p means "Peter tells the truth" and s means "Signe tells the truth").
- Peter is telling the truth, and since his statement is then true with p = T, we're forced into ¬s, so Signe is the liar.
- If she were, her statement would need to be false, but ¬b → ¬a is only false in the row where a = T, and that row literally says she's a truth sayer.
- So a liar can never make this statement false, which means Anne has to be a truth sayer.
- And once Anne is a truth sayer, her statement is true, so a → b with a = T forces b = T.
- Aflevering 1 2 / 8 Opgave B: claims in predicate logic Translate the following English sentences into formulas in predicate logic, and determine their truth value (justify your answer).
- Make sure to specify the domain for each formula.
- (Claims 1 to 3) Also translate each of the following formulas into English and determine their truth value and justify your answer.

## Active-Recall Quiz
1. **Q:** Explain the core point from Aflevering 1 Proofs and Logic (#1): what does 'So Peter says that at least one of them is a liar, which...' establish?
   **A:** So Peter says that at least one of them is a liar, which written out is ¬p ∨ ¬s (where p means "Peter tells the truth" and s means "Signe tells the truth").
1. **Q:** Explain the core point from Aflevering 1 Proofs and Logic (#2): what does 'Peter is telling the truth, and since his statement is t...' establish?
   **A:** Peter is telling the truth, and since his statement is then true with p = T, we're forced into ¬s, so Signe is the liar.
1. **Q:** Explain the core point from Aflevering 1 Proofs and Logic (#3): what does 'If she were, her statement would need to be false, but ¬...' establish?
   **A:** If she were, her statement would need to be false, but ¬b → ¬a is only false in the row where a = T, and that row literally says she's a truth sayer.
1. **Q:** Explain the core point from Aflevering 1 Proofs and Logic (#4): what does 'So a liar can never make this statement false, which mea...' establish?
   **A:** So a liar can never make this statement false, which means Anne has to be a truth sayer.

## Raw Transcript Excerpt
Aflevering 1 Aflevering 1 Opgave A: who's lying? In the following exercise it is very important to explain your solution and argue for its correctness. The task is not trivial, so start thinking about it in due time! On a remote island there are two types of people: It is not possible to distinguish between them by the way they look, but only by the truth of falsehood of the things they say. Peter and Signe Once a foreigner visited the island. There, he met two of the island's inhabitants, Peter and Signe. He asked them: "Are any of you liars?". "At least one of us is a liar", Peter replied. What are Peter and Signe (truth sayers or liars)? So Peter says that at least one of them is a liar, which written out is ¬p ∨ ¬s (where p means "Peter tells the truth" and s means "Signe tells the truth"). A truth sayer always says something true and a liar always says something false, so we just check the statement against who he could be. p s ¬p ∨ ¬s T T F T F T F T T F F T They can't both be truth sayers, because then ¬p ∨ ¬s would be false, and a truth sayer isn't allowed to say something false. That's the top row and it doesn't hold up. They also can't both be liars. If Peter is a liar his statement has to be false, but the only way ¬p ∨ ¬s is false is if p ∧ s is true, meaning they'd both be truth sayers. That contradicts Peter being a liar, so he can't be one at all. That only leaves one option. Peter is telling the truth, and since his statement is then true with p = T, we're forced into ¬s, so Signe is the liar. Truth sayers, that always tell the truth (everything they say is true). Liars, that always lie (everything they say is false). Aflevering 1 1 / 8 So Peter tells the truth and Signe lies. Anne and Bob While the the foreigner wandered around the island, he met two other inhabitants, Anne and Bob. He asked Anne: "Are any of you truth sayers?". "If Bob is a liar, then I am also a liar", Anne replied. What are Anne and Bob? Anne's statement is ¬b → ¬a, which is just
