# Setup

```bash
npm init --yes
```

```bash
npm install --save-dev typescript @types/k6 dotenv-cli
```

---

# package.json scripts
```javascript
...
    "scripts": {
        "k6": "dotenv k6 run"
    },
...
```
