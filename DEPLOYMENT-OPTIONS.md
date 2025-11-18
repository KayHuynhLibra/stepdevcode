# Deployment Options - Personal + Community

## 🎯 3 Cách Triển khai

### Option 1: Separate Domains (Khuyên dùng)

**Setup:**
```
stepdevcode.me          → personal/ (main domain)
community.stepdevcode.me → community/ (subdomain)
```

**Netlify Setup:**
1. Deploy `personal/` → `stepdevcode.me`
2. Deploy `community/` → `community.stepdevcode.me`
3. Shared assets included trong cả 2

**Ưu điểm:**
- ✅ Tách biệt rõ ràng
- ✅ Dễ maintain
- ✅ Có thể scale riêng
- ✅ SEO tốt hơn

---

### Option 2: Subdirectories

**Setup:**
```
stepdevcode.me/          → personal/ (default)
stepdevcode.me/community → community/
```

**Netlify Setup:**
1. Deploy root folder `stepdevcode/`
2. Setup redirects:
   ```
   / → /personal/
   /community/* → /community/*
   ```

**Ưu điểm:**
- ✅ Single domain
- ✅ Dễ setup
- ✅ Shared assets dễ dàng

---

### Option 3: Combined (Unified)

**Setup:**
```
stepdevcode.me/ → personal/ + community/ (unified navigation)
```

**Netlify Setup:**
1. Deploy root folder
2. Unified navigation
3. Single deployment

**Ưu điểm:**
- ✅ Đơn giản nhất
- ✅ Single deployment
- ✅ Unified experience

---

## 📋 Netlify Configuration

### For Option 1 (Separate)

**personal/netlify.toml:**
```toml
[build]
  publish = "personal"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

**community/netlify.toml:**
```toml
[build]
  publish = "community"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### For Option 2 (Subdirectories)

**netlify.toml (root):**
```toml
[[redirects]]
  from = "/"
  to = "/personal/index.html"
  status = 200

[[redirects]]
  from = "/community/*"
  to = "/community/:splat"
  status = 200
```

---

## 🚀 Quick Deploy Commands

### Deploy Personal:
```bash
cd personal
netlify deploy --prod
```

### Deploy Community:
```bash
cd community
netlify deploy --prod
```

### Deploy Combined:
```bash
cd stepdevcode
netlify deploy --prod
```

---

## ✅ Recommendation

**Cho bắt đầu:** Option 2 (Subdirectories)
- Dễ setup
- Single domain
- Dễ maintain

**Cho scale lớn:** Option 1 (Separate Domains)
- Tách biệt rõ ràng
- Có thể scale riêng
- SEO tốt hơn

---

**Xem thêm:** `docs/DEPLOYMENT-GUIDE.md` cho hướng dẫn chi tiết

