```mermaid
graph TD
A[Run Docker Compose Command] --> B{Environment?}
B -->|ENV=development| C[Load docker-compose.yml + docker-compose.development.yml]
D --> F[Load env/.env.production]
E --> G[For Each Service: auth, user, payment]
F --> G
G --> H[Build Image Using Dockerfile]
H --> I{Environment?}
I -->|Development| J[Load Service .env.development]
I -->|Production| K[Load Service .env.production]
J --> L[Start Container]
K --> M[Start Containers with Replicas]
L --> N[Run CMD: npm start]
M --> N
N --> O[Node.js Loads config.js]
O --> P[Read NODE_ENV]
P --> Q[Apply Service Config]
Q -->|auth-service| R[Config: DB, JWT, Rate Limit]
Q -->|user-service| S[Config: Redis, Connections]
Q -->|payment-service| T[Config: Stripe, Queue]
R -->|Dev| U[Verbose Logs, Hot-Reloading]
R -->|Prod| V[Minimal Logs, Scaled, Read-Only]
S -->|Dev| W[Debug Mode, Single Instance]
S -->|Prod| X[Optimized, Scaled]
T -->|Dev| Y[Test Queue, Local DB]
T -->|Prod| Z[Prod Queue, Secured]
U --> AA[Listen on Port 3001]
V --> AA
W --> AB[Listen on Port 3002]
X --> AB
Y --> AC[Listen on Port 3003]
Z --> AC
AA --> AD[Route via Nginx Gateway]
AB --> AD
AC --> AD
AD --> AE[Monitor with Prometheus, Grafana, Loki]
AE --> AF[Runtime: Services Communicate via app-network]