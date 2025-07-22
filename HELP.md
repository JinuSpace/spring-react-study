/ (프로젝트 루트)
├── backend/                     # 백엔드 Spring 프로젝트
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/             # Java 소스 코드
│   │   │   ├── resources/
│   │   │   │   ├── static/       # React 빌드 출력 포함
│   │   │   │   ├── templates/    # 템플릿 파일 (옵션)
│   │   │   │   └── application.properties
│   └── test/                    # 테스트 코드
│   ├── build.gradle             # 백엔드용 Gradle 설정
│   └── settings.gradle          # 백엔드 관련 모듈 설정 (루트 공유 경우 제외)
│
├── frontend/                    # 프론트엔드 React 프로젝트
│   ├── public/                  # React 정적 파일 (index.html 등)
│   ├── src/                     # React 소스 코드 (JavaScript/TypeScript)
│   ├── package.json             # React 의존성 설정
│   ├── build/                   # React 빌드 결과물
│   ├── node_modules/            # React 라이브러리
│   └── vite.config.js           # (예: Vite 같은 빌드 도구 사용 시)
│
├── build.gradle                 # 멀티모듈 빌드 설정
└── settings.gradle              # 멀티모듈 프로젝트 설정
