import { Link } from "react-router-dom"

export default function TermsAndConditions() {
    return (
        <div className=" mb-28">
            <h1 className=" text-center text-2xl md:text-4xl">Terms & Conditions</h1>
            <div className=" w-full flex justify-center h-full">
                <div className=" text-left w-[600px]  break-normal p-5 h-full">
                    {/* Introduction */}
                    <p>These terms and conditions govern your use of the NigeriaMyWay tourist app operated by Khadija Ibrahim Bagudu. By accessing or using the App, you agree to be bound by these Terms. If you disagree with any part of the Terms, then you may not access the App.</p>

                    {/* Section 1: Use of the App */}
                    <div className="mt-5 text-left text-xl font-semibold">1. Use of the App</div>
                    <div className=" pl-5 text-left">
                        <p>1.1. The App is provided solely for the purpose of providing tourist information and facilitating tourist-related activities.</p>
                        <p>1.2. You agree not to use the App for any unlawful or prohibited purpose.
                        </p>
                    </div>

                    {/* Section 2: User Accounts */}
                    <div className="mt-5 text-left text-xl font-semibold">2. User Accounts</div>
                    <div className=" pl-5 text-left">
                        <p>2.1. In order to access certain features of the App, you may be required to create a user account.</p>
                        <p>2.2. You are responsible for maintaining the confidentiality of your account and password and for restricting access to your account. You agree to accept responsibility for all activities that occur under your account.
                        </p>
                    </div>

                    {/* Section 3: Content */}
                    <div className="mt-5 text-left text-xl font-semibold">3. Content</div>
                    <div className=" pl-5 text-left">
                        <p>3.1. The content provided on the App, including but not limited to text, images, and multimedia content, is provided for informational purposes only. We do not guarantee the accuracy, completeness, or usefulness of any content.</p>
                        <p>3.2. You acknowledge that any reliance you place on such content is strictly at your own risk.
                        </p>
                    </div>

                    {/* Section 4: Third-Party Links */}
                    <div className="mt-5 text-left text-xl font-semibold">4. Third-Party Links</div>
                    <div className=" pl-5 text-left">
                        <p>4.1. The App may contain links to third-party websites or services that are not owned or controlled by us.</p>
                        <p>4.2. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services.
                        </p>
                    </div>

                    {/* Section 5: Limitation of Liability */}
                    <div className="mt-5 text-left text-xl font-semibold">5. Limitation of Liability</div>
                    <div className=" pl-5 text-left">
                        <p>5.1. In no event shall we be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the App; (ii) any conduct or content of any third party on the App; (iii) any content obtained from the App; and (iv) unauthorized access, use, or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence), or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.</p>
                    </div>

                    {/* Section 6: Changes */}
                    <div className="mt-5 text-left text-xl font-semibold">6. Changes</div>
                    <div className=" pl-5 text-left">
                        <p>6.1. We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>
                    </div>

                    {/* Section 7: Contact Us */}
                    <div className="mt-5 text-left text-xl font-semibold">7. Contact Us</div>
                    <div className=" mb-5 pl-5 text-left">
                        {/* Link to the Contact Page */}
                        <p>7.1. If you have any questions about these Terms, please contact us via our <Link className=" text-green-500" to="/contactus">Contact Page</Link></p>
                    </div>

                    {/* Acceptance of Terms */}
                    <p>By using the App, you signify your acceptance of these Terms. If you do not agree to these Terms, please do not use the App.</p>
                </div>
            </div>
        </div>
    )
}