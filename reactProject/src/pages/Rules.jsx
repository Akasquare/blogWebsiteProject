import React from "react";

const Rules = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-zinc-800">
      {/* Header */}
      <h1 className="text-3xl font-bold mb-4 text-center">
        Community Guidelines
      </h1>
      <p className="text-lg text-center mb-10 text-zinc-600">
        Welcome to <span className="font-semibold">[Your Website Name]</span> —
        a space to share blogs, ideas, and perspectives. To keep our community
        safe and respectful, please follow these rules.
      </p>

      {/* Guidelines Sections */}
      <div className="space-y-8">
        {/* Respectful Behavior */}
        <section>
          <h2 className="text-xl font-semibold mb-2">1. Respectful Behavior</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Treat others with kindness. Debate ideas, not people.</li>
            <li>No harassment, bullying, or targeted attacks.</li>
            <li>No slurs, hateful language, or degrading comments.</li>
          </ul>
        </section>

        {/* Prohibited Content */}
        <section>
          <h2 className="text-xl font-semibold mb-2">2. Prohibited Content</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Threats, violence, or incitement of harm.</li>
            <li>Hate speech or harassment of any kind.</li>
            <li>Graphic, pornographic, or disturbing content.</li>
            <li>Self-harm or suicide promotion.</li>
            <li>Exploitation of minors.</li>
          </ul>
        </section>

        {/* Privacy & Safety */}
        <section>
          <h2 className="text-xl font-semibold mb-2">3. Privacy & Safety</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Do not share private information about others.</li>
            <li>No impersonation or misleading identities.</li>
            <li>Do not post private conversations without consent.</li>
          </ul>
        </section>

        {/* Intellectual Property */}
        <section>
          <h2 className="text-xl font-semibold mb-2">4. Intellectual Property</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Only post content you have rights to share.</li>
            <li>No plagiarism or copyright violations.</li>
          </ul>
        </section>

        {/* Restricted Activities */}
        <section>
          <h2 className="text-xl font-semibold mb-2">5. Restricted Activities</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>No spam, scams, or misleading promotions.</li>
            <li>No fake engagement (buying likes, comments, followers).</li>
            <li>No illegal activities (fraud, gambling, restricted goods).</li>
            <li>No malware, phishing, or harmful links.</li>
          </ul>
        </section>

        {/* Promotion & Marketing */}
        <section>
          <h2 className="text-xl font-semibold mb-2">6. Promotion & Marketing</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>You can promote your own work, but don’t spam.</li>
            <li>No third-party ads, affiliate spam, or deceptive promos.</li>
          </ul>
        </section>

        {/* Enforcement */}
        <section>
          <h2 className="text-xl font-semibold mb-2">7. Enforcement</h2>
          <p>
            Breaking rules may lead to content removal, account suspension, or
            permanent ban. Serious violations may be reported to authorities.
          </p>
        </section>

        {/* Reporting */}
        <section>
          <h2 className="text-xl font-semibold mb-2">8. Reporting</h2>
          <p>
            If you see a violation, use the <span className="font-medium">Report</span>{" "}
            option or contact us at{" "}
            <span className="font-semibold">support@[yourwebsite].com</span>.
          </p>
        </section>

        {/* Appeals */}
        <section>
          <h2 className="text-xl font-semibold mb-2">9. Appeals</h2>
          <p>
            If you believe your content/account was restricted by mistake, email us
            at <span className="font-semibold">appeals@[yourwebsite].com</span>.
          </p>
        </section>

        {/* Updates */}
        <section>
          <h2 className="text-xl font-semibold mb-2">10. Updates</h2>
          <p>
            These rules may evolve as our community grows. Check back for updates.
          </p>
        </section>
      </div>

      {/* Closing */}
      <p className="mt-10 text-center text-zinc-600">
        ✨ By using <span className="font-semibold">[Your Website Name]</span>,
        you agree to follow these guidelines and help us maintain a safe,
        creative, and respectful space.
      </p>
    </div>
  );
};

export default Rules;
