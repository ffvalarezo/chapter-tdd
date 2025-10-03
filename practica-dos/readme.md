# Ejercicio 2 — Transferencia Bancaria Segura

## Objetivo
Aplicar **TDD en un dominio bancario simple**, validando reglas de negocio de transferencias entre cuentas.  
El propósito es simular escenarios reales de banca digital (montos inválidos, fondos insuficientes, límites).

---

## Instrucciones
- Parejas trabajan en **Ping-Pong**: uno escribe el test, el otro implementa.  
- En cada ronda, agregar reglas progresivas.  
- Mantener código limpio y refactorizar constantemente.  

---

## Requisitos progresivos

### Ronda 1
- `transferir(origen, destino, monto)` rechaza si monto ≤ 0.  
- Rechaza si cuentas son iguales.  
- Rechaza si saldo insuficiente.  
- Caso válido: debitar origen y acreditar destino.  

### Ronda 2
- Límite diario (ej. 1000).  
- Rechazar cuentas inactivas.  
- Soporte para `idempotencyKey` (evitar doble cargo).  

### Ronda 3
- Registrar `TransactionLog` con: id, cuentas, monto, estado.  

### Ronda 4
- Mensajes claros y testeables.  

---

## Estructura inicial sugerida

### Java (Spring Boot + Maven)
spring-tdd-mvn/
├─ src/main/java/com/example/tdd/transfer/
│ ├─ Account.java
│ ├─ TransferResult.java
│ ├─ AccountRepo.java
│ ├─ InMemoryAccountRepo.java
│ └─ TransferService.java
└─ src/test/java/com/example/tdd/transfer/TransferServiceTest.java

### C#
otnet-tdd/
├─ Tdd.Domain/Transfer/
│ ├─ Account.cs
│ ├─ TransferResult.cs
│ └─ TransferService.cs
└─ Tdd.Tests/TransferServiceTests.cs

### Angular (NodeJs + Typescript)
ng-tdd/
├─ src/app/transfer/
│ ├─ models.ts
│ ├─ account-repo.ts
│ ├─ transfer.service.ts
│ ├─ transfer.service.spec.ts
│ ├─ transfer.api.ts # Adaptador HTTP opcional
│ └─ transfer.api.spec.ts
