# Stacks — Library Management System

**Stacks** is a front-end library desk prototype for collection tracking and day-to-day circulation. Its interface is designed for library staff: see inventory health, find titles, check books out to readers, record returns, and export the catalog.

## Run it in VS Code

1. Clone this repository to your computer and open the project folder in VS Code.
2. If prompted, install the recommended **Live Server** extension. It is also available in the VS Code Extensions panel as `ritwickdey.LiveServer`.
3. Open `index.html`, then choose **Go Live** in the status bar (or right-click the file and choose **Open with Live Server**).

No build command, package manager, or backend is required for this prototype. Keep `index.html`, `style.css`, and `app.js` together in the same folder. Google Fonts are an optional online enhancement; system fonts are used if the network is unavailable.

## Included features

- Staff dashboard with title, copy, active loan, and overdue counts
- Inventory health summary and recent circulation activity
- Search by book title, author, book ID, category, or year
- Catalog filters for category and stock status
- Add titles and physical copy counts
- Check out a copy to a named reader with an ID and due date
- Record returns and see overdue or due-soon loan statuses
- Export book inventory as CSV
- Responsive layout for desktop, tablet, and mobile screens
- Demo data saved in browser local storage

## Project files

| File | Purpose |
| --- | --- |
| `index.html` | Page structure, dashboard, catalog, search, and dialogs |
| `style.css` | Responsive visual design and component styles |
| `app.js` | Sample data, local storage, catalog actions, and circulation logic |
| `.vscode/extensions.json` | Suggests Live Server when the folder opens in VS Code |
| `LICENSE` | MIT license for this prototype source |

## Demo notes

This is a browser-only prototype. Book and circulation data are stored in the current browser using local storage; they are not shared with other staff or devices. The initial sample titles and transactions are illustrative. A live library system would need authenticated staff accounts, a shared database/API, backups, privacy controls, and operational review before use with real reader information.

## Prototype identity

- **Name:** Stacks — Library Management System
- **Type:** Library circulation and collection management prototype
- **Suggested repository name:** `library-management-system`
- **Suggested description:** A responsive library management system for catalog management, inventory, and book circulation.
