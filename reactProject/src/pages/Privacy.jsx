import React from "react";

const Privacy = () => {
  return (
    <div className="p-10 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4 text-gray-700 leading-relaxed">
        We value your privacy and are committed to protecting your personal
        information. This Privacy Policy explains how we collect, use, and
        safeguard your data when you use our services.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-3">1. Information We Collect</h2>
      <p className="mb-4 text-gray-700 leading-relaxed">
        We collect information you provide during registration such as name,
        email, and profile details. We may also gather technical information
        like device type, IP address, and usage statistics to improve your
        experience.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-3">2. How We Use Information</h2>
      <p className="mb-4 text-gray-700 leading-relaxed">
        Your information helps us provide personalized services, enhance
        security, and develop new features. We may also use it for
        communication purposes such as updates, promotions, or support
        messages.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-3">3. Data Protection</h2>
      <p className="mb-4 text-gray-700 leading-relaxed">
        We use industry-standard security measures, including encryption and
        secure storage, to protect your data. Passwords are never stored in
        plain text and sensitive information is handled with strict care.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-3">4. User Rights</h2>
      <p className="mb-4 text-gray-700 leading-relaxed">
        You have the right to access, update, or delete your data at any time.
        If you no longer wish to use our platform, you may request account
        deletion by contacting us directly.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-3">5. Changes to Policy</h2>
      <p className="mb-4 text-gray-700 leading-relaxed">
        We may update this Privacy Policy from time to time to reflect changes
        in technology or legal requirements. Continued use of our platform
        indicates your acceptance of the updated policy.
      </p>
    </div>
  );
};

export default Privacy;
