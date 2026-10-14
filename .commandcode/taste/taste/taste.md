# Taste
- Test automation work centers on Selenium 4 with Java 17 LTS, TestNG 7.x, and Maven, alongside separate Playwright material. Confidence: 0.55
- Prefers modern Selenium 4 APIs: `java.time.Duration` for timeouts, `WebDriverWait(driver, Duration.ofSeconds(x))`, and `ChromeOptions`/`FirefoxOptions` instead of `DesiredCapabilities`. Confidence: 0.6
- Explicitly avoids `Thread.sleep()`, `PageFactory.initElements()`, deprecated `ExpectedConditions`, `DesiredCapabilities`, and mixing JUnit imports into TestNG projects. Confidence: 0.65
- Favors Page Objects that extend a shared `BasePage`/`getDriver()` contract, use explicit `By` locators with wait wrappers, and return the destination Page Object instance from navigation actions. Confidence: 0.5
- Organizes learning/teaching notes as numbered chapter markdown files (`NN_Topic_Name.md`) inside topic chapter folders (e.g. `00_chapter_prompt_engg/`). Confidence: 0.55
- Chapter docs follow a consistent structure: short intro, numbered strategy sections, a fenced code-block template, and contrasting Good/Avoid examples. Confidence: 0.5
