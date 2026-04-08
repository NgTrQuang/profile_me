/** Vietnamese translations — default language */

const vi = {
  // Navigation
  nav: {
    home: 'Trang chủ',
    about: 'Giới thiệu',
    projects: 'Dự án',
    blog: 'Blog',
    contact: 'Liên hệ',
  },

  // Home page
  home: {
    availableForWork: 'Sẵn sàng nhận việc',
    tagline: 'Kỹ sư phần mềm',
    description:
      'Kỹ sư phần mềm Full-Stack với kinh nghiệm xây dựng các ứng dụng web có khả năng mở rộng và hệ thống thời gian thực sử dụng React và Node.js.',
    viewProjects: 'Xem dự án',
    contactMe: 'Liên hệ',
    downloadCV: 'Tải CV',
  },

  // About page
  about: {
    title: 'Giới thiệu',
    seoDescription: 'Tìm hiểu thêm về {name} — kỹ năng, kinh nghiệm và nền tảng.',
    bio1: 'Kỹ sư phần mềm Full-Stack với định hướng phát triển chuyên sâu về backend và hệ thống, có kinh nghiệm xây dựng các ứng dụng web có khả năng mở rộng và xử lý dữ liệu thời gian thực. Đã tham gia phát triển hệ thống giám sát và điều khiển thiết bị IoT, triển khai giao tiếp giữa thiết bị và server thông qua MQTT (EMQX).',
    bio2: 'Có kinh nghiệm thiết kế RESTful API với Node.js (Express), tổ chức hệ thống và tối ưu hiệu năng, đồng thời có nền tảng frontend với ReactJS để phát triển sản phẩm end-to-end.',
    bio3: 'Tư duy kỹ thuật tập trung vào việc phân tích bài toán, thiết kế hệ thống hợp lý và cân bằng giữa hiệu năng, khả năng mở rộng và tính dễ bảo trì. Hướng đến việc xây dựng các giải pháp bền vững, phù hợp với mục tiêu phát triển dài hạn của sản phẩm và doanh nghiệp.',
    bio4: 'Sẵn sàng học hỏi và thích nghi với các công nghệ mới, đặc biệt là Java trong môi trường production.',
    skillsTitle: 'Kỹ năng & Công nghệ',
    techStackTitle: 'Công nghệ sử dụng',
    experienceTitle: 'Kinh nghiệm làm việc',
    educationTitle: 'Học vấn',
    certificationsTitle: 'Chứng chỉ',
    interestsTitle: 'Sở thích',
  },

  // Projects page
  projects: {
    title: 'Dự án',
    seoDescription: 'Trưng bày các dự án gần đây và đóng góp mã nguồn mở.',
    subtitle: 'Bộ sưu tập các dự án tôi đã xây dựng — từ công cụ mã nguồn mở đến ứng dụng full-stack.',
    featured: 'Nổi bật',
    demo: 'Demo',
    source: 'Mã nguồn',
  },

  // Blog page
  blog: {
    title: 'Blog',
    seoDescription: 'Suy nghĩ về phát triển web, thiết kế và công nghệ.',
    subtitle: 'Suy nghĩ, hướng dẫn và chia sẻ về phát triển web và thiết kế.',
    noPosts: 'Chưa có bài viết. Hãy quay lại sau!',
    backToBlog: 'Quay lại Blog',
    minRead: 'phút đọc',
  },

  // Contact page
  contact: {
    title: 'Liên hệ',
    seoDescription: 'Liên hệ với {name}. Hãy cùng xây dựng điều gì đó.',
    subtitle:
      'Bạn có dự án trong đầu, muốn hợp tác, hay chỉ muốn chào hỏi? Hãy liên hệ. Tôi luôn sẵn sàng cho những cuộc trò chuyện và cơ hội thú vị.',
    emailLabel: 'Email',
    socialLabel: 'Mạng xã hội',
    copied: 'Đã sao chép!',
    copy: 'Sao chép',
  },

  // Footer
  footer: {
    builtWith: 'Được xây dựng với',
    and: 'Chính sách bảo mật | Điều khoản dịch vụ | Thông báo pháp lý',
  },

  // Command palette
  cmd: {
    placeholder: 'Nhập lệnh hoặc tìm kiếm...',
    noResults: 'Không tìm thấy kết quả.',
    navigation: 'Điều hướng',
    theme: 'Giao diện',
    lightMode: 'Chế độ sáng',
    darkMode: 'Chế độ tối',
  },

  // Theme toggle
  themeToggle: {
    switchToLight: 'Chuyển sang chế độ sáng',
    switchToDark: 'Chuyển sang chế độ tối',
  },

  // Language
  lang: {
    switchTo: 'English',
    label: 'VI',
  },

  // Experiences (translatable content)
  experiences: [
    {
      title: 'Kỹ sư Full-Stack',
      company: 'Công ty Cổ Phần Công nghệ & Đào tạo HPK Việt Nam',
      period: 'Tháng 12/2024 — Hiện tại',
      description: [
        'Phát triển và vận hành hệ thống phụ trợ cho ứng dụng giám sát và điều khiển thiết bị IoT (điện, nước) từ xa.',
        'Thiết kế và xây dựng RESTful API bằng Node.js (Express), xử lý dữ liệu và đồng bộ thiết bị trạng thái.',
        'Triển khai giao diện thời gian thực tiếp theo giữa thiết bị và máy chủ thông qua MQTT giao thức thông tin (EMQX), xử lý dữ liệu luồng giữa các thiết bị chính-phụ.',
        'Thiết kế cơ sở dữ liệu và mức độ ưu tiên nhằm hướng tới hệ thống bảo trì.',
        'Cấu hình và phát triển môi trường sản xuất sử dụng Nginx và PM2.',
      ],
    },
    {
      title: 'Lập trình viên Full-Stack',
      company: 'Freelancer',
      period: 'Tháng 12/2023 — Tháng 12/2024',
      description: [
        'Phát triển các hệ thống thương mại điện tử full-stack theo yêu cầu, bao gồm quản lý sản phẩm và xử lý đơn hàng.',
        'Xây dựng RESTful API với Node.js (Express), xử lý logic nghiệp vụ và tích hợp cơ sở dữ liệu MongoDB.',
        'Thiết kế giao diện responsive sử dụng ReactJS và TailwindCSS.',
        'Tùy chỉnh hệ thống theo nhiều yêu cầu khác nhau về chức năng và kiến trúc.',
      ],
    },
    {
      title: 'Cộng tác viên',
      company: 'Công ty TNHH Besoft',
      period: 'Tháng 9/2023 — Tháng 12/2023',
      description: [
        'Hỗ trợ xử lý và chuẩn hóa tài liệu theo yêu cầu dự án.',
        'Làm việc trong môi trường nhóm, tuân thủ quy trình thực tế.',
      ],
    },
  ],

  // Education
  education: {
    university: 'Đại học Cần Thơ',
    major: 'Công nghệ Thông tin',
    period: '2019 — 2024',
    gpa: 'GPA: 2.91/4.00',
  },

  // Certifications
  certifications: [
    { name: 'Chứng chỉ tiếng Anh', level: 'B1' },
    { name: 'Giấy phép lái xe', level: 'B2' },
  ],

  // Interests
  interests: [
    'Khám phá các dự án mã nguồn mở',
    'Xây dựng ứng dụng web thử nghiệm',
    'Đọc sách và nghe nhạc',
  ],

  // Projects data (translatable content)
  projectsData: [
    {
      title: 'IoT Monitoring & Control System',
      description:
        'Đã đóng góp vào việc xây dựng hệ thống phụ trợ để giám sát và điều khiển các thiết bị IoT (đồng hồ điện và nước). Làm việc với MQTT (EMQX) để giao tiếp thời gian thực giữa các thiết bị và máy chủ, và thiết kế API để xử lý và đồng bộ hóa dữ liệu thiết bị. Tập trung vào việc xử lý luồng dữ liệu thời gian thực và độ tin cậy của hệ thống. (Chi tiết không thể được chia sẻ do tính bảo mật)',
    },
    {
      title: 'Online Book Marketplace System',
      description:
        'Xây dựng nền tảng thương mại điện tử trực tuyến để mua bán sách, tập trung vào thiết kế hệ thống có khả năng mở rộng và kiến trúc sạch. Phát triển dịch vụ backend bằng Java (Spring Framework) với kiến trúc lớp (Controller - Service - Repository) để quản lý xác thực, danh mục sản phẩm, vòng đời đơn hàng và quy trình thanh toán. Thiết kế API RESTful và tích hợp VNPAY để xử lý giao dịch trực tuyến. Triển khai giao diện người dùng React với quản lý trạng thái tối ưu cho việc duyệt sản phẩm, thao tác giỏ hàng và tương tác thời gian thực. Phát triển bảng điều khiển quản trị để quản lý người dùng, kho hàng, đơn hàng và phân tích kinh doanh.',
    },
    {
      title: 'Dynamic Card Creator',
      description:
        'Đã phát triển một ứng dụng web để tạo thiệp cá nhân hóa trực tiếp trên trình duyệt, tập trung vào kiến ​​trúc dựa trên các thành phần linh hoạt và có thể tái sử dụng. Thiết kế hệ thống xử lý dữ liệu động cho phép người dùng cấu hình nội dung và hiển thị trên nhiều mẫu khác nhau. Nhấn mạnh tính dễ bảo trì và khả năng mở rộng trong thiết kế hệ thống giao diện người dùng.',
    },
    {
      title: 'The Weather Point',
      description:
        'Đã xây dựng một ứng dụng thời tiết thời gian thực tổng hợp và hiển thị dữ liệu thời tiết, chất lượng không khí và vị trí. Tập trung vào xử lý luồng dữ liệu bất đồng bộ, cập nhật thời gian thực và quản lý trạng thái hiệu quả. Thiết kế hệ thống để đảm bảo giao diện người dùng phản hồi nhanh và trải nghiệm người dùng mượt mà khi làm việc với dữ liệu thay đổi liên tục.',
    },
    {
      title: 'Portfolio Website',
      description:
        'Đã phát triển một portfolio cá nhân sử dụng Next.js và TypeScript, tập trung vào hiệu suất, SEO và khả năng mở rộng. Thiết kế kiến ​​trúc giao diện người dùng dạng mô-đun hỗ trợ nội dung đa ngôn ngữ, viết blog dựa trên Markdown và tùy chỉnh giao diện. Cấu trúc được thiết kế để dễ bảo trì và mở rộng lâu dài.',
    },
    {
      title: 'The Evolution of Modern Systems',
      description:
        'The Evolution of Modern Systems là một trang web thông tin trình bày sự tiến hóa của các hệ thống phần mềm và kiến trúc ứng dụng hiện đại theo từng giai đoạn. Nội dung được trình bày rõ ràng, dễ hiểu, phù hợp cho người xem tìm hiểu về các mô hình phát triển phần mềm hiện đại.',
    },
    {
      title: 'Financial Asset Statistics Website',
      description:
        'Financial Asset Statistics Website là ứng dụng web tương tác tập trung vào việc trình bày dữ liệu và thống kê về các tài sản tài chính theo cách rõ ràng và trực quan. Nó giúp người dùng khám phá các chỉ số tài chính và xu hướng một cách hiệu quả thông qua giao diện frontend hiện đại, thể hiện cả kiến trúc thông tin và kỹ thuật trực quan hóa dữ liệu.',
    },
    {
      title: 'ChatFlow — Ứng dụng chat Real-Time',
      description:
        'ChatFlow là nền tảng chat thời gian thực full-stack cho phép nhắn tin tức thì qua phòng công khai/riêng và tin nhắn trực tiếp. Hệ thống tích hợp xác thực, quản lý bạn bè, theo dõi trạng thái trực tuyến và cơ sở hạ tầng giao tiếp thời gian thực mở rộng với lưu trữ vĩnh viễn và bộ nhớ đệm.',
    },
  ],
};

export type Translations = typeof vi;
export default vi;
