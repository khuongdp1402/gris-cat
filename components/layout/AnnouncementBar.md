# AnnouncementBar Component

## Tổng quan
Component `AnnouncementBar.tsx` đã được tạo thành công với đầy đủ các tính năng theo yêu cầu.

## Vị trí
- **File**: `components/layout/AnnouncementBar.tsx`
- **Export**: Đã được thêm vào `components/layout/index.ts`
- **Sử dụng**: Đã được tích hợp vào `app/layout.tsx` (hiển thị trên toàn bộ trang)

## Tính năng đã triển khai

### 1. Layout ✓
- **Chiều cao**: 40px (`h-10`)
- **Chiều rộng**: Full width
- **Background**: `bg-gris-light` (#E2E8F0)
- **Position**: Fixed ở top của trang với `z-50`

### 2. Content & Animation ✓
- **3 tin nhắn quảng cáo**:
  1. "Free Shipping on orders over 2.000.000đ"
  2. "New Balletcore Collection - Available Now"
  3. "Tet Holiday Sale - Up to 50% OFF"

- **Animation**: Vertical slide-up effect
  - Text hiện tại slide lên và biến mất (`-translate-y-full opacity-0`)
  - Text mới xuất hiện từ vị trí ban đầu (`translate-y-0 opacity-100`)
  - Thời gian chuyển đổi: 600ms
  - Chu kỳ: 4 giây/tin nhắn

### 3. Close Button ✓
- **Icon**: X icon từ lucide-react
- **Vị trí**: Góc phải của bar
- **Chức năng**: 
  - Click để ẩn bar
  - Lưu trạng thái vào `sessionStorage`
  - Bar sẽ không hiển thị lại trong cùng session
- **Hover effect**: Background màu xám nhạt khi hover

### 4. Typography ✓
- **Font size**: `text-xs` (12px)
- **Transform**: `uppercase`
- **Letter spacing**: `tracking-widest`
- **Color**: `text-gris-dark` (#4A5568)
- **Font weight**: `font-medium`

## Tích hợp

### Header Adjustment
- Header đã được điều chỉnh từ `top-0` sang `top-10` để tránh bị che bởi AnnouncementBar
- AnnouncementBar có `z-50`, Header cũng có `z-50` nhưng ở vị trí thấp hơn

## Cách sử dụng

Component đã được tích hợp tự động vào layout chính. Không cần thêm code nào khác.

Nếu muốn sử dụng riêng lẻ:
```tsx
import { AnnouncementBar } from '@/components/layout';

// Trong component
<AnnouncementBar />
```

## Ghi chú
- Component sử dụng `"use client"` directive vì có state và effects
- Session storage được dùng để lưu trạng thái đóng (chỉ trong session hiện tại)
- Animation được tối ưu với CSS transitions thay vì JavaScript animation
