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

const minimal = {
    data() {
        return {
            minimal: [
                { detail: "Windows 7 64 bit" },
                { detail: "Intel Core i3" },
                { detail: "8 GB RAM" },
                { detail: "12GB" },
                { detail: "Nwidia MX750" },
                { detail: "Version 11" )
            ]
        }
    }
}
Vue.createApp(minimal).mount("#minimal")

const recommended = {
    data() {
        return {
            recommended: [
                { detail: "Windows 7 64 bit" },
                { detail: "Intel Core i7" },
                { detail: "16 GB RAM" },
                { detail: "30GB" },
                { detail: "Nwidia RTX2021" },
                { detail: "Version 20" )
            ]
        }
    }
}
Vue.createApp(recommended).mount("#recommended")

const specs = {
    data() {
        return {
            minimal: [
                { detail: "OS" },
                { detail: "Processor" },
                { detail: "Memory" },
                { detail: "Storage" },
                { detail: "Graphics Card" },
                { detail: "DirectX" )
            ]
        }
    }
}
Vue.createApp(specs).mount("#specs")