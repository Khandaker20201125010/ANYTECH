import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          services: "Services",
          aboutUs: "About Us",
          contactUs: "Contact Us",
          language: "Language",
          bannerTitle: "Embrace the future of finance",
          bannerDescription:
            "Reimagine financial services with AnyTech’s open platform, distributed banking solution that powers transformation.",
          future: "Powering the Future of Finance",
          futureTitle: "Uncovering new ways to delight customers",
          futureDes:
            "AnyTech is revolutionising financial technology by introducing innovative and real-time transaction account processing capabilities, specifically designed for retail financial services.",
          futurePra:
            "Our modern approach surpasses traditional banking and card processing systems, empowering you with the most advanced technology for lasting success.",
          ourPhilosophy: "Our Philosophy",
          ourPhilosophyTitle: "Human-centred innovation",
          fullSuiteSolutions: "Full-suite solutions",
          experienceEaseOfIntegration:
            "Experience the ease of integration across various banking and payment functions with our comprehensive suite of solutions.",
          simplifyComplex: "Simplify the complex",
          simplifyFinancialOperations:
            "Simplify complex processes and optimise your financial operations by leveraging the power of AI, Blockchain, Cloud Computing, and Big Data.",
          cuttingEdgeTech: "Cutting-edge tech",
          combineCuttingEdgeTechnologies:
            "We seamlessly combine cutting-edge technologies, resulting in an unparalleled fintech experience for financial institutions.",
          technologyBuilt: "TECHNOLOGY BUILT FOR YOU",
          technologyBuiltTitle: "The future of finance",
          slide1title: "Customer focused",
          slide1heading: "Purpose-built financial services",
          slide1p1:
            "Elevate customer experience and achieve agile financial product innovation with the world’s first, consumer-centric, real-time transaction account processing and credit limit system.",
          slide1p2:
            "Experience the advantages of integrated retail financial services technology, real-time analysis of transactional behaviour and product marketing opportunities.",
          slide2title: "Agile and adaptable",
          slide2heading: "Agile and adaptable for growth",
          slide2p1:
            "Innovate with evolving customer demands through our open platform-based technology architecture. Stay ahead of the ever-changing financial landscape with a strong focus on security, compliance and performance.",
          slide2p2:
            "Optimise your offerings to unlock new revenue streams and deliver an extraordinary customer experience, with digitally designed core banking, payment processing and lending capabilities.",
          slide3title: "Compliance ready",
          slide3heading: "Manage compliance with ease",
          slide3p1:
            "Navigate through the evolving regulatory landscape with confidence by streamlining compliance management—through real-time risk monitoring solutions powered by AI and machine learning.",
          slide3p2:
            "Transform your compliance strategy with flexible and diversified policy rules, powered by cutting-edge technology that is designed for seamless integration with core banking and card payment systems.",
          slide4title: "Secure and safe",
          slide4heading: "Highly secure and safe",
          slide4p1:
            "Discover unparalleled security trusted by financial institutions across the globe. Our applications are meticulously developed in compliance with international security standards, drawing on 20 years of technical expertise.",
          slide4p2:
            "Join over 40 esteemed Fls, each serving more than 200 million customers, and benefit from our secure, robust and reliable infrastructure.",
          trustedByTheBest: "Trusted by the Best",
          yearsOfExperience: "Years of Experience",
          financialInstitutions: "Financial Institutions",
          happyCustomers: "Customers Each",
          footerTitle:"Legacy no longer",
          footerDescription:"Talk to us to find out how we can transform your organisation for the future. ",
          footerButton:"Reach Out to Us →",
          footerLinkcs:"AnyCaaS",
          footerLinkbs:"AnyBaaS",
          footerLinkps:"AnyPaaS",
        },
      },
      th: {
        translation: {
          services: "บริการ",
          aboutUs: "เกี่ยวกับเรา",
          contactUs: "ติดต่อเรา",
          language: "ภาษา",
          bannerTitle: "ยอมรับอนาคตของการเงิน",
          bannerDescription:
            "จินตนาการใหม่ของบริการทางการเงินด้วยแพลตฟอร์มเปิดของ AnyTech และโซลูชันธนาคารแบบกระจายที่ขับเคลื่อนการเปลี่ยนแปลง",
          future: "ขับเคลื่อนอนาคตของการเงิน",
          futureTitle: "ค้นพบวิธีใหม่ในการสร้างความพึงพอใจให้กับลูกค้า",
          futureDes:
            "AnyTech กำลังก่อการปฏิวัติเทคโนโลยีทางการเงินโดยการแนะนำความสามารถในการประมวลผลบัญชีธุรกรรมแบบเรียลไทม์ที่มีนวัตกรรม ซึ่งออกแบบมาโดยเฉพาะสำหรับบริการการเงินค้าปลีก",
          futurePra:
            "วิธีการสมัยใหม่ของเราเกินกว่าระบบการธนาคารและการประมวลผลบัตรแบบดั้งเดิม โดยมอบเทคโนโลยีที่ทันสมัยที่สุดเพื่อความสำเร็จที่ยั่งยืน",
          ourPhilosophy: "ปรัชญาของเรา",
          ourPhilosophyTitle: "นวัตกรรมที่มุ่งเน้นมนุษย์",
          fullSuiteSolutions: "โซลูชันครบวงจร",
          experienceEaseOfIntegration:
            "สัมผัสประสบการณ์การผสานรวมที่ง่ายดายผ่านฟังก์ชันต่าง ๆ ของการธนาคารและการชำระเงินด้วยชุดโซลูชันครบวงจรของเรา",
          simplifyComplex: "ทำให้สิ่งที่ซับซ้อนง่ายขึ้น",
          simplifyFinancialOperations:
            "ทำให้กระบวนการที่ซับซ้อนง่ายขึ้นและเพิ่มประสิทธิภาพการดำเนินงานทางการเงินของคุณโดยการใช้พลังของ AI, Blockchain, Cloud Computing, และ Big Data",
          cuttingEdgeTech: "เทคโนโลยีล้ำสมัย",
          combineCuttingEdgeTechnologies:
            "เรารวมเทคโนโลยีล้ำสมัยต่าง ๆ เข้าด้วยกันอย่างลงตัว สร้างประสบการณ์ fintech ที่ไม่เหมือนใครสำหรับสถาบันการเงิน",
          technologyBuilt: "เทคโนโลยีที่สร้างขึ้นสำหรับคุณ",
          technologyBuiltTitle: "อนาคตของการเงิน",
          slide1title: "มุ่งเน้นลูกค้า",
          slide1heading: "บริการทางการเงินที่ออกแบบมาเพื่อคุณ",
          slide1p1:
            "ยกระดับประสบการณ์ลูกค้าและสร้างนวัตกรรมผลิตภัณฑ์ทางการเงินที่คล่องตัวด้วยระบบการประมวลผลบัญชีธุรกรรมและการกำหนดวงเงินสินเชื่อแบบเรียลไทม์ที่มุ่งเน้นผู้บริโภคเป็นครั้งแรกในโลก",
          slide1p2:
            "สัมผัสประสบการณ์ข้อดีของเทคโนโลยีบริการทางการเงินค้าปลีกที่รวมเป็นหนึ่งเดียว การวิเคราะห์พฤติกรรมการทำธุรกรรมแบบเรียลไทม์ และโอกาสในการทำการตลาดผลิตภัณฑ์",
          slide2title: "คล่องตัวและปรับตัวได้",
          slide2heading: "คล่องตัวและปรับตัวได้เพื่อการเติบโต",
          slide2p1:
            "นวัตกรรมตามความต้องการของลูกค้าที่พัฒนาอย่างต่อเนื่องผ่านสถาปัตยกรรมเทคโนโลยีที่ใช้แพลตฟอร์มเปิด ติดตามให้ทันกับภูมิทัศน์ทางการเงินที่เปลี่ยนแปลงอยู่เสมอ โดยมุ่งเน้นความปลอดภัย การปฏิบัติตามข้อกำหนด และประสิทธิภาพ",
          slide2p2:
            "เพิ่มประสิทธิภาพการนำเสนอของคุณเพื่อปลดล็อกแหล่งรายได้ใหม่และมอบประสบการณ์ลูกค้าที่เหนือชั้น ด้วยความสามารถในการออกแบบธนาคารหลัก การประมวลผลการชำระเงิน และการให้สินเชื่อแบบดิจิทัล",
          slide3title: "พร้อมการปฏิบัติตามข้อกำหนด",
          slide3heading: "จัดการการปฏิบัติตามข้อกำหนดได้อย่างง่ายดาย",
          slide3p1:
            "เดินทางผ่านภูมิทัศน์ของข้อบังคับที่พัฒนาอย่างต่อเนื่องด้วยความมั่นใจ โดยการจัดการการปฏิบัติตามข้อกำหนดอย่างมีประสิทธิภาพ—ผ่านการตรวจสอบความเสี่ยงแบบเรียลไทม์ที่ขับเคลื่อนด้วย AI และการเรียนรู้ของเครื่อง",
          slide3p2:
            "เปลี่ยนแปลงกลยุทธ์การปฏิบัติตามข้อกำหนดของคุณด้วยกฎนโยบายที่ยืดหยุ่นและหลากหลาย ซึ่งขับเคลื่อนด้วยเทคโนโลยีที่ทันสมัยที่สุด ซึ่งออกแบบมาให้สามารถผสานรวมกับระบบธนาคารหลักและระบบการชำระเงินแบบบัตรได้อย่างไร้รอยต่อ",
          slide4title: "ปลอดภัยและมั่นคง",
          slide4heading: "ปลอดภัยและมั่นคงอย่างสูง",
          slide4p1:
            "ค้นพบความปลอดภัยที่ไม่เหมือนใครที่ได้รับความไว้วางใจจากสถาบันการเงินทั่วโลก แอปพลิเคชันของเราพัฒนาอย่างพิถีพิถันตามมาตรฐานความปลอดภัยสากล โดยอาศัยประสบการณ์ทางเทคนิคกว่า 20 ปี",
          slide4p2:
            "เข้าร่วมกับ 40 สถาบันการเงินที่มีชื่อเสียง ซึ่งแต่ละแห่งให้บริการลูกค้ามากกว่า 200 ล้านคน และได้รับประโยชน์จากโครงสร้างพื้นฐานที่ปลอดภัย แข็งแกร่ง และเชื่อถือได้",
          trustedByTheBest: "ได้รับความไว้วางใจจากผู้นำระดับโลก",
          yearsOfExperience: "ปีแห่งประสบการณ์",
          financialInstitutions: "สถาบันการเงิน",
          happyCustomers: "ลูกค้าแต่ละราย",
          footerTitle: "ไม่เป็นมรดกอีกต่อไป",
          footerDescription: "ติดต่อเราหากต้องการทราบว่าเราสามารถเปลี่ยนแปลงองค์กรของคุณสำหรับอนาคตได้อย่างไร",
          footerButton: "ติดต่อเรา →",
          footerLinkcs: "AnyCaaS",
          footerLinkbs: "AnyBaaS",
          footerLinkps: "AnyPaaS",
        },
      },
      id: {
        translation: {
          services: "Layanan",
          aboutUs: "Tentang Kami",
          contactUs: "Hubungi Kami",
          language: "Bahasa",
          bannerTitle: "Rangkullah masa depan keuangan",
          bannerDescription:
            "Bayangkan kembali layanan keuangan dengan platform terbuka AnyTech, solusi perbankan terdistribusi yang mendorong transformasi.",
          future: "Menggerakkan Masa Depan Keuangan",
          futureTitle: "Menemukan cara baru untuk menyenangkan pelanggan",
          futureDes:
            "AnyTech sedang merevolusi teknologi keuangan dengan memperkenalkan kemampuan pemrosesan akun transaksi waktu nyata yang inovatif, yang dirancang khusus untuk layanan keuangan ritel.",
          futurePra:
            "Pendekatan modern kami melampaui sistem perbankan tradisional dan pemrosesan kartu, memberdayakan Anda dengan teknologi paling canggih untuk keberhasilan yang langgeng.",
          ourPhilosophy: "Filosofi Kami",
          ourPhilosophyTitle: "Inovasi yang berpusat pada manusia",
          fullSuiteSolutions: "Solusi lengkap",
          experienceEaseOfIntegration:
            "Rasakan kemudahan integrasi di berbagai fungsi perbankan dan pembayaran dengan rangkaian solusi lengkap kami.",
          simplifyComplex: "Menyederhanakan yang rumit",
          simplifyFinancialOperations:
            "Menyederhanakan proses yang rumit dan mengoptimalkan operasi keuangan Anda dengan memanfaatkan kekuatan AI, Blockchain, Cloud Computing, dan Big Data.",
          cuttingEdgeTech: "Teknologi terdepan",
          combineCuttingEdgeTechnologies:
            "Kami menggabungkan teknologi-teknologi terdepan dengan mulus, menghasilkan pengalaman fintech yang tiada banding untuk lembaga keuangan.",
          technologyBuilt: "TEKNOLOGI YANG DIBANGUN UNTUK ANDA",
          technologyBuiltTitle: "Masa Depan Keuangan",
          slide1title: "Berfokus pada Pelanggan",
          slide1heading: "Layanan Keuangan yang Dibuat Khusus",
          slide1p1:
            "Tingkatkan pengalaman pelanggan dan capai inovasi produk keuangan yang gesit dengan sistem pemrosesan akun transaksi dan batas kredit waktu nyata pertama di dunia yang berfokus pada konsumen.",
          slide1p2:
            "Rasakan keuntungan dari teknologi layanan keuangan ritel yang terintegrasi, analisis perilaku transaksi waktu nyata, dan peluang pemasaran produk.",
          slide2title: "Gesit dan dapat disesuaikan",
          slide2heading: "Gesit dan dapat disesuaikan untuk pertumbuhan",
          slide2p1:
            "Inovasi dengan tuntutan pelanggan yang terus berkembang melalui arsitektur teknologi berbasis platform terbuka kami. Tetap terdepan dalam lanskap keuangan yang terus berubah dengan fokus yang kuat pada keamanan, kepatuhan, dan kinerja.",
          slide2p2:
            "Optimalkan penawaran Anda untuk membuka saluran pendapatan baru dan memberikan pengalaman pelanggan yang luar biasa, dengan kemampuan perbankan inti, pemrosesan pembayaran, dan pemberian pinjaman yang dirancang secara digital.",
          slide3title: "Siap untuk Kepatuhan",
          slide3heading: "Kelola kepatuhan dengan mudah",
          slide3p1:
            "Navigasi melalui lanskap regulasi yang berkembang dengan percaya diri dengan menyederhanakan manajemen kepatuhan—melalui solusi pemantauan risiko waktu nyata yang didorong oleh AI dan pembelajaran mesin.",
          slide3p2:
            "Ubah strategi kepatuhan Anda dengan aturan kebijakan yang fleksibel dan terdiversifikasi, didorong oleh teknologi mutakhir yang dirancang untuk integrasi tanpa hambatan dengan sistem perbankan inti dan sistem pembayaran kartu.",
          slide4title: "Aman dan Terlindungi",
          slide4heading: "Sangat aman dan terlindungi",
          slide4p1:
            "Temukan keamanan yang tak tertandingi yang dipercaya oleh institusi keuangan di seluruh dunia. Aplikasi kami dikembangkan dengan teliti sesuai dengan standar keamanan internasional, dengan pengalaman teknis selama lebih dari 20 tahun.",
          slide4p2:
            "Bergabunglah dengan lebih dari 40 lembaga keuangan terkemuka, masing-masing melayani lebih dari 200 juta pelanggan, dan nikmati infrastruktur kami yang aman, kuat, dan andal.",
          trustedByTheBest: "Dipercaya oleh yang Terbaik",
          yearsOfExperience: "Tahun Pengalaman",
          financialInstitutions: "Institusi Keuangan",
          happyCustomers: "Pelanggan Setiap",
          footerTitle: "Warisan Tidak Lagi",
          footerDescription: "Hubungi kami untuk mengetahui bagaimana kami dapat mengubah organisasi Anda untuk masa depan.",
          footerButton: "Hubungi Kami →",
          footerLinkcs: "AnyCaaS",
          footerLinkbs: "AnyBaaS",
          footerLinkps: "AnyPaaS",
        },
      },
      tw: {
        translation: {
          services: "服務",
          aboutUs: "關於我們",
          contactUs: "聯繫我們",
          language: "語言",
          bannerTitle: "擁抱金融的未來",
          bannerDescription:
            "透過AnyTech的開放平台與分散式銀行解決方案，重新想像金融服務，推動轉型。",
          future: "推動金融的未來",
          futureTitle: "發掘全新方式來取悅客戶",
          futureDes:
            "AnyTech 正在革新金融技術，通過引入創新的實時交易帳戶處理能力，專為零售金融服務而設計。",
          futurePra:
            "我們現代化的方法超越了傳統的銀行和卡片處理系統，為您提供最先進的技術，助您成功長久。",
          ourPhilosophy: "我們的哲學",
          ourPhilosophyTitle: "以人為本的創新",
          fullSuiteSolutions: "完整解決方案",
          experienceEaseOfIntegration:
            "體驗跨越各種銀行和支付功能的輕鬆整合，透過我們全面的解決方案套件。",
          simplifyComplex: "簡化複雜的事物",
          simplifyFinancialOperations:
            "利用 AI、區塊鏈、雲計算和大數據的力量，簡化複雜的過程並優化您的金融運營。",
          cuttingEdgeTech: "尖端科技",
          combineCuttingEdgeTechnologies:
            "我們無縫地結合尖端技術，為金融機構提供無與倫比的 fintech 體驗。",
          technologyBuilt: "為您打造的技術",
          technologyBuiltTitle: "金融的未來",
          slide1title: "以客戶為中心",
          slide1heading: "量身定制的金融服務",
          slide1p1:
            "通過全球首個以消費者為中心、即時交易帳戶處理和信用額度系統，提升客戶體驗並實現敏捷的金融產品創新。",
          slide1p2:
            "體驗集成零售金融服務技術的優勢，實時分析交易行為和產品營銷機會。",
          slide2title: "靈活且可調整",
          slide2heading: "為增長提供靈活和可調整的解決方案",
          slide2p1:
            "通過我們基於開放平台的技術架構，創新以應對不斷變化的客戶需求。專注於安全、合規性和性能，領先於不斷變化的金融格局。",
          slide2p2:
            "優化您的服務，開啟新的收入來源，並通過數字化設計的核心銀行業務、支付處理和貸款能力，提供卓越的客戶體驗。",
          slide3title: "符合合規要求",
          slide3heading: "輕鬆管理合規性",
          slide3p1:
            "通過實時風險監控解決方案，借助 AI 和機器學習技術，輕鬆應對不斷變化的監管環境，簡化合規管理。",
          slide3p2:
            "通過靈活和多元化的政策規則，轉變您的合規策略，利用最前沿的技術，實現與核心銀行和卡支付系統的無縫整合。",
          slide4title: "安全可靠",
          slide4heading: "極高的安全性與可靠性",
          slide4p1:
            "發現全球金融機構信賴的無與倫比的安全性。我們的應用程式經過精心開發，符合國際安全標準，擁有 20 年的技術專業知識。",
          slide4p2:
            "加入超過 40 家受人尊敬的金融機構，每家機構服務超過 2 億名客戶，並受益於我們安全、穩固且可靠的基礎設施。",
          trustedByTheBest: "全球領先的信賴",
          yearsOfExperience: "多年經驗",
          financialInstitutions: "金融機構",
          happyCustomers: "每位客戶",
          footerTitle: "不再是傳統",
          footerDescription: "與我們聯繫，了解我們如何幫助您的組織實現未來轉型。",
          footerButton: "聯繫我們 →",
          footerLinkcs: "任何CaaS",
          footerLinkbs: "任何BaaS",
          footerLinkps: "任何PaaS",

        },
      },
    },
    lng: "en", // Default language
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

export default i18n;