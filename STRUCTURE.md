# 📁 Cấu trúc Thư mục - StepDevCode.me

## 🎯 Cấu trúc Đã Sắp Xếp

```
stepdevcode/
│
├── index.html                    # 🏠 Trang chủ (ROOT)
│
├── pages/                        # 📄 CÁC TRANG CHÍNH
│   ├── about.html               # Giới thiệu
│   ├── projects.html            # Dự án
│   ├── contact.html             # Liên hệ
│   ├── courses.html             # Legacy courses (có thể xóa)
│   └── development-process.html # Quy trình phát triển
│
├── templates/                    # 📋 TEMPLATES & PLACEHOLDERS
│   ├── coming-soon.html         # Coming soon page
│   ├── under-construction.html  # Under construction
│   └── maintenance.html         # Maintenance page
│
├── assets/                       # 🎨 ASSETS
│   ├── css/
│   │   ├── style.css            # Main stylesheet
│   │   ├── themes/              # Theme files
│   │   │   ├── nude-theme.css
│   │   │   └── nude-variations.css
│   │   └── pages/               # Page-specific CSS
│   │       ├── homepage-enhancements.css
│   │       └── learning-journey-fix.css
│   │
│   ├── js/
│   │   ├── main.js              # Core JavaScript
│   │   ├── courses.js           # Courses functionality
│   │   ├── projects.js          # Projects functionality
│   │   ├── schedule.js          # Schedule functionality
│   │   └── development-process.js
│   │
│   ├── data/                    # 📊 DATA FILES
│   │   ├── courses.json
│   │   ├── roadmaps.json
│   │   └── schedule.json
│   │
│   └── images/                  # 🖼️ IMAGES
│       ├── courses/
│       └── roadmaps/
│
├── courses/                      # 📚 COURSES
│   ├── index.html
│   ├── web-development/
│   ├── programming-languages/
│   ├── data-science/
│   └── devops/
│
├── roadmaps/                     # 🗺️ ROADMAPS
│   ├── index.html
│   ├── ml-data-engineer/
│   ├── devops-engineer/
│   └── fullstack-developer/
│
├── learning-schedule/            # 📅 LEARNING SCHEDULE
│   ├── index.html
│   ├── daily/
│   ├── weekly/
│   └── monthly/
│
├── resources/                    # 📖 RESOURCES
│   ├── index.html
│   ├── articles/
│   ├── tutorials/
│   └── cheatsheets/
│
├── admin/                        # 🔐 ADMIN PANEL
│   ├── login.html
│   ├── dashboard.html
│   └── admin-auth.js
│
├── roadmap-site/                 # 🗺️ ROADMAP SITE
│   ├── index.html
│   ├── create.html
│   └── roadmap-editor.js
│
├── community/                    # 👥 COMMUNITY
│   ├── index.html
│   ├── blog/
│   ├── forum/
│   ├── events/
│   ├── members/
│   └── projects/
│
├── personal/                     # 👤 PERSONAL (reserved)
│
├── shared/                       # 🔄 SHARED RESOURCES
│   ├── assets/
│   │   ├── css/
│   │   │   ├── main.css
│   │   │   ├── components.css
│   │   │   ├── nude-theme.css
│   │   │   ├── nude-variations.css
│   │   │   └── roadmap-admin.css
│   │   └── js/
│   │       └── core.js
│   └── components/
│
├── utils/                        # 🛠️ UTILITIES (reserved)
│
└── docs/                         # 📚 DOCUMENTATION (ở root)
    ├── SUMMARY.md
    ├── DEPLOYMENT-GUIDE.md
    └── ...
```

---

## 📋 Quy Tắc Tổ Chức

### 1. **Root Files**
- `index.html` - Trang chủ (giữ ở root)
- `README.md` - Hướng dẫn project
- `STRUCTURE.md` - File này

### 2. **Pages Folder**
- Các trang HTML chính (about, projects, contact)
- Không bao gồm index.html (ở root)

### 3. **Templates Folder**
- Placeholder pages (coming-soon, maintenance, etc.)
- Có thể tái sử dụng

### 4. **Assets Organization**
- CSS: Tách theo themes và pages
- JS: Tách theo functionality
- Data: JSON files
- Images: Theo category

### 5. **Documentation**
- Tất cả `.md` files trong `docs/` (root level)
- Không để trong `stepdevcode/`

---

## 🔄 Migration Plan

### Bước 1: Tạo cấu trúc mới
✅ Đã tạo: `pages/`, `templates/`, `utils/`

### Bước 2: Di chuyển files
- [ ] Di chuyển `about.html`, `projects.html`, `contact.html` → `pages/`
- [ ] Di chuyển `coming-soon.html`, `maintenance.html`, `under-construction.html` → `templates/`
- [ ] Di chuyển `.md` files → `docs/` (nếu có trong stepdevcode/)

### Bước 3: Tổ chức CSS
- [ ] Di chuyển theme files → `assets/css/themes/`
- [ ] Di chuyển page-specific CSS → `assets/css/pages/`

### Bước 4: Update paths
- [ ] Cập nhật tất cả links trong HTML
- [ ] Cập nhật CSS imports
- [ ] Cập nhật JS paths

---

## 📊 File Statistics

- **Total HTML files:** 30+
- **Total CSS files:** 10+
- **Total JS files:** 6+
- **Total JSON files:** 3
- **Total MD files:** 25+

---

**Last Updated:** Structure reorganized

