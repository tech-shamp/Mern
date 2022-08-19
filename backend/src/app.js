// Import Statements
const express = require("express")
const path = require("path")
const ejs = require("ejs")
require("./db/conn")

// Required Variables
const MainPath = path.join(__dirname, "../public")
const app = express()
const port = process.env.PORT || 999
const ViewsPath = path.join(__dirname, "../templates/views")
const PartialsPath = path.join(__dirname, "../templates/partials")

// Webiste Content
const title = {
  home: "Home",
  register: "Register",
  login: "Login",
  404: "Page Not Found",

  tag: " - Backend Website",
}

// App Setup
app.use(express.static(MainPath))
app.set("view engine", "ejs")
app.set("views", ViewsPath)
ejs.resolveInclude("partials", PartialsPath)

// Home URL
app.get("/", (req, res) => {
  res.render("index", {
    title: title.login + title.tag,
  })
})

// Not Found URL
app.get("*", (req, res) => {
  res.render("404", {
    title: title[404],
  })
})

// Start Server
app.listen(port, console.info(`Live on ${port}`))
