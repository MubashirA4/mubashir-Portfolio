# Mubashir Portfolio - Comprehensive Unused Code Analysis

**Analysis Date:** May 22, 2026  
**Project:** Mubashir Ahmad Hamza Portfolio (React + TypeScript)  
**Scope:** src/components/, src/pages/, src/lib/, src/hooks/, src/data/

---

## 🔴 CRITICAL - HIGH PRIORITY ISSUES

### 1. **Navigation.tsx** - Unused Icon Imports
**File:** [src/components/Navigation.tsx](src/components/Navigation.tsx#L3)  
**Line:** 3  
**Issue:** Imports three icons that are never used in the component
```typescript
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
```
**Unused:** `Github`, `Linkedin`, `Mail`  
**Action:** Remove unused imports  
**Suggested Fix:**
```typescript
import { Menu, X } from "lucide-react";
```

---

### 2. **Footer.tsx** - Unused Icon Imports  
**File:** [src/components/Footer.tsx](src/components/Footer.tsx#L7-L8)  
**Lines:** 7-8  
**Issue:** Imports two icons that are never rendered or referenced
```typescript
import {
  Github,
  Linkedin,
  Mail,
  Twitter,        // ❌ UNUSED
  Instagram,      // ❌ UNUSED
  MapPin,
  Triangle,
} from "lucide-react";
```
**Unused:** `Twitter`, `Instagram`  
**Usage Count:** 0 instances in entire file  
**Action:** Remove unused icon imports  
**Suggested Fix:**
```typescript
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Triangle,
} from "lucide-react";
```

---

### 3. **App.css** - Unused CSS Classes
**File:** [src/App.css](src/App.css#L5-L29)  
**Lines:** 5-29  
**Issue:** Contains CSS classes from Vite template that are never used in the project
```css
.logo { ... }
.logo:hover { ... }
.logo.react:hover { ... }
@keyframes logo-spin { ... }
.card { ... }
.read-the-docs { ... }
```
**Unused Classes:**
- `.logo` (Line 9)
- `.logo:hover` (Line 13)
- `.logo.react:hover` (Line 14)
- `logo-spin` keyframes (Line 17-22)
- `.card` (Line 31)
- `.read-the-docs` (Line 35)

**Search Result:** 0 instances of any of these classes found in codebase  
**Action:** Remove entire unused styles block or create new utility CSS  
**Suggested Fix:** Delete lines 5-36 from App.css

---

## 🟡 MEDIUM - MODERATE PRIORITY ISSUES

### 4. **NotFound.tsx** - Unnecessary Console Error
**File:** [src/pages/NotFound.tsx](src/pages/NotFound.tsx#L8)  
**Line:** 8  
**Issue:** Console.error called on every 404 page visit
```typescript
useEffect(() => {
  console.error("404 Error: User attempted to access non-existent route:", location.pathname);
}, [location.pathname]);
```
**Problem:** 
- Logs to browser console every time 404 page is visited
- Not connected to error tracking service
- Clutters dev tools and console
  
**Action:** Remove or replace with proper error tracking  
**Suggested Fixes:**
- **Option 1 - Remove:** Delete the useEffect entirely
- **Option 2 - Replace:** Send to error tracking service
- **Option 3 - Conditional:** Only log in development
```typescript
useEffect(() => {
  if (process.env.NODE_ENV === 'development') {
    console.error("404 Error:", location.pathname);
  }
}, [location.pathname]);
```

---

### 5. **ContactSection.tsx & ContactPage.tsx** - Duplicate Form Schema
**Files:** 
- [src/components/ContactSection.tsx](src/components/ContactSection.tsx#L12-L30)
- [src/pages/ContactPage.tsx](src/pages/ContactPage.tsx#L12-L30)

**Issue:** Identical validation schema defined in two places
```typescript
const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required")...
  email: z.string().trim().email("Invalid email address")...
  subject: z.string().trim().min(1, "Subject is required")...
  message: z.string().trim().min(1, "Message is required")...
});
```

**Problem:**
- Code duplication violates DRY principle
- Maintenance nightmare - changes must be made in both places
- Increases bundle size unnecessarily
  
**Action:** Create shared schema file  
**Suggested Fix:** Create `src/schemas/contact.ts`
```typescript
// src/schemas/contact.ts
import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required")...
  email: z.string().trim().email("Invalid email address")...
  subject: z.string().trim().min(1, "Subject is required")...
  message: z.string().trim().min(1, "Message is required")...
});

export type ContactForm = z.infer<typeof contactSchema>;
```

---

### 6. **HeroSection.tsx** - Non-functional Social Links
**File:** [src/components/HeroSection.tsx](src/components/HeroSection.tsx#L137-L139)  
**Lines:** 137-139  
**Issue:** Social media icons rendered but links don't navigate anywhere
```typescript
{[
  { icon: Github, href: "#", label: "GitHub" },      // ❌ href="#" - dead link
  { icon: Linkedin, href: "#", label: "LinkedIn" },  // ❌ href="#" - dead link
  { icon: Mail, href: "#contact", label: "Email" },  // ✅ Only Email works
].map((social) => (
  <motion.a key={social.label} href={social.href} ...>
```

**Problem:**
- GitHub and LinkedIn links go nowhere
- Placeholder links confuse users
- Appears unfinished/unprofessional
  
**Action:** Connect to actual profile URLs  
**Suggested Fix:**
```typescript
{[
  { icon: Github, href: "https://github.com/MubashirA4", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/mubashir-ahmad-hamza-a5961b279/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:hamza.cse123@gmail.com", label: "Email" },
].map((social) => (
```

---

## 🟢 LOW - NICE TO HAVE IMPROVEMENTS

### 7. **Footer.tsx** - Complex Navigation Function
**File:** [src/components/Footer.tsx](src/components/Footer.tsx#L46-L70)  
**Lines:** 46-70  
**Issue:** Complex `handleNavigation` function could be simplified
```typescript
const handleNavigation = (href: string) => {
  const [path, hash] = href.split("#");
  
  if (hash) {
    const currentPath = location.pathname;
    const targetPath = path;

    if (currentPath === targetPath) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 0);
    } else {
      navigate(targetPath);
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  } else {
    navigate(path);
  }
};
```

**Suggestion:** Could use React Router's anchor navigation or simplify with Link components  
**Optimization:** Extract scroll logic into custom hook `useScrollToHash`

---

### 8. **SkillsSection.tsx** - Potential Optimization
**File:** [src/components/SkillsSection.tsx](src/components/SkillsSection.tsx#L131-L133)  
**Lines:** 131-133  
**Issue:** Filters are created but could be optimized
```typescript
const frontendSkills = skills.filter((s) => s.category === "Frontend");
const backendSkills = skills.filter((s) => s.category === "Backend");
const toolSkills = skills.filter((s) => s.category === "Tools");
```
**Status:** ✅ ACTUALLY USED - These are rendered (lines 172, 184, 196)  
**Optimization Suggestion:** Consider memoizing if skills array is large (currently only 10 items)

---

### 9. **Type Imports - Check for Unused Type Definitions**
**Recommendation:** Run TypeScript compiler with `noUnusedLocals` and `noUnusedParameters` flags
```json
{
  "compilerOptions": {
    "noUnusedLocals": true,
    "noUnusedParameters": true
  }
}
```

---

## 📊 SUMMARY TABLE

| Priority | File | Issue | Type | Action |
|----------|------|-------|------|--------|
| 🔴 Critical | Navigation.tsx | Unused imports (Github, Linkedin, Mail) | Imports | Remove |
| 🔴 Critical | Footer.tsx | Unused imports (Twitter, Instagram) | Imports | Remove |
| 🔴 Critical | App.css | Unused CSS classes (.logo, .card, etc) | CSS | Remove |
| 🟡 Medium | NotFound.tsx | console.error() | Dead Code | Remove or integrate tracking |
| 🟡 Medium | ContactSection.tsx + ContactPage.tsx | Duplicate schema | Code Duplication | Consolidate |
| 🟡 Medium | HeroSection.tsx | Dead social links (#) | Configuration | Fix URLs |
| 🟢 Low | Footer.tsx | Complex navigation logic | Performance | Refactor to custom hook |

---

## 🎯 RECOMMENDED ACTION PLAN

### Phase 1: Critical (Immediate)
1. Remove unused imports from Navigation.tsx (1 min)
2. Remove unused imports from Footer.tsx (1 min)
3. Remove unused CSS from App.css (2 min)
4. **Estimated time: 5 minutes**

### Phase 2: Medium (This Sprint)
1. Extract and remove console.error from NotFound.tsx (2 min)
2. Create shared contact schema (10 min)
3. Fix social media links in HeroSection (5 min)
4. **Estimated time: 20 minutes**

### Phase 3: Nice-to-Have (Backlog)
1. Create custom hook for navigation logic
2. Enable TypeScript strict flags (noUnusedLocals)
3. Add eslint rules for dead code detection

---

## 🔧 TOOLS RECOMMENDED

1. **ESLint Plugin:** `eslint-plugin-unused-imports`
2. **TypeScript Settings:** Enable `noUnusedLocals` and `noUnusedParameters`
3. **IDE Extensions:** VS Code's built-in unused code highlighting
4. **CI/CD:** Add lint checks to pre-commit hooks

---

## 📝 NOTES

- All React imports are properly used
- All component props are properly utilized
- Custom hooks (useIsMobile, useToast, etc.) are well-maintained
- Data structure in projects.ts is clean
- Overall code quality is good - minimal dead code

