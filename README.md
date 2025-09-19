# AWS CI/CD Demo App

## Demo Credentials
- Email: hire-me@anshumat.org
- Password: HireMe@2025!

## Project Structure
- /app → Node.js app + Dockerfile + tests
- /pipeline/deploy.yml → GitHub Actions CI/CD workflow

## App Flow
1. Push code to `main` branch
2. GitHub Actions builds & tests
3. Docker image is built
4. (Future: deploy to EC2 via ECR/SSM)