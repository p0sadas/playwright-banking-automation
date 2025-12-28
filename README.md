# 🏦 XYZ Bank - E2E Test Automation Framework

Framework profesional de automatización de pruebas End-to-End (E2E) desarrollado con **Playwright** y **TypeScript**. Este proyecto demuestra patrones avanzados de automatización, incluyendo Page Object Model (POM), Pruebas Basadas en Datos (DDT) e Integración Continua.

## 🚀 Características Principales

* **Patrón de Diseño:** Page Object Model (POM) para mejorar la mantenibilidad y escalabilidad del código.
* **Data-Driven Testing (DDT):** Casos de prueba dirigidos por archivos **JSON**, permitiendo la validación de múltiples escenarios de usuario sin duplicar código.
* **Localizadores Avanzados:** Uso de roles ARIA y selectores de alta precisión para una identificación robusta de elementos dinámicos.
* **Integración Continua (CI/CD):** Totalmente integrado con **GitHub Actions** para ejecución automática en cada subida de código (push).
* **Reportes Detallados:** Generación automática de reportes HTML que incluyen:
    * 🎥 Grabaciones de video de los fallos.
    * 📸 Capturas de pantalla en cada paso.
    * 🔍 Trazas completas (Playwright Trace Viewer) para depuración profunda.

---

## 🛠️ Tech Stack

* **Lenguaje:** TypeScript
* **Framework:** Playwright
* **CI/CD:** GitHub Actions / Jenkins
* **Reportes:** Playwright HTML Reporter

---

## 📦 Estructura del Proyecto

```text
├── .github/workflows/    # Configuración del Pipeline de CI/CD
├── data/                 # Archivos JSON para pruebas basadas en datos
├── pages/                # Page Object Model (Localizadores y Acciones)
├── tests/                
│   ├── ui/               # Pruebas de Interfaz de Usuario (Web)
│   └── api/              # Pruebas de Backend (API)
├── playwright.config.ts  # Configuración global de Playwright
└── package.json          # Dependencias y scripts del proyecto