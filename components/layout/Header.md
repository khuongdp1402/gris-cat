# Header Component - Scroll-to-Reveal Animation

## Tổng quan
Component `Header.tsx` đã được refactor hoàn toàn để thực hiện hiệu ứng **"Scroll-to-Reveal"**. Header thay đổi trạng thái hình ảnh dựa trên vị trí cuộn trang, tạo cảm giác logo "nhập" vào thanh header khi người dùng cuộn qua khu vực thương hiệu lớn.

## Trạng thái Hiển thị (Visual States)

### **1. State A (Top of Page / scrollY < 400)**
- **Background**: Trong suốt (`bg-transparent`)
- **Border/Shadow**: Không có
- **Logo (Trái)**: **ẨN** (`opacity: 0`, `translate-y: 15px`)
- **Icons (Phải) & Menu Hamburger**: Luôn hiển thị màu xám tro (`text-gris-dark`) để đảm bảo khả năng truy cập trên nền trắng/sáng của banner.

### **2. State B (Scrolled / scrollY > 400)**
- **Background**: Trắng mờ với hiệu ứng glassmorphism (`bg-white/90 backdrop-blur-md`)
- **Border**: Border bottom mảnh (`border-gris-light`)
- **Logo (Trái)**: **HIỆN** (`opacity: 1`, `translate-y: 0`)
- **Animation**: Sử dụng `framer-motion` với transition `0.5s ease-out`.

## Animation Logic - "The Illusion"
Sử dụng custom hook `useScrollThreshold(400)` để đồng bộ với khu vực **Hero Banner + Big Logo**.

- Khi người dùng cuộn qua "Big Logo" ở trang chủ, Header sẽ chuyển sang State B.
- Hiệu ứng này tạo ra ảo giác rằng Logo lớn cuộn lên và "snap" vào vị trí logo nhỏ bên trái thanh Header.

## Cấu trúc Header (Desktop)
- **Chiều cao**: Cố định 70px.
- **Bên trái**: Nút Menu (nếu cần) và Logo thương hiệu (revealed).
- **Giữa (Scroll-up only)**: Thanh điều hướng (New Arrivals, Bags, Shoes...) chỉ xuất hiện khi người dùng cuộn lên (Scroll Up) ở trạng thái Scrolled.
- **Bên phải**: Search (Icon + Text), Account, Cart (có badge).

## Mobile Specifics
- Cơ chế hoạt động tương tự Desktop.
- Header bắt đầu bằng trạng thái trong suốt.
- Logo nhỏ và background trắng mờ sẽ xuất hiện dần khi người dùng cuộn trang.
- Đảm bảo tiết kiệm diện tích và tập trung vào hình ảnh sản phẩm.

## Technical Details

### **Hook: useScrollThreshold**
- Theo dõi tiến trình cuộn trang.
- Trả về `isRevealed` (boolean) để kích hoạt chuyển đổi Header.

### **Framer Motion Integration**
```typescript
<motion.div
  animate={{ 
    opacity: isRevealed ? 1 : 0,
    y: isRevealed ? 0 : 15,
  }}
  transition={{ duration: 0.5, ease: "easeOut" }}
>
  {/* Logo Content */}
</motion.div>
```

### **Smart Navigation Visibility**
Sử dụng `AnimatePresence` kết hợp với `scrollDirection` để ẩn/hiện menu điều hướng ở trung tâm:
- Chỉ hiện khi `isRevealed === true` AND `scrollDirection === "up"`.

## Color Palette
- Luôn sử dụng `#4A5568` (`text-gris-dark`) cho icons và text để giữ tính nhất quán và sang trọng.

---

**Kết quả**: Header mới mang lại trải nghiệm mượt mà, cao cấp, tập trung vào việc tạo ra một hành trình thị giác ấn tượng cho người dùng từ lúc bắt đầu truy cập trang web. 🎨✨
