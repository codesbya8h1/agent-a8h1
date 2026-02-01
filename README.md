npm install
   ```
3. Create a `.env` file with required environment variables
4. Start the development server:
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:5000`

## Features

- Responsive design that works on all devices
- Interactive components with animations
- Professional blog section
- Skills and experience showcase
- Company logos section
- Contact form
- Image gallery
- Print shop functionality

## Project Structure

```
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom hooks
│   │   └── lib/           # Utilities and data
├── server/                # Express backend
│   ├── index.ts          # Server entry point
│   ├── routes.ts         # API routes
│   ├── db.ts             # Database configuration
│   └── storage.ts        # Data storage layer
├── shared/               # Shared types and schemas
└── public/               # Static assets
```

## Development Notes

- The app is configured to work both on localhost and Replit
- Replit-specific plugins are automatically disabled when running locally
- CORS is configured to allow localhost origins in development
- Database features gracefully degrade to in-memory storage when no database is configured

## Deployment

The application is configured for deployment on various platforms:

- **Google Cloud Run**: Production-ready configuration
- **Replit**: Development and hosting platform
- **Vercel/Netlify**: Frontend deployment
- **Railway/Render**: Full-stack deployment

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally with `npm run dev`
5. Submit a pull request

## License

MIT License - see LICENSE file for details
