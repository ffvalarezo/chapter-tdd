# Ejercicio 1 — Calculadora de Cadenas

## Objetivo
Practicar **TDD (Test Driven Development)** con un problema sencillo de lógica pura, implementando la función `add(numbers)` con pasos progresivos.  
Este ejercicio se usa para **entrenar el ciclo Rojo → Verde → Refactor** y la dinámica **Ping-Pong**.

---

## Instrucciones
- Formar parejas.  
- Regla Ping-Pong:  
  - Persona A escribe un **test que falla** (Rojo).  
  - Persona B implementa el **código mínimo** para pasarlo (Verde) y refactoriza.  
  - Persona B escribe el siguiente test → Persona A implementa.  
- Repetir hasta completar los requisitos.  

---

## Requisitos progresivos
1. `add("") = 0`  
2. `add("1") = 1`  
3. `add("1,2") = 3`  
4. Soportar n números → `add("1,2,3") = 6`  
5. Ignorar espacios en blanco.  
6. Soportar saltos de línea como separador.  
7. Delimitador custom → `//;\n1;2 = 3`  
8. Números negativos → lanzar excepción con mensaje.  
9. Ignorar números mayores a 1000.  

---

## Estructura inicial sugerida

### Java (Spring Boot + Maven)
spring-tdd-mvn/
├─ src/main/java/com/example/tdd/StringCalculator.java
└─ src/test/java/com/example/tdd/StringCalculatorTest.java

### C#
dotnet-tdd/
├─ Tdd.Domain/StringCalculator.cs
└─ Tdd.Tests/StringCalculatorTests.cs

### Angular (NodeJs + Typescript)
ng-tdd/
├─ src/app/string-calculator.ts
└─ src/app/string-calculator.spec.ts
