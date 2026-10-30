/**
 * 고등학교 공통수학 기초 연습문제 생성기
 * 2022 개정 교육과정 공통수학1, 공통수학2 기반
 * 모델: gpt-4o-mini
 */

// =============================================================================
// 1. 2022 개정 교육과정 공통 과목 데이터 (PDF 원문 추출)
// =============================================================================
const CURRICULUM_DATA = {
  "공통수학1": {
    "다항식": [
      {
        code: "10공수1-01-01",
        name: "다항식의 사칙연산",
        text: "다항식의 사칙연산의 원리를 설명하고, 그 계산을 할 수 있다.",
        tip: "다항식의 덧셈, 뺄셈, 곱셈, 전개식 기본 계산"
      },
      {
        code: "10공수1-01-02",
        name: "나머지정리와 인수정리",
        text: "항등식의 성질과 나머지정리를 이해하고, 이를 활용하여 문제를 해결할 수 있다.",
        tip: "미정계수법, 다항식을 일차식으로 나눈 나머지, 인수정리"
      },
      {
        code: "10공수1-01-03",
        name: "인수분해",
        text: "다항식의 인수분해를 할 수 있다.",
        tip: "공통인수 묶기, 기본 인수분해 공식, 조립제법을 이용한 간단한 인수분해"
      }
    ],
    "방정식과 부등식": [
      {
        code: "10공수1-02-01",
        name: "복소수와 사칙연산",
        text: "복소수의 뜻과 성질을 설명하고, 사칙연산을 수행할 수 있다.",
        tip: "허수단위 i의 성질, 켤레복소수, 복소수의 사칙연산 (a + bi)"
      },
      {
        code: "10공수1-02-02",
        name: "이차방정식과 판별식",
        text: "이차방정식의 실근과 허근을 이해하고, 판별식을 이용하여 이차방정식의 근을 판별할 수 있다.",
        tip: "D = b² - 4ac 판별, 서로 다른 두 실근/중근/서로 다른 두 허근 판별"
      },
      {
        code: "10공수1-02-03",
        name: "근과 계수의 관계",
        text: "이차방정식의 근과 계수의 관계를 설명할 수 있다.",
        tip: "두 근의 합(α+β)과 곱(αβ) 구하기, 이를 활용한 기본 식의 값"
      },
      {
        code: "10공수1-02-04",
        name: "이차방정식과 이차함수의 관계",
        text: "이차방정식과 이차함수를 연결하여 그 관계를 설명할 수 있다.",
        tip: "이차함수의 그래프와 x축의 교점의 x좌표가 이차방정식의 실근임을 이해"
      },
      {
        code: "10공수1-02-05",
        name: "이차함수와 직선의 위치 관계",
        text: "이차함수의 그래프와 직선의 위치 관계를 판단할 수 있다.",
        tip: "연립하여 얻은 이차방정식의 판별식을 통한 위치 관계(서로 다른 두 점, 접한다, 만나지 않는다)"
      },
      {
        code: "10공수1-02-06",
        name: "이차함수의 최대와 최소",
        text: "이차함수의 최대, 최소를 탐구하고, 이를 실생활과 연결하여 유용성을 인식할 수 있다.",
        tip: "꼭짓점의 좌표 구하기, 제한된 범위에서의 최댓값과 최솟값"
      },
      {
        code: "10공수1-02-07",
        name: "삼차방정식과 사차방정식",
        text: "간단한 삼차방정식과 사차방정식을 풀 수 있다.",
        tip: "인수분해 공식이나 인수정리, 조립제법을 이용하는 기본적인 삼차·사차방정식 풀이"
      },
      {
        code: "10공수1-02-08",
        name: "연립이차방정식",
        text: "미지수가 2개인 연립이차방정식을 풀 수 있다.",
        tip: "일차식과 이차식이 연립된 형태, 한 문자로 정리하여 대입"
      },
      {
        code: "10공수1-02-09",
        name: "연립일차부등식",
        text: "미지수가 1개인 연립일차부등식을 풀 수 있다.",
        tip: "수직선 위에 각 부등식의 해를 나타내어 공통부분 구하기"
      },
      {
        code: "10공수1-02-10",
        name: "절댓값을 포함한 일차부등식",
        text: "절댓값을 포함한 일차부등식을 풀 수 있다.",
        tip: "|x - a| < c 또는 |x - a| > c 형태의 기본 절댓값 부등식"
      },
      {
        code: "10공수1-02-11",
        name: "이차부등식",
        text: "이차부등식과 이차함수를 연결하여 그 관계를 설명하고, 이차부등식과 연립이차부등식을 풀 수 있다.",
        tip: "인수분해를 이용한 이차부등식의 해 구하기 (x - α)(x - β) < 0"
      }
    ],
    "경우의 수": [
      {
        code: "10공수1-03-01",
        name: "합의 법칙과 곱의 법칙",
        text: "합의 법칙과 곱의 법칙을 이해하고, 적절한 전략을 사용하여 경우의 수와 관련된 문제를 해결할 수 있다.",
        tip: "동시에 일어나지 않는 경우(합), 잇달아 일어나는 경우(곱) 구분 및 계산"
      },
      {
        code: "10공수1-03-02",
        name: "순열 (nPr)",
        text: "순열의 개념을 이해하고, 순열의 수를 구하는 방법을 설명할 수 있다.",
        tip: "nPr 공식 및 팩토리얼(n!)을 활용한 한 줄 세우기, 기본 경우의 수 계산"
      },
      {
        code: "10공수1-03-03",
        name: "조합 (nCr)",
        text: "조합의 개념을 이해하고, 조합의 수를 구하는 방법을 설명할 수 있다.",
        tip: "순서 없이 n개 중 r개를 택하는 nCr 기본 계산 및 실생활 선택 문제"
      }
    ],
    "행렬": [
      {
        code: "10공수1-04-01",
        name: "행렬의 뜻과 표현",
        text: "행렬의 뜻을 알고, 실생활 상황을 행렬로 표현할 수 있다.",
        tip: "행과 열의 개념, m x n 행렬 성분 읽기, 표 자료를 행렬로 표현하기"
      },
      {
        code: "10공수1-04-02",
        name: "행렬의 덧셈, 뺄셈, 실수배, 곱셈",
        text: "행렬의 연산을 수행하고, 관련된 문제를 해결할 수 있다.",
        tip: "2x2 행렬의 덧셈, 뺄셈, 실수배 및 2차 이하의 행렬 곱셈 계산"
      }
    ]
  },
  "공통수학2": {
    "도형의 방정식": [
      {
        code: "10공수2-01-01",
        name: "선분의 내분점",
        text: "선분의 내분을 이해하고, 내분점의 좌표를 계산할 수 있다.",
        tip: "수직선 및 좌표평면에서 두 점을 m:n으로 내분하는 점의 좌표 계산"
      },
      {
        code: "10공수2-01-02",
        name: "두 직선의 평행과 수직 조건",
        text: "두 직선의 평행 조건과 수직 조건을 탐구하고 이해한다.",
        tip: "기울기가 같음(평행), 기울기의 곱이 -1(수직)을 이용한 미지수 구하기"
      },
      {
        code: "10공수2-01-03",
        name: "점과 직선 사이의 거리",
        text: "점과 직선 사이의 거리를 구하고, 관련된 문제를 해결할 수 있다.",
        tip: "점 (x₁, y₁)과 직선 ax + by + c = 0 사이의 거리 공식 기본 계산"
      },
      {
        code: "10공수2-01-04",
        name: "원의 방정식",
        text: "원의 방정식을 구하고, 그래프를 그릴 수 있다.",
        tip: "중심 (a, b)와 반지름 r인 원의 기본형 (x-a)² + (y-b)² = r² 및 중심, 반지름 구하기"
      },
      {
        code: "10공수2-01-05",
        name: "원과 직선의 위치 관계",
        text: "좌표평면에서 원과 직선의 위치 관계를 판단하고, 이를 활용하여 문제를 해결할 수 있다.",
        tip: "원의 중심과 직선 사이의 거리 d와 반지름 r 비교 (d < r, d = r, d > r)"
      },
      {
        code: "10공수2-01-06",
        name: "평행이동",
        text: "평행이동을 탐구하고, 실생활과 연결하여 문제를 해결할 수 있다.",
        tip: "점의 평행이동 (x+a, y+b) 및 도형의 평행이동 f(x-a, y-b) = 0"
      },
      {
        code: "10공수2-01-07",
        name: "대칭이동",
        text: "원점, x축, y축, 직선 y=x에 대한 대칭이동을 탐구하고, 실생활과 연결하여 문제를 해결할 수 있다.",
        tip: "x축 대칭(y부호 반대), y축 대칭(x부호 반대), 원점 대칭, y=x 대칭(x와 y 교환)"
      }
    ],
    "집합과 명제": [
      {
        code: "10공수2-02-01",
        name: "집합의 개념과 표현",
        text: "집합의 개념을 이해하고, 집합을 표현할 수 있다.",
        tip: "원소나열법, 조건제시법, 원소 기호(∈, ∉), 유한집합과 무한집합"
      },
      {
        code: "10공수2-02-02",
        name: "부분집합과 포함관계",
        text: "두 집합 사이의 포함관계를 판단할 수 있다.",
        tip: "부분집합(⊂), 서로 같다(=), 진부분집합, 공집합(∅)의 성질"
      },
      {
        code: "10공수2-02-03",
        name: "집합의 연산",
        text: "집합의 연산을 수행하고, 벤 다이어그램을 이용하여 나타낼 수 있다.",
        tip: "합집합(∪), 교집합(∩), 여집합(A^c), 차집합(A-B) 기본 연산"
      },
      {
        code: "10공수2-02-04",
        name: "명제와 조건 ('모든', '어떤')",
        text: "명제와 조건의 뜻을 알고, ‘모든’, ‘어떤’을 포함한 명제를 이해하고 설명할 수 있다.",
        tip: "명제의 참·거짓 판별, 조건의 진리집합, '모든'과 '어떤'이 포함된 명제 판별"
      },
      {
        code: "10공수2-02-05",
        name: "명제의 역과 대우",
        text: "명제의 역과 대우를 이해하고 설명할 수 있다.",
        tip: "p → q의 역(q → p)과 대우(~q → ~p) 구하기 및 참·거짓 관계"
      },
      {
        code: "10공수2-02-06",
        name: "충분조건과 필요조건",
        text: "충분조건과 필요조건을 이해하고 판단할 수 있다.",
        tip: "p ⇒ q일 때 p는 q이기 위한 충분조건, q는 p이기 위한 필요조건"
      },
      {
        code: "10공수2-02-07",
        name: "명제의 증명 (대우법과 귀류법)",
        text: "대우를 이용한 증명법과 귀류법을 이해하고 관련된 명제를 증명할 수 있다.",
        tip: "대우를 이용한 간단한 증명 구조, 결론을 부정하여 모순을 이끌어내는 귀류법 원리"
      },
      {
        code: "10공수2-02-08",
        name: "절대부등식",
        text: "절대부등식의 뜻을 알고, 간단한 절대부등식을 증명할 수 있다.",
        tip: "실수의 제곱 성질(a² ≥ 0), 기본 산술·기하 평균 부등식의 간단한 적용"
      }
    ],
    "함수와 그래프": [
      {
        code: "10공수2-03-01",
        name: "함수의 뜻과 그래프",
        text: "함수의 개념을 설명하고, 그 그래프를 이해한다.",
        tip: "정의역, 공역, 치역 구하기, 일대일대응, 항등함수, 상수함수 구별"
      },
      {
        code: "10공수2-03-02",
        name: "합성함수",
        text: "함수의 합성을 설명하고, 합성함수를 구할 수 있다.",
        tip: "(g ∘ f)(x) = g(f(x)) 기본 함숫값 계산 및 식 구하기"
      },
      {
        code: "10공수2-03-03",
        name: "역함수",
        text: "역함수의 개념을 설명하고, 역함수를 구할 수 있다.",
        tip: "일차함수의 역함수 f⁻¹(x) 구하기, f⁻¹(b) = a ⇔ f(a) = b 계산"
      },
      {
        code: "10공수2-03-04",
        name: "유리함수",
        text: "유리함수 y=(ax+b)/(cx+d)의 그래프를 그릴 수 있고, 그 그래프의 성질을 탐구할 수 있다.",
        tip: "점근선 구하기, 정의역과 치역, 평행이동된 기본 유리함수 성질"
      },
      {
        code: "10공수2-03-05",
        name: "무리함수",
        text: "무리함수 y=√(ax+b)+c의 그래프를 그릴 수 있고, 그 그래프의 성질을 탐구할 수 있다.",
        tip: "시작점 좌표, 정의역과 치역(근호 안이 0 이상), 기본 무리함수 성질"
      }
    ]
  }
};

// =============================================================================
// 2. DOM 요소 참조
// =============================================================================
const subjectSelect = document.getElementById('subjectSelect');
const domainSelect = document.getElementById('domainSelect');
const standardSelect = document.getElementById('standardSelect');
const standardDetail = document.getElementById('standardDetail');

const questionCountInput = document.getElementById('questionCountInput');
const quickCountBtns = document.querySelectorAll('.quick-btns .btn-chip');
const paperTitleInput = document.getElementById('paperTitleInput');
const generateBtn = document.getElementById('generateBtn');

const openApiModalBtn = document.getElementById('openApiModalBtn');
const closeApiModalBtn = document.getElementById('closeApiModalBtn');
const apiModal = document.getElementById('apiModal');
const apiKeyInput = document.getElementById('apiKeyInput');
const saveApiKeyBtn = document.getElementById('saveApiKeyBtn');
const deleteApiKeyBtn = document.getElementById('deleteApiKeyBtn');
const toggleApiKeyVisBtn = document.getElementById('toggleApiKeyVisBtn');
const apiKeyBadge = document.getElementById('apiKeyBadge');

// 관리자 인증 모달 요소
const authModal = document.getElementById('authModal');
const adminPasswordInput = document.getElementById('adminPasswordInput');
const authErrorMsg = document.getElementById('authErrorMsg');
const submitAuthBtn = document.getElementById('submitAuthBtn');
const cancelAuthBtn = document.getElementById('cancelAuthBtn');
const closeAuthModalBtn = document.getElementById('closeAuthModalBtn');

const ADMIN_PASSWORD = '0325'; // 관리자 암호 (API 키 보호용)

const previewActions = document.getElementById('previewActions');
const loadingBox = document.getElementById('loadingBox');
const loadingStatusText = document.getElementById('loadingStatusText');
const loadingSubText = document.getElementById('loadingSubText');
const emptyNotice = document.getElementById('emptyNotice');
const paperPreviewWrapper = document.getElementById('paperPreviewWrapper');
const printableDocument = document.getElementById('printableDocument');

const viewAllBtn = document.getElementById('viewAllBtn');
const viewQuestionsBtn = document.getElementById('viewQuestionsBtn');
const viewAnswersBtn = document.getElementById('viewAnswersBtn');
const printBtn = document.getElementById('printBtn');

// =============================================================================
// 3. API 키 관리 & 관리자 암호(0325) 인증 로직
// =============================================================================
const STORAGE_KEY = 'openai_api_key_for_math';

function getStoredApiKey() {
  return localStorage.getItem(STORAGE_KEY) || '';
}

function updateApiKeyUI() {
  const key = getStoredApiKey();
  if (key && key.trim().startsWith('sk-')) {
    apiKeyBadge.textContent = '설정됨';
    apiKeyBadge.className = 'status-indicator configured';
  } else {
    apiKeyBadge.textContent = '미설정';
    apiKeyBadge.className = 'status-indicator';
  }
}

// [API 키 설정] 버튼 클릭 시 -> 먼저 관리자 암호(0325) 확인 창 표시
openApiModalBtn.addEventListener('click', () => {
  adminPasswordInput.value = '';
  authErrorMsg.style.display = 'none';
  authModal.style.display = 'flex';
  setTimeout(() => adminPasswordInput.focus(), 50);
});

// 관리자 암호 인증 폼 제출 처리
function handleAuthSubmit() {
  const enteredPass = adminPasswordInput.value.trim();
  if (enteredPass === ADMIN_PASSWORD) {
    // 암호 일치 -> 인증 모달 닫고 API 키 설정 모달 열기
    authModal.style.display = 'none';
    authErrorMsg.style.display = 'none';
    adminPasswordInput.value = '';
    
    // API 키 모달 초기화 및 열기
    apiKeyInput.value = getStoredApiKey();
    apiKeyInput.type = 'password';
    toggleApiKeyVisBtn.textContent = '보기';
    apiModal.style.display = 'flex';
    setTimeout(() => apiKeyInput.focus(), 50);
  } else {
    // 암호 불일치
    authErrorMsg.textContent = '❌ 암호가 올바르지 않습니다. 다시 입력해 주세요.';
    authErrorMsg.style.display = 'block';
    adminPasswordInput.select();
  }
}

submitAuthBtn.addEventListener('click', handleAuthSubmit);

adminPasswordInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    handleAuthSubmit();
  }
});

function closeAuthModal() {
  authModal.style.display = 'none';
  adminPasswordInput.value = '';
  authErrorMsg.style.display = 'none';
}

cancelAuthBtn.addEventListener('click', closeAuthModal);
closeAuthModalBtn.addEventListener('click', closeAuthModal);
authModal.addEventListener('click', (e) => {
  if (e.target === authModal) closeAuthModal();
});

closeApiModalBtn.addEventListener('click', () => {
  apiModal.style.display = 'none';
});

apiModal.addEventListener('click', (e) => {
  if (e.target === apiModal) {
    apiModal.style.display = 'none';
  }
});

toggleApiKeyVisBtn.addEventListener('click', () => {
  if (apiKeyInput.type === 'password') {
    apiKeyInput.type = 'text';
    toggleApiKeyVisBtn.textContent = '숨기기';
  } else {
    apiKeyInput.type = 'password';
    toggleApiKeyVisBtn.textContent = '보기';
  }
});

saveApiKeyBtn.addEventListener('click', () => {
  const val = apiKeyInput.value.trim();
  if (!val) {
    alert('API Key를 입력해 주세요.');
    return;
  }
  localStorage.setItem(STORAGE_KEY, val);
  updateApiKeyUI();
  apiModal.style.display = 'none';
  alert('API Key가 안전하게 저장되었습니다.');
});

deleteApiKeyBtn.addEventListener('click', () => {
  if (confirm('저장된 API Key를 삭제하시겠습니까?')) {
    localStorage.removeItem(STORAGE_KEY);
    apiKeyInput.value = '';
    updateApiKeyUI();
    apiModal.style.display = 'none';
  }
});

// =============================================================================
// 4. 과목 → 영역 → 성취기준 3단계 드롭다운 연동 로직
// =============================================================================
function populateDomains() {
  const selectedSubject = subjectSelect.value;
  domainSelect.innerHTML = '';
  
  if (!selectedSubject || !CURRICULUM_DATA[selectedSubject]) {
    domainSelect.innerHTML = '<option value="">-- 과목을 먼저 선택하세요 --</option>';
    standardSelect.innerHTML = '<option value="">-- 영역을 먼저 선택하세요 --</option>';
    standardDetail.classList.remove('show');
    return;
  }

  const domains = Object.keys(CURRICULUM_DATA[selectedSubject]);
  domains.forEach(domain => {
    const opt = document.createElement('option');
    opt.value = domain;
    opt.textContent = domain;
    domainSelect.appendChild(opt);
  });

  populateStandards();
}

function populateStandards() {
  const selectedSubject = subjectSelect.value;
  const selectedDomain = domainSelect.value;
  standardSelect.innerHTML = '';

  if (!selectedSubject || !selectedDomain || !CURRICULUM_DATA[selectedSubject][selectedDomain]) {
    standardSelect.innerHTML = '<option value="">-- 영역을 먼저 선택하세요 --</option>';
    standardDetail.classList.remove('show');
    return;
  }

  const standards = CURRICULUM_DATA[selectedSubject][selectedDomain];
  standards.forEach((item, index) => {
    const opt = document.createElement('option');
    opt.value = item.code;
    opt.textContent = `[${item.code}] ${item.name}`;
    opt.dataset.index = index;
    standardSelect.appendChild(opt);
  });

  updateStandardDetail();
}

function updateStandardDetail() {
  const selectedSubject = subjectSelect.value;
  const selectedDomain = domainSelect.value;
  const selectedCode = standardSelect.value;

  if (!selectedSubject || !selectedDomain || !selectedCode) {
    standardDetail.classList.remove('show');
    return;
  }

  const standards = CURRICULUM_DATA[selectedSubject][selectedDomain];
  const item = standards.find(s => s.code === selectedCode);
  if (item) {
    standardDetail.innerHTML = `
      <strong>📜 성취기준 내용:</strong> ${item.text}<br>
      <span style="color:#2563eb;">💡 핵심 학습 포인트:</span> ${item.tip}
    `;
    standardDetail.classList.add('show');
  } else {
    standardDetail.classList.remove('show');
  }
}

subjectSelect.addEventListener('change', populateDomains);
domainSelect.addEventListener('change', populateStandards);
standardSelect.addEventListener('change', updateStandardDetail);

// =============================================================================
// 5. 문항 수 퀵 버튼 & 직접 입력 동기화
// =============================================================================
quickCountBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    quickCountBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    questionCountInput.value = btn.dataset.count;
  });
});

questionCountInput.addEventListener('input', () => {
  let val = parseInt(questionCountInput.value, 10);
  if (isNaN(val) || val < 1) val = 1;
  if (val > 30) val = 30; // 상한선 안전장치
  
  // 퀵 버튼 active 상태 맞춤
  quickCountBtns.forEach(btn => {
    if (parseInt(btn.dataset.count, 10) === val) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
});

// =============================================================================
// 6. 고차식 거듭제곱 ^ 기호 제거(유니코드 위첨자 변환) & 수식 검증(KaTeX) 엔진
// =============================================================================

// 유니코드 위첨자 변환 매핑표
const SUPERSCRIPT_MAP = {
  '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴',
  '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹',
  '+': '⁺', '-': '⁻', '=': '⁼', '(': '⁽', ')': '⁾',
  'n': 'ⁿ', 'k': 'ᵏ', 'm': 'ᵐ', 'x': 'ˣ', 'y': 'ʸ'
};

/**
 * 텍스트 내의 모든 고차식/거듭제곱 ^ 기호를 유니코드 위첨자로 변환
 * 예: x^2 -> x², X^3 -> X³, x^{2} -> x², (x+1)^2 -> (x+1)²
 */
function convertCaretToSuperscript(text) {
  if (!text || typeof text !== 'string') return text;

  // 1. 중괄호 형태 거듭제곱: ^{2}, ^{3}, ^{10}, ^{(x+1)} 등 변환
  let result = text.replace(/\^\{([0-9nkmxy+\-]+)\}/g, (match, p1) => {
    return p1.split('').map(char => SUPERSCRIPT_MAP[char] || char).join('');
  });

  // 2. 단일 문자 거듭제곱: ^2, ^3, ^4 등 변환 (x^2, X^3, y^2, (x+1)^2 등)
  result = result.replace(/\^([0-9nkmxy+\-])/g, (match, p1) => {
    return SUPERSCRIPT_MAP[p1] || match;
  });

  return result;
}

/**
 * AI가 생성한 문항 데이터 내의 모든 ^ 기호를 유니코드 위첨자로 전처리 정규화
 */
function normalizeQuestionsData(data) {
  if (!data || !Array.isArray(data.questions)) return data;

  data.questions.forEach(q => {
    if (q.question) q.question = convertCaretToSuperscript(q.question);
    if (Array.isArray(q.choices)) {
      q.choices = q.choices.map(c => convertCaretToSuperscript(c));
    }
    if (q.answer) q.answer = convertCaretToSuperscript(q.answer);
    if (q.solution) q.solution = convertCaretToSuperscript(q.solution);
  });

  return data;
}

/**
 * KaTeX 라이브러리가 브라우저에 로드되었는지 확인
 */
function ensureKatexLoaded(timeoutMs = 4000) {
  return new Promise((resolve) => {
    if (window.katex && typeof window.katex.renderToString === 'function') {
      return resolve(true);
    }
    const startTime = Date.now();
    const interval = setInterval(() => {
      if (window.katex && typeof window.katex.renderToString === 'function') {
        clearInterval(interval);
        resolve(true);
      } else if (Date.now() - startTime > timeoutMs) {
        clearInterval(interval);
        console.warn('KaTeX 라이브러리 로드 대기 시간 초과');
        resolve(false);
      }
    }, 100);
  });
}

/**
 * 텍스트 내의 모든 수식이 올바른 LaTeX/KaTeX 문법인지 검증
 */
function validateMathInText(text, contextName) {
  if (!text || typeof text !== 'string') return { isValid: true };

  // ^ 기호가 남아있다면 유니코드 위첨자로 사전 변환
  const normalizedText = convertCaretToSuperscript(text);

  // 1. 달러 기호($) 개수 확인: 홀수 개수이면 닫히지 않은 수식 기호
  // \$ 로 이스케이프된 경우 제외
  const nonEscapedDollars = normalizedText.replace(/\\\$/g, '').match(/\$/g);
  if (nonEscapedDollars && nonEscapedDollars.length % 2 !== 0) {
    return {
      isValid: false,
      error: `수식 닫는 기호($)가 누락되었습니다 (달러 기호 개수 불일치: ${nonEscapedDollars.length}개)`,
      context: contextName
    };
  }

  // 2. KaTeX 엔진을 통한 수식 파싱 검사
  if (!window.katex || typeof window.katex.renderToString !== 'function') {
    return { isValid: true }; // KaTeX 로드 불가 시 통과
  }

  // 수식 패턴 추출 ($$...$$, \[...\], $...$, \(...\))
  const mathRegex = /(\$\$[\s\S]*?\$\$|\\\[[\s\S]*?\\\]|\$[^\$\n]+?\$|\\\([\s\S]*?\\\))/g;
  let match;

  while ((match = mathRegex.exec(normalizedText)) !== null) {
    const rawMatch = match[0];
    let expression = '';
    let displayMode = false;

    if (rawMatch.startsWith('$$') && rawMatch.endsWith('$$')) {
      expression = rawMatch.slice(2, -2).trim();
      displayMode = true;
    } else if (rawMatch.startsWith('\\[') && rawMatch.endsWith('\\]')) {
      expression = rawMatch.slice(2, -2).trim();
      displayMode = true;
    } else if (rawMatch.startsWith('$') && rawMatch.endsWith('$')) {
      expression = rawMatch.slice(1, -1).trim();
      displayMode = false;
    } else if (rawMatch.startsWith('\\(') && rawMatch.endsWith('\\)')) {
      expression = rawMatch.slice(2, -2).trim();
      displayMode = false;
    }

    if (!expression) continue;

    // 중괄호 { } 짝 검사
    const openBraces = (expression.match(/\{/g) || []).length;
    const closeBraces = (expression.match(/\}/g) || []).length;
    if (openBraces !== closeBraces) {
      return {
        isValid: false,
        error: `수식 내 중괄호({}) 짝이 맞지 않습니다 (여는 괄호: ${openBraces}, 닫는 괄호: ${closeBraces})`,
        expression: rawMatch,
        context: contextName
      };
    }

    // KaTeX 파싱 검증 (strict: false 로 유니코드 위첨자 안정 파싱)
    try {
      window.katex.renderToString(expression, {
        displayMode: displayMode,
        throwOnError: true,
        strict: false
      });
    } catch (err) {
      return {
        isValid: false,
        error: `수식 문법 오류: ${err.message}`,
        expression: rawMatch,
        context: contextName
      };
    }
  }

  return { isValid: true };
}

/**
 * AI가 생성한 전체 문항 데이터의 수식 유효성 종합 검사
 */
function validateQuestionsData(data) {
  if (!data || !Array.isArray(data.questions) || data.questions.length === 0) {
    return {
      isValid: false,
      error: '문제 데이터가 비어있거나 올바른 배열 구조가 아닙니다.'
    };
  }

  for (let i = 0; i < data.questions.length; i++) {
    const q = data.questions[i];
    const qNum = q.number || (i + 1);

    // 문제 본문 검증
    const qVal = validateMathInText(q.question, `${qNum}번 문제`);
    if (!qVal.isValid) return qVal;

    // 객관식 선택지 검증
    if (Array.isArray(q.choices)) {
      for (let j = 0; j < q.choices.length; j++) {
        const cVal = validateMathInText(q.choices[j], `${qNum}번 보기 ${j + 1}`);
        if (!cVal.isValid) return cVal;
      }
    }

    // 정답 검증
    const ansVal = validateMathInText(q.answer, `${qNum}번 정답`);
    if (!ansVal.isValid) return ansVal;

    // 풀이 해설 검증
    const solVal = validateMathInText(q.solution, `${qNum}번 해설`);
    if (!solVal.isValid) return solVal;
  }

  return { isValid: true };
}

// =============================================================================
// 7. 문제 생성 AI 호출 및 수식 오류 시 자동 재생성(Retry) 로직
// =============================================================================
generateBtn.addEventListener('click', async () => {
  const apiKey = getStoredApiKey();
  if (!apiKey) {
    alert('OpenAI API Key가 설정되지 않았습니다. 우측 상단의 [API 키 설정] 버튼을 눌러 키를 등록해 주세요.');
    openApiModalBtn.click();
    return;
  }

  const subject = subjectSelect.value;
  const domain = domainSelect.value;
  const standardCode = standardSelect.value;

  if (!subject || !domain || !standardCode) {
    alert('과목, 영역, 성취기준을 모두 선택해 주세요.');
    return;
  }

  const standards = CURRICULUM_DATA[subject][domain];
  const targetStandard = standards.find(s => s.code === standardCode);

  const difficultyRadio = document.querySelector('input[name="difficulty"]:checked');
  const difficulty = difficultyRadio ? difficultyRadio.value : '하';

  let count = parseInt(questionCountInput.value, 10);
  if (isNaN(count) || count < 1) count = 5;

  const customTitle = paperTitleInput.value.trim() || `${subject} [${domain}] 기초 연습문제`;

  // UI 로딩 상태 시작
  setLoading(true);

  try {
    // 수식 오류 자동 재생성(최대 3회) 엔진 호출
    const questionsData = await generateQuestionsWithRetry({
      apiKey,
      subject,
      domain,
      standard: targetStandard,
      difficulty,
      count
    });

    renderExamPaper({
      title: customTitle,
      subject,
      domain,
      standard: targetStandard,
      difficulty,
      count,
      questions: questionsData.questions
    });

    emptyNotice.style.display = 'none';
    paperPreviewWrapper.style.display = 'flex';
    previewActions.style.display = 'flex';

    // 수식 렌더링 실행
    renderKaTeX();

  } catch (error) {
    console.error('문제 생성 오류:', error);
    alert(`문제 생성 중 오류가 발생했습니다:\n${error.message}`);
  } finally {
    setLoading(false);
  }
});

function setLoading(isLoading) {
  if (isLoading) {
    generateBtn.disabled = true;
    generateBtn.querySelector('.btn-text').textContent = '문제를 생성하는 중...';
    generateBtn.querySelector('.btn-spinner').style.display = 'inline-block';
    loadingBox.style.display = 'block';
    emptyNotice.style.display = 'none';
    paperPreviewWrapper.style.display = 'none';
    previewActions.style.display = 'none';
  } else {
    generateBtn.disabled = false;
    generateBtn.querySelector('.btn-text').textContent = '✨ 연습문제 생성하기 (gpt-4o-mini)';
    generateBtn.querySelector('.btn-spinner').style.display = 'none';
    loadingBox.style.display = 'none';
  }
}

/**
 * 수식 검증 실패 시 자동으로 최대 3회까지 재시도하는 래퍼 함수
 */
async function generateQuestionsWithRetry({ apiKey, subject, domain, standard, difficulty, count }) {
  await ensureKatexLoaded();

  const MAX_RETRIES = 3;
  let attempt = 0;
  let previousError = null;

  while (attempt < MAX_RETRIES) {
    attempt++;

    if (attempt > 1) {
      loadingStatusText.textContent = `수식 오류가 감지되어 문제를 자동으로 다시 생성하고 있습니다... (${attempt}/${MAX_RETRIES})`;
      if (loadingSubText) {
        loadingSubText.textContent = `이전 오류: ${previousError ? previousError.error : '수식 문법 오류'}. 수식을 더욱 정확하게 보정하여 생성 중입니다.`;
      }
    } else {
      loadingStatusText.textContent = 'AI가 맞춤형 문제를 생성하고 있습니다...';
      if (loadingSubText) {
        loadingSubText.textContent = '성취기준을 분석하여 최적의 연습문제를 제작 중입니다. 잠시만 기다려 주세요.';
      }
    }

    try {
      const data = await requestQuestionsFromOpenAI({
        apiKey,
        subject,
        domain,
        standard,
        difficulty,
        count,
        errorFeedback: previousError
      });

      // 생성된 문제 수식 유효성 종합 검사
      const validation = validateQuestionsData(data);
      if (validation.isValid) {
        return data; // 수식 검증 통과!
      }

      console.warn(`[수식 검증 실패 - 자동 재생성 진행 (${attempt}/${MAX_RETRIES})]`, validation);
      previousError = validation;
    } catch (err) {
      console.warn(`[API 호출 또는 파싱 오류 (${attempt}/${MAX_RETRIES})]:`, err);
      previousError = { error: err.message };
      if (attempt >= MAX_RETRIES) throw err;
    }
  }

  throw new Error(`수식 오류가 반복 감지되어 ${MAX_RETRIES}회 재시도하였으나 정상 생성되지 못했습니다.\n(원인: ${previousError?.error || '알 수 없는 오류'})\n다시 [연습문제 생성하기] 버튼을 눌러주세요.`);
}

// =============================================================================
// 8. OpenAI fetch 로직 (gpt-4o-mini 강제 및 정밀 수식 프롬프트)
// =============================================================================
async function requestQuestionsFromOpenAI({ apiKey, subject, domain, standard, difficulty, count, errorFeedback }) {
  // 난이도별 세부 지침
  let diffInstruction = "";
  if (difficulty === "하") {
    diffInstruction = `
[난이도: 하 (계산 위주)]
- 대상: 수학 기초가 많이 부족한 학생
- 특징: 긴 문장제나 복잡한 사고 과정을 요구하지 마십시오.
- 문항 형태: 1~2줄 내외의 매우 간결한 문제. 기본 공식에 숫자를 직접 대입하거나, 단순 연산 원리를 묻는 계산 위주로 출제하십시오.
- 예: 다항식의 덧셈/뺄셈 전개, 근의 공식 단순 대입, 복소수 덧셈, 2x2 행렬 덧셈 등.`;
  } else if (difficulty === "중") {
    diffInstruction = `
[난이도: 중 (기본 개념)]
- 대상: 수학 기초를 다지는 학생
- 특징: 교과서 예제 및 기본 확인 문제 수준.
- 문항 형태: 1~2줄의 직관적인 발문. 하나의 핵심 개념 또는 공식을 정직하게 적용하여 해결할 수 있는 표준 문항으로 출제하십시오.`;
  } else { // 상
    diffInstruction = `
[난이도: 상 (교과서 수준 활용 문제)]
- 대상: 기본 개념을 실제 상황이나 도형, 수학적 맥락에 적용해보는 연습이 필요한 고등학생
- 핵심 목표: 반드시 '고등학교 공통수학 교과서 본문 예제 및 중단원 발전·활용 문제 수준'의 활용 문제를 출제하십시오.
- 출제 가이드라인:
  1. 수능/모의고사 4점 킬러 문제처럼 과도하게 복잡한 트릭이나 긴 계산을 요구하는 문제는 절대 출제하지 마십시오.
  2. 공통수학 교과서에 자주 수록되는 친숙하고 전형적인 활용 문항 형태를 따르십시오.
     - 실생활 활용: 일상생활(물건 가격/판매량, 속력/거리/시간, 스마트폰 요금제, 실생활 통계/행렬 자료, 경우의 수 실생활 선택 등) 맥락을 수학적 식으로 세워 해결하는 교과서 대표 활용 문제.
     - 도형 및 기하 연계: 직사각형의 둘레/넓이, 좌표평면 위의 도형, 원과 직선의 위치 관계 등 기하학적 상황과 식을 연계하는 문제.
     - 개념 적용 및 탐구: 교과서의 '생각 넓히기'나 '탐구 활동' 수준의, 개념을 한 단계 발전시켜 응용하는 문제.
  3. 문제 길이는 2~4줄 정도로 상황과 조건, 구하는 값이 명확하고 직관적으로 드러나도록 작성하십시오.
  4. 풀이 과정에서 복잡하고 지저분한 분수나 큰 수가 나오지 않고, 학생들이 성취감을 느낄 수 있는 깔끔한 정수나 간단한 유리수 답이 나오도록 수치를 섬세하게 설정하십시오.`;
  }

  // 이전 오류가 있을 시 피드백 전달
  let errorFeedbackText = "";
  if (errorFeedback) {
    errorFeedbackText = `
[🚨 매우 중요: 이전 생성 시도에서 수식 오류가 발생했습니다!]
- 감지된 오류: ${errorFeedback.error}
- 오류 발생 위치: ${errorFeedback.context || '문제 본문 또는 풀이'}
- 문제가 된 수식: ${errorFeedback.expression || '(확인 요망)'}
이번에는 모든 수식의 KaTeX 문법(달러 기호 $ 짝, 중괄호 {} 짝, 올바른 LaTeX 명령어)을 철저히 검증하여 오류 없는 완벽한 수식으로 작성해 주십시오.
`;
  }

  const systemPrompt = `당신은 대한민국 고등학교 수학 교사입니다.
고등학교 2022 개정 교육과정 공통수학(공통수학1, 공통수학2) 학습지를 제작합니다.

[🚨 수식 표기 필수 절대 규칙 - 엄격 준수]
1. ★고차식/거듭제곱 표기 시 캐럿(^) 기호 사용 절대 금지★:
   - x^2, x^3, X^2, X^3, ^{2}, ^{3} 등 ^ 기호를 일체 사용하지 마십시오!
   - 모든 다항식, 고차식, 거듭제곱의 지수는 반드시 유니코드 위첨자 문자(², ³, ⁴, ⁵, ⁿ 등)를 사용하여 표기하십시오.
   - 예시:
     * 금지 형태: x^2 - 4x + 3 = 0, $x^2 + 2x$, $X^3 - 1$, $(x+1)^2$, $x^{2}$ (절대 금지)
     * 올바른 형태: $x² - 4x + 3 = 0$, $x³ - 1 = 0$, $(x - 1)²$, $2x⁴ + 3x³ - x² + 5 = 0$
   - 문제 본문, 보기, 정답, 풀이 해설 등 모든 출력에서 거듭제곱은 x², x³, x⁴, a², b³ 형태로만 작성하십시오.
2. 모든 수학 공식, 변수, 기호는 KaTeX 호환 LaTeX 문법($...$)으로 감싸야 합니다.
   - 인라인 수식: $...$ (예: $x² + 2x + 1 = 0$, $a = 3$)
   - 블록 수식: $$...$$ (필요한 경우에만)
3. 수식의 여는 달러($)와 닫는 달러($)의 개수는 반드시 짝이 맞아야 합니다. 절대 $를 닫지 않고 문장을 끝내지 마십시오.
4. 중괄호 {}의 짝을 반드시 일치시키십시오. 예: \\frac{a}{b}, \\sqrt{x+2}
5. 한국어 문장이나 일반 설명은 절대로 $...$ 수식 기호 안에 넣지 말고 수식 바깥에 일반 텍스트로 적으십시오.
   - 잘못된 예: $\\text{점 A와 점 B 사이의 거리}$
   - 올바른 예: 점 $A$와 점 $B$ 사이의 거리
6. 곱셈 기호는 \\times 또는 \\cdot, 나눗셈 기호는 \\div, 제곱근은 \\sqrt{...}, 분수는 \\frac{분자}{분모}를 사용하십시오.
7. JSON 포맷으로 출력할 때 백슬래시(\\)가 유실되지 않도록 올바른 JSON 이스케이프(\\\\frac, \\\\sqrt 등)를 준수하십시오.

반드시 아래 JSON 포맷으로만 응답해야 합니다:
{
  "questions": [
    {
      "number": 1,
      "question": "문제 내용 (고차식은 x², x³ 등 유니코드 위첨자 사용, 수식은 $...$ 표기)",
      "choices": ["① ...", "② ...", "③ ...", "④ ...", "⑤ ..."] 또는 객관식이 아닐 경우 빈 배열 [],
      "answer": "정답 (예: 5 또는 x = 2)",
      "solution": "학생이 읽고 쉽게 이해할 수 있는 단계별 친절한 해설"
    }
  ]
}`;

  const userPrompt = `
- 과목: ${subject}
- 영역: ${domain}
- 성취기준: [${standard.code}] ${standard.text}
- 핵심 학습 요소: ${standard.tip}
- 난이도: ${difficulty}
- 문항 수: 총 ${count}문항

${diffInstruction}
${errorFeedbackText}

[중요 요청]
- 고차식 및 거듭제곱의 경우 x^2, X^3 등 ^ 기호를 절대 사용하지 말고, 반드시 x², x³, x⁴ 등 유니코드 위첨자 문자를 사용한 깔끔한 식으로 만들어 주세요.
- 학생이 자신감을 가질 수 있도록 숫자가 너무 더럽지 않고 계산 실수가 적게 나오는 깔끔한 정수/유리수 형태의 답으로 출제해 주세요.
- 수식 문법(KaTeX) 오류가 절대 없도록 각별히 확인하고, JSON 규격에 맞추어 총 ${count}문항을 생성해 주세요.
`;

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini', // 요구사항 준수
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt }
      ],
      response_format: { type: "json_object" },
      temperature: 0.6
    })
  });

  if (!response.ok) {
    let errDetail = "";
    try {
      const errJson = await response.json();
      errDetail = errJson.error ? errJson.error.message : response.statusText;
    } catch (e) {
      errDetail = response.statusText;
    }
    throw new Error(`OpenAI API 오류 (${response.status}): ${errDetail}`);
  }

  const data = await response.json();
  const content = data.choices[0].message.content;
  const parsed = JSON.parse(content);
  // 고차식 거듭제곱 ^ 기호를 유니코드 위첨자(x², x³ 등)로 일괄 전처리 정규화
  return normalizeQuestionsData(parsed);
}

// =============================================================================
// 8. 시험지 렌더링 및 KaTeX 수식 적용
// =============================================================================
function renderExamPaper({ title, subject, domain, standard, difficulty, count, questions }) {
  const currentDate = new Date();
  const dateStr = `${currentDate.getFullYear()}.${String(currentDate.getMonth() + 1).padStart(2, '0')}.${String(currentDate.getDate()).padStart(2, '0')}`;

  let questionsHtml = '';
  questions.forEach(q => {
    let choicesHtml = '';
    if (q.choices && q.choices.length > 0) {
      choicesHtml = `
        <div class="q-choices">
          ${q.choices.map(c => `<div>${escapeHtml(c)}</div>`).join('')}
        </div>
      `;
    }

    questionsHtml += `
      <div class="question-item">
        <div class="q-header">
          <span class="q-num">${q.number}.</span>
          <div class="q-content">${formatMathText(q.question)}</div>
        </div>
        ${choicesHtml}
        <div class="q-workspace">
          <span class="q-answer-box">[ 정답: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ]</span>
        </div>
      </div>
    `;
  });

  let answersHtml = '';
  questions.forEach(q => {
    answersHtml += `
      <div class="answer-item">
        <div class="ans-title">${q.number}번 정답: <strong>${formatMathText(q.answer)}</strong></div>
        <div class="ans-solution"><strong>[풀이]</strong> ${formatMathText(q.solution)}</div>
      </div>
    `;
  });

  printableDocument.innerHTML = `
    <!-- [SECTION 1] 문제지 본문 -->
    <section class="exam-sheet-section" id="examSheetSection">
      <header class="exam-header">
        <div class="exam-meta-bar">
          <span>${subject} 기초 학습지</span>
          <span>출제일: ${dateStr}</span>
        </div>
        <div class="exam-title-row">
          <h1 class="exam-main-title">${escapeHtml(title)}</h1>
          <table class="student-info-table">
            <tr>
              <td class="info-label">학년</td>
              <td class="info-value"></td>
              <td class="info-label">반</td>
              <td class="info-value"></td>
              <td class="info-label">번호</td>
              <td class="info-value"></td>
              <td class="info-label">이름</td>
              <td class="info-value" style="width:75px;"></td>
            </tr>
          </table>
        </div>
        <div class="exam-subtitle-row">
          <span class="exam-tag">영역: ${escapeHtml(domain)}</span>
          <span class="exam-tag">성취기준: ${escapeHtml(standard.code)}</span>
          <span class="exam-tag">난이도: ${escapeHtml(difficulty)}</span>
          <span class="exam-tag">문항 수: ${count}문항</span>
        </div>
      </header>

      <div class="questions-columns">
        ${questionsHtml}
      </div>
    </section>

    <!-- [SECTION 2] 정답 및 해설지 (A4 분리 인쇄 지원) -->
    <section class="answer-sheet-section page-break" id="answerSheetSection">
      <header class="answer-header">
        <h2>📋 정답 및 친절한 풀이 해설</h2>
        <div class="exam-subtitle-row" style="margin-top:4px;">
          <span>${escapeHtml(title)} | 성취기준: ${escapeHtml(standard.code)}</span>
        </div>
      </header>
      <div class="answer-list">
        ${answersHtml}
      </div>
    </section>
  `;
}

function escapeHtml(text) {
  if (!text) return '';
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function formatMathText(text) {
  if (!text) return '';
  // 혹시라도 남아있는 ^ 기호를 유니코드 위첨자(x², x³ 등)로 변환
  const cleanText = convertCaretToSuperscript(text);
  // 줄바꿈 보존
  return cleanText.replace(/\n/g, '<br>');
}

function renderKaTeX() {
  if (typeof renderMathInElement === 'function') {
    renderMathInElement(printableDocument, {
      delimiters: [
        { left: '$$', right: '$$', display: true },
        { left: '$', right: '$', display: false },
        { left: '\\(', right: '\\)', display: false },
        { left: '\\[', right: '\\]', display: true }
      ],
      throwOnError: false,
      strict: false
    });
  } else {
    // KaTeX 로드가 약간 지연될 경우 재시도
    setTimeout(renderKaTeX, 300);
  }
}

// =============================================================================
// 9. 뷰 모드 전환 및 인쇄 기능
// =============================================================================
viewAllBtn.addEventListener('click', () => {
  setActiveViewBtn(viewAllBtn);
  document.getElementById('examSheetSection').style.display = 'block';
  document.getElementById('answerSheetSection').style.display = 'block';
});

viewQuestionsBtn.addEventListener('click', () => {
  setActiveViewBtn(viewQuestionsBtn);
  document.getElementById('examSheetSection').style.display = 'block';
  document.getElementById('answerSheetSection').style.display = 'none';
});

viewAnswersBtn.addEventListener('click', () => {
  setActiveViewBtn(viewAnswersBtn);
  document.getElementById('examSheetSection').style.display = 'none';
  document.getElementById('answerSheetSection').style.display = 'block';
});

function setActiveViewBtn(targetBtn) {
  [viewAllBtn, viewQuestionsBtn, viewAnswersBtn].forEach(btn => btn.classList.remove('active'));
  targetBtn.classList.add('active');
}

printBtn.addEventListener('click', () => {
  // 인쇄 전 수식 렌더링 최종 확인 후 인쇄 창 팝업
  renderKaTeX();
  window.print();
});

// =============================================================================
// 10. 초기화
// =============================================================================
document.addEventListener('DOMContentLoaded', () => {
  updateApiKeyUI();
  populateDomains();
});
