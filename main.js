import { Dashboard } from "./js/Dashboard.js"

// Initialize dashboard when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  const dashboard = new Dashboard("dashboard")
  dashboard.init()

  console.log("Dashboard initialized with widgets:", dashboard.widgets.length)
})
