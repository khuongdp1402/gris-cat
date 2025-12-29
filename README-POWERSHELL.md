# Giải quyết lỗi PowerShell Execution Policy

## Vấn đề
Khi chạy `npm run dev` trên PowerShell, bạn có thể gặp lỗi:
```
npm : File C:\Program Files\nodejs\npm.ps1 cannot be loaded because running scripts is disabled on this system.
```

## Giải pháp

### Cách 1: Sử dụng npm.cmd (Khuyến nghị)
Thay vì chạy `npm run dev`, hãy chạy:
```powershell
npm.cmd run dev
```

### Cách 2: Sử dụng script helper
Chạy file `dev.ps1` đã được tạo:
```powershell
.\dev.ps1
```

### Cách 3: Thay đổi Execution Policy (Cần quyền Admin)
```powershell
# Chạy PowerShell as Administrator, sau đó:
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Cách 4: Sử dụng Command Prompt (cmd) thay vì PowerShell
Mở Command Prompt và chạy:
```cmd
npm run dev
```

## Lưu ý
- Node.js version hiện tại: v24.12.0 ✅ (Đã đáp ứng yêu cầu >= 18.17.0)
- Execution Policy hiện tại: Bypass
- Nếu vẫn gặp lỗi, hãy thử restart PowerShell hoặc sử dụng Command Prompt

