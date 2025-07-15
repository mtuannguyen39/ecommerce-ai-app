const mockProducts = [
  {
    id: 1,
    name: "Khóa học Tiếng Anh giao tiếp với người Mỹ",
    price: 599000,
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop",
    description:
      "Học tiếng Anh giao tiếp thực tế với giáo viên bản ngữ người Mỹ. Phương pháp học hiện đại, tương tác cao.",
    fullDescription:
      "Khóa học tiếng Anh giao tiếp với người Mỹ được thiết kế đặc biệt cho người Việt Nam. Với phương pháp học tương tác cao, bạn sẽ được thực hành với giáo viên bản ngữ người Mỹ thông qua các tình huống thực tế. Khóa học bao gồm 50 bài học, 100 giờ thực hành và chứng chỉ hoàn thành.",
    rating: 4.8,
    category: "language",
  },
  {
    id: 2,
    name: "Lập trình React từ cơ bản đến nâng cao",
    price: 799000,
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop",
    description:
      "Học lập trình React từ cơ bản đến nâng cao. Bao gồm hooks, context, redux và các dự án thực tế.",
    fullDescription:
      "Khóa học lập trình React comprehensive từ cơ bản đến nâng cao. Bạn sẽ học về JSX, Components, Props, State, Hooks, Context API, Redux, và nhiều thư viện khác. Khóa học bao gồm 8 dự án thực tế và hỗ trợ tìm việc làm.",
    rating: 4.9,
    category: "programming",
  },
  {
    id: 3,
    name: "Digital Marketing và SEO 2024",
    price: 699000,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    description:
      "Học Digital Marketing và SEO với các chiến lược mới nhất năm 2024. Từ Google Ads đến Social Media.",
    fullDescription:
      "Khóa học Digital Marketing và SEO 2024 giúp bạn nắm vững các chiến lược marketing online hiện đại. Bao gồm SEO, Google Ads, Facebook Ads, Content Marketing, Email Marketing và Analytics. Được cập nhật theo xu hướng mới nhất.",
    rating: 4.7,
    category: "marketing",
  },
  {
    id: 4,
    name: "Photoshop và Thiết kế đồ họa",
    price: 499000,
    image:
      "https://images.unsplash.com/photo-1561736778-92e52a7769ef?w=400&h=300&fit=crop",
    description:
      "Học Photoshop và thiết kế đồ họa từ cơ bản. Tạo poster, logo, banner chuyên nghiệp.",
    fullDescription:
      "Khóa học Photoshop và thiết kế đồ họa dành cho người mới bắt đầu. Bạn sẽ học cách sử dụng các công cụ cơ bản và nâng cao trong Photoshop, thiết kế logo, poster, banner, và các sản phẩm đồ họa chuyên nghiệp.",
    rating: 4.6,
    category: "design",
  },
  {
    id: 5,
    name: "Kỹ năng thuyết trình và diễn đạt",
    price: 399000,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
    description:
      "Phát triển kỹ năng thuyết trình, diễn đạt và giao tiếp hiệu quả trong công việc và cuộc sống.",
    fullDescription:
      "Khóa học kỹ năng thuyết trình và diễn đạt giúp bạn tự tin hơn khi nói trước đám đông. Bao gồm cách chuẩn bị nội dung, ngôn ngữ cơ thể, giọng nói, và xử lý tình huống khó khăn. Có nhiều bài tập thực hành.",
    rating: 4.5,
    category: "soft-skills",
  },
  {
    id: 6,
    name: "Đầu tư chứng khoán căn bản",
    price: 899000,
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop",
    description:
      "Học đầu tư chứng khoán từ cơ bản đến nâng cao. Phân tích kỹ thuật, cơ bản và quản lý rủi ro.",
    fullDescription:
      "Khóa học đầu tư chứng khoán toàn diện từ cơ bản đến nâng cao. Bạn sẽ học về thị trường chứng khoán, phân tích kỹ thuật, phân tích cơ bản, quản lý rủi ro, và xây dựng danh mục đầu tư hiệu quả.",
    rating: 4.8,
    category: "finance",
  },
];

export default mockProducts;
