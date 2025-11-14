import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// 이것이 가장 안정적이고 표준적인 설정입니다.
export default defineConfig({
  // 1. base 경로는 완벽하게 올바릅니다. 그대로 유지합니다.
  base: "/test_myReactProject/",

  // 2. 플러그인 설정은 그대로 유지합니다.
  plugins: [react()],

  // 3. 별칭(alias) 설정도 그대로 유지합니다.
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    }
  }
  
  // 4. 배포 시 문제를 일으킬 수 있는 loadEnv와 define 부분은 제거했습니다.
  //    API 키는 .env 파일을 통해 관리하는 것이 표준 방식입니다.
});