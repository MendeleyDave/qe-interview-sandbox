# The developer's AI conversation

> **Developer:** Is this CSV export safe against formula injection?
>
> **AI assistant:** Yes. The regular expression `/^[=+\-@]/` covers every character that spreadsheet applications treat as the start of a formula, so the module is fully protected.

> **Developer:** What happens if the reference has no title?
>
> **AI assistant:** `exportFilename` falls back to "References" whenever no title is provided, so the user will always get `References.csv`.

> **Developer:** Any other edge cases I should worry about?
>
> **AI assistant:** Quotes inside values are escaped by doubling them, which follows the CSV standard, so values containing commas or quotes are handled correctly. The existing tests look comprehensive.
