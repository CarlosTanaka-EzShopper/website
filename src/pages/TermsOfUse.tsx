import React from "react";
import Navbar from "../components/Navbar";
import FooterSection from "../components/sections/FooterSection";

const TermsOfUse = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-24 max-w-4xl">
        <h1 className="text-3xl font-bold mb-6">Terms of Use and Service</h1>
        <p className="text-sm text-gray-500 mb-8">
          Last Updated: January 3, 2025
        </p>

        <div className="prose max-w-none">
          <p>
            These Terms of Use and Service ("Terms") govern your access to and
            use of the EzShopper website (https://www.ezshopper.ai), platform
            (https://app.ezshopper.ai), and related services (collectively, the
            "Platform") provided by EzShopper Technologies Inc. ("EzShopper,"
            "we," "us," or "our"). By accessing or using the Platform, you agree
            to be bound by these Terms, including our Privacy Policy and any
            other policies or guidelines referenced herein. If you do not agree
            to these Terms, you must immediately cease use of the Platform.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing or using the Platform, you agree to comply with and be
            bound by these Terms and any applicable laws or regulations. If you
            are using the Platform on behalf of an organization, you represent
            that you have the authority to bind that organization to these
            Terms.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">
            2. Changes to Terms
          </h2>
          <p>
            EzShopper reserves the right to update or modify these Terms at any
            time, and any such changes will be effective upon posting on this
            page. We recommend that you review these Terms periodically to stay
            informed about any updates. Your continued use of the Platform after
            changes have been posted constitutes your acceptance of the revised
            Terms.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">
            3. Account Registration
          </h2>
          <p>
            To access certain features of the Platform, you may be required to
            create an account. You agree to provide accurate, current, and
            complete information during the registration process and to keep
            your account details updated. You are solely responsible for the
            confidentiality of your account credentials and for all activities
            that occur under your account.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">
            4. Intellectual Property
          </h2>
          <p>
            All content, designs, text, images, software, and other materials on
            the Platform ("Content") are the property of EzShopper or its
            licensors and are protected by copyright, trademark, and other
            intellectual property laws. You may not reproduce, distribute, or
            modify any part of the Platform or Content without prior written
            consent from EzShopper, except as permitted under these Terms.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">
            5. Copyright Policy
          </h2>
          <p>
            EzShopper respects the intellectual property rights of others and
            expects users to do the same. If you believe that your copyrighted
            work has been infringed upon, please notify us by sending a detailed
            notification to:
          </p>
          <p className="pl-4">
            EzShopper Technologies Inc.
            <br />
            1500 West Georgia, Vancouver, BC, Canada
            <br />
            Email: support@ezshopper.ai
          </p>
          <p>
            Your notification should include all necessary details as outlined
            in the Digital Millennium Copyright Act (DMCA). If you believe a
            copyright infringement notice has been wrongly filed against you,
            you may submit a counter-notice as per the DMCA.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">
            6. Access to Platform and Services
          </h2>
          <p>
            We continually enhance our Platform and Services, which may include
            adding, changing, or removing features at our discretion. We may
            also modify, suspend, or discontinue the Platform or any part of the
            Services at any time, with or without notice. While we aim to ensure
            the Platform's availability, we are not liable for interruptions due
            to reasons beyond our control, including third-party service outages
            or force majeure events.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">
            7. Limitations on Use of the Platform
          </h2>
          <p>
            You agree not to use the Platform for any illegal or unauthorized
            purpose. This includes, but is not limited to, activities that
            violate intellectual property rights, transmit harmful software,
            engage in spamming, or distribute offensive content. Violation of
            these Terms may result in termination of your access to the Platform
            and legal action.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">
            8. Confidentiality
          </h2>
          <p>
            You and EzShopper may exchange confidential information during the
            course of using the Platform. Both parties agree to protect the
            confidentiality of the information exchanged and not to use it for
            any purpose outside the scope of these Terms, unless required by
            law. Confidential Information does not include publicly available
            data, information previously in possession of the recipient, or
            information obtained from a third party without breaching any
            obligations of confidentiality.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">
            9. Data Protection and Privacy
          </h2>
          <p>
            Your privacy is important to us. Our Privacy Policy explains how we
            collect, use, and share your data. By using the Platform, you agree
            to our data practices, including the processing and transfer of your
            data as outlined in the Privacy Policy.
          </p>

          <h3 className="text-lg font-medium mt-6 mb-3">Usage Data</h3>
          <p>
            Usage Data includes, but is not limited to, query logs and any data
            (other than Client Data) relating to the operation, support, and/or
            about your use of the Services, Platform, or EzShopper's APIs
            ("Usage Data"). Notwithstanding anything to the contrary in these
            Terms, EzShopper may collect and use Usage Data to develop, improve,
            support, and operate its Platform and Services. EzShopper may also
            utilize Usage Data for its internal business purposes, but only to
            the extent such data has been aggregated and anonymized such that
            individual users or clients cannot be identified. We will not sell,
            rent, or otherwise monetize any of that aggregated information.
          </p>

          <h3 className="text-lg font-medium mt-6 mb-3">
            Third-Party Integrations and Services
          </h3>
          <p>
            Our Platform and Services may contain links to or allow you to
            connect and use certain external third-party products, services, or
            software in conjunction with your use of our Platform and Services
            (collectively, "Third-Party Services"). To take advantage of these
            features, you may be required to sign up or log into such
            Third-Party Service on their respective websites or applications. By
            enabling the Platform to access such Third-Party Service, you are
            permitting EzShopper to pass on your login information to the
            Third-Party Service and granting the Third-Party Service permission
            to access or process your data. You acknowledge that your use of
            such Third-Party Service is governed solely by the terms and
            conditions, privacy policy, and other applicable policies of the
            Third-Party Service, and that EzShopper is not liable for, nor does
            it endorse, any aspect of the Third-Party Service or its data
            handling practices.
          </p>
          <p>
            EzShopper is not responsible for data given by others, including
            Mentions and data from Third-Party Services (for example, data from
            Social Networks and Client Content displayed on the Account
            Dashboard). You and other users may encounter data that could be
            unlawful, offensive, inaccurate, or inappropriate, and EzShopper is
            not liable for any damage or loss arising from such data. When you
            access Third-Party Services, you do so at your own risk and
            judgment. Third-Party Services are not under our control, and you
            acknowledge that EzShopper is not responsible for the content,
            function, accuracy, legality, appropriateness, or any other aspect
            of Third-Party Services. If you believe any Third-Party Services
            violate applicable law or may be inappropriate, please notify us.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">10. Termination</h2>
          <p>
            EzShopper reserves the right to suspend or terminate your access to
            the Platform at any time if you violate these Terms or engage in
            activities that harm the integrity or security of the Platform. You
            may also terminate your account by contacting us directly. Upon
            termination, your access to the Platform will be revoked, but any
            accrued rights or obligations prior to termination will remain in
            effect.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">
            11. Limitation of Liability
          </h2>
          <p>
            To the maximum extent permitted by applicable law, EzShopper shall
            not be liable for any indirect, incidental, special, or
            consequential damages arising out of or in connection with your use
            of the Platform, including but not limited to loss of data, revenue,
            or profits. Our total liability to you for any claim shall be
            limited to the amount you paid for access to the Platform in the 12
            months preceding the claim.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">
            12. Indemnification
          </h2>
          <p>
            You agree to indemnify, defend, and hold harmless EzShopper and its
            affiliates, employees, officers, and directors from any claims,
            losses, damages, liabilities, and expenses (including legal fees)
            arising out of or related to your use of the Platform, violation of
            these Terms, or infringement of any rights of third parties.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">13. Governing Law</h2>
          <p>
            These Terms are governed by the laws of the Province of British
            Columbia, Canada, without regard to its conflict of laws principles.
            Any disputes arising from or related to these Terms shall be
            resolved exclusively in the courts located in Vancouver, BC, Canada.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">14. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at:
          </p>
          <p className="pl-4">
            EZSHOPPER TECHNOLOGIES INC.
            <br />
            COMPANY ADDRESS: 254 Chapman Rd, Ste 208 #21601
            <br />
            Newark, Delaware 19702 US
            <br />
            Email: support@ezshopper.ai
          </p>
        </div>
      </div>
      <FooterSection />
    </div>
  );
};

export default TermsOfUse;
