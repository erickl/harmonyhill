## Getting Started
Run ```npm run dev``` and check ```localhost:3000``` to test locally

## Create optimizied prod build
rm -rf apps/web/.next  
npm run build -w apps/web  
npm run start -w apps/web

## Test page speed
npm install -g lighthouse
npm run start -w apps/web
lighthouse http://localhost:3000 --view

## Deploy on Vercel

Deploy to alpha site: ```harmonyhill-alpha.vercel.app```
Run from root: ```vercel```

Pushing to the main branch starts the deployment process, but that's never worked so far
Instead, for now, run from root: ```vercel --prod```

# Analyze bundle
Run from root: npm run analyze -w apps/web 
Open http://127.0.0.1:4000