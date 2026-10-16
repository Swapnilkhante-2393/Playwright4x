# Playwright4x

A hands-on learning repository covering **JavaScript fundamentals** and **prompt engineering** concepts, structured into chapters. It is the foundation for building automated testing skills with Playwright.

## 📚 Repository Structure

```
Playwright4x/
├── 00_chapter_prompt_engg/          # Prompt engineering concepts & templates
│   ├── 01_chapter_JS_Basics/        # JavaScript basics (Hello World, Math)
│   │   ├── 01_Helloworld.js         # Basic console output
│   │   └── 02_Maths.js              # Basic arithmetic operations
│   ├── 01_RICE_POT_Prompt.md        # RICE POT prompt framework notes
│   ├── 05_KW_letter.js              # Keywords & identifiers demo
│   └── Selenium_framwork/           # Prompt engineering documentation
│       ├── 00_RICE_POT_FullForm.md
│       ├── 02_Problem_Statement.md
│       ├── 03_Anti_Hallucinations.md
│       └── 04_RICE_POT_Generic_QA_Template.md
│
└── 02_chapter_JS_Keywrods_Identifiers/   # JavaScript keywords & identifiers
    ├── 03_engin.js                  # `let` declaration example
    ├── 04_KW_IND.js                 # var / let / const demo
    └── 06_KW_IND_RULE.JS            # Naming conventions & identifier rules
```

## 🎯 Topics Covered

### 1. Prompt Engineering (`00_chapter_prompt_engg`)
- **RICE POT framework** – a structured approach to writing effective prompts.
- **Anti-hallucination techniques** – improving answer reliability.
- **Generic QA prompt template** – reusable template for question answering.
- **Problem statement** – defining clear objectives before prompting.

### 2. JavaScript Basics (`01_chapter_JS_Basics`)
- Writing and running your first script (`console.log`).
- Basic arithmetic operations and output.

### 3. JavaScript Keywords & Identifiers (`02_chapter_JS_Keywrods_Identifiers`)
- Variable declarations with `var`, `let`, and `const`.
- Identifier naming rules (valid vs. invalid identifiers).
- Common naming conventions:
  - `camelCase` (e.g., `userName`)
  - `PascalCase` (e.g., `UserName`)
  - `snake_case` (e.g., `user_name`)
  - `SCREAMING_SNAKE_CASE` (e.g., `MAX_SIZE`)

## 🛠️ Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended) – required to run the `.js` files.

## 🚀 Running the Examples

Run any JavaScript file directly with Node.js:

```bash
node 00_chapter_prompt_engg/01_chapter_JS_Basics/01_Helloworld.js
node 00_chapter_prompt_engg/01_chapter_JS_Basics/02_Maths.js
node 02_chapter_JS_Keywrods_Identifiers/04_KW_IND.js
```

## 📝 Notes

- `var` is function-scoped, while `let` and `const` are block-scoped.
- `const` values cannot be reassigned after declaration.
- Identifiers must begin with a letter, `$`, or `_` — never a number.

## 📄 License

This repository is intended for educational and learning purposes.
