export interface VinFastModel {
  id: string;
  model: string;
  type: string;
  priceEco: string;
  pricePlus: string;
  pricePlus2: string;
  distance: string;
  operate: string;
  charging: string;
  ava: string;
  name: string;
  tagline: string;
  description: string;
  basePrice: string;
  isNew?: boolean;
  colors: CarColor[];
  specs: { 
    tt1: string;
    tt2: string;
    tt3: string;
    tt4: string;
    tt5: string;
  };
  vfNameInComp: string;
  competitors: string[];
  comparisons: Comparison[];
  content: {
    ct1: string;
      ct11: string;
      ct12: string;
      ct13: string;
      ct14: string;
      ct15: string;
      ct16: string;
    ct2: string;
      ct21: string;
      ct22: string;
      ct23: string;
      ct24: string;
      ct25: string;
      ct26: string;
    ct3: string;
      ct31: string;
      ct32: string;
      ct33: string;
      ct34: string;
      ct35: string;
      ct36: string;
    ct4: string;
      ct41: string;
      ct42: string;
      ct43: string;
      ct44: string;
      ct45: string;
      ct46: string;
    ct5: string;
      ct51: string;
      ct52: string;
      ct53: string;
      ct54: string;
      ct55: string;
      ct56: string;
    ct6: string;
      ct61: string;
      ct62: string;
      ct63: string;
      ct64: string;
      ct65: string;
      ct66: string;
  }
}

export interface Comparison {
  parameter: string;
  values: string[]; // [VF value, competitor1 value, competitor2 value]
}

export interface CarColor {
  name: string;
  code: string;
  hex: string;
  image: string;
}

export interface CarSpec {
  label: string;
  value: string;
  icon?: string;
}

export const vinFastData: VinFastModel[] = [
  {
    id: 'vf3',
    model: 'VF3',
    type: "vf",
    priceEco: '299.000.000 VNĐ',
    pricePlus: '',
    pricePlus2: '',
    distance: '215 KM',
    operate: '40,2 Hp',
    charging: '36 phút',
    ava: `<img src='/asset/VF/VF3/vf3section.png' alt='Ảnh vf3' class='h-[200px]' />`,
    name: "VinFast VF3",
    tagline: "Xe điện nhỏ gọn thông minh",
    description:
      "Thiết kế tối giản, phù hợp đô thị, công nghệ hiện đại với chi phí vận hành tiết kiệm.",
    basePrice: "299.000.000",
    isNew: true,
    colors: [
      {
        name: "Vàng",
        code: "vang",
        hex: "#FFD700",
        image:"/asset/VF/VF3/vf3section.png"
      },
      {
        name: "Xanh rêu",
        code: "xanh-reu",
        hex: "#4B6F3F",
        image:
          "/asset/VF/VF3/VinFast-VF3-mau-xanh-reu.png",
      },
      {
        name: "Xanh lơ Cyan",
        code: "xanh-lo-cyan",
        hex: "#57AEC6",
        image:
          "/asset/VF/VF3/VinFast-VF3-mau-xanh-lo-Cyan.png",
      },
      {
        name: "Xanh dương",
        code: "xanh-duong",
        hex: "#3659B7",
        image:
          "/asset/VF/VF3/VinFast-VF3-mau-xanh-duong.png",
      },
      {
        name: "Xanh bộ đội",
        code: "xanh-bo-doi",
        hex: "#4F554A",
        image:
          "/asset/VF/VF3/VinFast-VF3-mau-xanh-bo-doi.png",
      },
      {
        name: "Xám",
        code: "xam",
        hex: "#8E8E8E",
        image:
          "/asset/VF/VF3/VinFast-VF3-mau-xam.png",
      },
    ],
    specs: {
      tt1: 'VinFast',
      tt2: 'VF 3',
      tt3: '<p><span class="text-4xl font-bold">205-210</span><span class="font-bold text-2xl">km</span> Quãng đường 1 lần sạc</p>',
      tt4: '<p><span class="text-4xl font-bold">36</span><span class="font-bold text-2xl">phút (10%-70%)</span> Thời gian sạc</p>',
      tt5: '<p><span class="text-4xl font-bold">4</span> Số chỗ ngồi</p>',
    },
    vfNameInComp: '',
    competitors: [''],
    comparisons: [
      {
        parameter: 'Động cơ',
        values: [
          '01 Motor',
        ],
      },
      {
        parameter: 'Công suất tối đa (kW)',
        values: [
          '30',
        ],
      },
      {
        parameter: 'Mô men xoắn cực đại (Nm)',
        values: [
          '110',
        ],
      },
      {
        parameter: 'Tăng tốc',
        values: [
          '5,3s (0-50 km/h)',
        ],
      },
      {
        parameter: 'Quãng đường chạy một lần sạc đầy (km)',
        values: [
          '215',
        ],
      },
      {
        parameter: 'Thời gian nạp pin nhanh nhất',
        values: [
          '36 phút (10% – 70%)',
        ],
      },
      {
        parameter: 'Dẫn động',
        values: [
          'RWD/Cầu sau',
        ],
      },
    ],
    content: {
    ct1: '<h1 class="uppercase font-bold text-3xl">VinFast VF 3 - Xe nhỏ, giá trị lớn.</h1><p>Với thiết kế tối giản, nhỏ gọn, cá tính và năng động, VinFast VF 3 sẽ luôn cùng bạn hoà nhịp với xu thế công nghệ di chuyển xanh toàn cầu, trải nghiệm giá trị trên mỗi hành trình, và tự do thể hiện phong cách sống.</p><iframe width="1230" height="722" src="https://www.youtube.com/embed/z56derDAHVo" title="VINFAST VF 3 - CẢM HỨNG TỪ THẾ GIỚI TRUYỆN TRANH | OFFICIAL TVC" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
      ct11: '',
      ct12: '',
      ct13: '',
      ct14: '',
      ct15: '',
      ct16: '',
    ct2: `<h1>VinFast VF 3 - Tự do sáng tạo, toả sáng chất riêng!</h1>
              <p>Với dải màu ngoại thất đa dạng và độc đáo, bao gồm 7 tùy chọn màu sắc trẻ trung và thời thượng, 
              VF 3 là sự lựa chọn hoàn hảo giúp bạn thoả sức thể hiện sự khác biệt và cá tính của riêng mình. 
              Dù bạn là ai, hãy lựa chọn màu sắc và trang bị VF 3 theo sở thích của bạn, và cùng VinFast biến ước mơ của bạn thành hiện thực.</p>
              <div><img src="/images/vf3-2.jpg" alf="Ảnh vf3" /><img src="/images/vf3-3.jpg" alf="Ảnh vf3" /></div>`,
      ct21: '',
      ct22: '',
      ct23: '',
      ct24: '',
      ct25: '',
      ct26: '',
    ct3: '<h1>La-zăng vượt trội về kích thước & phong cách.</h1><p>VF 3 là mẫu xe hiếm hoi trong phân khúc xe sở hữu la-zăng kích thước 16 inch, không chỉ tạo điểm nhấn về thiết kế mà còn góp phần gia tăng khả năng di chuyển trên địa hình đa dạng trong đô thị. Đặc biệt, VF 3 được trang bị tuỳ chọn ốp la-zăng, tăng thêm vẻ cá tính, sự sang trọng cho chiếc xe.</p>',
      ct31: '',
      ct32: '',
      ct33: '',
      ct34: '',
      ct35: '',
      ct36: '',
    ct4: '<h1>VinFast VF 3 - Biểu tượng mới của cuộc sống đô thị.</h1><p>Vượt lên trên một phương tiện di chuyển thông thường, VinFast VF 3 là biểu tượng mới mang tính cách mạng trong cuộc sống đô thị. Với thiết kế hiện đại, hiệu suất vận hành linh hoạt, tính năng an toàn tiên tiến, cùng chi phí vận hành siêu rẻ, VF 3 sẽ mở ra một cách tiếp cận hoàn toàn mới trong việc lựa chọn phương tiện di chuyển hàng ngày, mang lại sự thuận tiện, dễ dàng và đặc biệt thoải mái cho tất cả mọi người.</p>',
      ct41: '',
      ct42: '',
      ct43: '',
      ct44: '',
      ct45: '',
      ct46: '',
    ct5: '<h1>VF 3 không chỉ là một chiếc xe điện tiên tiến.</h1><p>Mà còn là một tác phẩm nghệ thuật kết hợp giữa công nghệ và sự sáng tạo trong thiết kế.</p>',
      ct51: '',
      ct52: '',
      ct53: '',
      ct54: '',
      ct55: '',
      ct56: '',
    ct6: '<h1>VinFast VF 3 - Luôn đủ chỗ cho mọi người!</h1><p>Thiết kế thông minh và không gian nội thất tối ưu hóa của VF 3 mang lại trải nghiệm di chuyển tiện lợi, đảm bảo sự thoải mái và tiện nghi cho cả 4 chỗ ngồi. Màu sắc nội thất trang nhã, trẻ trung và cá tính, cùng chất liệu thân thiện tạo ra một không gian đặc biệt, nơi chứa đựng những kỷ niệm đáng nhớ trên mọi hành trình khám phá phong cách sống của riêng bạn!</p>',
      ct61: '',
      ct62: '',
      ct63: '',
      ct64: '',
      ct65: '',
      ct66: '',
    }
  },
  {
    id: 'vf5',
    model: 'VF5',
    type: "vf",
    priceEco: '529.000.000 VNĐ',
    pricePlus: '',
    pricePlus2: '',
    distance: '326,4 KM',
    operate: '134 Hp',
    charging: '33 phút',
    ava: `<img src='/asset/VF/VF5/vinfast-vf5-red.png' alt='Ảnh vf5' class='h-[200px]' />`,
    name: "VinFast VF5",
    tagline: "SUV điện đa năng",
    description:
      "Không gian rộng rãi, khả năng vận hành mạnh mẽ, phù hợp cho gia đình và du lịch.",
    basePrice: "529.000.000",
    colors: [
      {
        name: "Trắng",
        code: "trang",
        hex: "#F9F9F9",
        image:
          "/asset/VF/VF5/vinfast-vf5-white.png",
      },
      {
        name: "Cam",
        code: "cam",
        hex: "#A46322",
        image:
          "/asset/VF/VF5/vinfast-vf5-orange.png",
      },
      {
        name: "Cam trắng",
        code: "cam-trang",
        hex: "#A46322",
        image:
          "/asset/VF/VF5/vinfast-vf5-orange-white.png",
      },
      {
        name: "Đỏ",
        code: "do",
        hex: "#67100C",
        image:
          "/asset/VF/VF5/vinfast-vf5-red.png",
      },
      {
        name: "Đỏ trắng",
        code: "do-trang",
        hex: "#67100C",
        image:
          "/asset/VF/VF5/vinfast-vf5-red-white.png",
      },
      {
        name: "Xanh",
        code: "xanh",
        hex: "#19244A",
        image:
          "/asset/VF/VF5/vinfast-vf5-blue.png",
      },
    ],
    specs: {
      tt1: 'VinFast',
      tt2: 'VF 5 plus',
      tt3: '<p><span class="text-4xl font-bold">362,4</span><span class="font-bold text-2xl">km</span> Quãng đường 1 lần sạc</p>',
      tt4: '<p><span class="text-4xl font-bold">31</span><span class="font-bold text-2xl">phút (10%-70%)</span> Thời gian sạc</p>',
      tt5: `<p><span class="text-4xl font-bold">5</span><span class="font-bold text-2xl">chỗ</span> Số chỗ ngồi<br>
      Bảo hành xe mới: 7 năm/ 160.000 km. Pin cao áp (Mua lần đầu theo xe mới): 8 năm/ không giới hạn số km.</p>`,
    },
    vfNameInComp: 'VinFast VF5 Plus',
    competitors: ['BYD Dolphin GLX', 'ORA Good Cat (bản cao cấp)'],
    comparisons: [
      {
        parameter: 'Giá bán (ước tính)',
        values: [
          '508 triệu VNĐ (niêm yết 529 triệu, sau ưu đãi 4% + hỗ trợ lăn bánh; kèm pin)',
          '659 triệu VNĐ (niêm yết, không ưu đãi lớn)',
          '538-588 triệu VNĐ (niêm yết, tùy pin LFP/Ternary)',
        ],
      },
      {
        parameter: 'Phạm vi hoạt động',
        values: [
          '326 km (NEDC, thực tế ~260 km)',
          '405 km (NEDC, thực tế ~320 km)',
          '420 km (NEDC, thực tế ~340 km)',
        ],
      },
      {
        parameter: 'Công suất',
        values: [
          '134 mã lực (100 kW), 135 Nm',
          '94 mã lực (70 kW), 180 Nm',
          '171 mã lực (126 kW), 250 Nm',
        ],
      },
      {
        parameter: 'Thời gian sạc',
        values: [
          '30 phút (10-70% DC); 6 giờ AC đầy',
          '30 phút (30-80% DC); 6.5 giờ AC đầy',
          '45 phút (0-80% DC); 8 giờ AC đầy',
        ],
      },
      {
        parameter: 'Điểm an toàn',
        values: [
          '4-5 sao (dự kiến ASEAN NCAP; 6 túi khí, ABS, EBD, ESC, ADAS Level 2, camera 360°, hỗ trợ phanh khẩn cấp)',
          '5 sao (Euro NCAP; 7 túi khí, ABS, ESC, hỗ trợ tránh va chạm, cảnh báo lệch làn)',
          '5 sao (C-NCAP; 6 túi khí, ABS, EBD, kiểm soát ổn định, hỗ trợ đỗ xe)',
        ],
      },
    ],
    content: {
    ct1: '<h1>VinFast VF 5 Plus. Xứng danh “đàn anh” Xanh Sành hợp ví</h1><p>Sống thần thái và phong cách cùng dải màu mới đầy cảm hứng đến từ “đàn anh” VF 5 Plus. VF 5 Plus với dải màu đa dạng, gồm 4 màu cơ bản đã có là Xám, Đỏ, Xanh dương, Trắng; và 4 màu nâng cao mới là Vàng, Hồng tím, Xanh dương nhạt và Xanh lá nhạt.</p>',
      ct11: `<h3>VF 5 – Summer Yellow</h3><h4 class="uppercase">Tự Teen Dẫn Lối Tự Do</h4><p>Chọn khai mở cung đường mới thay vì lối mòn rập khuôn, năng lượng từ Summer Yellow giúp Kaity tự tin vào chất trẻ trung trong mình – để tinh thần tự do phóng khoáng luôn vượt lên những rào cản không tên. Giới hạn sẽ không bao giờ nằm trong từ điển cuộc sống, một khi có sắc vàng của VinFast 5 Plus dẫn lối.</p>`,
      ct12: '<h3>VF 5 – Urban mint</h3><h4 class="uppercase">Phiêu nhịp sống xanh</h4><p>Hiện đại với sắc xanh tươi mát, sống động và thân thiện với môi trường. Màu xanh mint mang đến cho Hà cảm giác tươi mới, đầy năng lượng, giúp Hà tận hưởng nhịp sống đô thị một cách trọn vẹn và đầy cảm hứng.</p>',
      ct13: '<h3>VF 5 – Aquatic Azure</h3><h4 class="uppercase">Chuyển động đa Z năng</h4><p>Hơn cả một màu sắc, Aquatic Azure đối với Amee đại diện cho cá tính đậm nét Gen Z, chất “đa-zi-năng” và phong cách trẻ trung năng động. Mọi chuyển động cùng sắc xanh Aquatic Azure chính là tuyên ngôn cho thần thái khác biệt của hội Gen Z.</p>',
      ct14: '<h3>VF 5 – Zenith Grey</h3><h4 class="uppercase">Toàn tâm công tác</h4><p>Lựa chọn sắc xám chính là lựa chọn thành công – toàn tâm toàn ý cho mọi “công task” trên hành trình sự nghiệp. Là biểu tượng của sự uy tín và mạnh mẽ, GreyD tin rằng Zenith Grey sẽ mang đến thần thái chuyên nghiệp, đẳng cấp và tự tin trên mọi con đường bạn lựa chọn.</p>',
      ct15: '',
      ct16: '',
    ct2: '<h1>VinFast VF 3 - Tự do sáng tạo, toả sáng chất riêng!</h1><p>Với dải màu ngoại thất đa dạng và độc đáo, bao gồm 7 tùy chọn màu sắc trẻ trung và thời thượng, VF 3 là sự lựa chọn hoàn hảo giúp bạn thoả sức thể hiện sự khác biệt và cá tính của riêng mình. Dù bạn là ai, hãy lựa chọn màu sắc và trang bị VF 3 theo sở thích của bạn, và cùng VinFast biến ước mơ của bạn thành hiện thực.</p>',
      ct21: '',
      ct22: '',
      ct23: '',
      ct24: '',
      ct25: '',
      ct26: '',
    ct3: '<h1>La-zăng vượt trội về kích thước & phong cách.</h1><p>VF 3 là mẫu xe hiếm hoi trong phân khúc xe sở hữu la-zăng kích thước 16 inch, không chỉ tạo điểm nhấn về thiết kế mà còn góp phần gia tăng khả năng di chuyển trên địa hình đa dạng trong đô thị. Đặc biệt, VF 3 được trang bị tuỳ chọn ốp la-zăng, tăng thêm vẻ cá tính, sự sang trọng cho chiếc xe.</p>',
      ct31: '',
      ct32: '',
      ct33: '',
      ct34: '',
      ct35: '',
      ct36: '',
    ct4: '<h1>VinFast VF 3 - Biểu tượng mới của cuộc sống đô thị.</h1><p>Vượt lên trên một phương tiện di chuyển thông thường, VinFast VF 3 là biểu tượng mới mang tính cách mạng trong cuộc sống đô thị. Với thiết kế hiện đại, hiệu suất vận hành linh hoạt, tính năng an toàn tiên tiến, cùng chi phí vận hành siêu rẻ, VF 3 sẽ mở ra một cách tiếp cận hoàn toàn mới trong việc lựa chọn phương tiện di chuyển hàng ngày, mang lại sự thuận tiện, dễ dàng và đặc biệt thoải mái cho tất cả mọi người.</p>',
      ct41: '',
      ct42: '',
      ct43: '',
      ct44: '',
      ct45: '',
      ct46: '',
    ct5: '<h1>VF 3 không chỉ là một chiếc xe điện tiên tiến.</h1><p>Mà còn là một tác phẩm nghệ thuật kết hợp giữa công nghệ và sự sáng tạo trong thiết kế.</p>',
      ct51: '',
      ct52: '',
      ct53: '',
      ct54: '',
      ct55: '',
      ct56: '',
    ct6: '<h1>VinFast VF 3 - Luôn đủ chỗ cho mọi người!</h1><p>Thiết kế thông minh và không gian nội thất tối ưu hóa của VF 3 mang lại trải nghiệm di chuyển tiện lợi, đảm bảo sự thoải mái và tiện nghi cho cả 4 chỗ ngồi. Màu sắc nội thất trang nhã, trẻ trung và cá tính, cùng chất liệu thân thiện tạo ra một không gian đặc biệt, nơi chứa đựng những kỷ niệm đáng nhớ trên mọi hành trình khám phá phong cách sống của riêng bạn!</p>',
      ct61: '',
      ct62: '',
      ct63: '',
      ct64: '',
      ct65: '',
      ct66: '',
    }
  },
  {
    id: 'vf6',
    model: 'VF6',
    type: "vf",
    priceEco: '689.000.000 VNĐ',
    pricePlus: '749.000.000 VNĐ',
    pricePlus2: '',
    distance: '326,4 KM',
    operate: '134 Hp',
    charging: '33 phút',
    ava: `<img src='/asset/VF/VF6/vf6grey.jpg' alt='Ảnh vf6' class='h-[200px]' />`,
    name: "VinFast VF7",
    tagline: "SUV cao cấp thông minh",
    description:
      "Thiết kế sang trọng, công nghệ ADAS tiên tiến, trải nghiệm lái xe đẳng cấp.",
    basePrice: "799.000.000",
    colors: [
      {
        name: "Xanh lá",
        code: "xanh-la",
        hex: "#4E6E5D",
        image:
          "/asset/VF/VF7/vinfast-vf7-xanh-la.png",
      },
      {
        name: "Đỏ",
        code: "do",
        hex: "#C23234",
        image: "/asset/VF/VF7/vf7-red.png",
      },
      {
        name: "Xanh dương",
        code: "xanh-duong",
        hex: "#3467CA",
        image: "/asset/VF/VF7/vf7-blue.png",
      },
      {
        name: "Trắng",
        code: "trang",
        hex: "#EEEFF3",
        image: "/asset/VF/VF7/vf7-white.png",
      },
      {
        name: "Xám",
        code: "xam",
        hex: "#A7A7B0",
        image: "/asset/VF/VF7/vf7-silver.png",
      },
    ],
    specs: {
      tt1: 'VinFast',
      tt2: 'VF 5 plus',
      tt3: '<p><span class="text-4xl font-bold">362,4</span><span class="font-bold text-2xl">km</span> Quãng đường 1 lần sạc</p>',
      tt4: '<p><span class="text-4xl font-bold">31</span><span class="font-bold text-2xl">phút (10%-70%)</span> Thời gian sạc</p>',
      tt5: `<p><span class="text-4xl font-bold">5</span><span class="font-bold text-2xl">chỗ</span> Số chỗ ngồi<br>
      Bảo hành xe mới: 7 năm/ 160.000 km. Pin cao áp (Mua lần đầu theo xe mới): 8 năm/ không giới hạn số km.</p>`,
    },
    vfNameInComp: 'VinFast VF6 (Eco/Plus)',
    competitors: ['BYD Atto 3 (Dynamic/Premium)', 'Hyundai Kona Electric (Standard/Long Range)'],
    comparisons: [
      {
        parameter: 'Giá bán (ước tính)',
        values: [
          '675-749 triệu VNĐ (Eco 675 triệu, Plus 749 triệu sau ưu đãi 4%; lăn bánh ~720-800 triệu, kèm pin)',
          '766-886 triệu VNĐ (Dynamic 766 triệu, Premium 886 triệu; lăn bánh ~850-980 triệu)',
          '850-950 triệu VNĐ (ước tính nhập khẩu, bản Standard ~850 triệu; chưa ưu đãi lớn)',
        ],
      },
      {
        parameter: 'Phạm vi hoạt động',
        values: [
          '399-468 km (NEDC, thực tế ~350-420 km; pin 59.6 kWh)',
          '410-480 km (NEDC, thực tế ~350-420 km; pin 49.92-60.48 kWh)',
          '420 km (EPA, thực tế ~350 km; pin 64.8 kWh)',
        ],
      },
      {
        parameter: 'Công suất',
        values: [
          '174-201 mã lực (128-150 kW), 250-310 Nm',
          '204 mã lực (150 kW), 310 Nm',
          '201 mã lực (150 kW), 255 Nm',
        ],
      },
      {
        parameter: 'Thời gian sạc',
        values: [
          '25-30 phút (10-70% DC); 6-7 giờ AC đầy',
          '30 phút (10-80% DC); 7-9 giờ AC đầy',
          '43 phút (10-80% DC); 5-6 giờ AC đầy',
        ],
      },
      {
        parameter: 'Điểm an toàn',
        values: [
          '5 sao (dự kiến ASEAN NCAP/Global NCAP; 8 túi khí, ABS, EBD, ESC, 20 ADAS Level 2 như hỗ trợ phanh khẩn cấp, camera 360°, cảnh báo lệch làn)',
          '5 sao (Euro NCAP/ASEAN NCAP; 7 túi khí, 91% bảo vệ người lớn, ABS, ESC, hỗ trợ tránh va chạm, cảnh báo điểm mù)',
          '5 sao (Euro NCAP/ASEAN NCAP; 6 túi khí, ABS, ESC, ADAS nâng cao, hỗ trợ tránh va chạm, cảnh báo lệch làn)',
        ],
      },
    ],
    content: {
    ct1: '',
      ct11: '',
      ct12: '',
      ct13: '',
      ct14: '',
      ct15: '',
      ct16: '',
    ct2: '<h1>VinFast VF 3 - Tự do sáng tạo, toả sáng chất riêng!</h1><p>Với dải màu ngoại thất đa dạng và độc đáo, bao gồm 7 tùy chọn màu sắc trẻ trung và thời thượng, VF 3 là sự lựa chọn hoàn hảo giúp bạn thoả sức thể hiện sự khác biệt và cá tính của riêng mình. Dù bạn là ai, hãy lựa chọn màu sắc và trang bị VF 3 theo sở thích của bạn, và cùng VinFast biến ước mơ của bạn thành hiện thực.</p>',
      ct21: '',
      ct22: '',
      ct23: '',
      ct24: '',
      ct25: '',
      ct26: '',
    ct3: '<h1>La-zăng vượt trội về kích thước & phong cách.</h1><p>VF 3 là mẫu xe hiếm hoi trong phân khúc xe sở hữu la-zăng kích thước 16 inch, không chỉ tạo điểm nhấn về thiết kế mà còn góp phần gia tăng khả năng di chuyển trên địa hình đa dạng trong đô thị. Đặc biệt, VF 3 được trang bị tuỳ chọn ốp la-zăng, tăng thêm vẻ cá tính, sự sang trọng cho chiếc xe.</p>',
      ct31: '',
      ct32: '',
      ct33: '',
      ct34: '',
      ct35: '',
      ct36: '',
    ct4: '<h1>VinFast VF 3 - Biểu tượng mới của cuộc sống đô thị.</h1><p>Vượt lên trên một phương tiện di chuyển thông thường, VinFast VF 3 là biểu tượng mới mang tính cách mạng trong cuộc sống đô thị. Với thiết kế hiện đại, hiệu suất vận hành linh hoạt, tính năng an toàn tiên tiến, cùng chi phí vận hành siêu rẻ, VF 3 sẽ mở ra một cách tiếp cận hoàn toàn mới trong việc lựa chọn phương tiện di chuyển hàng ngày, mang lại sự thuận tiện, dễ dàng và đặc biệt thoải mái cho tất cả mọi người.</p>',
      ct41: '',
      ct42: '',
      ct43: '',
      ct44: '',
      ct45: '',
      ct46: '',
    ct5: '<h1>VF 3 không chỉ là một chiếc xe điện tiên tiến.</h1><p>Mà còn là một tác phẩm nghệ thuật kết hợp giữa công nghệ và sự sáng tạo trong thiết kế.</p>',
      ct51: '',
      ct52: '',
      ct53: '',
      ct54: '',
      ct55: '',
      ct56: '',
    ct6: '<h1>VinFast VF 3 - Luôn đủ chỗ cho mọi người!</h1><p>Thiết kế thông minh và không gian nội thất tối ưu hóa của VF 3 mang lại trải nghiệm di chuyển tiện lợi, đảm bảo sự thoải mái và tiện nghi cho cả 4 chỗ ngồi. Màu sắc nội thất trang nhã, trẻ trung và cá tính, cùng chất liệu thân thiện tạo ra một không gian đặc biệt, nơi chứa đựng những kỷ niệm đáng nhớ trên mọi hành trình khám phá phong cách sống của riêng bạn!</p>',
      ct61: '',
      ct62: '',
      ct63: '',
      ct64: '',
      ct65: '',
      ct66: '',
    }
  },
  {
    id: 'vf7',
    model: 'VF7',
    type: "vf",
    priceEco: '799.000.000 VNĐ',
    pricePlus: '949.000.000 VNĐ',
    pricePlus2: '969.000.000 VNĐ',
    distance: '480 KM',
    operate: '201 Hp',
    charging: '25 phút',
    ava: `<img src='/asset/VF/VF7/vf7-white.png' alt='Ảnh vf7' class='h-[200px]' />`,
    name: "VinFast VF7",
    tagline: "SUV cao cấp thông minh",
    description:
      "Thiết kế sang trọng, công nghệ ADAS tiên tiến, trải nghiệm lái xe đẳng cấp.",
    basePrice: "799.000.000",
    colors: [
      {
        name: "Xanh lá",
        code: "xanh-la",
        hex: "#4E6E5D",
        image:
          "/asset/VF/VF7/vinfast-vf7-xanh-la.png",
      },
      {
        name: "Đỏ",
        code: "do",
        hex: "#C23234",
        image: "/asset/VF/VF7/vf7-red.png",
      },
      {
        name: "Xanh dương",
        code: "xanh-duong",
        hex: "#3467CA",
        image: "/asset/VF/VF7/vf7-blue.png",
      },
      {
        name: "Trắng",
        code: "trang",
        hex: "#EEEFF3",
        image: "/asset/VF/VF7/vf7-white.png",
      },
      {
        name: "Xám",
        code: "xam",
        hex: "#A7A7B0",
        image: "/asset/VF/VF7/vf7-silver.png",
      },
    ],
    specs: {
      tt1: 'Vinfast VF 7',
      tt2: '',
      tt3: '<p><span class="text-4xl font-bold">431</span><span class="font-bold text-2xl">km</span> Quãng đường 1 lần sạc</p>',
      tt4: '<p><span class="text-4xl font-bold">5,8 </span><span class="font-bold text-2xl">s</span> Tăng tốc 0-100Km/h</p>',
      tt5: '<p><span class="text-4xl font-bold">8</span><span class="font-bold text-2xl">túi khí</span> Trang bị an toàn</p>',
    },
    vfNameInComp: 'VF 7 Plus',
    competitors: ['VF 7 Eco'],
    comparisons: [
      {
        parameter: 'Chiều dài cơ sở',
        values: [
          '2.840 mm',
          '2.840 mm',
        ],
      },
      {
        parameter: 'Dài x Rộng x Cao (mm)',
        values: [
          '4.545 x 1.890 x 1.635,75',
          '4.545 x 1.890 x 1.635,75',
        ],
      },
      {
        parameter: 'Quãng đường chạy một lần sạc đầy (km)*',
        values: [
          '498',
          '496',
        ],
      },
      {
        parameter: 'Công suất tối đa (kW)',
        values: [
          '130',
          '150',
        ],
      },
      {
        parameter: 'Mô men xoắn cực đại (Nm)',
        values: [
          '250',
          '310',
        ],
      },
            {
        parameter: 'Dung lượng pin khả dụng (kWh)',
        values: [
          '59,6',
          '70,8',
        ],
      },
    ],
    content: {
    ct1: `<h1>VinFast VF 7 là một bước tiến đột phá trong thiết kế xe ô tô của VinFast</h1>`,
      ct11: `<img src="/images/vf7/vf7-1.jpg" alt="Ảnh vf7" />
      <p>Với thiết kế tối giản, nhỏ gọn, cá tính và năng động, VinFast VF 3 sẽ luôn cùng bạn hoà nhịp với xu thế công nghệ di chuyển xanh toàn cầu, trải nghiệm giá trị trên mỗi hành trình, và tự do thể hiện phong cách sống.</p>`,
      ct12: `<h3>Triết lý thiết kế “Vũ Trụ Phi Đối Xứng"</h3>
      <p>Thiết kế ngoại thất thể hiện sự tự do, cá tính, mạnh mẽ và thể thao, thoả mãn mọi tâm hồn đam mê thẩm mỹ và tốc độ</p>`,
      ct13: `<h3>Thiết kế nội thất tập trung vào người lái</h3>
      <p>Thiết kế nội thất tập trung vào người lái, kiến tạo không gian trải nghiệm phóng khoáng, tự do và tràn đầy năng lượng.</p>`,
      ct14: '',
      ct15: '',
      ct16: '',
    ct2: '<h1>VinFast VF 3 - Tự do sáng tạo, toả sáng chất riêng!</h1><p>Với dải màu ngoại thất đa dạng và độc đáo, bao gồm 7 tùy chọn màu sắc trẻ trung và thời thượng, VF 3 là sự lựa chọn hoàn hảo giúp bạn thoả sức thể hiện sự khác biệt và cá tính của riêng mình. Dù bạn là ai, hãy lựa chọn màu sắc và trang bị VF 3 theo sở thích của bạn, và cùng VinFast biến ước mơ của bạn thành hiện thực.</p>',
      ct21: '',
      ct22: '',
      ct23: '',
      ct24: '',
      ct25: '',
      ct26: '',
    ct3: '<h1>La-zăng vượt trội về kích thước & phong cách.</h1><p>VF 3 là mẫu xe hiếm hoi trong phân khúc xe sở hữu la-zăng kích thước 16 inch, không chỉ tạo điểm nhấn về thiết kế mà còn góp phần gia tăng khả năng di chuyển trên địa hình đa dạng trong đô thị. Đặc biệt, VF 3 được trang bị tuỳ chọn ốp la-zăng, tăng thêm vẻ cá tính, sự sang trọng cho chiếc xe.</p>',
      ct31: '',
      ct32: '',
      ct33: '',
      ct34: '',
      ct35: '',
      ct36: '',
    ct4: '<h1>VinFast VF 3 - Biểu tượng mới của cuộc sống đô thị.</h1><p>Vượt lên trên một phương tiện di chuyển thông thường, VinFast VF 3 là biểu tượng mới mang tính cách mạng trong cuộc sống đô thị. Với thiết kế hiện đại, hiệu suất vận hành linh hoạt, tính năng an toàn tiên tiến, cùng chi phí vận hành siêu rẻ, VF 3 sẽ mở ra một cách tiếp cận hoàn toàn mới trong việc lựa chọn phương tiện di chuyển hàng ngày, mang lại sự thuận tiện, dễ dàng và đặc biệt thoải mái cho tất cả mọi người.</p>',
      ct41: '',
      ct42: '',
      ct43: '',
      ct44: '',
      ct45: '',
      ct46: '',
    ct5: '<h1>VF 3 không chỉ là một chiếc xe điện tiên tiến.</h1><p>Mà còn là một tác phẩm nghệ thuật kết hợp giữa công nghệ và sự sáng tạo trong thiết kế.</p>',
      ct51: '',
      ct52: '',
      ct53: '',
      ct54: '',
      ct55: '',
      ct56: '',
    ct6: '<h1>VinFast VF 3 - Luôn đủ chỗ cho mọi người!</h1><p>Thiết kế thông minh và không gian nội thất tối ưu hóa của VF 3 mang lại trải nghiệm di chuyển tiện lợi, đảm bảo sự thoải mái và tiện nghi cho cả 4 chỗ ngồi. Màu sắc nội thất trang nhã, trẻ trung và cá tính, cùng chất liệu thân thiện tạo ra một không gian đặc biệt, nơi chứa đựng những kỷ niệm đáng nhớ trên mọi hành trình khám phá phong cách sống của riêng bạn!</p>',
      ct61: '',
      ct62: '',
      ct63: '',
      ct64: '',
      ct65: '',
      ct66: '',
    }
  },
  {
    id: 'vf8',
    model: 'VF8',
    type: "vf",
    priceEco: '1.499.000.000 VNĐ',
    pricePlus: '1.699.000.000 VNĐ',
    pricePlus2: '',
    distance: '562 KM',
    operate: '402 Hp',
    charging: '31 phút',
    ava: `<img src='/asset/VF/VF8/vinfast-8-black-green.png' alt='Ảnh vf8' class='h-[200px]' />`,
    name: "VinFast VF9",
    tagline: "SUV điện hạng E",
    description:
      "Không gian 7 chỗ rộng rãi, tiện nghi sang trọng, tầm hoạt động dài, phù hợp gia đình lớn hoặc doanh nghiệp.",
    basePrice: "1.491.000.000",
    colors: [
      {
        name: "Trắng",
        code: "trang",
        hex: "#F9F9F9",
        image: "/asset/VF/VF9/vinfast-9-white.png",
      },
      {
        name: "Đỏ",
        code: "do",
        hex: "#CD0222",
        image: "/asset/VF/VF9/vinfast-9-red.png",
      },
      {
        name: "Đen",
        code: "den",
        hex: "#000000",
        image: "/asset/VF/VF9/vinfast-9-black.png",
      },
      {
        name: "Xanh rêu",
        code: "xanh-reu",
        hex: "#4B6F3F",
        image:
          "/asset/VF/VF9/vinfast-9-xanh-reu.png",
      },
      {
        name: "Xanh dương",
        code: "xanh-duong",
        hex: "#0000ff",
        image: "/asset/VF/VF9/vinfast-9-blue.png",
      },
    ],
    specs: {
      tt1: 'Vinfast VF8',
      tt2: '',
      tt3: '<p><span class="text-4xl font-bold">5.58 </span><span class="font-bold text-2xl">giây</span> 0-100 Km/h</p>',
      tt4: '<p><span class="text-4xl font-bold">562</span><span class="font-bold text-2xl">km</span> Quãng đường/ 1lần sạc</p>',
      tt5: '<p><span class="text-4xl font-bold">31</span><span class="font-bold text-2xl">phút</span><span class="text-3xl">(10%-70%)</span> Hoặc 200.000km</p>',
    },
    vfNameInComp: 'VinFast VF8 Plus',
    competitors: ['VinFast VF8 Eco'],
    comparisons: [
      {
        parameter: 'Màu sắc',
        values: [
          '4 màu tiêu chuẩn và 3 màu nâng cao',
          '4 màu tiêu chuẩn và 3 màu nâng cao',
        ],
      },
      {
        parameter: 'Công suất',
        values: [
          '201 hp',
          '402 hp',
        ],
      },
      {
        parameter: 'Quãng đường chạy một lần sạc đầy (km)*',
        values: [
          '562 km (theo NEDC)',
          '457km (theo WLTP)',
        ],
      },
      {
        parameter: 'Trợ lý ảo',
        values: [
          'Trợ lý ảo ViVi',
          '	Trợ lý ảo ViVi',
        ],
      },
    ],
    content: {
    ct1: '<h1>Sẵn sàng cho mọi hành trình</h1><p>Với quãng đường di chuyển mỗi lần sạc đầy lên tới 562 km, kết hợp với hệ thống trạm sạc phủ sóng trên 63 tỉnh thành và nhiều ưu đãi đặc quyền dành riêng độc đáo, VinFast VF 8 cam kết sẵn sàng cùng bạn chinh phục mọi hành trình, cùng bạn tận hưởng không khí trong lành và khung cảnh thiên nhiên tươi đẹp trên mọi nẻo đường tại Việt Nam.</p>',
      ct11: '',
      ct12: '',
      ct13: '',
      ct14: '',
      ct15: '',
      ct16: '',
    ct2: '<h1>Thiết kế cá nhân hoá</h1><p>VF 8 Eco và VF 8 Plus đem đến đa dạng sự lựa chọn màu ngoại thất, phù hợp cho những chủ nhân yêu thích sự hiện đại, phong cách và sang trọng.</p>',
      ct21: '<p><span class="font-bold">Thiết kế khí động học:</span>Giảm lực cản không khí và tăng hiệu quả vận hành, đồng thời mang lại vẻ ngoài hiện đại và mạnh mẽ</p>.',
      ct22: '<p><span class=""font-bold>Gương chiếu hậu hiện đại:</span> Tự động lưu vị trí theo thói quen của chủ xe, tích hợp đèn báo rẽ và cảnh báo điểm mù tăng tăng cường sự an toàn cho Khách hàng.</p>',
      ct23: '<p><span class="font-bold">Cửa sổ trời toàn cảnh:</span> Tích hợp rèm điện, điều khiển đóng mở bằng giọng nói.</p>',
      ct24: '<p><span class="font-bold">Cảm biến và camera 360 độ:</span> Giúp tài xế dễ dàng quan sát và điều khiển trong không gian hẹp hay các khu vực đông đúc.</p>',
      ct25: '',
      ct26: '',
    ct3: '<h1>Thăng hạng đẳng cấp</h1><p>VF 8 Eco và VF 8 Plus dành cho những người hiểu rõ giá trị sang trọng và đẳng cấp, mong muốn tận hưởng trọn vẹn những trải nghiệm cho bản thân và gia đình.</p>',
      ct31: '<p><span class="font-bold">Hệ thống giám sát người lái:</span> Liên tục theo dõi và cảnh báo khi người lái mệt mỏi, vì bạn và gia đình.</p>',
      ct32: '<p><span class="font-bold">Ghế da vegan tích hợp sưởi và thông gió:</span> Đảm bảo sự thoải mái tối đa cho mọi hành trình, cho cả mùa hè và mùa đông.</p>',
      ct33: '<p><span class="font-bold">Vô lăng tối ưu cho mọi trải nghiệm:</span> Không chỉ tích hợp khả năng sưởi, vô lăng của VF 8 còn có thể ghi nhớ và tự động điều chỉnh theo thói quen lái xe của bạn.</p>',
      ct34: '<p><span class="font-bold">HUD tích hợp sẵn:</span> Hiển thị các thông tin quan trọng như tốc độ xe, chỉ dẫn đường đi, cảnh báo va chạm ngay trên kính lái, cho phép người lái theo dõi mọi thông tin mà không cần rời mắt khỏi đường.</p>',
      ct35: '',
      ct36: '',
    ct4: '<h1>Công nghệ tiên phong</h1><p>VF 8 Eco và VF 8 Plus là sự lựa chọn lý tưởng cho những người đam mê công nghệ, với trợ lý ảo tích hợp công nghệ AI tạo sinh, mang đến trải nghiệm tương tác và điều khiển xe thân thiện, gần gũi và thực sự hữu dụng.</p>',
      ct41: '<p><span class="font-bold">Trợ lý ảo VinFast LLM:</span> Trợ lý ảo ViVi phiên bản LLM được nâng cấp hoàn toàn mới, tích hợp trí tuệ nhân tạo không chỉ điều khiển xe mà còn có thể trò chuyện như một người bạn thân thiết. ViVi còn là một chuyên gia địa phương để đề xuất những quán ăn, những địa điểm thú vị gần bạn.</p>',
      ct42: '<p><span class="font-bold">Cập nhật từ xa:</span> Bên cạnh nâng cấp tại xưởng, VinFast cũng sẽ cung cấp dịch vụ nâng cấp xe từ xa, giúp bạn cập nhật phần mềm và tính năng mới nhất cho xe của mình một cách thuận tiện và tiết kiệm thời gian nhất.</p>',
      ct43: '<p><span class="font-bold">Ứng dụng VinFast:</span> Với ứng dụng VinFast, Khách hàng kiểm tra tình trạng của các trạm sạc, xem dữ liệu về xe, đặt lịch bảo dưỡng, trợ giúp. Quan trọng hơn, ứng dụng VinFast giúp điều khiển xe, bật điều hòa từ xa để bạn luôn thoải mái ngay từ khi bước lên xe.</p>',
      ct44: '',
      ct45: '',
      ct46: '',
    ct5: '<h1>An toàn của gia đình bạn là ưu tiên trên hết của VinFast</h1><p>Tất cả các xe VinFast tuân thủ các tiêu chuẩn an toàn nghiêm ngặt nhất và được trang bị những công nghệ hiện đại theo chuẩn quốc tế, mang lại sự yên tâm tuyệt đối cho gia đình bạn trên mọi chặng đường.</p>',
      ct51: `<p><span class="font-bold">Hệ thống 11 túi khí:</span> Sở hữu nhiều túi khí nhất trong phân khúc, bảo vệ bạn trong những trường hợp khẩn cấp.</p>`,
      ct52: `<p><span class="font-bold">Hệ thống 11 túi khí:</span> Sở hữu nhiều túi khí nhất trong phân khúc, bảo vệ bạn trong những trường hợp khẩn cấp.</p>`,
      ct53: '',
      ct54: '',
      ct55: '',
      ct56: '',
    ct6: '<h1>Công nghệ nâng tầm trải nghiệm</h1><p>Hệ thống trợ lái nâng cao của VinFast được trang bị công nghệ và trang thiết bị hiện đại nhất, mang đến trải nghiệm lái xe thư thái và dễ dàng. Điều này giúp bạn tận hưởng cuộc sống và kết nối với gia đình cũng như thiên nhiên một cách trọn vẹn!</p>',
      ct61: `<p><span class="font-bold">Giám sát hành trình thích ứng:</span> Hệ thống radar tiên tiến liên tục theo dõi tốc độ với xe trước và tự động điều chỉnh tương ứng.</p>`,
      ct62: `<p><span class="font-bold">Cảnh báo va chạm toàn diện:</span> Tự động cảnh báo và can thiệp khi có nguy cơ va chạm phía trước, khi có phương tiện cắt ngang phía sau, các điểm mù khi xe đang di chuyển.</p>`,
      ct63: `<p><span class="font-bold">Trợ lái khi có nguy cơ va chạm:</span> VF 8 tự động phanh khẩn cấp khi có nguy cơ va chạm xảy ra.</p>`,
      ct64: `<p><span class="font-bold">Trợ làn:</span> Không chỉ cảnh báo khi bạn đi lệch làn đường, VF 8 còn hỗ trợ giữ làn để trải nghiệm lái trên cao tốc trở nên toàn diện và thoải mái.</p>`,
      ct65: '',
      ct66: '',
    }
  },
  {
    id: 'vf9',
    model: 'VF9',
    type: "vf",
    priceEco: '1.499.000.000 VNĐ',
    pricePlus: '1.699.000.000 VNĐ',
    pricePlus2: '',
    distance: '626 KM',
    operate: '402 Hp',
    charging: '... phút',
    ava: `<img src='/asset/VF/VF9/vinfast-9-white.png' alt='Ảnh vf9' class='h-[200px]'/>`,
    name: "VinFast VF9",
    tagline: "SUV điện hạng E",
    description:
      "Không gian 7 chỗ rộng rãi, tiện nghi sang trọng, tầm hoạt động dài, phù hợp gia đình lớn hoặc doanh nghiệp.",
    basePrice: "1.491.000.000",
    colors: [
      {
        name: "Trắng",
        code: "trang",
        hex: "#F9F9F9",
        image: "/asset/VF/VF9/vinfast-9-white.png",
      },
      {
        name: "Đỏ",
        code: "do",
        hex: "#CD0222",
        image: "/asset/VF/VF9/vinfast-9-red.png",
      },
      {
        name: "Đen",
        code: "den",
        hex: "#000000",
        image: "/asset/VF/VF9/vinfast-9-black.png",
      },
      {
        name: "Xanh rêu",
        code: "xanh-reu",
        hex: "#4B6F3F",
        image:
          "/asset/VF/VF9/vinfast-9-xanh-reu.png",
      },
      {
        name: "Xanh dương",
        code: "xanh-duong",
        hex: "#0000ff",
        image: "/asset/VF/VF9/vinfast-9-blue.png",
      },
    ],
    specs: {
      tt1: 'Vinfast VF 9',
      tt2: 'Mẫu eSUV cỡ lớn Hạng sang',
      tt3: '<p><span class="text-4xl font-bold">626</span><span class="font-bold text-2xl">km</span> Quãng đường 1 lần sạc</p>',
      tt4: '<p><span class="text-4xl font-bold">402</span><span class="font-bold text-2xl">hp</span> Vận hành mạnh mẽ</p>',
      tt5: '<p><span class="text-4xl font-bold">10</span><span class="font-bold text-2xl">năm bảo hành</span> Hoặc 200.000km</p>',
    },
    vfNameInComp: 'VF 9 Plus',
    competitors: ['VF 9 Eco'],
    comparisons: [
      {
        parameter: 'Chiều dài cơ sở',
        values: [
          '3.150 mm',
          '3.150 mm',
        ],
      },
      {
        parameter: 'Dài x Rộng x Cao (mm)',
        values: [
          '5.118 x 2.254 x 1.696',
          '5.118 x 2.254 x 1.696',
        ],
      },
      {
        parameter: 'Quãng đường chạy một lần sạc đầy (km)*',
        values: [
          '626',
          '602',
        ],
      },
      {
        parameter: 'Công suất tối đa (kW)',
        values: [
          '402/300',
          '402/300',
        ],
      },
      {
        parameter: 'Mô men xoắn cực đại (Nm)',
        values: [
          '620',
          '620',
        ],
      },
      {
        parameter: 'Dung lượng pin khả dụng (kWh)',
        values: [
          '123',
          '123',
        ],
      },
    ],
    content: {
    ct1: '<h1>VinFast VF 3 - Xe nhỏ, giá trị lớn.</h1><p>Với thiết kế tối giản, nhỏ gọn, cá tính và năng động, VinFast VF 3 sẽ luôn cùng bạn hoà nhịp với xu thế công nghệ di chuyển xanh toàn cầu, trải nghiệm giá trị trên mỗi hành trình, và tự do thể hiện phong cách sống.</p>',
      ct11: '',
      ct12: '',
      ct13: '',
      ct14: '',
      ct15: '',
      ct16: '',
    ct2: '<h1>Mạnh mẽ, bề thế Nâng tầm thời thượng</h1><p>Thiết kế được lấy cảm hứng từ những chiếc du thuyền hạng sang, hoà hợp với những đường nét mạnh mẽ và phóng khoáng, đem lại vẻ ngoài độc đáo và sang trọng, xứng tầm với chủ nhân tinh hoa.</p>',
      ct21: '',
      ct22: '',
      ct23: '',
      ct24: '',
      ct25: '',
      ct26: '',
    ct3: '<h1>Bản giao hưởng của thẩm mỹ và trải nghiệm tiện nghi</h1><p>Ngôn ngữ thiết kế tối giản mang hơi hướng tương lai phối hợp cùng loạt vật liệu cao cấp, thân thiện với môi trường, VF 9 đem lại trải nghiệm nội thất khoáng đạt, thư thái trên mọi hành trình.</p>',
      ct31: `<p>Nút chuyển số trực quan, kèm sạc không dây tích hợp trên bệ tì tay, tiện lợi và dễ dàng sử dụng.</p>`,
      ct32: `<p>Màn hình cảm ứng 8 inch hiện đại và tinh tế dành riêng cho hàng ghế sau, dễ dàng điều chỉnh hệ thống điều hoà, làm mát và sưởi, massage.</p>`,
      ct33: `<p>Tuỳ chọn trần kính toàn cảnh hoà hợp với thiên nhiên, cho không gian nội thất luôn khoáng đạt.</p>`,
      ct34: `<p>Tuỳ chọn hàng ghế cơ trưởng chỉnh điện, tích hợp tính năng làm mát, sưởi, massage, sạc không dây.</p>`,
      ct35: '',
      ct36: '',
    ct4: '<h1>Công nghệ Cho cuộc sống</h1><p>Hợp tác cùng những đối tác hàng đầu trên toàn cầu, VinFast áp dụng những công nghệ hiện đại với thiết kế tập trung vào con người, đem lại trải nghiệm. Trợ lý ảo cùng loạt Dịch vụ thông minh tiên tiến, đồng hành cùng bạn hướng tới tương lai tốt đẹp hơn.</p>',
      ct41: `<div class="flex">
      <h4>Trợ lý ảo AI hỗ trợ Tiếng Việt</h4>`,
      ct42: `<h4>Trợ lái nâng cao cấp độ 2</h4>`,
      ct43: '',
      ct44: '',
      ct45: '',
      ct46: '',
    ct5: `<h1>Đặc quyền Xứng tầm tinh hoa</h1>`,
      ct51: `<h2>Trải nghiệm VIP tại xưởng dịch vụ VinFast</h2>
          <ul>
            <li>Được tiếp đón và tư vấn bởi đội ngũ cố vấn dịch vụ, kỹ thuật viên giàu kinh nghiệm và có tay nghề cao nhất.</li>
            <li>Quý khách sẽ được ưu tiên sắp xếp lịch bảo dưỡng, sửa chữa theo thời gian và nhu cầu của bản thân. Đồng thời, xe sẽ được tiếp nhận/phục vụ và ưu tiên sửa chữa ngay bởi những kỹ thuật viên xuất sắc nhất, và được kiểm tra chất lượng bởi quản đốc trước khi giao xe.</li>
          </ul>`,
      ct52: `<h2>Tiếp cận dịch vụ sửa chữa nhanh chóng và thuận tiện</h2>
          <ul>
            <li>Miễn phí giao nhận xe tại địa điểm theo yêu cầu của quý khách (trong giờ hành chính, phạm vi 30 km từ xưởng dịch vụ VinFast gần nhất).</li>
            <li>Hỗ trợ chi phí sửa chữa cho đại lý, đảm bảo quý khách được phục vụ nhanh chóng và hiệu quả nhất.</li>
          </ul>`,
      ct53: `<h2>Sạc điện miễn phí 2 năm</h2>
          <ul>
            <li>Miễn phí 2 năm sạc điện tại hệ thống trạm sạc công cộng VinFast trên toàn quốc tới hết <span class="font-bold">30/06/2027</span></li>
          </ul>`,
      ct54: '',
      ct55: '',
      ct56: '',
    ct6: '',
      ct61: '',
      ct62: '',
      ct63: '',
      ct64: '',
      ct65: '',
      ct66: '',
    }
  },
];