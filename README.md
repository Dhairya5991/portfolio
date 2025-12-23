# Dhairyashil Pansare - Portfolio Website

A modern, responsive single-page portfolio website built with React, featuring smooth scrolling navigation and a professional design.

## Features

- 🎨 Modern gradient design with glassmorphism effects
- 📱 Fully responsive (mobile, tablet, desktop)
- 🔄 Smooth scrolling navigation
- 📄 Downloadable resume/CV
- ⚡ Fast loading with optimized assets
- 🐳 Docker-ready for easy deployment
- 🎯 SEO-friendly structure

## Tech Stack

- **Frontend**: React 18+
- **Icons**: Lucide React
- **Styling**: Tailwind CSS
- **Build Tool**: Create React App
- **Server**: Nginx (Alpine)
- **Container**: Docker

## Project Structure

```
portfolio/
├── public/
│   ├── index.html
│   └── Dhairyashil_Pansare-CV-2025.pdf
├── src/
│   ├── App.js (Portfolio component)
│   ├── index.js
│   └── index.css
├── Dockerfile
├── nginx.conf
├── package.json
├── .dockerignore
└── README.md
```

## Prerequisites

- Node.js 18+ (for local development)
- Docker (for containerized deployment)
- npm or yarn

## Local Development

### Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Place your resume PDF in the `public` folder:
```bash
cp Dhairyashil_Pansare_Resume.pdf public/
```

4. Start the development server:
```bash
npm start
```

5. Open your browser and navigate to:
```
http://localhost:3000
```

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## Docker Deployment

### Building the Docker Image

1. Ensure your resume PDF is in the project root:
```bash
ls Dhairyashil_Pansare-CV-2025.pdf
```

2. Build the Docker image:
```bash
docker build -t dhairyashil-portfolio:latest .
```

### Running the Container

Run the container on port 80:
```bash
docker run -d -p 80:80 --name portfolio dhairyashil-portfolio:latest
```

Or run on a different port (e.g., 8080):
```bash
docker run -d -p 8080:80 --name portfolio dhairyashil-portfolio:latest
```

### Accessing the Application

Open your browser and navigate to:
- Local: `http://localhost`
- Custom port: `http://localhost:8080`

### Docker Management Commands

```bash
# View running containers
docker ps

# View logs
docker logs portfolio

# Stop the container
docker stop portfolio

# Start the container
docker start portfolio

# Remove the container
docker rm portfolio

# Remove the image
docker rmi dhairyashil-portfolio:latest
```

## Docker Compose (Optional)

Create a `docker-compose.yml` file:

```yaml
version: '3.8'

services:
  portfolio:
    build: .
    image: dhairyashil-portfolio:latest
    container_name: portfolio
    ports:
      - "80:80"
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "wget", "--quiet", "--tries=1", "--spider", "http://localhost/"]
      interval: 30s
      timeout: 3s
      retries: 3
      start_period: 5s
```

Run with Docker Compose:
```bash
docker-compose up -d
```

## Production Deployment

### AWS EC2 / DigitalOcean / Linode

1. SSH into your server
2. Install Docker
3. Clone the repository
4. Build and run:
```bash
docker build -t portfolio .
docker run -d -p 80:80 --restart unless-stopped portfolio
```

### Docker Hub Deployment

1. Tag your image:
```bash
docker tag dhairyashil-portfolio:latest yourusername/dhairyashil-portfolio:latest
```

2. Push to Docker Hub:
```bash
docker push yourusername/dhairyashil-portfolio:latest
```

3. Pull and run on any server:
```bash
docker pull yourusername/dhairyashil-portfolio:latest
docker run -d -p 80:80 yourusername/dhairyashil-portfolio:latest
```

### Kubernetes Deployment

Create a `deployment.yaml`:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: portfolio
spec:
  replicas: 2
  selector:
    matchLabels:
      app: portfolio
  template:
    metadata:
      labels:
        app: portfolio
    spec:
      containers:
      - name: portfolio
        image: dhairyashil-portfolio:latest
        ports:
        - containerPort: 80
---
apiVersion: v1
kind: Service
metadata:
  name: portfolio-service
spec:
  type: LoadBalancer
  ports:
  - port: 80
    targetPort: 80
  selector:
    app: portfolio
```

Apply the configuration:
```bash
kubectl apply -f deployment.yaml
```

## Environment Variables

The application doesn't require environment variables by default. However, you can customize:

- **PORT**: Change nginx port in Dockerfile (default: 80)
- **NODE_ENV**: Set to 'production' for optimized builds

## Performance Optimization

The Docker image includes:
- ✅ Multi-stage build (reduced image size)
- ✅ Gzip compression
- ✅ Static asset caching
- ✅ Alpine Linux (minimal base image)
- ✅ Health checks
- ✅ Security headers

## Troubleshooting

### Resume PDF not downloading
- Ensure the PDF is in the `public` folder before building
- Check nginx.conf PDF location mapping
- Verify file permissions

### Port already in use
```bash
# Find process using port 80
sudo lsof -i :80

# Use a different port
docker run -d -p 8080:80 portfolio
```

### Container won't start
```bash
# Check logs
docker logs portfolio

# Verify image built correctly
docker images | grep portfolio
```

## Customization

### Update Content
Edit the portfolio component in `src/App.js` to update:
- Personal information
- Work experience
- Projects
- Skills
- Contact details

### Change Colors
Modify Tailwind classes in the component:
- `bg-gradient-to-br from-slate-900` - Background gradient
- `text-blue-400` - Primary accent color
- `text-purple-500` - Secondary accent color

### Update Resume
Replace `Dhairyashil_Pansare-CV-2025.pdf` in the `public` folder with your updated CV.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

**Dhairyashil Pansare**
- Email: dspansare1991@gmail.com
- Phone: +91 8805555319
- LinkedIn: [linkedin.com/in/dhairyashil](https://lked.in/dhairyashil)
- Location: Pune, India 411038

## Acknowledgments

- Built with [Create React App](https://create-react-app.dev/)
- Icons by [Lucide](https://lucide.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)

---

**Star ⭐ this repository if you find it helpful!**
