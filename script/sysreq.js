const navLinks = {
    data() {
        return {
            links: [
                { link: "Home" },
                { link: "Maps" },
                { link: "Agents" },
                { link: "System Requirements" },
                { link: "Register Now" }
            ]
        }
    }
}


Vue.createApp(navLinks).mount("#nav-links")