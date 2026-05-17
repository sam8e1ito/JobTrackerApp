export const PrivacyPolicyPage = () => {
  return (
    <div className="privacy-policy">
      <h2>Privacy Policy</h2>

      <section className="privacy-policy__section">
        <h3>1. General Information</h3>
        <p>
          The protection of your personal data is highly important to me. This website and
          application (Job Tracker) is operated by <strong>Samvel Symonian</strong>.
        </p>
      </section>

      <section className="privacy-policy__section">
        <h3>2. Collection and Processing of Data</h3>
        <p>
          This Application contains interactive user interface elements (inputs) designed to log and
          manage your job applications (including company names, salary ranges, application
          statuses, and location addresses).
        </p>
        <p>
          Please note that{' '}
          <strong>
            no data entered into these forms is transmitted to any external server, third-party
            database, or the developer
          </strong>
          . All information is processed strictly within your active web browser session on your
          client device.
        </p>
      </section>

      <section className="privacy-policy__section">
        <h3>3. Use of Local Storage</h3>
        <p>
          To ensure that your data is not lost when you close or refresh the tab, this Application
          utilizes your browser's built-in <strong>Local Storage</strong> mechanism. The following
          elements are stored locally on your device:
        </p>
        <ul>
          <li>Your custom application dashboard data (the complete list of your tracked jobs);</li>
          <li>Your user interface preferences (e.g., Light / Dark mode theme selection).</li>
        </ul>
        <p>
          Since this data resides entirely on your physical storage drive, it remains under your
          exclusive control and is secured by your browser's native security policies (Same-Origin
          Policy). You can permanently wipe all this data at any moment by clearing your browser's
          cache and site data for this domain.
        </p>
      </section>

      <section className="privacy-policy__section">
        <h3>4. Hosting via Vercel</h3>
        <p>
          This website is hosted and deployed using the cloud platform <strong>Vercel</strong>{' '}
          (Vercel Inc., 650 2nd St, San Francisco, CA 94107, USA).
        </p>
        <p>
          Vercel acts purely as a static content delivery network (CDN) to serve the application
          files (HTML, stylesheets, and compiled JavaScript code) to your browser. Vercel's servers
          do not interact with, log, or store the content you type into the Application's inputs.
          Standard server connection logs may temporarily record basic technical metadata (such as
          network IP addresses, browser types, and access timestamps) strictly to monitor platform
          stability and maintain protection against network attacks.
        </p>
        <p>
          For more information, please review the Vercel Privacy Policy: <br />
          <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noreferrer">
            https://vercel.com/legal/privacy-policy
          </a>
        </p>
      </section>

      <section className="privacy-policy__section">
        <h3>5. Your Rights</h3>
        <p>
          Since the data is managed exclusively on your side via your browser, you maintain complete
          data sovereignty. You have the absolute right to access, modify, restrict, or completely
          delete your data at any time by utilizing the built-in "Edit" and "Delete" actions in the
          user interface, or by resetting your web browser storage settings.
        </p>
      </section>

      <section className="privacy-policy__section">
        <h3>6. Contact Information</h3>
        <p>
          If you have any questions or technical inquiries regarding data privacy or the client-side
          functionality of this Application, you can reach out to me at any time:
        </p>
        <p>
          <strong>Email:</strong>{' '}
          <a href="mailto:samvelsymonian@gmail.com">samvelsymonian@gmail.com</a>
        </p>
      </section>
    </div>
  );
};
