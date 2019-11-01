const React = require("react")



exports.onInitialClientRender = () => {
  window.addEventListener('popstate', () =>
    window.location.href = window.location.href
  )
}