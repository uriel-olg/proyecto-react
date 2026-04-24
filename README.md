# Cripto Live

Aplicación de seguimiento de criptomonedas en tiempo real. Explorá precios, variaciones y datos de mercado de los principales activos digitales, con historial de precios por hora en gráficos interactivos.

🔗 **Demo en vivo:** [criptos-data.vercel.app](https://criptos-data.vercel.app)

---

## Capturas

> (agregá 2-3 screenshots acá — podés usar la extensión "GoFullPage" en Chrome para capturar la pantalla completa)

---

## Funcionalidades

- Listado de criptomonedas con precio actual, variación 24h y capitalización de mercado
- Detalle de cada activo con gráfico de precio histórico (últimas 24 horas, intervalo horario)
- Grilla de exchanges con datos de mercado
- Indicador de variación con color dinámico (verde/rojo según suba o baja)
- Navegación entre pantallas con React Router

---

## Stack tecnológico

| Tecnología | Uso |
|---|---|
| React 18 + TypeScript | UI y tipado estático |
| Vite | Bundler y entorno de desarrollo |
| Tailwind CSS | Estilos utilitarios |
| Recharts | Gráfico de precio histórico |
| React Router v6 | Navegación y rutas dinámicas |
| Context API | Estado global de criptomonedas |
| CoinCap API v3 | Datos de precios en tiempo real |

---

## Cómo correrlo localmente

```bash
# 1. Clonar el repositorio
git clone https://github.com/uriel-olg/proyecto-react.git
cd proyecto-react

# 2. Instalar dependencias
pnpm install

# 3. Crear el archivo de variables de entorno
cp .env.example .env
# Editá .env y agregá tu API key de CoinCap (coincap.io)

# 4. Correr en modo desarrollo
pnpm dev
```

### Variables de entorno

Creá un archivo `.env` en la raíz con el siguiente contenido:
VITE_COINCAP_KEY=tu_api_key_acá

Podés obtener una API key gratuita en [coincap.io](https://coincap.io).

---

## Estructura del proyecto
src/
├── componentes/
│   ├── context/        # Context API — estado global de cryptos
│   ├── criptos/        # Listado y detalle de cada crypto
│   ├── exchanges/      # Grilla de exchanges
│   ├── home/           # Pantalla principal
│   └── nav/            # Navegación
├── App.tsx             # Rutas principales
└── main.tsx

---

## Qué aprendí construyendo esto

- Cómo estructurar el estado global con **Context API** y exponerlo mediante un hook custom para evitar el uso directo de `useContext` en cada componente
- Integrar **Recharts** con datos de una API externa, formateando timestamps a horas legibles en el eje X
- Manejar **rutas dinámicas** con React Router para la página de detalle de cada activo (`/crypto/:id`)
- La importancia de las **variables de entorno** para no exponer API keys en el repositorio
- Cómo tipar correctamente respuestas de APIs externas con **TypeScript interfaces**

---

## Próximas mejoras

- [ ] Agregar skeleton loaders mientras cargan los datos
- [ ] Manejo de errores visible para el usuario cuando falla la API
- [ ] Buscador y filtros en el listado principal
- [ ] Modo oscuro / claro

---

## Autor

**Uriel** — [GitHub](https://github.com/uriel-olg)