import React from "react";

const Help = () => {
  return (
    <div className="p-10 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Help & Support</h1>
      <p className="mb-4 text-gray-700 leading-relaxed">
        Welcome to our Help Center. We know that sometimes you may encounter
        difficulties while using our platform, and we are here to make sure
        your experience is smooth and enjoyable. This page is your one-stop
        destination for answers to common questions, guidance on features, and
        access to our dedicated support team.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-3">Frequently Asked Questions</h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-2">
        <li><b>How do I create an account?</b> — Simply click on the “Sign Up”
        button on the homepage, fill out your details, and verify your email.</li>
        <li><b>I forgot my password.</b> — Click “Forgot Password” on the login
        page to reset your password via email.</li>
        <li><b>How do I report a problem?</b> — Go to “Settings” &gt; “Report an Issue” 
        or email us directly at support@example.com.</li>
        <li><b>Can I delete my account?</b> — Yes, you can permanently delete your
        account from “Account Settings”.</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-6 mb-3">Contact Us</h2>
      <p className="text-gray-700 leading-relaxed">
        Still need help? Our support team is available 24/7. You can reach us
        by sending an email to <b>support@example.com</b> or by using the live
        chat option available in your account dashboard.
      </p>
    </div>
  );
};

export default Help;
