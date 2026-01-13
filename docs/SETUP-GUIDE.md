# Marketing Site Development Setup Guide

**Platform: Windows**

This guide walks you through setting up everything you need to work on the Alora marketing site using Claude Code.

---

## Part 1: GitHub Account Setup

### Step 1.1: Create a GitHub Account

1. Open your browser and go to **https://github.com/signup**
2. Enter your Alora email address (e.g., `yourname@aloraops.com`)
3. Create a strong password and save it somewhere safe
4. Choose a username (suggestion: `yourname-aloraops` or similar)
5. Complete the verification puzzle
6. Check your email for a verification code and enter it

### Step 1.2: Get Added to the Alora Organization

After creating your account, message the dev team with your GitHub username so they can:
- Add you to the `aloraops` organization
- Give you access to the `alora-marketing` repository

**Wait for confirmation before continuing.**

---

## Part 2: Install Git on Windows

### Step 2.1: Download Git

1. Go to **https://git-scm.com/download/win**
2. The download should start automatically (64-bit version)
3. If not, click "Click here to download manually"

### Step 2.2: Install Git

1. Run the downloaded installer (`Git-X.XX.X-64-bit.exe`)
2. Click **Next** through most screens, but pay attention to these:
   - **Choosing the default editor**: Select "Use Visual Studio Code" or "Use Notepad" (easier)
   - **Adjusting your PATH**: Keep the recommended option "Git from the command line and also from 3rd-party software"
   - **HTTPS transport backend**: Keep "Use the OpenSSL library"
   - **Line ending conversions**: Keep "Checkout Windows-style, commit Unix-style"
3. Click **Install** and wait for completion
4. Click **Finish**

### Step 2.3: Configure Git with Your Identity

1. Press `Windows Key + R`, type `cmd`, and press Enter
2. In the black command window, type these commands (press Enter after each):

```
git config --global user.name "Your Name"
git config --global user.email "yourname@aloraops.com"
```

Replace "Your Name" and the email with your actual name and Alora email.

---

## Part 3: Clone the Marketing Site Repository

### Step 3.1: Create a Projects Folder

1. Open **File Explorer**
2. Go to your `C:` drive
3. Create a new folder called `projects`
4. Inside `projects`, create a folder called `alora`

Your path should be: `C:\projects\alora`

### Step 3.2: Clone the Repository

1. Press `Windows Key + R`, type `cmd`, and press Enter
2. Type these commands:

```
cd C:\projects\alora
git clone https://github.com/aloraops/alora-marketing.git
```

3. A browser window will open asking you to sign in to GitHub
4. Click **Sign in with your browser**
5. Authorize Git Credential Manager
6. Return to the command window - the download should complete

You now have the code at: `C:\projects\alora\alora-marketing`

---

## Part 4: Sign Up for Claude Code

### Step 4.1: Create a Claude Account

1. Go to **https://claude.ai/signup**
2. Sign up with your Alora email address
3. Verify your email

### Step 4.2: Subscribe to Claude Pro ($20/month)

**Claude Code requires a paid subscription.** The Pro plan at $20/month is what you need.

| Plan | Price | Claude Code |
|------|-------|-------------|
| Free | $0 | Not available |
| **Pro** | **$20/month** | **Yes - this is what you need** |
| Max | $100/month | Yes + more usage |

**To subscribe:**
1. Click on your profile icon (top right)
2. Click **Upgrade to Pro** or go to **https://claude.ai/settings/billing**
3. Select the **Pro plan ($20/month)**
4. Enter payment details and confirm

The Pro plan gives you plenty of usage for marketing site work (changing text, updating images, making design tweaks).

---

## Part 5: Download and Install Claude Code

### Step 5.1: Download Claude Code for Windows

1. Go to **https://claude.ai/download**
2. Click **Download for Windows**
3. Run the downloaded installer
4. Follow the installation prompts
5. Launch Claude Code when installation completes

### Step 5.2: Sign In to Claude Code

1. When Claude Code opens, it will ask you to sign in
2. Click **Sign in with browser**
3. Sign in with your Claude account
4. Return to the Claude Code app - you should be signed in

---

## Part 6: Open the Marketing Site in Claude Code

### Step 6.1: Open the Project Folder

1. In Claude Code, you'll see a text input at the bottom
2. Type:

```
/open C:\projects\alora\alora-marketing
```

3. Press Enter
4. Claude will now be working in your marketing site folder

### Step 6.2: Have Claude Set Up and Run the Site

Type this to Claude:

```
Please help me run the marketing site locally. I need you to:
1. Install Node.js if it's not installed (use the official installer)
2. Install the project dependencies (npm install)
3. Start the development server (npm run dev)

Run these as background tasks so I can continue chatting with you.
```

Claude will guide you through installing Node.js if needed (you may need to download it from https://nodejs.org - choose the LTS version).

### Step 6.3: View the Site

Once Claude confirms the server is running:

1. Open your browser (Chrome, Edge, etc.)
2. Go to **http://localhost:3000**
3. You should see the marketing site!

---

## Part 7: Making Changes

### How It Works

1. **Tell Claude what you want**: Describe changes in plain English
   - "Change the hero headline to say 'Revolutionize Your Supply Chain'"
   - "Make the call-to-action button blue instead of green"
   - "Add a new section about our team"

2. **Claude makes the changes**: Claude will edit the code files for you

3. **See changes instantly**: The browser will automatically refresh (hot reload) when files change. Just look at localhost:3000!

### Tips for Working with Claude

- Be specific about what you want
- If something doesn't look right, describe what's wrong
- You can ask Claude to undo changes if needed
- Ask Claude to explain anything you don't understand

### Reference Documents

Check the `docs/` folder in this repository for:
- **COMPANY_BRIEF.md** - Company overview and messaging
- **2026_01_02_web_design.md** - Current design specifications
- **version-1-original.md** / **version-2-alternative.md** - Copy variations

Tell Claude to read these if you want changes aligned with our brand guidelines.

---

## Part 8: Saving Your Work (Git)

### Simple Way: Let Claude Handle It

After making changes you're happy with, tell Claude:

```
Please commit my changes and push them to GitHub.
Use a descriptive message about what changed.
```

Claude will save and upload your changes to GitHub.

### If You Want to Do It Manually

In Claude Code, you can type:
```
git add .
git commit -m "Description of what you changed"
git push
```

---

## Troubleshooting

### Claude says "usage limit reached" or stops responding
- You've hit your usage limit for the current period
- Wait a few hours and try again
- If this happens frequently, contact the dev team about upgrading to Max plan

### "npm is not recognized"
- Node.js isn't installed or the terminal needs to restart
- Ask Claude to help install Node.js

### "Cannot connect to localhost:3000"
- The server might not be running
- Ask Claude: "Is the dev server running? If not, please start it"

### "Permission denied" on GitHub
- Your GitHub account might not have access yet
- Contact the dev team to verify you've been added to the repository

### Site not updating after changes
- Try refreshing the browser with `Ctrl + Shift + R` (hard refresh)
- Ask Claude if there are any errors in the terminal

---

## Quick Reference Commands for Claude

| What you want | What to tell Claude |
|---------------|---------------------|
| Start the site | "Run npm run dev in the background" |
| Stop the site | "Stop the running dev server" |
| Save changes | "Commit and push my changes" |
| Undo last change | "Undo the last code change you made" |
| See what changed | "Show me what files have been modified" |
| Read brand guidelines | "Read docs/COMPANY_BRIEF.md and summarize it" |

---

## Need Help?

- **Technical issues**: Message the dev team
- **Design/content questions**: Work with the team as usual
- **Claude not understanding**: Try rephrasing or being more specific

---

## Appendix: Understanding Claude Products & Pricing

### What's the Difference?

Anthropic offers several Claude products. Here's what each one does:

| Product | What It Is | Free Tier | Pro ($20/mo) |
|---------|------------|-----------|--------------|
| **Claude.ai** | Web chat interface | Yes | Yes |
| **Claude mobile apps** | iOS/Android apps for chatting | Yes | Yes |
| **Claude desktop app** | Desktop app for chatting | Yes | Yes |
| **Claude Code** | Coding assistant that edits files & runs commands | **No** | **Yes** |

### Why This Guide Requires Pro

The free Claude apps (web, mobile, desktop) let you *chat* with Claude about code. But you'd have to:
1. Copy code from Claude's response
2. Manually find and open the right file
3. Paste the code in the correct location
4. Run commands yourself in a terminal

**Claude Code** (Pro required) does all of this automatically. You just describe what you want in plain English, and Claude:
- Finds the right files
- Makes the edits
- Runs commands (npm, git, etc.)
- Shows you the results

For non-technical users working on the marketing site, **Claude Code is essential** - it removes the need to understand file structures, code syntax, or terminal commands.
