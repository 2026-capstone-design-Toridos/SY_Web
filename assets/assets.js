import gs_logo from "./gs_logo.jpg"
import happy_store from "./happy_store.webp"
import upload_area from "./upload_area.svg"
import hero_model_img from "./hero_model_img.png"
import hero_product_img1 from "./hero_product_img1.png"
import hero_product_img2 from "./hero_product_img2.png"
import product_img1 from "./product_img1.png"
import product_img2 from "./product_img2.png"
import product_img3 from "./product_img3.png"
import product_img4 from "./product_img4.png"
import product_img5 from "./product_img5.png"
import product_img6 from "./product_img6.png"
import product_img7 from "./product_img7.png"
import product_img8 from "./product_img8.png"
import product_img9 from "./product_img9.png"
import product_img10 from "./product_img10.png"
import product_img11 from "./product_img11.png"
import product_img12 from "./product_img12.png"
import product_img13 from "./product_img12.png"
import product_img14 from "./product_img12.png"
import product_img15 from "./product_img12.png"
import product_img16 from "./product_img12.png"
import product_img17 from "./product_img12.png"
import product_img18 from "./product_img12.png"
import product_img19 from "./product_img12.png"
import product_img20 from "./product_img12.png"
import product_img21 from "./product_img12.png"
import product_img22 from "./product_img12.png"
import product_img23 from "./product_img12.png"
import product_img24 from "./product_img12.png"
import product_img25 from "./product_img12.png"

import { ClockFadingIcon, HeadsetIcon, SendIcon } from "lucide-react";
import profile_pic1 from "./profile_pic1.jpg"
import profile_pic2 from "./profile_pic2.jpg"
import profile_pic3 from "./profile_pic3.jpg"

export const assets = {
    upload_area, hero_model_img,
    hero_product_img1, hero_product_img2, gs_logo,
    product_img1, product_img2, product_img3, product_img4, product_img5, product_img6,
    product_img7, product_img8, product_img9, product_img10, product_img11, product_img12,
}

export const categories = ["LIP", "FACE", "EYE", "TOOL", "SET", "MINI"];

export const dummyRatingsData = [
    { id: "rat_1", rating: 4.2, review: "I was a bit skeptical at first, but this product turned out to be even better than I imagined. The quality feels premium, it's easy to use, and it delivers exactly what was promised. I've already recommended it to friends and will definitely purchase again in the future.", user: { name: 'Kristin Watson', image: profile_pic1 }, productId: "prod_1", createdAt: 'Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)', updatedAt: 'Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)', product: { name: 'Bluetooth Speakers', category:'Electronics', id:'prod_1'} },
    { id: "rat_2", rating: 5.0, review: "This product is great. I love it!  You made it so simple. My new site is so much faster and easier to work with than my old site.", user: { name: 'Jenny Wilson', image: profile_pic2 }, productId: "prod_2", createdAt: 'Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)', updatedAt: 'Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)', product: { name: 'Bluetooth Speakers', category:'Electronics', id:'prod_1'} },
    { id: "rat_3", rating: 4.1, review: "This product is amazing. I love it!  You made it so simple. My new site is so much faster and easier to work with than my old site.", user: { name: 'Bessie Cooper', image: profile_pic3 }, productId: "prod_3", createdAt: 'Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)', updatedAt: 'Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)', product: { name: 'Bluetooth Speakers', category:'Electronics', id:'prod_1'} },
    { id: "rat_4", rating: 5.0, review: "This product is great. I love it!  You made it so simple. My new site is so much faster and easier to work with than my old site.", user: { name: 'Kristin Watson', image: profile_pic1 }, productId: "prod_4", createdAt: 'Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)', updatedAt: 'Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)', product: { name: 'Bluetooth Speakers', category:'Electronics', id:'prod_1'} },
    { id: "rat_5", rating: 4.3, review: "Overall, I'm very happy with this purchase. It works as described and feels durable. The only reason I didn't give it five stars is because of a small issue (such as setup taking a bit longer than expected, or packaging being slightly damaged). Still, highly recommend it for anyone looking for a reliable option.", user: { name: 'Jenny Wilson', image: profile_pic2 }, productId: "prod_5", createdAt: 'Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)', updatedAt: 'Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)', product: { name: 'Bluetooth Speakers', category:'Electronics', id:'prod_1'} },
    { id: "rat_6", rating: 5.0, review: "This product is great. I love it!  You made it so simple. My new site is so much faster and easier to work with than my old site.", user: { name: 'Bessie Cooper', image: profile_pic3 }, productId: "prod_6", createdAt: 'Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)', updatedAt: 'Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)', product: { name: 'Bluetooth Speakers', category:'Electronics', id:'prod_1'} },
]

export const dummyStoreData = {
    id: "store_1",
    userId: "user_1",
    name: "MUTE HOUR",
    description: "MUTE HOUR is a modern beauty store for effortless color styling. We curate soft blur lips, sheer glow face products, and mood-driven makeup tools for everyday looks.",
    username: "mutehour",
    address: "Seongsu-ro, Seoul, KR",
    status: "approved",
    isActive: true,
    logo: happy_store,
    email: "hello@mutehour.kr",
    contact: "010-248-1123",
    createdAt: "2025-09-04T09:04:16.189Z",
    updatedAt: "2025-09-04T09:04:44.273Z",
    user: {
        id: "user_31dOriXqC4TATvc0brIhlYbwwc5",
        name: "MUTE HOUR Team",
        email: "hello@mutehour.kr",
        image: gs_logo,
    }
}
export const productDummyData = [
    {
        id: "prod_1",
        name: "[MINI] 멜로우 핏 립 블러 미니",
        description: `
        <div class="space-y-6 text-[15px] leading-7 text-gray-700">
            <section>
            <p class="text-sm tracking-[0.2em] text-gray-400 uppercase">Soft Blur Lip Collection</p>
            <h3 class="text-2xl font-semibold text-gray-900 mt-2">한 번의 터치로 완성되는 소프트 블러 립</h3>
            <p class="mt-3">
                가볍게 스며드는 벨벳 텍스처가 입술 결을 부드럽게 정리해주고,
                본연의 톤을 해치지 않는 차분한 컬러감으로 데일리 룩을 완성합니다.
            </p>
            </section>

            <img src="/details/lip_mini_1.jpg" alt="멜로우 핏 립 블러 상세 이미지 1" class="w-full rounded-2xl" />

            <section>
            <h4 class="text-xl font-semibold text-gray-900">POINT 01. 흐리듯 얇게 밀착되는 텍스처</h4>
            <p class="mt-2">
                두껍게 올라오지 않아 손끝으로 블렌딩하기 쉽고,
                경계 없이 번지는 블러 피니시로 자연스러운 립 연출이 가능합니다.
            </p>
            </section>

            <img src="/details/lip_mini_2.jpg" alt="멜로우 핏 립 블러 상세 이미지 2" class="w-full rounded-2xl" />

            <section>
            <h4 class="text-xl font-semibold text-gray-900">POINT 02. 파우치에 쏙 들어가는 미니 사이즈</h4>
            <p class="mt-2">
                외출 시 수정 화장용으로 부담 없고, 첫 구매 입문용으로도 좋은 미니 립 블러.
            </p>
            <ul class="list-disc pl-5 mt-3 space-y-1">
                <li>추천 톤: 뉴트럴 핑크 베이지</li>
                <li>추천 룩: 생기 메이크업, 소프트 음영 메이크업</li>
                <li>5만원 이상 구매 시 무료배송</li>
            </ul>
            </section>
        </div>
        `,
        mrp: 12000,
        price: 9800,
        images: [product_img1, product_img2, product_img3, product_img4],
        category: "MINI",
        storeId: "seller_1",
        inStock: true,
        store: dummyStoreData,
        rating: dummyRatingsData,
        createdAt: "Sat Jul 29 2025 14:51:25 GMT+0530 (India Standard Time)",
        updatedAt: "Sat Jul 29 2025 14:51:25 GMT+0530 (India Standard Time)",
    },
    {
        id: "prod_2",
        name: "슬로우 모션 글로우 밤",
        description: `
        <div class="space-y-6 text-[15px] leading-7 text-gray-700">
            <section>
            <p class="text-sm tracking-[0.2em] text-gray-400 uppercase">Glow Face Balm</p>
            <h3 class="text-2xl font-semibold text-gray-900 mt-2">빛을 올린 듯 투명하게 반사되는 글로우</h3>
            <p class="mt-3">
                베이스를 무너뜨리지 않는 촉촉한 밤 타입으로,
                볼과 눈두덩, 콧대 위에 가볍게 얹어 맑은 윤기를 더해줍니다.
            </p>
            </section>

            <img src="/details/glow_balm_1.jpg" alt="글로우 밤 상세 이미지 1" class="w-full rounded-2xl" />

            <section>
            <h4 class="text-xl font-semibold text-gray-900">POINT 01. 끈적임 없이 얇은 투명광</h4>
            <p class="mt-2">
                번들거림보다는 맑은 반사광에 가까운 표현으로,
                데일리 메이크업 위에 자연스럽게 레이어링됩니다.
            </p>
            </section>

            <img src="/details/glow_balm_2.jpg" alt="글로우 밤 상세 이미지 2" class="w-full rounded-2xl" />

            <section>
            <h4 class="text-xl font-semibold text-gray-900">POINT 02. 손끝으로도 쉬운 터치업</h4>
            <p class="mt-2">
                브러쉬 없이도 손가락으로 가볍게 두드리면 자연스럽게 퍼져
                이동 중 수정 화장에도 편리합니다.
            </p>
            </section>
        </div>
        `,
        mrp: 26000,
        price: 22000,
        images: [product_img5, product_img6, product_img7, product_img8],
        category: "FACE",
        storeId: "seller_1",
        inStock: true,
        store: dummyStoreData,
        rating: dummyRatingsData,
        createdAt: "Sat Jul 29 2025 14:51:25 GMT+0530 (India Standard Time)",
        updatedAt: "Sat Jul 29 2025 14:51:25 GMT+0530 (India Standard Time)",
    },
    {
        id: "prod_3",
        name: "오프밸런스 무드 아이 팔레트",
        description: `
        <div class="space-y-6 text-[15px] leading-7 text-gray-700">
            <section>
            <p class="text-sm tracking-[0.2em] text-gray-400 uppercase">Mood Eye Palette</p>
            <h3 class="text-2xl font-semibold text-gray-900 mt-2">차분한 베이스 위에 한 끗 포인트 컬러</h3>
            <p class="mt-3">
                데일리 음영 컬러와 포인트 컬러를 함께 담아,
                과하지 않지만 분명한 무드의 아이 메이크업을 연출합니다.
            </p>
            </section>

            <img src="/details/eye_palette_1.jpg" alt="아이 팔레트 상세 이미지 1" class="w-full rounded-2xl" />

            <section>
            <h4 class="text-xl font-semibold text-gray-900">POINT 01. 부드러운 매트와 은은한 쉬머의 밸런스</h4>
            <p class="mt-2">
                베이스, 음영, 삼각존, 포인트까지 한 팔레트 안에서 연결되어
                손쉽게 레이어드 룩을 완성할 수 있습니다.
            </p>
            </section>

            <img src="/details/eye_palette_2.jpg" alt="아이 팔레트 상세 이미지 2" class="w-full rounded-2xl" />

            <section>
            <h4 class="text-xl font-semibold text-gray-900">POINT 02. 웨어러블한 쿨-뉴트럴 컬러 구성</h4>
            <p class="mt-2">
                과한 채도 없이 차분하게 발색되어 학생, 직장인 데일리 메이크업에도 잘 어울립니다.
            </p>
            </section>
        </div>
        `,
        mrp: 34000,
        price: 29000,
        images: [product_img9, product_img10, product_img11, product_img12],
        category: "EYE",
        storeId: "seller_1",
        inStock: true,
        store: dummyStoreData,
        rating: dummyRatingsData,
        createdAt: "Sat Jul 29 2025 14:51:25 GMT+0530 (India Standard Time)",
        updatedAt: "Sat Jul 29 2025 14:51:25 GMT+0530 (India Standard Time)",
    },
    {
        id: "prod_4",
        name: "에어 브러쉬드 치크 듀오",
        description: `
        <div class="space-y-6 text-[15px] leading-7 text-gray-700">
            <section>
            <p class="text-sm tracking-[0.2em] text-gray-400 uppercase">Cheek Duo</p>
            <h3 class="text-2xl font-semibold text-gray-900 mt-2">한 번은 생기, 한 번은 음영</h3>
            <p class="mt-3">
                맑은 혈색 컬러와 차분한 쉐이드 컬러를 함께 담아
                얼굴 위 분위기를 자유롭게 조절할 수 있는 치크 듀오입니다.
            </p>
            </section>

            <img src="/details/cheek_duo_1.jpg" alt="치크 듀오 상세 이미지 1" class="w-full rounded-2xl" />

            <section>
            <h4 class="text-xl font-semibold text-gray-900">POINT 01. 파우더리하지만 답답하지 않은 발색</h4>
            <p class="mt-2">
                뭉침 없이 고르게 퍼지고 여러 번 레이어링해도 탁해지지 않아
                초보자도 쉽게 사용할 수 있습니다.
            </p>
            </section>

            <img src="/details/cheek_duo_2.jpg" alt="치크 듀오 상세 이미지 2" class="w-full rounded-2xl" />

            <section>
            <h4 class="text-xl font-semibold text-gray-900">POINT 02. 블러셔와 컨투어 사이의 유연한 사용감</h4>
            <p class="mt-2">
                분위기 있는 메이크업부터 자연스러운 생기 연출까지
                한 팔레트로 폭넓게 활용할 수 있습니다.
            </p>
            </section>
        </div>
        `,
        mrp: 32000,
        price: 25000,
        images: [product_img13, product_img14, product_img15, product_img16],
        category: "FACE",
        storeId: "seller_1",
        inStock: true,
        store: dummyStoreData,
        rating: dummyRatingsData,
        createdAt: "Sat Jul 29 2025 14:51:25 GMT+0530 (India Standard Time)",
        updatedAt: "Sat Jul 29 2025 14:51:25 GMT+0530 (India Standard Time)",
    },
    {
        id: "prod_5",
        name: "씬 엣지 디테일 브러쉬",
        description: `
        <div class="space-y-6 text-[15px] leading-7 text-gray-700">
            <section>
            <p class="text-sm tracking-[0.2em] text-gray-400 uppercase">Precision Tool</p>
            <h3 class="text-2xl font-semibold text-gray-900 mt-2">손끝처럼 정교하게 닿는 디테일 브러쉬</h3>
            <p class="mt-3">
                눈 앞머리, 삼각존, 립 라인, 언더 음영까지
                세밀한 포인트 메이크업을 위해 설계된 슬림 브러쉬입니다.
            </p>
            </section>

            <img src="/details/detail_brush_1.jpg" alt="디테일 브러쉬 상세 이미지 1" class="w-full rounded-2xl" />

            <section>
            <h4 class="text-xl font-semibold text-gray-900">POINT 01. 균일하게 밀착되는 사선 커팅</h4>
            <p class="mt-2">
                좁은 영역에도 제품이 들뜸 없이 올라가고,
                뭉침 없는 포인트 터치가 가능합니다.
            </p>
            </section>

            <img src="/details/detail_brush_2.jpg" alt="디테일 브러쉬 상세 이미지 2" class="w-full rounded-2xl" />

            <section>
            <h4 class="text-xl font-semibold text-gray-900">POINT 02. 파우치에 넣기 좋은 콤팩트 사이즈</h4>
            <p class="mt-2">
                휴대성이 좋아 외출 시 수정 메이크업에도 적합합니다.
            </p>
            </section>
        </div>
        `,
        mrp: 18000,
        price: 14000,
        images: [product_img17, product_img18, product_img19, product_img20],
        category: "TOOL",
        storeId: "seller_1",
        inStock: true,
        store: dummyStoreData,
        rating: dummyRatingsData,
        createdAt: "Sat Jul 29 2025 14:51:25 GMT+0530 (India Standard Time)",
        updatedAt: "Sat Jul 29 2025 14:51:25 GMT+0530 (India Standard Time)",
    },
    {
        id: "prod_6",
        name: "[SET] 쿨 블러 립 듀오",
        description: `
        <div class="space-y-6 text-[15px] leading-7 text-gray-700">
            <section>
            <p class="text-sm tracking-[0.2em] text-gray-400 uppercase">Lip Duo Set</p>
            <h3 class="text-2xl font-semibold text-gray-900 mt-2">분위기에 따라 골라 쓰는 블러 립 듀오</h3>
            <p class="mt-3">
                데일리 누드 톤과 차분한 로즈 브릭 톤을 함께 담아
                평소 메이크업과 포인트 메이크업을 모두 커버하는 립 세트입니다.
            </p>
            </section>

            <img src="/details/lip_duo_1.jpg" alt="립 듀오 상세 이미지 1" class="w-full rounded-2xl" />

            <section>
            <h4 class="text-xl font-semibold text-gray-900">POINT 01. 톤온톤 레이어링에 적합한 2컬러 구성</h4>
            <p class="mt-2">
                단독 사용은 물론, 안쪽 그라데이션과 립 라인 정리에 활용하기 좋아
                다양한 무드 연출이 가능합니다.
            </p>
            </section>

            <img src="/details/lip_duo_2.jpg" alt="립 듀오 상세 이미지 2" class="w-full rounded-2xl" />

            <section>
            <h4 class="text-xl font-semibold text-gray-900">POINT 02. 세트 구매 전용 혜택</h4>
            <ul class="list-disc pl-5 mt-2 space-y-1">
                <li>단품 대비 할인 적용</li>
                <li>선물용으로 좋은 패키지 구성</li>
                <li>첫 구매 고객 무료배송 이벤트 적용 가능</li>
            </ul>
            </section>
        </div>
        `,
        mrp: 42000,
        price: 33600,
        images: [product_img21, product_img22, product_img23, product_img24],
        category: "SET",
        storeId: "seller_1",
        inStock: true,
        store: dummyStoreData,
        rating: dummyRatingsData,
        createdAt: "Sat Jul 29 2025 14:51:25 GMT+0530 (India Standard Time)",
        updatedAt: "Sat Jul 29 2025 14:51:25 GMT+0530 (India Standard Time)",
    }
];


export const ourSpecsData = [
    { title: "Free Shipping", description: "Enjoy fast, free delivery on every order no conditions, just reliable doorstep.", icon: SendIcon, accent: '#05DF72' },
    { title: "7 Days easy Return", description: "Change your mind? No worries. Return any item within 7 days.", icon: ClockFadingIcon, accent: '#FF8904' },
    { title: "24/7 Customer Support", description: "We're here for you. Get expert help with our customer support.", icon: HeadsetIcon, accent: '#A684FF' }
]

export const addressDummyData = {
    id: "addr_1",
    userId: "user_1",
    name: "John Doe",
    email: "johndoe@example.com",
    street: "123 Main St",
    city: "New York",
    state: "NY",
    zip: "10001",
    country: "USA",
    phone: "1234567890",
    createdAt: 'Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)',
}

export const couponDummyData = [
    { code: "NEW20", description: "20% Off for New Users", discount: 20, forNewUser: true, forMember: false, isPublic: false, expiresAt: "2026-12-31T00:00:00.000Z", createdAt: "2025-08-22T08:35:31.183Z" },
    { code: "NEW10", description: "10% Off for New Users", discount: 10, forNewUser: true, forMember: false, isPublic: false, expiresAt: "2026-12-31T00:00:00.000Z", createdAt: "2025-08-22T08:35:50.653Z" },
    { code: "OFF20", description: "20% Off for All Users", discount: 20, forNewUser: false, forMember: false, isPublic: false, expiresAt: "2026-12-31T00:00:00.000Z", createdAt: "2025-08-22T08:42:00.811Z" },
    { code: "OFF10", description: "10% Off for All Users", discount: 10, forNewUser: false, forMember: false, isPublic: false, expiresAt: "2026-12-31T00:00:00.000Z", createdAt: "2025-08-22T08:42:21.279Z" },
    { code: "PLUS10", description: "20% Off for Members", discount: 10, forNewUser: false, forMember: true, isPublic: false, expiresAt: "2027-03-06T00:00:00.000Z", createdAt: "2025-08-22T11:38:20.194Z" }
]

export const dummyUserData = {
    id: "user_31dQbH27HVtovbs13X2cmqefddM",
    name: "GreatStack",
    email: "greatstack@example.com",
    image: gs_logo,
    cart: {}
}

export const orderDummyData = [
    {
        id: "cmemm75h5001jtat89016h1p3",
        total: 214.2,
        status: "DELIVERED",
        userId: "user_31dQbH27HVtovbs13X2cmqefddM",
        storeId: "cmemkqnzm000htat8u7n8cpte",
        addressId: "cmemm6g95001ftat8omv9b883",
        isPaid: false,
        paymentMethod: "COD",
        createdAt: "2025-08-22T09:15:03.929Z",
        updatedAt: "2025-08-22T09:15:50.723Z",
        isCouponUsed: true,
        coupon: dummyRatingsData[2],
        orderItems: [
            { orderId: "cmemm75h5001jtat89016h1p3", productId: "cmemlydnx0017tat8h3rg92hz", quantity: 1, price: 89, product: productDummyData[0], },
            { orderId: "cmemm75h5001jtat89016h1p3", productId: "cmemlxgnk0015tat84qm8si5v", quantity: 1, price: 149, product: productDummyData[1], }
        ],
        address: addressDummyData,
        user: dummyUserData
    },
    {
        id: "cmemm6jv7001htat8vmm3gxaf",
        total: 421.6,
        status: "DELIVERED",
        userId: "user_31dQbH27HVtovbs13X2cmqefddM",
        storeId: "cmemkqnzm000htat8u7n8cpte",
        addressId: "cmemm6g95001ftat8omv9b883",
        isPaid: false,
        paymentMethod: "COD",
        createdAt: "2025-08-22T09:14:35.923Z",
        updatedAt: "2025-08-22T09:15:52.535Z",
        isCouponUsed: true,
        coupon: couponDummyData[0],
        orderItems: [
            { orderId: "cmemm6jv7001htat8vmm3gxaf", productId: "cmemm1f3y001dtat8liccisar", quantity: 1, price: 229, product: productDummyData[2], },
            { orderId: "cmemm6jv7001htat8vmm3gxaf", productId: "cmemm0nh2001btat8glfvhry1", quantity: 1, price: 99, product: productDummyData[3], },
            { orderId: "cmemm6jv7001htat8vmm3gxaf", productId: "cmemlz8640019tat8kz7emqca", quantity: 1, price: 199, product: productDummyData[4], }
        ],
        address: addressDummyData,
        user: dummyUserData
    }
]

export const storesDummyData = [
    {
        id: "cmemkb98v0001tat8r1hiyxhn",
        userId: "user_31dOriXqC4TATvc0brIhlYbwwc5",
        name: "GreatStack",
        description: "GreatStack is the education marketplace where you can buy goodies related to coding and tech",
        username: "greatstack",
        address: "123 Maplewood Drive Springfield, IL 62704 USA",
        status: "approved",
        isActive: true,
        logo: gs_logo,
        email: "greatstack@example.com",
        contact: "+0 1234567890",
        createdAt: "2025-08-22T08:22:16.189Z",
        updatedAt: "2025-08-22T08:22:44.273Z",
        user: dummyUserData,
    },
    {
        id: "cmemkqnzm000htat8u7n8cpte",
        userId: "user_31dQbH27HVtovbs13X2cmqefddM",
        name: "Happy Shop",
        description: "At Happy Shop, we believe shopping should be simple, smart, and satisfying. Whether you're hunting for the latest fashion trends, top-notch electronics, home essentials, or unique lifestyle products — we've got it all under one digital roof.",
        username: "happyshop",
        address: "3rd Floor, Happy Shop , New Building, 123 street , c sector , NY, US",
        status: "approved",
        isActive: true,
        logo: happy_store,
        email: "happyshop@example.com",
        contact: "+0 123456789",
        createdAt: "2025-08-22T08:34:15.155Z",
        updatedAt: "2025-08-22T08:34:47.162Z",
        user: dummyUserData,
    }
]

export const dummyAdminDashboardData = {
    "orders": 6,
    "stores": 2,
    "products": 12,
    "revenue": "959.10",
    "allOrders": [
        { "createdAt": "2025-08-20T08:46:58.239Z", "total": 145.6 },
        { "createdAt": "2025-08-22T08:46:21.818Z", "total": 97.2 },
        { "createdAt": "2025-08-22T08:45:59.587Z", "total": 54.4 },
        { "createdAt": "2025-08-23T09:15:03.929Z", "total": 214.2 },
        { "createdAt": "2025-08-23T09:14:35.923Z", "total": 421.6 },
        { "createdAt": "2025-08-23T11:44:29.713Z", "total": 26.1 },
        { "createdAt": "2025-08-24T09:15:03.929Z", "total": 214.2 },
        { "createdAt": "2025-08-24T09:14:35.923Z", "total": 421.6 },
        { "createdAt": "2025-08-24T11:44:29.713Z", "total": 26.1 },
        { "createdAt": "2025-08-24T11:56:29.713Z", "total": 36.1 },
        { "createdAt": "2025-08-25T11:44:29.713Z", "total": 26.1 },
        { "createdAt": "2025-08-25T09:15:03.929Z", "total": 214.2 },
        { "createdAt": "2025-08-25T09:14:35.923Z", "total": 421.6 },
        { "createdAt": "2025-08-25T11:44:29.713Z", "total": 26.1 },
        { "createdAt": "2025-08-25T11:56:29.713Z", "total": 36.1 },
        { "createdAt": "2025-08-25T11:30:29.713Z", "total": 110.1 }
    ]
}

export const dummyStoreDashboardData = {
    "ratings": dummyRatingsData,
    "totalOrders": 2,
    "totalEarnings": 636,
    "totalProducts": 5
}