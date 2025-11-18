# Migration Guide - Chuyển sang Cấu trúc Mới

## 🎯 Mục tiêu

Chuyển từ cấu trúc hiện tại sang cấu trúc mới:
- `stepdevcode/` → `personal/` + `community/` + `shared/`

---

## 📋 Bước 1: Backup

```bash
# Tạo backup
cd stepdevcode.me
cp -r stepdevcode stepdevcode-backup
```

---

## 📋 Bước 2: Di chuyển Files

### Di chuyển Personal Files

```bash
cd stepdevcode

# Di chuyển các file chính
mv index.html personal/
mv about.html personal/
mv projects.html personal/
mv contact.html personal/
mv development-process.html personal/

# Di chuyển folders
mv courses personal/
mv roadmaps personal/
mv learning-schedule personal/
```

### Di chuyển Assets sang Shared

```bash
# Tạo shared structure
mkdir -p shared/assets/css shared/assets/js shared/assets/images

# Di chuyển assets
mv assets/css/style.css shared/assets/css/main.css
mv assets/js/main.js shared/assets/js/core.js

# Copy các JS files khác
cp assets/js/*.js shared/assets/js/
```

---

## 📋 Bước 3: Cập nhật Paths

### Trong Personal Pages

**Từ:**
```html
<link rel="stylesheet" href="assets/css/style.css">
<script src="assets/js/main.js"></script>
```

**Thành:**
```html
<link rel="stylesheet" href="../shared/assets/css/main.css">
<link rel="stylesheet" href="../shared/assets/css/components.css">
<script src="../shared/assets/js/core.js"></script>
```

### Trong Community Pages

**Từ:**
```html
<link rel="stylesheet" href="assets/css/style.css">
```

**Thành:**
```html
<link rel="stylesheet" href="../shared/assets/css/main.css">
<link rel="stylesheet" href="../shared/assets/css/components.css">
```

---

## 📋 Bước 4: Tạo Community Pages

Đã tạo:
- ✅ `community/index.html` - Community home
- ✅ Folders: blog/, forum/, events/, resources/, members/, projects/

**Next:** Tạo các trang con trong mỗi folder

---

## 📋 Bước 5: Cập nhật Navigation

### Personal Navigation
Thêm link đến Community:
```html
<li><a href="../community/index.html" class="nav-link">Community</a></li>
```

### Community Navigation
Thêm link đến Personal:
```html
<li><a href="../personal/index.html" class="nav-link">Personal</a></li>
```

---

## 📋 Bước 6: Test

1. Test tất cả links
2. Check CSS loading
3. Check JS functionality
4. Test responsive
5. Test dark mode

---

## 🚀 Deployment Options

### Option 1: Separate Deployments

**Personal Site:**
```bash
# Deploy personal/ folder
cd personal
# Upload to Netlify/Vercel
```

**Community Site:**
```bash
# Deploy community/ folder
cd community
# Upload to Netlify/Vercel
```

**Shared:**
- Include trong cả 2 deployments
- Hoặc deploy riêng và link

### Option 2: Combined Deployment

**Deploy root folder:**
```bash
# Deploy toàn bộ stepdevcode/
# Setup routing:
# / → personal/index.html
# /community → community/index.html
```

---

## ✅ Checklist

- [ ] Backup website hiện tại
- [ ] Create folder structure
- [ ] Move personal files
- [ ] Move assets to shared
- [ ] Update all paths
- [ ] Create community pages
- [ ] Update navigation
- [ ] Test all links
- [ ] Test functionality
- [ ] Deploy

---

## 🔄 Rollback

Nếu có vấn đề:
```bash
# Restore từ backup
rm -rf stepdevcode
cp -r stepdevcode-backup stepdevcode
```

---

**Xem thêm:** `docs/NEW-STRUCTURE.md` cho cấu trúc chi tiết

