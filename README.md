# Palindroma

Chiedere all’utente di inserire una parola. Creare una funzione per capire se la parola inserita è palindroma.

## Svolgimento
1. Chiedere con un input all'utente di inserire una parola e salvarla in una variabile
2. Creare una funzione che ha come parametro la stringa inserita dall'utente, verifica se la parola è palindroma e restituisce true o false
3. Nella funzione:
    - Creare un array avente per elementi le singole lettere della parola
    - Con un ciclo for, confrontare il primo elemento (indice = 0) con l'ultimo (indice = lunghezza array - 1), poi il secondo con il penultimo, etc.
    - Se gli elementi confrontati sono uguali, procedere con i controlli fino a che non arrivo a metà dell'array e restituire true, altrimenti se gli elementi confrontati sono diversi restituire false
4. Stampare in pagina se la parola è palindroma o non è palindroma

# Pari e Dispari

L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generare un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommare i due numeri. Stabilire se la somma dei due numeri è pari o dispari (usando una funzione). Dichiarare chi ha vinto.

## Svolgimento
1. Chiedere con un input all'utente di inserire pari o dispari e salvarlo in una variabile
2. Chiedere con un input all'utente di inserire un numero da 1 a 5 e salvarlo in una variabile
3. Creare una funzione che genera un numero random e restituisce il numero random da salvare in una variabile
4. Sommare il numero inserito dall'utente e il numero random
5. Creare una funzione che ha come parametro la somma dei due numeri, verifica se la somma è pari o dispari e restituisce pari o dispari
6. A seconda della scelta pari/dispari dell'utente e di quanto restituito dalla funzione precedente, stampare in pagina chi ha vinto