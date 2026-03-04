# git-Befehle

## Allgemein

| Aktion                     | Befehl                       |
| -------------------------- | ---------------------------- |
| Status anzeigen            | `git status`                 |
| Alles hinzufügen           | `git add .`                  |
| Bestimmte Datei hinzufügen | `git add datei.txt`          |
| Zusammenfassung            | `git commit -m "Nachricht"`  |
| Hochladen                  | `git push`                   |
| Herunterladen              | `git pull`                   |

## Branches

| Aktion                      | Befehl                        |
| --------------------------- | ----------------------------- |
| Alle Branches anzeigen      | `git branch`                  |
| Branch wechseln             | `git checkout branch-name`    |
| Branch erstellen + wechseln | `git checkout -b branch-name` |
| Branch erstellen            | `git branch branch-name`      |
| In bestimmten Branch pushen | `git push origin branch-name` |
| Branch lokal löschen        | `git branch -d branch-name`   |
| Remote-Branches aufräumen   | `git fetch --prune`           |

## Änderungen zurücksetzen

| Aktion                                          | Befehl                      |
| ----------------------------------------------- | --------------------------- |
| Datei aus Staging entfernen                     | `git reset datei.txt`       |
| Alles aus Staging entfernen                     | `git reset`                 |

## Komplett mit Remote synchronisieren (alles überschreiben)

```bash
git fetch origin
git reset --hard origin/main
git clean -fd
```
