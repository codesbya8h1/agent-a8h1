git clone https://github.com/yourusername/personal-portfolio.git
cd personal-portfolio
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
Create a `.env` file in the root directory and add necessary environment variables.

4. Start the development server
```bash
npm run dev
```

## Project Structure

```
personal-portfolio/
├── client/                # Frontend React application
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── pages/        # Page components
│   │   ├── lib/          # Utility functions and hooks
│   │   └── ...
├── server/               # Backend Express application
├── shared/              # Shared types and utilities
└── public/              # Static assets