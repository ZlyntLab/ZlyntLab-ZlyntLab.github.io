/*!

=========================================================
* BLK Design System React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
// reactstrap components
import {
    Container,
    Row,
    Col,
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footer/Footer.js";

let ps = null;

export default function SolutionsPage() {
    React.useEffect(() => {
        if (navigator.platform.indexOf("Win") > -1) {
            document.documentElement.className += " perfect-scrollbar-on";
            document.documentElement.classList.remove("perfect-scrollbar-off");
            let tables = document.querySelectorAll(".table-responsive");
            for (let i = 0; i < tables.length; i++) {
                ps = new PerfectScrollbar(tables[i]);
            }
        }
        document.body.classList.toggle("profile-page");
        // Specify how to clean up after this effect:
        return function cleanup() {
            if (navigator.platform.indexOf("Win") > -1) {
                ps.destroy();
                document.documentElement.className += " perfect-scrollbar-off";
                document.documentElement.classList.remove("perfect-scrollbar-on");
            }
            document.body.classList.toggle("profile-page");
        };
    }, []);
    return (
        <>
            <IndexNavbar />
            <div className="section section-typo">
                <img alt="..." className="path" src={require("assets/img/path1.png")} />
                <img
                    alt="..."
                    className="path path1"
                    src={require("assets/img/path3.png")}
                />
                <Container>
                    <h1 className="title">Privacy Policy</h1>
                    <Row>
                        <Col md="12">
                            <p className="text-center">
                                Your privacy is important to us.
                                It is ZlyntLab's policy to respect your privacy
                                and comply with any applicable law and regulation regarding any
                                personal information we may collect about you, including across
                                our website, https://zlyntlab.com, and other sites or aplications
                                we own and operate.
                            </p>
                            <p className="text-center font-weight-bold">
                                This policy is effective as of 10 March 2024 and was last updated on 10 March 2024.
                            </p>

                            <h3 className="title">Information We Collect</h3>
                            <p className="text-justify">
                                Information we collect includes both information you knowingly
                                and actively provide us when using or participating in any of
                                our services and promotions, and any information automatically
                                sent by your devices in the course of accessing our products and
                                services.
                            </p>

                            <h3 className="title">Log Data</h3>
                            <p className="text-justify">
                                When you visit our website or use our applications, our servers
                                and application may automatically log the standard data provided
                                by your web browser or our applications. It may include your
                                device’s Internet Protocol (IP) address, your browser type and
                                version, the pages you visit, the time and date of your visit,
                                the time spent on each page, other details about your visit, and
                                technical details that occur in conjunction with any errors you
                                may encounter.
                            </p>
                            <p className="text-justify">
                                Please be aware that while this information may not be
                                personally identifying by itself, it may be possible to combine
                                it with other data to personally identify individual persons.
                            </p>

                            <h3 className="title">Personal Information</h3>
                            <p className="text-justify">
                                We may ask for personal information which may include one or
                                more of the following:
                            </p>
                            <ul>
                                <li>
                                    <b>Profile Picture</b>
                                </li>
                                <li>
                                    <b>Name</b>
                                </li>
                                <li>
                                    <b>Email</b>
                                </li>
                                <li>
                                    <b>Date of birth</b>
                                </li>
                            </ul>

                            <h3 className="title">Legitimate Reasons for Processing Your Personal Information</h3>
                            <p className="text-justify">
                                We only collect and use your personal information when we have a
                                legitimate reason for doing so. In which instance, we only
                                collect personal information that is reasonably necessary to
                                provide our services to you.
                            </p>

                            <h3 className="title">Collection and Use of Information</h3>
                            <p className="text-justify">
                                We may collect personal information from you when you do any of
                                the following on our website or applications:
                            </p>
                            <ul>
                                <li>
                                    Sign up to receive updates from us via email or social media
                                    channels
                                </li>
                                <li>Use a device or web browser to access our content</li>
                                <li>
                                    Contact us via email, social media, or on any similar
                                    technologies
                                </li>
                                <li>When you mention us on social media</li>
                            </ul>
                            <p className="text-justify">
                                We may collect, hold, use, and disclose information for the
                                following purposes, and personal information will not be further
                                processed in a manner that is incompatible with these purposes:
                            </p>
                            <ul>
                                <li>to contact and communicate with you</li>
                                <li>
                                    to enable you to access and use our website, associated
                                    applications, and associated social media platforms
                                </li>
                                <li>for internal record keeping and administrative purposes</li>
                                <li>
                                    for security and fraud prevention, and to ensure that our
                                    sites and apps are safe, secure, and used in line with our
                                    terms of use
                                </li>
                            </ul>

                            <h3 className="title">International Transfers of Personal Information</h3>
                            <p className="text-justify">
                                The personal information we collect is stored and/or processed
                                where we or our partners, affiliates, and third-party providers
                                maintain facilities. Please be aware that the locations to which
                                we store, process, or transfer your personal information may not
                                have the same data protection laws as the country in which you
                                initially provided the information. If we transfer your personal
                                information to third parties in other countries: (i) we will
                                perform those transfers in accordance with the requirements of
                                applicable law; and (ii) we will protect the transferred
                                personal information in accordance with this privacy policy.
                            </p>

                            <h3 className="title">Your Rights and Controlling Your Personal Information</h3>
                            <p className="text-justify">
                                You always retain the right to withhold personal information
                                from us, with the understanding that your experience of our
                                website may be affected. We will not discriminate against you
                                for exercising any of your rights over your personal
                                information. If you do provide us with personal information you
                                understand that we will collect, hold, use and disclose it in
                                accordance with this privacy policy. You retain the right to
                                request details of any personal information we hold about you.
                            </p>
                            <p className="text-justify">
                                If we receive personal information about you from a third party,
                                we will protect it as set out in this privacy policy. If you are
                                a third party providing personal information about somebody
                                else, you represent and warrant that you have such person’s
                                consent to provide the personal information to us.
                            </p>
                            <p className="text-justify">
                                If you have previously agreed to us using your personal
                                information for direct marketing purposes, you may change your
                                mind at any time. We will provide you with the ability to
                                unsubscribe from our email-database or opt out of
                                communications. Please be aware we may need to request specific
                                information from you to help us confirm your identity.
                            </p>
                            <p className="text-justify">
                                If you believe that any information we hold about you is
                                inaccurate, out of date, incomplete, irrelevant, or misleading,
                                please contact us using the details provided in this privacy
                                policy. We will take reasonable steps to correct any information
                                found to be inaccurate, incomplete, misleading, or out of date.
                            </p>

                            <h3 className="title">Your Rights and Controlling Your Personal Information</h3>
                            <p className="text-justify">
                                We use &ldquo;cookies&rdquo; to collect information about you
                                and your activity across our site. A cookie is a small piece of
                                data that our website stores on your computer, and accesses each
                                time you visit, so we can understand how you use our site. This
                                helps us serve you content based on preferences you have
                                specified.
                            </p>

                            <h3 className="title">Limits of Our Policy</h3>
                            <p className="text-justify">
                                Our website may link to external sites that are not operated by
                                us. Please be aware that we have no control over the content and
                                policies of those sites, and cannot accept responsibility or
                                liability for their respective privacy practices.
                            </p>

                            <h3 className="title">Limits of Our Policy</h3>
                            <p className="text-justify">
                                At our discretion, we may change our privacy policy to reflect
                                updates to our business processes, current acceptable practices,
                                or legislative or regulatory changes. If we decide to change
                                this privacy policy, we will post the changes here at the same
                                link by which you are accessing this privacy policy.
                            </p>
                            <p className="text-justify">
                                If required by law, we will get your permission or give you the
                                opportunity to opt in to or opt out of, as applicable, any newƒ
                                uses of your personal information.
                            </p>

                            <h3 className="title">Contact Us</h3>
                            <p className="text-justify">
                                For any questions or concerns regarding your privacy, you may
                                contact us using the following details:
                            </p>
                            <ul><li>contact@zlyntlab.com</li></ul>
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </div>
        </>
    );
}
