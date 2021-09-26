import Banner from "../components/Banner/Banner"

const { default: Contact } = require("../components/Contact/Contact")

const ContactPage = () => {
    return (
        <>
            <Banner />
            <Contact />
        </>
    )
}
export default ContactPage