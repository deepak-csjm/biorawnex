window.screens = {
  welcome: () => `
    <div class="card">
      <h1>Stop Burning. Start Earning.</h1>
      <p>Welcome to BioRawNex.</p>
      <button class="primary-btn" onclick="location.hash='#/language'">Get Started</button>
    </div>
  `,
  language: () => `
    <div class="card">
      <h2>Select Language</h2>
      <p>English • हिन्दी • Hinglish</p>
      <button class="primary-btn" onclick="location.hash='#/mobile'">Continue</button>
    </div>
  `,
  mobile: () => `<div class="card"><h2>Mobile Verification</h2></div>`,
  otp: () => `<div class="card"><h2>OTP Verification</h2></div>`,
  capabilities: () => `<div class="card"><h2>Select Capabilities</h2></div>`,
  profile: () => `<div class="card"><h2>Profile Setup</h2></div>`,
  dashboard: () => `<div class="card"><h2>Hello 👋</h2><p>My Biomass • Offers • Orders • Wallet</p></div>`
};