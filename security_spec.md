# Security Specification: Digital Saathi

## Data Invariants
1. A user document can only be created or modified by the authenticated user with the matching UID.
2. `createdAt` is immutable after creation and must match `request.time`.
3. `updatedAt` must be updated on every write to `request.time`.
4. String fields have strict size limits (name <= 100, etc.).
5. Array `completedScenarios` is limited to 100 entries.
6. Identity UIDs must be valid strings.

## The "Dirty Dozen" Payloads (Red Team Test Cases)

| # | Attack Vector | Target Path | Payload / Context | Expected Result |
|---|---------------|-------------|-------------------|-----------------|
| 1 | Identity Spoofing | `/users/victim_123` | Create by `attacker_456` | PERMISSION_DENIED |
| 2 | Shadow Field Injection | `/users/user_1` | Update with `{ "isAdmin": true }` | PERMISSION_DENIED |
| 3 | Ghost Field | `/users/user_1` | Update with `{ "name": "Abhi", "shadow": 1 }` | PERMISSION_DENIED |
| 4 | Immutability Breach | `/users/user_1` | Update `createdAt` | PERMISSION_DENIED |
| 5 | Resource Poisoning | `/users/user_1` | `name` string size 1MB | PERMISSION_DENIED |
| 6 | ID Poisoning | `/users/junk...` | Document ID > 100 chars or invalid chars | PERMISSION_DENIED |
| 7 | Temporal Injection | `/users/user_1` | `updatedAt` = "2020-01-01..." | PERMISSION_DENIED |
| 8 | Enum Violation | `/users/user_1` | `language` = "fake_lang" | PERMISSION_DENIED |
| 9 | Blanket Read | `/users` | List query as authenticated user | PERMISSION_DENIED |
| 10 | Type Poisoning | `/users/user_1` | `completedScenarios` = "not_an_array" | PERMISSION_DENIED |
| 11 | Array Overflow | `/users/user_1` | `completedScenarios` size > 100 | PERMISSION_DENIED |
| 12 | Unverified Access | `/users/user_1` | Write as unverified email (if required) | PERMISSION_DENIED |
